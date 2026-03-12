"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Expertise", href: "/expertise" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNav = (href: string) => {
    if (pathname === href) {
      // Same page click
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Different page
      router.push(href);
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo + About */}
          <div>
            <h2
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => handleNav("/")}
            >
              Platinum Home Services
            </h2>

            <p className="text-gray-400 mt-3">
              Building modern, sustainable and safe structures across Canada.
              From planning to execution, we deliver quality with integrity.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/platinumhomes.gta?utm_source=qr"
                target="_blank"
                className="p-2 rounded-full bg-gray-800 text-pink-500 hover:text-pink-400 hover:bg-gray-700 transition"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/login/"
                target="_blank"
                className="p-2 rounded-full bg-gray-800 text-blue-600 hover:text-blue-500 hover:bg-gray-700 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/twitt_login"
                target="_blank"
                className="p-2 rounded-full bg-gray-800 text-sky-400 hover:text-sky-300 hover:bg-gray-700 transition"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/login"
                target="_blank"
                className="p-2 rounded-full bg-gray-800 text-blue-500 hover:text-blue-400 hover:bg-gray-700 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          {/* <div className="flex flex-row sm:hidden justify-between">
            {/* Quick Links /}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400">
                {links.map((link) => (
                  <li key={link.name}>
                    <span
                      onClick={() => handleNav(link.href)}
                      className={`cursor-pointer hover:text-white transition ${
                        pathname === link.href ? "text-white font-semibold" : ""
                      }`}
                    >
                      {link.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services /}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>Residential Construction</li>
                <li>Commercial Construction</li>
                <li>Renovation & Retrofit</li>
                <li>Architecture & Design</li>
                <li>Sustainable Building</li>
              </ul>
            </div>
          </div> */}

            {/* Quick Links */}
            <div className="hidden sm:block">
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400">
                {links.map((link) => (
                  <li key={link.name}>
                    <span
                      onClick={() => handleNav(link.href)}
                      className={`cursor-pointer hover:text-white transition ${
                        pathname === link.href ? "text-white font-semibold" : ""
                      }`}
                    >
                      {link.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="hidden sm:block">
              <h3 className="text-lg font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>Basement Renovation & Finishing</li>
  <li>Interior Home Renovations</li>
  <li>Home Improvement Projects</li>
  <li>Renovation Consultation & Planning</li>
  <li>Eco-Friendly Renovations</li>
  <li>Custom Home Improvements</li>
              </ul>
            </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>

            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-8 h-8" />
                <span>342 MILL STREET, KITCHENER, ONTARIO,N2M 0A4</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span>+16479900064</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span>platinumhomeservices01@gmail.com</span>
              </div>
            </div>

            <div className="hidden sm:block mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">
                Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
                />
                <button className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
