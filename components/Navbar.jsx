"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, company } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  // Shrink / add background to the navbar once the user scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Prevent body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-900/90 backdrop-blur-md shadow-[0_8px_30px_-15px_rgba(0,0,0,0.9)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container-x flex items-center justify-between">
        <a href="#home" className="group flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="Apex Construction logo"
            width={72}
            height={72}
            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              {company.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-accent-light">
              {company.tagline}
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${
                  active === link.href
                    ? "text-accent-light"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-primary hidden lg:inline-flex">
          Get a Quote
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-ink-800/60 lg:hidden"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="relative h-4 w-6">
            <motion.span
              animate={open ? { rotate: 45, top: "50%" } : { rotate: 0, top: 0 }}
              className="absolute left-0 h-0.5 w-6 rounded-full bg-white"
              style={{ top: 0 }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 top-1/2 h-0.5 w-6 -translate-y-1/2 rounded-full bg-white"
            />
            <motion.span
              animate={
                open ? { rotate: -45, bottom: "50%" } : { rotate: 0, bottom: 0 }
              }
              className="absolute left-0 h-0.5 w-6 rounded-full bg-white"
              style={{ bottom: 0 }}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ink-900/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="absolute right-0 top-0 flex h-full w-4/5 max-w-sm flex-col gap-2 border-l border-white/10 bg-ink-900 px-6 pb-8 pt-24"
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                  className={`rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                    active === link.href
                      ? "bg-accent/15 text-accent-light"
                      : "text-white/85 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Get a Quote
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
