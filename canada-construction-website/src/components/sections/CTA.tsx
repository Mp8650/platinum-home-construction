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
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
      
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute bottom-24 right-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-3xl md:text-5xl font-bold bg-gray-900 bg-clip-text text-transparent">
            Ready to Start Your Project?
          </h2>

          <div className="mx-auto flex flex-wrap items-center justify-center gap-4 rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm">
            <Calendar className="h-5 w-5 text-emerald-500" />
            Free Quote in 24 Hours
            <span className="text-gray-300">•</span>
            <ShieldCheck className="h-5 w-5 text-emerald-500" />
            No Obligation
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Enquiry Form */}
          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-left shadow-lg">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">
              Quick Enquiry
            </h3>
            <p className="mb-6 text-gray-600">
              Share your requirements and we’ll contact you shortly.
            </p>

            <div className="space-y-5">
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
                    className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
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
                      className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
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
                      className="w-full rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Project */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Project Details
                </label>
                <div className="relative">
                  <ClipboardList className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
                  <textarea
                    rows={3}
                    placeholder="Villa, apartment, commercial, renovation, etc."
                    className="w-full resize-none rounded-xl border border-gray-300 bg-white py-4 pl-12 pr-4 text-gray-900 placeholder-gray-400 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <button className="mt-4 w-full rounded-2xl bg-blue-800 py-4 text-lg font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-blue-400">
                Request Free Quote →
              </button>
            </div>
          </div>

          {/* Call CTA + Trust */}
          <div className="flex flex-col justify-between ">
            {/* Call Card */}
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.04 }}
              className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center text-emerald-900 shadow-xl"

            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                <Phone className="h-8 w-8" />
              </div>
              <h4 className="text-2xl font-bold">Talk to Our Expert</h4>
              <p className="mb-3 text-gray-600">Mon – Sat | 9AM – 7PM</p>
              <span className="text-3xl font-black tracking-wide">
                (555) 123-4567
              </span>
            </motion.a>

            {/* Trust */}
            <div className="grid gap-3 text-left text-gray-700 font-semibold">
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
        </motion.div>
      </div>
    </section>
  );
}
