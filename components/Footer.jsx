"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
} from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { company } from "@/lib/data";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "CEO Message", href: "#ceo" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "X" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    // Front-end only demo — wire this to your email provider in production.
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-900">
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-[120px]" />
      <div className="container-x relative py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand + newsletter */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Apex Construction logo"
                width={72}
                height={72}
                className="h-14 w-14 object-contain"
              />
              <span className="font-heading text-lg font-bold text-white">
                {company.name}
              </span>
            </a>
            <p className="mt-4 text-sm text-white/60">
              {company.tagline}. Premium construction services built on
              excellence, integrity and innovation since {company.foundedYear}.
            </p>

            <form onSubmit={onSubscribe} className="mt-6">
              <label htmlFor="newsletter" className="text-xs font-semibold uppercase tracking-wider text-white/50">
                Newsletter
              </label>
              <div className="mt-2 flex overflow-hidden rounded-full border border-white/15 bg-ink-800 focus-within:border-accent">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex items-center justify-center bg-accent px-4 text-white transition-colors hover:bg-accent-dark"
                >
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
              {sent && (
                <p className="mt-2 text-xs text-accent-light">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-accent-light"
                  >
                    <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li>
                <a href={`tel:${company.phone}`} className="flex items-center gap-3 transition-colors hover:text-accent-light">
                  <FaPhoneAlt className="text-accent-light" />
                  {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-accent-light">
                  <FaEnvelope className="text-accent-light" />
                  {company.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-accent-light" />
                {company.address}
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-white">
              Follow Us
            </h4>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ y: -4 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
                >
                  <s.icon />
                </motion.a>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/50">
              CEO: <span className="text-white/80">{company.ceo}</span>
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/50">
            Designed &amp; built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
