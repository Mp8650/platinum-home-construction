"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import {
  MapPin,
  Briefcase,
  Clock,
  ChevronLeft,
  CheckCircle,
} from "lucide-react";

const jobData: Record<string, any> = {
  "project-manager": {
    title: "Project Manager",
    location: "Toronto, ON",
    type: "Full Time",
    experience: "2+ Years",
    description:
      "Lead complex construction projects from planning through completion while ensuring safety, quality, and budget compliance.",
    responsibilities: [
      "Manage project schedules, costs, and resources",
      "Coordinate with engineers, subcontractors, and vendors",
      "Ensure safety, quality, and regulatory compliance",
      "Prepare progress reports and communicate with clients",
    ],
    requirements: [
      "Bachelor’s degree in Engineering or Construction Management",
      "5+ years experience managing large-scale projects",
      "Strong leadership and stakeholder communication skills",
    ],
  },

  "site-supervisor": {
    title: "Site Supervisor",
    location: "Vancouver, BC",
    type: "Full Time",
    experience: "3+ Years",
    description:
      "Oversee daily construction site operations, ensuring safety, productivity, and quality standards are consistently met.",
    responsibilities: [
      "Supervise site teams and subcontractors",
      "Enforce safety standards and site procedures",
      "Coordinate daily activities with project managers",
    ],
    requirements: [
      "3+ years experience in site supervision",
      "Strong understanding of construction safety regulations",
    ],
  },
  "structural-engineer": {
  title: "Structural Engineer",
  location: "Calgary, AB",
  type: "Full Time",
  experience: "4+ Years",
  description:
    "Design, analyze, and review structural systems ensuring safety, durability, and compliance with building codes.",
  responsibilities: [
    "Design concrete and steel structures",
    "Perform structural analysis and calculations",
    "Review drawings and specifications",
    "Collaborate with architects and project teams",
  ],
  requirements: [
    "Bachelor’s degree in Civil or Structural Engineering",
    "Professional Engineer (P.Eng) preferred",
    "Experience with AutoCAD, ETABS, or SAP2000",
  ],
},

};

export default function JobDetailPage() {
  const { slug } = useParams();
  const job = jobData[String(slug)];

  if (!job) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl font-bold mb-4">Job Not Found</h2>
        <p className="text-gray-600 mb-6">
          The position you are looking for does not exist or has been closed.
        </p>
        <Link
          href="/careers"
          className="text-orange-600 font-semibold hover:underline"
        >
          ← Back to Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <Link
          href="/careers"
          className="inline-flex items-center gap-2 text-orange-600 font-medium mb-6 hover:underline"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Careers
        </Link>

        {/* Header Card */}
        <div className="bg-white rounded-2xl shadow-md p-10 mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {job.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-gray-600 mb-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-orange-600" />
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-orange-600" />
              {job.type}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-600" />
              {job.experience}
            </span>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Responsibilities */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Key Responsibilities
            </h2>
            <ul className="space-y-4">
              {job.responsibilities.map((item: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Requirements & Qualifications
            </h2>
            <ul className="space-y-4">
              {job.requirements.map((item: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/careers/apply"
            className="inline-block bg-orange-600 text-white px-12 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition"
          >
            Apply for This Position
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            We are an equal opportunity employer committed to diversity and inclusion.
          </p>
        </div>
      </div>
    </div>
  );
}
