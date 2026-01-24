"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const servicesData = [
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
            Our Services Are
          </h2>
          <p className="text-gray-500 mt-2 tracking-wide">
            Platinum Home Services
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
              <div className="bg-white shadow-lg rounded-xl overflow-hidden h-full">
                <div className="relative w-full h-48">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg text-gray-900 font-semibold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
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
