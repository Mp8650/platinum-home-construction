 
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// import { useState } from "react";
// import { Play, Pause, Volume2, VolumeX } from "lucide-react";
// import Container from "@/src/components/ui/Container";

// const videos = [
//   { id: 1, fileId: "1fpCtCDGeo9YBtWebzhluXXRjRhTlkZP6", title: "Project 1", description: "Construction work showcase" },
//   { id: 2, fileId: "1kIDocnh4VaItYFeBzAghKJhShoW1f__Q", title: "Project 2", description: "Site progress" },
//   { id: 3, fileId: "1_OQ85EaAByfZfIIRwuJmpUghN7d11ghQ", title: "Project 3", description: "Interior work" },
//   { id: 4, fileId: "1fvWQ5hhCtpguKlltIjLEe-IrhHYuyNzD", title: "Project 4", description: "Exterior design" },
//   { id: 5, fileId: "145jUDdLWtAoGc33_SjvEm1-7zMqskyfq", title: "Project 5", description: "Final stage" },
//   { id: 6, fileId: "1QeHywPYv1AU-s4dV7Nco1j1ST8I2pWWb", title: "Project 6", description: "Work in progress" },
//   { id: 7, fileId: "1GdCz8FhtGURuYhQxjNTBDNruhrk_nJy4", title: "Project 7", description: "Modern construction" },
//   { id: 8, fileId: "14EqIIsIJtXpXeLt6xyT0mLPWOGavmqhR", title: "Project 8", description: "Team execution" },
//   { id: 9, fileId: "1a1MkCQKulrjRW03CBPWZmWsL9j2VhQ4G", title: "Project 9", description: "Finishing work" },
//   { id: 10, fileId: "1uzF1qvSYiNmW96VgVcO4921fy8y1GAk7", title: "Project 10", description: "Quality check" },
//   { id: 11, fileId: "16QxkkFPO3YL2L0-xbBM9Wjb_E3etfjMg", title: "Project 11", description: "On-site footage" },
//   { id: 12, fileId: "1YATXQ3b7ikcMjvvyPlsMDbaOFNXIyQMa", title: "Project 12", description: "Detailed work" },
//   { id: 13, fileId: "1R6ywpBTQ9YSiTpHkI77SSKmVOYAmhKTb", title: "Project 13", description: "Final touches" },
//   { id: 14, fileId: "1AV24t8p-rdHCMeg5oWni4u2zAGfdHwiZ", title: "Project 14", description: "Completed project" },
// ];

// export default function VideoShowcase() {
//   const [isPlaying, setIsPlaying] = useState(true);
//   const [isMuted, setIsMuted] = useState(true);

//   return (
//     <section className="py-20 bg-white">
//       <Container>
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
//             Our Work in Action
//           </h2>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
//             Real construction progress and completed projects
//           </p>
//         </div>

//         {/* Swiper */}
//         <div className="relative max-w-5xl mx-auto">
//           <Swiper
//             modules={[Autoplay, Navigation]}
//             spaceBetween={20}
//             slidesPerView={1}
//             loop
//             navigation
//             autoplay={false}
//             className="rounded-2xl overflow-hidden shadow-xl"
//           >
//             {videos.map((video) => (
//               <SwiperSlide key={video.id}>
//                 <div className="relative aspect-video bg-black">
//                   <iframe
//                     src={`https://drive.google.com/file/d/${video.fileId}/preview?autoplay=1&mute=${isMuted ? 1 : 0}`}
//                     className="w-full h-full"
//                     allow="autoplay; fullscreen"
//                   />

//                   {/* Overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-white">
//                     <h3 className="text-xl font-semibold">{video.title}</h3>
//                     <p className="text-sm opacity-80">{video.description}</p>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {/* Controls */}
//           <div className="flex justify-center gap-4 mt-6">
//             <button
//               onClick={() => setIsPlaying(!isPlaying)}
//               className="bg-emerald-600 text-white p-3 rounded-full"
//             >
//               {isPlaying ? <Pause /> : <Play />}
//             </button>

//             <button
//               onClick={() => setIsMuted(!isMuted)}
//               className="bg-gray-800 text-white p-3 rounded-full"
//             >
//               {isMuted ? <VolumeX /> : <Volume2 />}
//             </button>
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// }
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "@/src/components/ui/Container";

// Replace with actual YouTube Shorts IDs
const videos = [
  { id: 1, ytId: "1fwFAfS2vis" },
  { id: 2, ytId: "1fwFAfS2vis" },
  { id: 3, ytId: "1fwFAfS2vis" },
  { id: 4, ytId: "1fwFAfS2vis" },
  { id: 5, ytId: "1fwFAfS2vis" },
  // { id: 6, ytId: "1fwFAfS2vis" },
];

export default function VideoShowcase() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-gray-900">
            Our Work in Action
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Watch our latest construction projects
          </p>
        </div>

        {/* Swiper */}
        <div className="max-w-7xl mx-auto">
          <Swiper
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 1.1 },   // mobile
              640: { slidesPerView: 1.5 }, // small tablets
              768: { slidesPerView: 2 },   // tablets
              1024: { slidesPerView: 3 },  // desktop
            }}
            centeredSlides={true}
            loop
          >
            {videos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="rounded-2xl overflow-hidden shadow-lg bg-black relative w-full">
                  {/* Aspect ratio wrapper for 9:16 vertical */}
                  <div className="relative w-full pt-[177%]"> 
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.ytId}?autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0`}
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