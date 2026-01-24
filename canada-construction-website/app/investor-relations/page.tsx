"use client";

import {
  Download,
  FileText,
  ChartLine,
  Building,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function InvestorRelationsPage() {
  const reports = [
    {
      id: 1,
      year: "2024",
      type: "Annual Report",
      file: "Annual_Report_2024.pdf",
      downloadUrl: "/downloads/Annual_Report_2024.pdf", // <-- add your file link here
    },
    {
      id: 2,
      year: "2024",
      type: "Q1 Financial Results",
      file: "Q1_2024.pdf",
      downloadUrl: "/downloads/Q1_2024.pdf", // <-- add your file link here
    },
    {
      id: 3,
      year: "2023",
      type: "Annual Report",
      file: "Annual_Report_2023.pdf",
      downloadUrl: "/downloads/Annual_Report_2023.pdf", // <-- add your file link here
    },
    {
      id: 4,
      year: "2023",
      type: "Q4 Financial Results",
      file: "Q4_2023.pdf",
      downloadUrl: "/downloads/Q4_2023.pdf", // <-- add your file link here
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-orange-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Investor Relations
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            Transparent financial reporting, strong growth, and long-term value for investors.
          </p>
        </div>
      </section>

      {/* Reports */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Reports & Filings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reports.map((report) => (
              <div
                key={report.id}
                className="flex items-center justify-between bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div>
                  <h3 className="font-bold text-lg">{report.type}</h3>
                  <p className="text-gray-500">{report.year}</p>
                </div>

                {/* CLICKABLE DOWNLOAD BUTTON */}
                <a
                  href={report.downloadUrl}
                  download={report.file}
                  className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700"
                >
                  Download <Download className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Investor Contact
            </h2>
            <p className="text-gray-600 mb-6">
              For investor inquiries, financial reports, and shareholder information,
              please contact our Investor Relations team.
            </p>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-600" />
                <span>investors@yourcompany.ca</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span>Toronto, ON, Canada</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-gray-200"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-gray-200"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 rounded-lg border border-gray-200"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full p-3 rounded-lg border border-gray-200"
              />
              <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
