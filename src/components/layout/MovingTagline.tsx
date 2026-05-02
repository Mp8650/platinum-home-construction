"use client";

export default function MovingTagline() {
  const text =
    "Commercial and Home Renovation Services in the GTA | Offices, Retail Stores, Restaurants, Clinics, Labs and Professional Spaces | Basement Finishing and Interior Renovations | Clean, Organized, Durable Finishes | Quality Craftsmanship by Platinum Home Services | Serving Brampton, Mississauga, Caledon, Guelph, Cambridge, Waterloo, London, Scarborough, Oshawa and more";

  return (
    <div className="w-full overflow-hidden bg-orange-700 text-white py-1">
      <div className="flex whitespace-nowrap animate-marquee font-medium text-sm md:text-base">
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </div>
    </div>
  );
}
