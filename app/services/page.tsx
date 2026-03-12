"use client";

import {
  Building,
  ShieldCheck,
  Hammer,
  Truck,
  ClipboardIcon,
  Building2,
  Home,
  Leaf,
  Globe,
  CalendarCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

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
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

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
            At Platinum Home Services, we believe every renovation project should combine quality craftsmanship
with reliable service. Our team focuses on delivering clean finishes, modern designs, and renovation
solutions tailored to each home. Our goal is to deliver renovation results that homeowners can enjoy for
years.
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
    icon: Building2,
    title: "Basement Renovation & Finishing",
    desc: "Transform unfinished basements into functional, modern living spaces with framing, drywall, flooring, lighting, and full finishing.",
  },
  {
    icon: Home,
    title: "Interior Home Renovations",
    desc: "Update and modernize your interiors with improved layouts, flooring, walls, lighting, and stylish designs.",
  },
  {
    icon: Hammer,
    title: "Home Improvement Projects",
    desc: "Enhance the functionality and appearance of your home through professional repair, upgrades, and remodeling projects.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Renovations",
    desc: "Incorporate sustainable practices and energy-efficient materials into your renovation projects for a greener home.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Quality Assurance",
    desc: "Our team ensures every project adheres to safety standards and delivers high-quality workmanship you can trust.",
  },
  {
    icon: ClipboardIcon,
    title: "Renovation Consultation & Planning",
    desc: "Professional guidance to plan and design your renovation project, ensuring your vision comes to life efficiently.",
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
            Why Homeowners Choose Platinum Home Services
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

          <button 
          onClick={() => handleNav("/contact")}
          className="bg-white text-blue-900 px-12 py-4 rounded-xl font-semibold hover:bg-gray-100 transition shadow-lg">
          Get a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
