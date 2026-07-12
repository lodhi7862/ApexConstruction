"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}) {
  const isCenter = align === "center";
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`${isCenter ? "mx-auto text-center" : "text-left"} max-w-3xl`}
    >
      {eyebrow && (
        <span className={`eyebrow mb-4 ${isCenter ? "justify-center" : ""}`}>
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`section-title ${light ? "text-ink-900" : "text-white"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg ${
            light ? "text-ink-700" : "text-white/70"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
