"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, MapPin, ArrowRight, Calendar, Tag } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";


const projects = [
  {
    id: 1,
    title: "Modern Residential Tower",
    location: "Toronto, ON",
    category: "Residential",
    year: "2024",
    image: "/images/modernresidentialtower.png",
    description:
      "Luxury residential tower with modern architecture, sustainable design, and smart home features.",
    valueTags: ["Quality First", "Safety Focused", "Long-Term Durability"],
  },
  {
    id: 2,
    title: "Commercial Office Hub",
    location: "Vancouver, BC",
    category: "Commercial",
    year: "2023",
    image: "/images/commercialofficehub.png",
    description:
      "High-rise office complex designed for efficiency, compliance, and modern workplace standards.",
    valueTags: ["On-Time Delivery", "Smart Planning", "Premium Finishes"],
  },
  {
    id: 3,
    title: "Healthcare Facility",
    location: "Calgary, AB",
    category: "Institutional",
    year: "2022",
    image: "/images/healthcare.png",
    description:
      "State-of-the-art healthcare facility focused on patient comfort and operational excellence.",
    valueTags: ["Compliance Ready", "Safety First", "Operational Efficiency"],
  },
  {
    id: 4,
    title: "Luxury Cottage Renovation",
    location: "Whistler, BC",
    category: "Renovation",
    year: "2024",
    image: "/images/luxurycottage.png",
    description:
      "Premium renovation blending modern design with natural materials and eco-conscious systems.",
    valueTags: ["Attention to Detail", "Craftsmanship", "Eco-Friendly"],
  },
  {
    id: 5,
    title: "Downtown Condo Complex",
    location: "Montreal, QC",
    category: "Residential",
    year: "2023",
    image: "/images/downtowncondo.png",
    description:
      "Urban living spaces with premium interiors and energy-efficient construction.",
    valueTags: ["Urban Expertise", "Premium Build", "Energy Efficient"],
  },
  {
    id: 6,
    title: "Industrial Warehouse",
    location: "Edmonton, AB",
    category: "Commercial",
    year: "2023",
    image: "/images/industrial.png",
    description:
      "Modern warehouse facility with advanced logistics infrastructure.",
    valueTags: ["Smart Execution", "Structural Strength", "Future Ready"],
  },
];

const categories = ["All", "Residential", "Commercial", "Institutional", "Renovation"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();


  const handleNav = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  const filteredProjects = projects.filter((project) => {
    const matchCategory = activeCategory === "All" || project.category === activeCategory;
    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white py-24">
        <div className="absolute inset-0 bg-black/30" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "url('/images/projectsbanner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-block mb-4 px-4 py-2 bg-orange-600/20 rounded-full text-orange-300 font-semibold text-sm">
            PORTFOLIO
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Projects & <span className="text-orange-400">Craftsmanship</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Premium construction solutions delivered across Canada
          </p>
        </div>
      </section>

      {/* BRAND TRUST INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
            Built on Trust. Experts Since 2021
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            At <span className="font-semibold text-orange-600">Platinum Home Services</span>, we
            deliver projects with a focus on safety, quality, and long-term value.
            Our team believes in doing things right the first time, backed by smart
            planning, ethical practices, and strong client relationships.
          </p>
        </div>
      </section>

      {/* FILTER + SEARCH */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 flex flex-col lg:flex-row gap-6 justify-between">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-gray-500 font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search projects or locations..."
              className="w-full pl-12 pr-4 py-3 text-gray-600 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-orange-600 font-bold text-sm flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </div>

                <h3 className="text-2xl text-gray-900 font-bold mb-2">{project.title}</h3>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  {project.location}
                </div>

                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.valueTags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-50 text-orange-700 border border-orange-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/projects/apply"
                  className="inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700"
                >
                  View Project Details
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Build With a Team You Can Trust
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            From planning to completion, Platinum Home Services delivers safe,
            reliable, and high-quality construction — without compromises.
          </p>
          <button 
          onClick={() => handleNav("/contact")}
          className="px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition-all shadow-xl">
          Get a Free Consultation
          </button>
        </div>
      </section>

    </div>
  );
}
