"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

 async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  const form = e.currentTarget;

  const data = {
    name: (form.elements.namedItem("name") as HTMLInputElement).value,
    email: (form.elements.namedItem("email") as HTMLInputElement).value,
    subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
    message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
  };

  const res = await fetch("/api/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      formType: "contact",
      data,
    }),
  });

  if (res.ok) {
    setSubmitted(true);
    form.reset();
  } else {
    alert("Something went wrong. Please try again.");
  }
}

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Platinum Home Services
          </h1>
          <p className="text-lg md:text-xl text-orange-100 max-w-2xl">
             If you are planning a basement renovation or home improvement project in the Greater Toronto Area,
we would love to hear from you. Get in touch today to schedule a consultation
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
                342 MILL STREET, KITCHENER,<br />
                 ONTARIO,N2M 0A4
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center gap-4 mb-4">
                <Phone className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-semibold">Call Us</h2>
              </div>
              <p className="text-gray-600">+16479900064</p>
              <p className="text-gray-600">Mon - Fri, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-orange-600" />
                <h2 className="text-xl font-semibold">Email</h2>
              </div>
              <p className="text-gray-600">platinumhomeservices01@gmail.com</p>
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
                    name="name"
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
                    name="email"
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
                    name="subject"
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
                    name="message"
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
