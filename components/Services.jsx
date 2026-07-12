"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { services } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/10 blur-[120px]" />
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Do"
          title="Comprehensive Construction Services"
          subtitle="End-to-end expertise across every category — delivered with the same relentless commitment to quality and craftsmanship."
        />

        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="group card-surface relative flex flex-col overflow-hidden p-7 transition-shadow duration-300 hover:border-accent/40 hover:shadow-card"
            >
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-700/70 text-2xl text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-glow">
                <Icon name={service.icon} className="transition-transform duration-300 group-hover:rotate-6" />
              </div>

              <h3 className="font-heading text-xl font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/65">
                {service.description}
              </p>

              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors hover:text-white"
              >
                Learn More
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
