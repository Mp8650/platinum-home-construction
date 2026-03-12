import { 
  Building, Home, Hammer, Leaf, ShieldCheck, MapPin,ClipboardIcon,
  Award, Wrench, Users, Globe,CalendarCheck, TrendingUp, CheckCircle, ArrowRight 
} from "lucide-react";
import React from "react";

// ------------------------
// Type Definitions
// ------------------------
type ColorKey = "blue" | "green" | "orange" | "emerald" | "indigo" | "slate";

interface ExpertiseArea {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  color: ColorKey;
  tags: string[];
  stats: { label: string; value: string };
}

interface Capability {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

// ------------------------
// Data
// ------------------------
const expertiseAreas: ExpertiseArea[] = [
  {
    icon: Hammer, // Renovation icon
    title: "Basement Renovation & Finishing",
    description: "Transform unfinished basements into functional, stylish living spaces with flooring, lighting, and full finishing.",
    color: "orange",
    tags: ["Modern Design", "Functional Spaces", "Home Value"],
    stats: { label: "Projects Completed", value: "200+" },
  },
  {
    icon: Home,
    title: "Interior Home Renovations",
    description: "Upgrade interiors with modern layouts, flooring, walls, and lighting for a clean, comfortable home.",
    color: "green",
    tags: ["Open Concept", "Premium Finishes", "Functional Design"],
    stats: { label: "Homes Renovated", value: "150+" },
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Renovations",
    description: "Sustainable renovation practices using energy-efficient materials and eco-conscious design solutions.",
    color: "emerald",
    tags: ["Energy Efficient", "Eco-Friendly Materials", "Healthy Home"],
    stats: { label: "Green Projects", value: "50+" },
  },
  {
    icon: ShieldCheck,
    title: "Safety & Quality Assurance",
    description: "Every project follows strict safety standards and quality controls to ensure reliable, long-lasting results.",
    color: "indigo",
    tags: ["Safety First", "Quality Craftsmanship", "Reliable Work"],
    stats: { label: "Safety Rating", value: "100%" },
  },
  {
    icon: ClipboardIcon, // Planning icon
    title: "Renovation Consultation & Planning",
    description: "Professional guidance from planning to execution, ensuring your renovation meets your vision and goals.",
    color: "slate",
    tags: ["Planning", "Design", "Project Coordination"],
    stats: { label: "Satisfied Clients", value: "300+" },
  },
  {
  icon: Wrench, // Tool/upgrade icon
  title: "Custom Home Improvements",
  description: "Tailored home upgrades and improvements that enhance functionality, style, and long-term value for your property.",
  color: "blue",
  tags: ["Tailored Solutions", "Functionality", "Modern Design"],
  stats: { label: "Projects Delivered", value: "120+" },
},
];

const capabilities: Capability[] = [
  {
    icon: Award,
    title: "Trusted Expertise",
    description: "Over 15 years delivering high-quality home renovations across the Greater Toronto Area",
  },
  {
    icon: Users,
    title: "Skilled Team",
    description: "Certified professionals dedicated to modern design and precise craftsmanship",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Hundreds of satisfied homeowners with beautifully renovated homes",
  },
  {
    icon: Wrench,
    title: "Advanced Techniques",
    description: "Modern renovation methods, high-quality materials, and smart home solutions",
  },
];

const colorVariants: Record<ColorKey, { icon: string; badge: string; hover: string }> = {
  blue: { icon: "text-blue-600", badge: "bg-blue-50 text-blue-700", hover: "group-hover:bg-blue-50" },
  green: { icon: "text-green-600", badge: "bg-green-50 text-green-700", hover: "group-hover:bg-green-50" },
  orange: { icon: "text-orange-600", badge: "bg-orange-50 text-orange-700", hover: "group-hover:bg-orange-50" },
  emerald: { icon: "text-emerald-600", badge: "bg-emerald-50 text-emerald-700", hover: "group-hover:bg-emerald-50" },
  indigo: { icon: "text-indigo-600", badge: "bg-indigo-50 text-indigo-700", hover: "group-hover:bg-indigo-50" },
  slate: { icon: "text-slate-600", badge: "bg-slate-50 text-slate-700", hover: "group-hover:bg-slate-50" }
};

// ------------------------
// Component
// ------------------------
export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "url('/images/experties.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15
        }}></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-orange-600 bg-opacity-20 rounded-full border border-orange-400 border-opacity-30">
            <span className="text-orange-300 font-semibold text-sm">OUR CAPABILITIES</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Expertise in <span className="text-orange-400">Construction Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Delivering premium construction solutions across Canada with precision, safety, and innovation at every stage
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 text-center">
                <Icon className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-1">{cap.title}</h3>
                <p className="text-sm text-gray-600">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Excel At</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Six core areas of expertise that define our construction leadership across Canada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, idx) => {
            const Icon = area.icon;
            const colors = colorVariants[area.color];

            return (
              <div key={idx} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                <div className={`p-8 ${colors.hover} transition-colors duration-300`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${colors.badge}`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{area.stats.value}</div>
                      <div className="text-xs text-gray-500 font-medium">{area.stats.label}</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Construction Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
  {
    step: "01",
    title: "Consultation",
    description: "Discuss renovation goals and project requirements.",
    bg: "bg-slate-100",
    text: "text-slate-800",
  },
  {
    step: "02",
    title: "Planning",
    description: "Develop a renovation plan tailored to the space.",
    bg: "bg-indigo-100",
    text: "text-indigo-800",
  },
  {
    step: "03",
    title: "Construction",
    description: "Professional renovation work with attention to detail.",
    bg: "bg-amber-100",
    text: "text-amber-800",
  },
  {
    step: "04",
    title: "Final Walkthrough",
    description: "Ensure the finished project meets expectations.",
    bg: "bg-orange-100",
    text: "text-orange-800",
  },
  
].map((phase, idx) => (
              <div key={idx} className="relative">
                <div className={`${phase.bg} ${phase.text} text-sm rounded-2xl p-6 shadow-lg`}>
                  <div className="text-5xl font-bold opacity-30 mb-2">{phase.step}</div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className={`${phase.text} text-sm`}>{phase.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-300 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 md:p-16 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Platinum Home Services</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
  {
    icon: Hammer,
    title: "Professional Workmanship",
    desc: "Our renovation team delivers high-quality craftsmanship and clean finishes in every basement renovation and home improvement project.",
  },
  {
    icon: ShieldCheck,
    title: "Attention to Detail",
    desc: "We focus on precision and detail to ensure every renovation meets the highest standards of quality and design.",
  },
  {
    icon: CalendarCheck,
    title: "Reliable Timelines",
    desc: "Clear communication and well-planned schedules help us complete renovation projects efficiently and on time.",
  },
  {
    icon: Home,
    title: "Modern Basement Solutions",
    desc: "We create modern and functional basement spaces designed to improve comfort and maximize living space.",
  },
  {
    icon: Building,
    title: "Quality Materials",
    desc: "We use durable and high-quality materials to ensure long-lasting renovation results for your home.",
  },
  {
    icon: Globe,
    title: "Trusted GTA Renovation Team",
    desc: "Homeowners across the Greater Toronto Area trust our team for reliable basement renovations and interior improvements.",
  },
].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            Talk to our construction experts and get a free consultation with detailed project assessment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105">
              Get Free Consultation
            </button>
            <button className="px-10 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all">
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
