"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const servicesData = [
  {
    title: "Medical, Lab & Professional Spaces",
    desc: "Clean, organized, durable finishes for clinics, labs, offices, and professional service environments.",
    img: "/images/commercial-medical-reception.jpeg",
  },
  {
    title: "Office Reception & Lobby Renovations",
    desc: "Modern front-desk layouts with durable finishes and clean circulation for daily business operations.",
    img: "/images/commercial-office-reception.jpeg",
  },
  {
    title: "Commercial Office Interiors",
    desc: "Glass offices, open-plan work zones, and meeting spaces designed for productivity and comfort.",
    img: "/images/commercial-office-open-plan.jpeg",
  },
  {
    title: "Boardroom & Meeting Spaces",
    desc: "Professional conference room upgrades with integrated lighting, acoustics, and premium finishes.",
    img: "/images/commercial-boardroom.jpeg",
  },
  {
    title: "Retail Store Renovations",
    desc: "Retail fit-outs that improve customer flow, display visibility, and day-to-day functionality.",
    img: "/images/commercial-retail-storefront.jpeg",
  },
  {
    title: "Retail Counter & Display Upgrades",
    desc: "Custom counters, product shelving, and flooring upgrades built for high-traffic retail environments.",
    img: "/images/commercial-retail-interior.jpeg",
  },
  {
    title: "Restaurant & Hospitality Interiors",
    desc: "Stylish dining and hospitality renovations with durable finishes that support smooth service flow.",
    img: "/images/commercial-restaurant-interior.jpeg",
  },
  {
    title: "Industrial & Warehouse Interiors",
    desc: "Practical commercial upgrades for warehouses, mezzanines, and utility-heavy industrial spaces.",
    img: "/images/commercial-industrial-warehouse.jpeg",
  },
  {
    title: "Commercial Restroom Renovation",
    desc: "Clean, code-ready washroom upgrades with durable materials for long-term commercial use.",
    img: "/images/commercial-restroom-finish.jpeg",
  },
  {
    title: "Medical Hallway & Clinic Flow Design",
    desc: "Optimized corridor layouts and reception transitions for professional healthcare environments.",
    img: "/images/commercial-medical-corridor.jpeg",
  },
  {
    title: "Electric Services",
    desc: "Professional electrical wiring, repair & maintenance.",
    img: "/images/electricservices.png",
  },
  {
    title: "Windows Enlargement",
    desc: "Expand and renovate windows for better space & light.",
    img: "/images/windowenlargement.png",
  },
  {
    title: "Finish Legal Basement",
    desc: "Complete basement finishing services with permits.",
    img: "/images/legalbasement.png",
  },
  {
    title: "Doors & Windows Installation",
    desc: "Top quality door and window installation services.",
    img: "/images/door_window.png",
  },
  {
    title: "Framing",
    desc: "Structural framing for residential and commercial projects.",
    img: "/images/framing.png",
  },
  {
    title: "Drywall Installation",
    desc: "Professional drywall installation & finishing.",
    img: "/images/drywall.png",
  },
  {
    title: "Plumbing",
    desc: "All plumbing services including repairs & installation.",
    img: "/images/plumbing.png",
  },
  {
    title: "3D Model Designing",
    desc: "High quality 3D design & planning for homes.",
    img: "/images/model_designing.png",
  },
  {
    title: "Bathroom Renovation",
    desc: "Complete bathroom remodeling & renovation services.",
    img: "/images/bathroom.png",
  },
];

const ServicesSlider = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl  md:text-4xl font-bold text-gray-900">
            Services We Provide
          </h2>
          <p className="text-gray-500 mt-2 tracking-wide">
            Residential and commercial renovation solutions
          </p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          aria-label="Platinum Home Services Slider"
        >
          {servicesData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-lg rounded-xl overflow-hidden h-[320px] sm:h-[340px] flex flex-col">
                <div className="relative w-full h-40 sm:h-44">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg text-gray-900 font-semibold mb-2 min-h-[48px]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="custom-pagination mt-8 flex justify-center" />
      </div>
    </section>
  );
};

export default ServicesSlider;
