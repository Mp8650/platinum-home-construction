"use client";

import { motion } from "framer-motion";
import { Leaf, Recycle, Shield, Zap } from "lucide-react";
import Container from "@/src/components/ui/Container";

export default function Sustainability() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
      
      {/* Soft eco background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-24 w-72 h-72 bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-300/20 rounded-full blur-3xl" />
      </div>

      <Container>
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl md:text-5xl font-bold bg-gray-900 bg-clip-text text-transparent bg-clip-text text-transparent mb-6">
              Sustainable Construction
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Building for today, protecting tomorrow
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Sustainability stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { value: "75%", label: "Carbon Reduction", icon: Leaf, color: "text-emerald-600" },
              { value: "95%", label: "Recycled Materials", icon: Recycle, color: "text-green-600" },
              { value: "LEED Certified", label: "All Projects", icon: Shield, color: "text-blue-600" },
              { value: "30%", label: "Energy Savings", icon: Zap, color: "text-yellow-500" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-start gap-6 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-all"
              >
                <stat.icon className={`w-12 h-12 ${stat.color}`} />
                <div>
                  <div className="text-2xl font-bold text-gray-600 mb-1">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Image block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[450px] overflow-hidden rounded-3xl border border-gray-200 shadow-md">
              <img
                src="/sustainable.png"
                alt="Sustainable construction"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />

              {/* Certification tags */}
              <div className="absolute top-6 left-6 space-y-3">
                {["LEED Gold", "Net Zero Ready", "B Corp Certified"].map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-gray-800 shadow backdrop-blur"
                  >
                    <span className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                    {label}
                  </span>
                ))}
              </div>

              {/* Bottom fade */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
