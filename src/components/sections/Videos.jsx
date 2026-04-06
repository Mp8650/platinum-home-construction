"use client";
import { useEffect, useRef, useState } from "react";
import { Play, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paginationEl, setPaginationEl] = useState(null);
  const playerHostRef = useRef(null);
  const playerInstanceRef = useRef(null);
  const pendingVideoIdRef = useRef(null);
  const isPlayerReadyRef = useRef(false);

  useEffect(() => {
    if (!playerHostRef.current) return;

    let disposed = false;

    const createPlayer = () => {
      if (disposed || !window.YT?.Player || !playerHostRef.current) return;

      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
        playerInstanceRef.current = null;
      }

      playerInstanceRef.current = new window.YT.Player(playerHostRef.current, {
        videoId: videos[0].ytId,
        playerVars: {
          autoplay: 0,
          controls: 1,
          playsinline: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            isPlayerReadyRef.current = true;
            if (pendingVideoIdRef.current) {
              event.target.loadVideoById(pendingVideoIdRef.current);
              event.target.unMute();
              event.target.setVolume(100);
              event.target.playVideo();
            }
          },
        },
      });
    };

    if (window.YT?.Player) {
      createPlayer();
    } else {
      const previousReady = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (typeof previousReady === "function") previousReady();
        createPlayer();
      };

      if (!document.getElementById("youtube-iframe-api")) {
        const script = document.createElement("script");
        script.id = "youtube-iframe-api";
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }
    }

    return () => {
      disposed = true;
      isPlayerReadyRef.current = false;
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy();
        playerInstanceRef.current = null;
      }
    };
  }, []);

  const openVideo = (ytId) => {
    setIsModalOpen(true);
    pendingVideoIdRef.current = ytId;

    if (isPlayerReadyRef.current && playerInstanceRef.current) {
      playerInstanceRef.current.loadVideoById(ytId);
      playerInstanceRef.current.unMute();
      playerInstanceRef.current.setVolume(100);
      playerInstanceRef.current.playVideo();
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (playerInstanceRef.current) {
      playerInstanceRef.current.pauseVideo();
    }
  };

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
            modules={[Pagination]}
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
            }}
            centeredSlides={true}
            loop={true}
            allowTouchMove={true}
            pagination={{
              clickable: true,
              el: paginationEl,
            }}
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-black relative w-full">
                  {/* 9:16 aspect ratio */}
                  <div className="relative w-full pt-[177%]">
                    <button
                      type="button"
                      onClick={() => openVideo(video.ytId)}
                      className="absolute inset-0 w-full h-full group"
                      aria-label={`Play video ${video.id}`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                          backgroundImage: `url(https://i.ytimg.com/vi/${video.ytId}/hqdefault.jpg)`,
                        }}
                        aria-label={`Video ${video.id} preview`}
                      />
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-900 shadow-lg">
                          <Play size={16} />
                          Play Video
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            ref={setPaginationEl}
            className="video-pagination mt-8 flex justify-center"
          />
        </div>

        <div
          className={`fixed inset-0 z-[1000] bg-black/85 flex items-center justify-center p-4 transition-opacity ${
            isModalOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          role="dialog"
          aria-modal="true"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-md rounded-2xl overflow-hidden bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full pt-[177%]">
              <button
                type="button"
                onClick={closeModal}
                aria-label="Close video"
                className="absolute top-3 right-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white"
              >
                <X size={18} />
              </button>
              <div ref={playerHostRef} className="absolute inset-0 w-full h-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
