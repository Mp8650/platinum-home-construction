"use client";

import {
  Leaf,
  SolarPanel,
  Recycle,
  Wind,
  BarChart3,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";

interface Pillar {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
}

interface Project {
  title: string;
  subtitle: string;
  stat: string;
  desc: string;
}

export default function SustainabilityPage() {
  const [activePillar, setActivePillar] = useState(0);

  const pillars: Pillar[] = [
    {
      icon: SolarPanel,
      title: "Energy Efficiency",
      desc: "High-performance envelopes, efficient HVAC systems, and smart energy planning to reduce long-term operational costs.",
    },
    {
      icon: Leaf,
      title: "Low-Carbon Materials",
      desc: "Responsible material selection including mass timber, recycled aggregates, and low-emission concrete solutions.",
    },
    {
      icon: Recycle,
      title: "Waste Reduction",
      desc: "Prefabrication and material recovery strategies that significantly reduce landfill waste across projects.",
    },
    {
      icon: Wind,
      title: "Renewable Integration",
      desc: "Solar, geothermal, and hybrid systems designed to support net-zero and future-ready buildings.",
    },
  ];

  const projects: Project[] = [
    {
      title: "Vancouver Tower",
      subtitle: "LEED Platinum",
      stat: "65% Energy Savings",
      desc: "Mass timber commercial tower designed for net-zero operational performance.",
    },
    {
      title: "UBC Campus Retrofit",
      subtitle: "Deep Energy Retrofit",
      stat: "52% Reduction",
      desc: "Multi-building upgrade improving efficiency and extending asset lifespan.",
    },
    {
      title: "Net-Zero Housing",
      subtitle: "Passive House",
      stat: "Zero Heating Load",
      desc: "Cold-climate housing designed for comfort with minimal energy demand.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-white/10 rounded-full text-sm tracking-wide">
            SUSTAINABILITY
          </span>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Building a <span className="text-emerald-400">Sustainable Future</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Practical, measurable sustainability strategies integrated into every phase of construction.
          </p>
        </div>
      </section>

      {/* Key Stats */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: BarChart3, label: "40% Energy Savings" },
            { icon: ShieldCheck, label: "Net-Zero Ready" },
            { icon: Leaf, label: "Lower Carbon Impact" },
            { icon: Recycle, label: "90% Waste Diversion" },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <Icon className="w-10 h-10 mx-auto mb-3 text-emerald-600" />
                <p className="font-semibold text-gray-800">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Pillars */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Sustainability Pillars
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Focused strategies that align environmental responsibility with build quality and long-term value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const active = activePillar === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActivePillar(idx)}
                className={`group rounded-2xl p-8 bg-white border transition-all duration-300
                  ${active ? "border-emerald-400 shadow-xl -translate-y-1" : "border-gray-100 shadow-md"}
                `}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-emerald-700" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Proven Sustainable Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-8 border border-gray-100"
            >
              <span className="text-sm text-emerald-600 font-semibold">
                {project.subtitle}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-3">
                {project.title}
              </h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">
                {project.stat}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build Responsibly?
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Let’s plan a sustainable solution that meets today’s standards and tomorrow’s expectations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl shadow-xl hover:bg-gray-100 transition-all">
              Get Free Consultation
            </button>
            <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
