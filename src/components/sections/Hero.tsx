"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[100vh]">
      <img
        src="/const_hero.png"
        className="absolute inset-0 w-full h-[100vh] object-cover"
        alt="Construction in Canada"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative h-full flex items-center">
        <div className="max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-6xl font-bold mb-6"
          >
            Building Canada’s Next Generation of Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 text-xl mb-8"
          >
            From complex infrastructure to iconic buildings, we deliver
            construction solutions that shape communities and drive progress.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-900 text-white px-8 py-4 rounded-lg inline-flex items-center"
          >
            Explore Our Work <ArrowRight className="ml-2" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
