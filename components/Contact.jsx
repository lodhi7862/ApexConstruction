"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";
import { company } from "@/lib/data";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const methods = [
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      value: company.phone,
      href: `tel:${company.phone}`,
      cta: "Tap to call",
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      value: company.email,
      href: `mailto:${company.email}`,
      cta: "Send an email",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "Chat with our team",
      href: `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
        "Hi Apex Construction, I'd like to discuss a project."
      )}`,
      cta: "Open WhatsApp",
      external: true,
    },
    {
      icon: FaMapMarkerAlt,
      title: "Our Address",
      value: company.address,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        company.address
      )}`,
      cta: "View on map",
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Animated background overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-900 via-ink-800/60 to-ink-900" />
      <div className="absolute inset-0 -z-10 animate-gradient-pan bg-[radial-gradient(circle_at_20%_20%,rgba(211,47,47,0.18),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(231,76,60,0.14),transparent_45%)] bg-[length:200%_200%]" />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="pointer-events-none absolute left-10 top-24 -z-10 h-40 w-40 rounded-full border border-accent/20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="pointer-events-none absolute bottom-20 right-16 -z-10 h-56 w-56 rounded-full border border-white/5"
      />

      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title="Get In Touch With Us"
          subtitle="We're ready to help bring your vision to life. Reach out through whichever channel suits you best."
        />

        <motion.div
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {methods.map((m) => (
            <motion.a
              key={m.title}
              variants={fadeUp}
              href={m.href}
              target={m.external ? "_blank" : undefined}
              rel={m.external ? "noopener noreferrer" : undefined}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group card-surface flex flex-col items-center p-8 text-center transition-all duration-300 hover:border-accent/40 hover:shadow-card"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-700/70 text-2xl text-white/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white group-hover:shadow-glow">
                <m.icon />
              </div>
              <h3 className="mt-6 font-heading text-lg font-semibold text-white">
                {m.title}
              </h3>
              <p className="mt-2 break-all text-sm text-white/70">{m.value}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent-light transition-colors group-hover:text-white">
                {m.cta}
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto mt-12 max-w-2xl text-center"
        >
          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
              "Hi Apex Construction, I'd like a free consultation."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <FaWhatsapp className="text-base" />
            Request a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
