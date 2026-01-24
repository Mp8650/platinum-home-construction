"use client";
import React from "react";
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
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">OUR SERVICES ARE</h2>
          <p className="text-gray-500 mt-2">PLATINUM HOME SERVICES</p>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}  
          pagination={{ clickable: true,el: ".custom-pagination", }}
          autoplay={{ delay: 3000, disableOnInteraction: false,pauseOnMouseEnter: true }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {servicesData.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.desc}</p>
                  {/* <button className="bg-orange-600 text-white px-5 py-2 rounded">
                    Learn More
                  </button> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination under cards */}
        <div className=" text-center custom-pagination mt-6"/>
      </div>
    </section>
  );
};

export default ServicesSlider;
