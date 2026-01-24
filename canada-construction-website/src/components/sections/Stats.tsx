"use client";

import { motion } from "framer-motion";
import Container from "@/src/components/ui/Container";

const stats = [
  {
    value: "200+",
    label: "Happy Customers",
    bg: "bg-indigo-100",
    text: "text-indigo-800",
    labelText: "text-indigo-600",
  },
  {
    value: "100%",
    label: "Satisfaction",
    bg: "bg-emerald-100",
    text: "text-emerald-800",
    labelText: "text-emerald-600",
  },
  {
    value: "16",
    label: "Employees",
    bg: "bg-amber-100",
    text: "text-amber-800",
    labelText: "text-amber-600",
  },
  {
    value: "124",
    label: "Completed Projects",
    bg: "bg-rose-100",
    text: "text-rose-800",
    labelText: "text-rose-600",
  },
];

export default function Stats() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-14">
      <Container>
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent"
        >
          Our Achievements
        </motion.h2>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 12,
              }}
              whileHover={{ y: -10, scale: 1.08 }}
              className="group text-center cursor-pointer"
            >
              <motion.div
                className={`rounded-2xl p-6 shadow-md font-black text-3xl md:text-4xl ${stat.bg} ${stat.text}`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3 + i * 0.4,
                }}
              >
                {stat.value}

                <p
                  className={`mt-2 text-lg font-semibold transition-colors duration-300 group-hover:${stat.text} ${stat.labelText}`}
                >
                  {stat.label}
                </p>
              </motion.div>

              {/* underline */}
              <div
                className={`mx-auto mt-4 h-1 w-24 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 ${stat.bg}`}
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
