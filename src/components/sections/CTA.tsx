"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  User,
  ClipboardList,
  Calendar,
  ShieldCheck,
} from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 sm:py-24">
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 sm:left-20 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-24 right-10 sm:right-24 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <h2 className="mb-5 text-2xl sm:text-3xl md:text-5xl font-bold bg-gray-900 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>

          <div className="mx-auto flex flex-wrap items-center justify-center gap-3 sm:gap-4 rounded-full bg-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-gray-700 shadow-sm">
            <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
            Free Quote in 24 Hours
            <span className="text-gray-300">•</span>
            <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-500" />
            No Obligation
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid gap-8 lg:grid-cols-2"
        >
          {/* Call CTA + Trust */}
          <div className="flex flex-col gap-6">
            {/* Call Card */}
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 sm:p-8 text-center text-emerald-900 shadow-xl w-full"
            >
              <div className="mx-auto flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/20">
                <Phone className="h-7 w-7 sm:h-8 sm:w-8" />
              </div>

              <h4 className="mt-3 text-xl sm:text-2xl font-bold">
                Talk to Our Expert
              </h4>

              <p className="mb-2 text-sm sm:text-base text-gray-600">
                Mon – Sat | 9AM – 7PM
              </p>

              <span className="block text-2xl sm:text-3xl font-black tracking-wide">
                (555) 123-4567
              </span>
            </motion.a>

            {/* Trust List */}
            <div className="grid gap-3 text-sm sm:text-base text-gray-700 font-semibold text-left">
              {[
                "Licensed & Insured",
                "Transparent Pricing",
                "350+ Successful Projects",
                "Dedicated Project Support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 text-left shadow-lg">
            <h3 className="mb-2 text-xl sm:text-2xl font-bold text-gray-900">
              Quick Enquiry
            </h3>
            <p className="mb-5 sm:mb-6 text-sm sm:text-base text-gray-600">
              Share your requirements and we’ll contact you shortly.
            </p>

            <div className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-gray-300 bg-white py-3 sm:py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Phone + Email */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      placeholder="+1 XXXXX XXXXX"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 sm:py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Email (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full rounded-xl border border-gray-300 bg-white py-3 sm:py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Project Details
                </label>
                <div className="relative">
                  <ClipboardList className="absolute left-4 top-4 sm:top-5 h-5 w-5 text-gray-400" />
                  <textarea
                    rows={3}
                    placeholder="Villa, apartment, commercial, renovation, etc."
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white py-3 sm:py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Button */}
              <button className="mt-4 w-full rounded-2xl bg-blue-800 py-3 sm:py-4 text-base sm:text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-500">
                Request Free Quote →
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
