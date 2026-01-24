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
    <div className="bg-gray-950 text-gray-300 text-sm py-2">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        {/* Left */}
        <div className="flex items-center gap-6">
          <span
            className="flex items-center cursor-pointer hover:text-white transition"
            onClick={() => handleNav("/contact")}
          >
            <Phone size={14} className="mr-2 text-orange-500" />
            647-990-0064
          </span>

          <span
            className="hidden md:block cursor-pointer hover:text-white transition"
            onClick={() => handleNav("/careers")}
          >
            Careers
          </span>

          <span
            className="hidden md:block cursor-pointer hover:text-white transition"
            onClick={() => handleNav("/investor-relations")}
          >
            Investor Relations
          </span>
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <Twitter size={16} />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <Facebook size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
