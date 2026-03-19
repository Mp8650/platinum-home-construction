"use client";

import { Phone, Instagram, Youtube, Facebook } from "lucide-react";
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
            +16479900064
          </span>

          {/* <span
            className="hidden md:block cursor-pointer hover:text-white transition"
            onClick={() => handleNav("/careers")}
          >
            Careers
          </span> */}

          {/* <span
            className="hidden md:block cursor-pointer hover:text-white transition"
            onClick={() => handleNav("/investor-relations")}
          >
            Investor Relations
          </span> */}
        </div>

        {/* Right */}
        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/platinumhomes.gta?utm_source=qr"
            target="_blank"
            rel="noreferrer"
            className="text-pink-500 hover:text-pink-600 transition"
          >
            <Instagram size={16} />
          </a>
          <a
            href="https://youtube.com/@platinum1575?si=stG1f5tnXcepm0lc"
            target="_blank"
            rel="noreferrer"
            className="text-red-400 hover:text-red-300 transition"
          >
            <Youtube size={16} />
          </a>
          <a
            href="https://www.facebook.com/share/1Qwu1x7D5P/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-400 transition"
          >
            <Facebook size={16} />
          </a>
        </div>
      </div>
    </div>
  );
}
