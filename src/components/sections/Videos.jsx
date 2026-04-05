"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Container from "@/src/components/ui/Container";

const videos = [
  { id: 1, ytId: "0WRJBuh1q6Y" },
  { id: 2, ytId: "bkVYqfefEcc" },
  { id: 3, ytId: "ZUQ1qLNxxU0" },
  { id: 4, ytId: "odrAKtaisgU" },
  { id: 5, ytId: "n6s-MEd06w8" },
  { id: 6, ytId: "xKUeIPq_j4k" },
  { id: 7, ytId: "lBScAguBdCc" },
  { id: 8, ytId: "kSmVidLE9E4" },
  { id: 9, ytId: "MhraARzaJrE" },
  { id: 10, ytId: "7W-E1dxnknE" },
  { id: 11, ytId: "bIg_FBM2Bpo" },
  { id: 12, ytId: "ZCpOflR1p-4" },
  { id: 13, ytId: "xGqbHnsoTPM" },
  { id: 14, ytId: "1fwFAfS2vis" },
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
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
            }}
            centeredSlides={true}
            loop={true}
            autoplay={{ delay: 30000, disableOnInteraction: false }}
            navigation={{
              prevEl: ".swiper-nav-prev",
              nextEl: ".swiper-nav-next",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              //dynamicBullets: true,
            }}
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
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              className="swiper-nav-prev w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center hover:bg-gray-700 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>

            {/* SINGLE pagination container */}
            <div className="swiper-pagination-custom flex gap-2 items-center"></div>

            <button
              className="swiper-nav-next w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center hover:bg-gray-700 transition"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
