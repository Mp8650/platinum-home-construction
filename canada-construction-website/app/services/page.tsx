"use client";

import {
  Building,
  ShieldCheck,
  Hammer,
  Truck,
  Home,
  Leaf,
  Globe,
  CalendarCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

/* ===============================
   Animation Variants (Type-safe)
================================ */
const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,white,transparent)]" />
         <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('/images/servicebanner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Trusted Construction & Renovation Services in Canada
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            className="text-lg md:text-xl text-gray-100 max-w-3xl"
          >
            We deliver high-quality residential and commercial construction
            services with a focus on safety, craftsmanship, and on-time delivery.
          </motion.p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-3xl font-bold text-gray-900 mb-4 text-center"
        >
          Our Construction Services
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          Comprehensive solutions designed to meet Canadian building standards
          and exceed client expectations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: Building,
              title: "Commercial Construction",
              desc: "End-to-end commercial construction for offices, retail spaces, and mixed-use developments.",
            },
            {
              icon: Home,
              title: "Residential Construction",
              desc: "Custom-built homes and residential projects focused on quality, comfort, and efficiency.",
            },
            {
              icon: Hammer,
              title: "Renovation & Remodeling",
              desc: "Professional renovations that modernize spaces, improve functionality, and increase value.",
            },
            {
              icon: Leaf,
              title: "Green Building Solutions",
              desc: "Sustainable construction practices using eco-friendly materials and energy-efficient designs.",
            },
            {
              icon: ShieldCheck,
              title: "Safety & Compliance",
              desc: "Strict adherence to Canadian safety regulations and industry best practices.",
            },
            {
              icon: Truck,
              title: "Project Management",
              desc: "Complete planning, coordination, and logistics to ensure projects are delivered on time.",
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition group"
            >
              <service.icon className="w-11 h-11 text-blue-700 mb-5 group-hover:scale-110 transition" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-gray-900 mb-12 text-center"
          >
            Why Choose Platinum Home Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Globe,
                title: "Canada-Wide Expertise",
                desc: "Deep understanding of local building codes, climates, and construction requirements.",
              },
              {
                icon: CalendarCheck,
                title: "On-Time & On-Budget",
                desc: "Clear timelines, transparent pricing, and disciplined execution.",
              },
              {
                icon: ShieldCheck,
                title: "Safety-First Approach",
                desc: "Comprehensive safety practices protecting workers, clients, and communities.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-8 rounded-2xl shadow-md bg-gray-50"
              >
                <item.icon className="w-11 h-11 text-blue-700 mb-4" />
                <h3 className="font-semibold text-xl mb-3 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-br from-blue-900 to-green-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold mb-4"
          >
            Ready to Start Your Project?
          </motion.h2>

          <p className="mb-8 text-lg text-gray-100 max-w-2xl mx-auto">
            Speak with our team today for a free consultation and professional
            project assessment.
          </p>

          <button className="bg-white text-blue-900 px-12 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg">
            Get a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
