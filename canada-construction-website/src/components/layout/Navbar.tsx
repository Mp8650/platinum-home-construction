"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Projects", link: "/projects" },
    { name: "Expertise", link: "/expertise" },
    { name: "Sustainability", link: "/sustainability" },
    { name: "Contact", link: "/contact" },
  ];

  const handleNav = (link: string) => {
    if (pathname === link) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(link);
    }
    setOpen(false);
  };

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Construction Logo"
            width={90}
            height={80}
            priority
            className="rounded-xl"
          />
          {/* Optional brand name */}
          {/* <span className="text-2xl font-bold text-blue-900">Brand</span> */}
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => {
            const isActive = pathname === item.link;

            return (
              <button
                key={item.name}
                onClick={() => handleNav(item.link)}
                className={`font-medium text-white transition-all ${
                  isActive
                    ? "text-[#C46123] border-b-2 border-[#C46123]"
                    : "text-gray-600 hover:text-[#C46123]"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label="Toggle Menu"
          className="lg:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col text-white gap-4 px-6 py-6">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNav(item.link)}
              className={`text-left font-medium ${
                pathname === item.link
                  ? "text-blue-900"
                  : "text-gray-600 hover:text-blue-900"
              }`}
            >
              {item.name}
            </button>
          ))}

          <button
            onClick={() => handleNav("/contact")}
            className="bg-blue-900 text-white px-6 py-2 rounded-md mt-2 hover:bg-blue-800 transition"
          >
            Start a Project
          </button>
        </div>
      </div>
    </nav>
  );
}
