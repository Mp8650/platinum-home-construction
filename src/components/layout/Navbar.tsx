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
    <>
      {/* Navbar */}
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
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.link;

              return (
                <button
                  key={item.name}
                  onClick={() => handleNav(item.link)}
                  className={`font-medium transition-all ${
                    isActive
                      ? "text-[#C46123] border-b-2 border-[#C46123]"
                      : "text-gray-300 hover:text-[#C46123]"
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
            className="lg:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Right Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b">
          <span className="font-bold text-lg text-gray-900">
            Menu
          </span>
          <button
            aria-label="Close Menu"
            onClick={() => setOpen(false)}
          >
            <X size={26} />
          </button>
        </div>

        <div className="flex flex-col gap-4 px-6 py-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.link;

            return (
              <button
                key={item.name}
                onClick={() => handleNav(item.link)}
                className={`text-left text-base font-medium transition ${
                  isActive
                    ? "text-blue-900"
                    : "text-gray-700 hover:text-blue-900"
                }`}
              >
                {item.name}
              </button>
            );
          })}

          <button
            onClick={() => handleNav("/contact")}
            className="mt-6 bg-blue-900 text-white px-4 py-3 rounded-xl hover:bg-blue-800 transition font-semibold"
          >
            Start a Project
          </button>
        </div>
      </aside>
    </>
  );
}
