"use client";

export default function MovingTagline() {
  const text =
    "Professional Basement Renovations & Home Improvements in the Greater Toronto Area • Basement Finishing Specialists • Interior Remodeling Experts • Modern Basement Designs • Quality Craftsmanship • Reliable Renovation Services • Transform Your Basement into a Functional Living Space with Platinum Home Services";

  return (
    <div className="w-full overflow-hidden bg-orange-700 text-white py-1">
      <div className="flex whitespace-nowrap animate-marquee font-medium text-sm md:text-base">
        <span className="mx-8">{text}</span>
        <span className="mx-8">{text}</span>
      </div>
    </div>
  );
}