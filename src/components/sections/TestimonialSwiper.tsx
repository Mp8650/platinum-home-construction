"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function TestimonialSwiper() {
  const testimonials = [
  {
    name: "Raminder Singh",
    city: "Brampton",
    project: "Legal Basement",
    text: "The design captured exactly what we wanted and maximized space and the payment plan was very clear and fair, no hidden charges. Really happy with their services and specially thankful to Gurveer.",
  },
  {
    name: "Lakhwinder Singh",
    city: "Caledon",
    project: "Personal Use Basement",
    text: "Basement layout feels open and functional because of smart framing and it is just as comfortable as upstairs. So impressed with lighting design which makes the basement feel modern.",
  },
  {
    name: "Isaac Ibrahim",
    city: "Georgetown",
    project: "Legalize Basement",
    text: "They were professional, knowledgeable, and guided me properly through the whole process. The work was done neatly and on time, and they helped make everything smooth and stress-free. I really appreciate their honesty, communication, and attention to detail. I would definitely recommend them to anyone looking to legalize their basement.",
  },
  {
    name: "Rashpal Ghuman",
    city: "Brampton",
    project: "New Basement",
    text: "Excellent contractor for new basement construction. Professional team, good quality work, fair pricing, and completed the project nicely. Very satisfied with the results and highly recommend.",
  },
  {
    name: "Hodan",
    city: "Caledon",
    project: "Legal Basement",
    text: "We truly appreciate their honesty, attention to detail, and commitment to doing the job right. Highly recommended for anyone looking for basement construction or renovation work.",
  },
  {
    name: "Justin Rehmat",
    city: "Brampton",
    project: "Legalize Basement",
    text: "Great experience overall. They helped us legalize the existing basement in a professional manner. The team was friendly, efficient, and delivered high-quality work.",
  },
  {
    name: "Hayat",
    city: "Brampton",
    project: "Legal Basement",
    text: "Very satisfied with the basement project. The contractor was knowledgeable about all legal requirements and made sure the construction was done properly. The basement turned out beautiful and practical.",
  },
  {
    name: "Viral Shah",
    city: "Oshawa",
    project: "Legal Basement",
    text: "One of the best contractors we have worked with. They completed our new basement construction and legalized the basement without any hassle. They were transparent, professional, and very skilled.",
  },
  {
    name: "Navi Brar",
    city: "Mississauga",
    project: "Home Renovation",
    text: "We are extremely satisfied with the installation work. The doors fit perfectly, and the trims and baseboards were installed very neatly. Highly recommended for quality finishing work.",
  },
  {
    name: "Harpreet Gill",
    city: "Brampton",
    project: "Legal Basement",
    text: "They did an outstanding job with our basement construction project. The process was well managed, and the quality of work was excellent. We are very happy and would strongly recommend them.",
  },
  {
    name: "Naseem",
    city: "Brampton",
    project: "Legalize Basement",
    text: "Excellent workmanship and very good customer service. They handled our basement legalization project from start to finish. Everything was done properly, and the final result exceeded our expectations.",
  },
  {
    name: "Harman Randhawa",
    city: "Brampton",
    project: "Home Renovation",
    text: "Fantastic renovation work. The team upgraded our home beautifully and delivered quality results. We truly appreciate their hard work and dedication.",
  },
  {
    name: "Somji",
    city: "Brampton",
    project: "Legal Basement",
    text: "Very impressed with their knowledge and experience. They understood exactly what was needed for basement legalization and completed the construction work beautifully. Would definitely use them again.",
  },
  {
    name: "Omar Syed",
    city: "Waterloo",
    project: "Basement",
    text: "This contractor did a wonderful job on our basement. They took care of the legal basement process and completed all the construction work efficiently. We are very happy with the final outcome.",
  },
  {
    name: "Hunjan",
    city: "Cambridge",
    project: "Basement",
    text: "They were professional, responsive, and completed the work to a very high standard.",
  },
  {
    name: "Abdul",
    city: "Brampton",
    project: "Legalize Basement",
    text: "Highly recommend this contractor for basement construction and legalization. They made a stressful process much easier for us. The workmanship was excellent, and they kept everything clean and organized.",
  },
  {
    name: "Jagrant Gill",
    city: "Mississauga",
    project: "Legalize Basement",
    text: "Amazing service and quality work. They transformed our basement and made sure the existing basement was legalized properly. The team was punctual, experienced, and very cooperative throughout the project.",
  },
  {
    name: "Gurbaksheesh",
    city: "Kitchener",
    project: "Legalize Basement",
    text: "We are extremely pleased with the work they did on our basement. The contractor managed the legal process and construction very efficiently. Everything was completed with quality and care.",
  },
  {
    name: "Karey",
    city: "Cambridge",
    project: "Legalize Basement",
    text: "Professional and trustworthy contractor. They did legalization of our existing basement. They were knowledgeable about permits and city requirements, which gave us peace of mind.",
  },
  {
    name: "Farhaan",
    city: "Guelph",
    project: "Basement",
    text: "The contractor did an outstanding job on our basement construction. From planning to final finishing, everything was handled professionally and efficiently.",
  },
  {
    name: "Harpal",
    city: "Brampton",
    project: "Legalize Basement",
    text: "I had a very good experience with this contractor. They helped us with legal basement requirements and completed the construction with excellent workmanship. The final basement looks modern, clean, and well finished.",
  },
  {
    name: "Seyi",
    city: "Guelph",
    project: "Basement Construction",
    text: "They completed our basement project exactly the way we wanted. From framing to finishing, everything was done professionally. We appreciated their attention to detail and honest communication.",
  },
  {
    name: "Kalid",
    city: "Brampton",
    project: "Legalize Basement",
    text: "Great contractor for anyone looking to build or legalize a basement. They handled everything in a smooth and organized way. The basement now looks beautiful, functional, and up to code.",
  },
  {
    name: "Waheed",
    city: "Waterloo",
    project: "Basement Construction",
    text: "We are very happy with the basement work. They did a great job with the new construction. The team was respectful, skilled, and easy to deal with.",
  },
  {
    name: "Sola",
    city: "Hamilton",
    project: "Home Renovation",
    text: "The renovation work was done beautifully. The team was hardworking, honest, and always kept the place clean and organized. We would definitely hire them again.",
  },
  {
    name: "Pavneet",
    city: "Brampton",
    project: "Legal Basement",
    text: "Very reliable contractor for basement construction. They explained every step clearly and made the process easy for us. Workmanship was clean and professional. Highly recommended.",
  },
  {
    name: "Hiba",
    city: "Toronto",
    project: "Apartment Renovation",
    text: "Amazing renovation experience. The contractor understood our vision and turned it into reality. The quality of work and communication throughout the project were excellent.",
  },
  {
    name: "Manpreet",
    city: "Brampton",
    project: "Legal Basement",
    text: "Excellent experience from start to finish. They helped us legalize our basement and also completed the new construction work with great quality. The team was honest, hardworking, and finished everything on time.",
  },
  {
    name: "Damanjeet",
    city: "Cambridge",
    project: "Legal Basement",
    text: "We hired this contractor for new basement construction and to legalize our existing basement. The whole process was handled professionally, and the work was completed nicely. They guided us properly with permits, inspections, and construction. Very satisfied with the final result.",
  },
];

  return (
    <section className="pt-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-gray-900">200+ Happy Homeowners</h2>
          <p className="text-gray-600 mt-3 text-lg">
            Real renovation stories from families across Ontario
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          grabCursor={true}
          touchRatio={1}
          spaceBetween={16}
          slidesPerView={1}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true , el: ".swiper-pagination-custom", dynamicBullets: true}}
          
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
                    <h3 className="font-display font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.city}</p>
                  </div>
                </div>

                

               <div className="text-gray-700 leading-7 mb-5 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
  {item.text}
</div>
<div className="text-lg mb-3">â­â­â­â­â­</div>
                <div className="space-y-2 text-sm text-gray-600 border-t pt-4 mt-auto">
                  <p><strong>Project:</strong> {item.project}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination-custom mt-8 flex justify-center gap-2"></div>
      </div>
    </section>
  );
}

