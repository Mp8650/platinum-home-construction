import { Mail, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActions() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      
      {/* Contact */}
      <a
        href="/contact"
        className="group flex items-center gap-3 bg-orange-500 text-white px-4 py-3 rounded-l-xl
                   translate-x-[70%] hover:translate-x-0 transition-transform duration-300 shadow-lg"
      >
        <Mail size={18} />
        <span className="whitespace-nowrap font-medium">Contact Us</span>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/16479900064"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-l-xl
                   translate-x-[70%] hover:translate-x-0 transition-transform duration-300 shadow-lg"
      >
        <FaWhatsapp size={18} />
        <span className="whitespace-nowrap font-medium">WhatsApp</span>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/platinumhomes.gta?utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 text-white px-4 py-3 rounded-l-xl
                   translate-x-[70%] hover:translate-x-0 transition-transform duration-300 shadow-lg
                   bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
      >
        <Instagram size={18} />
        <span className="whitespace-nowrap font-medium">Instagram</span>
      </a>

    </div>
  );
}
