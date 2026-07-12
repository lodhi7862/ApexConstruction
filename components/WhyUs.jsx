"use client";

import { motion } from "framer-motion";
import { whyUs } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import Icon from "./Icon";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section id="why-us" className="section-pad relative overflow-hidden bg-ink-800/40">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-[130px]" />
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Apex Advantage"
          subtitle="Six reasons discerning clients trust us to deliver — every project, every time."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyUs.map((reason) => (
            <motion.div
              key={reason.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group card-surface flex gap-5 p-7 transition-all duration-300 hover:border-accent/40 hover:shadow-card"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-ink-700/70 text-xl text-accent-light transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-accent group-hover:text-white group-hover:animate-bounce-soft">
                <Icon name={reason.icon} />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
