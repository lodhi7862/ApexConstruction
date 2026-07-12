"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { ceoMessage } from "@/lib/data";
import { fadeInLeft, fadeInRight, viewportOnce } from "@/lib/motion";

export default function CEOMessage() {
  return (
    <section id="ceo" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 rounded-full bg-accent/10 blur-[140px]" />
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-5">
          {/* Photo */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-2"
          >
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-accent/20 blur-xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
                <Image
                  src={ceoMessage.image}
                  alt={`${ceoMessage.name}, ${ceoMessage.role}`}
                  fill
                  sizes="(max-width:1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-ink-900/80 px-5 py-4 backdrop-blur">
                <div className="font-heading text-lg font-bold text-white">
                  {ceoMessage.name}
                </div>
                <div className="text-xs text-accent-light">{ceoMessage.role}</div>
              </div>
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-3"
          >
            <span className="eyebrow mb-4">
              <span className="h-px w-8 bg-accent" />
              Message From Our CEO
            </span>

            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={viewportOnce}
              transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            >
              <FaQuoteLeft className="text-4xl text-accent" />
            </motion.div>

            <blockquote className="mt-5 font-heading text-xl font-medium leading-relaxed text-white/90 sm:text-2xl">
              {ceoMessage.message}
            </blockquote>

            <div className="mt-8">
              <div
                className="font-heading text-3xl text-accent-light"
                style={{ fontStyle: "italic" }}
              >
                {ceoMessage.name}
              </div>
              <div className="mt-1 text-sm text-white/60">{ceoMessage.role}</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
