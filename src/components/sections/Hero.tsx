"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <img
        src="/const_hero.png"
        className="absolute inset-0 w-full h-full object-cover"
        alt="Construction in Canada"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative flex min-h-[calc(100svh-72px)] items-center">
        <div className="max-w-4xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white font-bold mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
          >
            Building Canada’s Next Generation of Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-200 mb-8 text-base sm:text-lg md:text-xl max-w-3xl"
          >
            From complex infrastructure to iconic buildings, we deliver
            construction solutions that shape communities and drive progress.
          </motion.p>

          <motion.button
  whileHover={{ scale: 1.05 }}
  onClick={() => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className="bg-blue-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg inline-flex items-center text-sm md:text-base"
>
  Explore Our Work <ArrowRight className="ml-2 h-5 w-5" />
</motion.button>

        </div>
      </div>
    </section>
  );
}
