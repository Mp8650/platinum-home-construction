"use client";

import Link from "next/link";
import {
  Briefcase,
  Users,
  Award,
  TrendingUp,
  Heart,
  MapPin,
} from "lucide-react";

const careerPaths = [
  {
    title: "Professionals",
    description:
      "Engineering, project management, finance, and leadership roles delivering complex projects.",
  },
  {
    title: "Craft & Trades",
    description:
      "Skilled trades and field professionals building safely and efficiently on-site.",
  },
  {
    title: "Students & Graduates",
    description:
      "Internships, co-ops, and early-career programs designed to grow future leaders.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive medical, dental, and wellness programs for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description:
      "Training, mentorship, certifications, and long-term advancement opportunities.",
  },
  {
    icon: Award,
    title: "Competitive Compensation",
    description:
      "Industry-leading pay, performance incentives, and recognition programs.",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description:
      "A respectful, collaborative environment where everyone belongs.",
  },
];

const jobs = [
  {
    id: "project-manager",
    title: "Project Manager",
    location: "Toronto, ON",
  },
  {
    id: "site-supervisor",
    title: "Site Supervisor",
    location: "Vancouver, BC",
  },
  {
    id: "structural-engineer",
    title: "Structural Engineer",
    location: "Calgary, AB",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Careers Built on Trust, Safety & Opportunity
          </h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            We don’t just build projects — we build careers, communities, and
            long-term futures.
          </p>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our people are the foundation of everything we build. We invest in
          safety, innovation, and career development at every stage.
        </p>
      </section>

      {/* CAREER PATHS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerPaths.map((path, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-2xl font-semibold mb-3">{path.title}</h3>
              <p className="text-gray-600">{path.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CULTURE */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We put safety first, act with integrity, value diversity, and create
            opportunities for people to grow and succeed.
          </p>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* OPEN ROLES (PREVIEW) */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">
            Explore Opportunities
          </h2>

          <div className="space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.id}
                href={`/careers/${job.id}`}
                className="flex items-center justify-between p-6 border rounded-lg hover:border-orange-400 hover:shadow transition"
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-gray-600 flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </p>
                </div>
                <Briefcase className="w-6 h-6 text-orange-600" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don’t See the Right Role?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We’re always looking for talented individuals. Submit a general
            application and grow with us.
          </p>
          <Link
            href="/careers/apply"
            className="inline-block bg-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
          >
            Submit General Application
          </Link>
        </div>
      </section>
    </div>
  );
}
