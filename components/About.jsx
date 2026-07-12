"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { stats, team, company } from "@/lib/data";
import {
  fadeInLeft,
  fadeInRight,
  fadeUp,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";
import Counter from "./Counter";
import SectionHeading from "./SectionHeading";

const values = [
  "Uncompromising quality on every build",
  "Transparent communication & fair pricing",
  "Safety-first culture across all sites",
  "Sustainable, future-ready methods",
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image collage */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80"
                alt="Apex Construction team reviewing plans on site"
                fill
                sizes="(max-width:1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden w-44 rounded-2xl border border-white/10 bg-ink-800 p-5 shadow-card sm:block">
              <div className="font-heading text-3xl font-bold text-accent-light">
                <Counter value={20} suffix="+" />
              </div>
              <div className="mt-1 text-xs text-white/70">
                Years shaping skylines
              </div>
            </div>
            <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-2xl border-4 border-accent/40 sm:block" />
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <SectionHeading
              eyebrow="About Apex"
              title="Built on Trust, Driven by Excellence"
              align="left"
            />
            <p className="mt-5 text-white/70">
              Founded in {company.foundedYear}, Apex Construction has grown from
              a small local contractor into a full-service construction leader
              trusted by homeowners, developers, businesses and public
              institutions alike. Over two decades we have delivered hundreds of
              projects — from bespoke homes to landmark towers and vital
              infrastructure.
            </p>
            <p className="mt-4 text-white/70">
              Our mission is simple: to build spaces that inspire and endure. We
              combine seasoned expertise, advanced technology and a relentless
              focus on quality to turn ambitious visions into enduring reality —
              on time and on budget.
            </p>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {values.map((v) => (
                <li key={v} className="flex items-start gap-3 text-sm text-white/80">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-accent-light" />
                  {v}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Animated stat counters */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.id}
              variants={scaleIn}
              className="card-surface group p-7 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-card"
            >
              <div className="font-heading text-4xl font-bold text-white transition-colors group-hover:text-accent-light sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team */}
        <div className="mt-24">
          <SectionHeading
            eyebrow="Our People"
            title="Meet the Leadership Team"
            subtitle="Experienced professionals who bring passion, precision and integrity to every project."
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group text-center"
              >
                <div className="relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width:768px) 50vw, 16vw"
                    style={{ objectPosition: member.focalPosition || "50% 18%" }}
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <h4 className="mt-4 font-heading text-sm font-semibold text-white">
                  {member.name}
                </h4>
                <p className="text-xs text-accent-light">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
