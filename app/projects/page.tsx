"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  MapPin,
  ArrowRight,
  Calendar,
  Tag,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

/* ================= DATA ================= */
const projects = [
  {
    id: 1,
    title: "Modern Basement Transformation",
    location: "Toronto, ON",
    category: "Residential",
    year: "2024",
    image: "/images/modern-basement.jpeg",
    description:
      "Finished basement turned into a stylish, functional living area with updated flooring, lighting, and smart storage solutions.",
    valueTags: ["Comfort First", "Modern Design", "Increased Home Value"],
  },
  {
    id: 2,
    title: "Contemporary Interior Remodel",
    location: "Mississauga, ON",
    category: "Residential",
    year: "2023",
    image: "/images/interior-remodel.jpeg",
    description:
      "Interior renovation featuring open layouts, modern finishes, and enhanced lighting for a clean and inviting home.",
    valueTags: ["Attention to Detail", "Functional Layouts", "Premium Finishes"],
  },
  {
    id: 3,
    title: "Luxury Basement Upgrade",
    location: "Brampton, ON",
    category: "Renovation",
    year: "2024",
    image: "/images/luxury-basement.jpeg",
    description:
      "Upgraded basement with custom flooring, elegant lighting, and a cozy entertainment area designed for family living.",
    valueTags: ["Quality Craftsmanship", "Modern Comfort", "Smart Design"],
  },
  {
    id: 4,
    title: "Eco-Friendly Home Renovation",
    location: "Oakville, ON",
    category: "Renovation",
    year: "2023",
    image: "/images/eco-home.jpeg",
    description:
      "Sustainable renovation incorporating energy-efficient lighting, eco-friendly materials, and modern interior design.",
    valueTags: ["Sustainable Design", "Energy Efficient", "Healthy Home"],
  },
  {
    id: 5,
    title: "Open Concept Living Upgrade",
    location: "Toronto, ON",
    category: "Residential",
    year: "2023",
    image: "/images/open-concept.jpeg",
    description:
      "Home renovation creating an open-concept layout with modern flooring, upgraded kitchen, and enhanced natural light.",
    valueTags: ["Spacious Design", "Contemporary Style", "Functional Spaces"],
  },
  {
    id: 6,
    title: "Finished Basement Recreation Room",
    location: "Mississauga, ON",
    category: "Renovation",
    year: "2022",
    image: "/images/recreation-room.jpeg",
    description:
      "Converted basement into a recreation room with stylish flooring, entertainment setup, and smart storage solutions.",
    valueTags: ["Family Friendly", "Modern Finish", "Functional Design"],
  },
];

const categories = [
  "All",
  "Residential",
  "Renovation",
];

/* ================= COMPONENT ================= */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (href: string) => {
    pathname === href
      ? window.scrollTo({ top: 0, behavior: "smooth" })
      : router.push(href);
  };

  const filteredProjects = projects.filter((project) => {
    const matchCategory =
      activeCategory === "All" || project.category === activeCategory;
    const matchSearch =
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.location.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white">
        <div className="absolute inset-0 bg-black/40" />

        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url('/images/projectsbanner.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">
          <span className="inline-block mb-4 px-4 py-2 bg-orange-600/20 rounded-full text-orange-300 font-semibold text-xs sm:text-sm">
            PORTFOLIO
          </span>

          <h1 className="font-bold leading-tight mb-4 text-2xl sm:text-4xl md:text-5xl">
            Our Projects
            <span className="block sm:inline"> & </span>
            <span className="block sm:inline text-orange-400">
              Craftsmanship
            </span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Premium construction solutions delivered across Canada
          </p>
        </div>
      </section>

      {/* ================= TRUST ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 md:p-12 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Built on Trust. Experts Since 2021
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg leading-relaxed max-w-4xl mx-auto">
            At <span className="font-semibold text-orange-600">
              Platinum Home Services
            </span>, we deliver projects with a focus on safety, quality,
            and long-term value — doing things right the first time.
          </p>
        </div>
      </section>

      {/* ================= FILTER ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 flex flex-col lg:flex-row gap-5 justify-between">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 min-h-[44px] rounded-full font-semibold transition ${
                  activeCategory === cat
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 outline-none text-gray-600"
            />
          </div>
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden hover:-translate-y-2"
            >
              <div className="relative h-44 sm:h-52 md:h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded-full text-orange-600 font-bold text-xs flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {project.category}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </div>

                <h3 className="text-lg sm:text-2xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4 text-orange-600" />
                  {project.location}
                </div>

                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {project.description}
                </p>

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

      {/* ================= CTA ================= */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
            Build With a Team You Can Trust
          </h2>
          <p className="text-sm sm:text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            From planning to completion, we deliver safe, reliable,
            and high-quality construction — without compromises.
          </p>
          <button
            onClick={() => handleNav("/contact")}
            className="px-6 sm:px-8 py-3 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-100 transition shadow-xl min-h-[44px]"
          >
            Get a Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
