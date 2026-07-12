"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaTimes } from "react-icons/fa";
import { projects, projectFilters } from "@/lib/data";
import { viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="section-pad relative bg-ink-800/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Portfolio"
          title="Featured Projects"
          subtitle="A selection of landmark builds that showcase our range, precision and dedication to lasting quality."
        />

        {/* Filter buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 ${
                filter === f
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-filter"
                  className="absolute inset-0 rounded-full bg-accent shadow-glow"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                viewport={viewportOnce}
                onClick={() => setSelected(project)}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl border border-white/5"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-ink-900/40 to-transparent opacity-90" />

                <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>

                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 transition-transform duration-300 group-hover:translate-y-0">
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/70 opacity-0 transition-all duration-300 group-hover:max-h-24 group-hover:opacity-100">
                    {project.description}
                  </p>
                  <span className="mt-3 inline-flex translate-y-3 items-center gap-2 text-sm font-semibold text-accent-light opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    View Details <FaArrowRight className="text-xs" />
                  </span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/85 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Close"
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink-900/70 text-white transition-colors hover:bg-accent"
              >
                <FaTimes />
              </button>
              <div className="relative aspect-video w-full">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  sizes="(max-width:768px) 100vw, 768px"
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-8">
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent-light">
                  {selected.category}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-white">
                  {selected.title}
                </h3>
                <p className="mt-3 text-white/70">{selected.description}</p>
                <a href="#contact" onClick={() => setSelected(null)} className="btn-primary mt-6">
                  Start a Similar Project
                  <FaArrowRight />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
