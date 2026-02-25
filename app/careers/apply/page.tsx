"use client";

import { useState } from "react";
import { Upload, Mail, User, Briefcase } from "lucide-react";

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

      // READ THE FILE AS BASE64
  const fileInput = form.elements.namedItem("resume") as HTMLInputElement;
  const file = fileInput.files?.[0];

  let resumeBase64 = "";
  if (file) {
    resumeBase64 = await new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file); // converts file to base64 data URL
      reader.onload = () => {
        const result = reader.result as string;
        // strip out the prefix like "data:application/pdf;base64,"
        const base64Only = result.split(",")[1];
        resolve(base64Only);
      };
      reader.onerror = reject;
    });
  }


    // Collect form data
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      position: (form.elements.namedItem("position") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      resume: resumeBase64,
      // For file uploads, see note below
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }
  }


  return (
    <div className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Apply for a Position
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Join a team that values safety, growth, and long-term career
            development. Submit your application below.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-md p-10">
          {submitted ? (
            <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-xl text-center">
              <h2 className="text-2xl font-semibold mb-2">
                Application Submitted
              </h2>
              <p>
                Thank you for your interest. Our recruitment team will review
                your application and contact you soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position Applied For
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      name="position"
                      type="text"
                      placeholder="Project Manager"
                      className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Resume */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Resume
                  </label>
                  <div className="relative">
                    <Upload className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                      name="resume"
                      type="file"
                      className="w-full border rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Message (Optional)
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us why you are a good fit for this role..."
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t">
                <p className="text-sm text-gray-500">
                  By submitting, you agree to our recruitment policy.
                </p>

                <button
                  type="submit"
                  className="bg-orange-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                >
                  Submit Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
