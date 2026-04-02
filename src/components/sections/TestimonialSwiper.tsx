"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialSwiper() {
  const testimonials = [
    {
      name: "Michael Thompson",
      city: "Toronto, ON",
      project: "Legal Basement Renovation",
      text:
        "Platinum Home Services converted our unfinished basement into a legal rental suite. The workmanship, communication, and finish exceeded our expectations.",
    },
    {
      name: "Sarah Williams",
      city: "Mississauga, ON",
      project: "Bathroom Remodeling",
      text:
        "Very professional team. They stayed on schedule, kept everything clean, and delivered a luxury bathroom exactly as promised.",
    },
    {
      name: "David Miller",
      city: "Brampton, ON",
      project: "Kitchen Upgrade",
      text:
        "Transparent pricing and excellent finishing quality. The cabinet work and lighting design completely transformed our kitchen.",
    },
    {
      name: "Amanda Lee",
      city: "Kitchener, ON",
      project: "Full Basement Finishing",
      text:
        "From planning to final paint, the whole experience was smooth. Daily updates from the project manager gave us peace of mind.",
    },
  ];

  return (
    <section className="pt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">200+ Happy Homeowners</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Real renovation stories from families across Ontario
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true , el: ".swiper-pagination-custom", dynamicBullets: true}}
          //navigation
          breakpoints={{
            480: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 18 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 22 },
            1280: { slidesPerView: 3, spaceBetween: 24 },
            1536: { slidesPerView: 4, spaceBetween: 24 },
          }}
          className="pb-6"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 h-[320px] flex flex-col hover:shadow-xl transition flex flex-col">
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-lg">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.city}</p>
                  </div>
                </div>

                

               <div className="text-gray-700 leading-7 mb-5 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
  {item.text}
</div>
<div className="text-lg mb-3">⭐⭐⭐⭐⭐</div>
                <div className="space-y-2 text-sm text-gray-600 border-t pt-4 mt-auto">
                  <p><strong>Project:</strong> {item.project}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom mt-8 flex jusify-center items-center gap-2 text-blue-500"/>
      </div>
    </section>
  );
}
