"use client";

import { Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function TopBar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNav = (href: string) => {
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push(href);
    }
  };

  return (
    <div className="bg-gray-900 text-white text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <span className="flex items-center cursor-pointer" onClick={() => handleNav("/contact")}>
            <Phone size={14} className="mr-2" /> 
647-990-0064
          </span>

          {/* Quick links */}
          <span
            className="hidden md:block cursor-pointer hover:text-gray-300 transition"
            onClick={() => handleNav("/careers")}
          >
            Careers
          </span>

          <span
            className="hidden md:block cursor-pointer hover:text-gray-300 transition"
            onClick={() => handleNav("/investor-relations")}
          >
            Investor Relations
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={16} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <Twitter size={16} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <Facebook size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
