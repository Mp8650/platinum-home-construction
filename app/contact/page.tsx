"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl">
            Have a question or want to discuss a project? Our team is ready to
            help. Reach out and we’ll respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-semibold">Office Address</h2>
              </div>
              <p className="text-gray-600">
                123 Corporate Blvd, Suite 400 <br />
                Toronto, ON, Canada
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-semibold">Call Us</h2>
              </div>
              <p className="text-gray-600">+1 (555) 123-4567</p>
              <p className="text-gray-600">Mon - Fri, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-semibold">Email</h2>
              </div>
              <p className="text-gray-600">contact@yourdomain.com</p>
              <p className="text-gray-600">Support & General Enquiries</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-md p-10">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">
                  Thank You!
                </h2>
                <p className="text-gray-600">
                  Your message has been sent. We will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
                    placeholder="Project inquiry, support, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-orange-500"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Message <Send className="w-5 h-5" />
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
