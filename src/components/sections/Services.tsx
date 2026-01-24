"use client";

import { motion } from "framer-motion";
import { Building2, Hammer, TrendingUp, Briefcase, Users, Shield, Truck } from "lucide-react";
import Container from "@/src/components/ui/Container";
import SectionHeading from "@/src/components/ui/SectionHeading";

const services = [
  {
    title: "Commercial Buildings",
    desc: "Office towers, retail centers, healthcare facilities & educational campuses",
    icon: Building2,
    color: "from-orange-500 to-red-500",
    category: "BUILDINGS"
  },
  {
    title: "Infrastructure Projects", 
    desc: "Highways, bridges, rail systems & municipal utilities",
    icon: TrendingUp,
    color: "from-blue-500 to-cyan-500",
    category: "INFRASTRUCTURE"
  },
  {
    title: "Industrial Facilities",
    desc: "Power plants, manufacturing plants & heavy industrial complexes", 
    icon: Hammer,
    color: "from-emerald-500 to-green-500",
    category: "INDUSTRIAL"
  },
  {
    title: "Project Consulting",
    desc: "Pre-construction planning, cost management & full project oversight",
    icon: Briefcase,
    color: "from-purple-500 to-indigo-500", 
    category: "CONSULTING"
  },
];

export default function Services() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-10 relative overflow-hidden">
      {/* Subtle construction pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-orange-200 rounded-full mix-blend-multiply blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-2 border-blue-200 rounded-full mix-blend-multiply blur-xl animate-pulse" />
      </div>

      <Container>
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <SectionHeading
              title="What We Build"
              subtitle="Engineering excellence across Canada's most demanding construction sectors"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Main services grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-100/50 shadow-xl hover:shadow-2xl hover:shadow-orange-200/50 transition-all duration-700 overflow-hidden h-[320px]"
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 blur-xl`} />
                
                {/* Category badge */}
                <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500/90 to-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">
                  {service.category}
                </div>
                
                <div className="relative h-full flex flex-col">
                  <motion.div 
                    className="w-20 h-20 bg-gradient-to-r from-white/90 to-white/50 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-xl mb-8 group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ rotate: 5 }}
                  >
                    <service.icon className={`w-10 h-10 text-gray-800`} />
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 group-hover:scale-[1.02] transition-transform">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-lg leading-relaxed flex-1 group-hover:text-gray-800 transition-colors">
                    {service.desc}
                  </p>
                  
                  {/* <div className="flex items-center mt-8 pt-8 border-t border-gray-100">
                    <div className="group-hover:translate-x-2 transition-transform duration-500">
                      <span className="text-2xl font-bold text-orange-600 group-hover:text-orange-500">→</span>
                    </div>
                    <span className="ml-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">Learn More</span>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-6 gap-6 pt-12 border-t border-gray-200"
          >
            {[
              { icon: Users, label: "Licensed", color: "text-blue-600" },
              { icon: Shield, label: "Insured", color: "text-emerald-600" },
              { icon: Truck, label: "Bonded", color: "text-orange-600" },
              { icon: Building2, label: "CCDC", color: "text-purple-600" },
              { icon: TrendingUp, label: "COR Certified", color: "text-indigo-600" },
              { icon: Hammer, label: "WSIB Clear", color: "text-gray-700" }
            ].map((trust, i) => (
              <div key={i} className="text-center p-6 bg-gray-100 hover:bg-gray-50 rounded-xl shadow-xl transition-colors">
                <trust.icon className={`w-12 h-12 mx-auto mb-3 ${trust.color}`} />
                <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">{trust.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
