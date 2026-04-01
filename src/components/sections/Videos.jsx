"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import "swiper/css";
import Container from "@/src/components/ui/Container";

const videos = [
  { id: 1, ytId: "lBScAguBdCc" },
  { id: 2, ytId: "odrAKtaisgU" },
  { id: 3, ytId: "n6s-MEd06w8" },
  { id: 4, ytId: "xKUeIPq_j4k" },
  { id: 5, ytId: "zXeCf5mvEEs" },
  { id: 6, ytId: "7W-E1dxnknE" },
  { id: 7, ytId: "bIg_FBM2Bpo" },
  
  { id: 11, ytId: "1fwFAfS2vis" }
];

export default function VideoShowcase() {
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white block lg:hidden">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Work in Action
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Watch our latest construction projects
          </p>
        </div>

        {/* Swiper */}
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay,Navigation]}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
            }}
            centeredSlides={true}
            loop
            navigation
            autoplay={{ delay: 30000, disableOnInteraction: false }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-black relative w-full">
                  {/* 9:16 aspect ratio */}
                  <div className="relative w-full pt-[177%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.ytId}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0`}
                      allow="autoplay; fullscreen; encrypted-media"
                      allowFullScreen
                      title={`Video ${video.id}`}
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}