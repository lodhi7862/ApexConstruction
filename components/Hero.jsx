"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import { stats } from "@/lib/data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax: background drifts slower than foreground on scroll.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative flex min-h-screen items-center overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-20 h-[120%]">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
          alt="Construction site at dusk with cranes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      {/* Gradient + animated overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900/85 via-ink-900/80 to-ink-900" />
      <div className="absolute inset-0 -z-10 animate-gradient-pan bg-[linear-gradient(120deg,rgba(211,47,47,0.18),transparent_40%,rgba(211,47,47,0.12))] bg-[length:200%_200%]" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-accent/25 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-80 w-80 rounded-full bg-accent-light/15 blur-[130px]" />

      <motion.div
        style={{ y: contentY, opacity }}
        className="container-x relative pt-28"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl">
          <motion.span variants={item} className="eyebrow mb-5">
            <span className="h-px w-8 bg-accent" />
            Premium Construction Since 2004
          </motion.span>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            <span className="text-gradient">Apex Construction</span>
            <br />
            <span className="text-white">Building the </span>
            <span className="relative inline-block text-accent-light">
              Future
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
                className="absolute -bottom-1 left-0 h-1 w-full origin-left rounded-full bg-accent"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-base text-white/75 sm:text-lg md:text-xl"
          >
            Premium construction services for residential, commercial &amp;
            institutional projects — engineered with excellence, integrity and
            innovation.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary group">
              Get Started
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#services" className="btn-outline group">
              <FaPlay className="text-xs text-accent-light" />
              Learn More
            </a>
          </motion.div>

          {/* Compact stat strip */}
          <motion.div
            variants={item}
            className="mt-14 grid max-w-2xl grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.id}>
                <div className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  {s.value}
                  {s.suffix}
                </div>
                <div className="mt-1 text-xs text-white/60">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.a>
    </section>
  );
}
