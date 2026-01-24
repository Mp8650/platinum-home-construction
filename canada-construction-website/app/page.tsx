
import Hero from "@/src/components/sections/Hero";
import Stats from "@/src/components/sections/Stats";
import Services from "@/src/components/sections/Services";
import Sustainability from "@/src/components/sections/Sustainability";
import CTA from "@/src/components/sections/CTA";
import ServicesSlider from "@/src/components/sections/ServicesSlider";

export default function Home() {
  return (
    <>
        
      <Hero />
      <Stats />
      <ServicesSlider/>
      <Services />
      <Sustainability />
      <CTA />
        
        
      
    </>
  );
}
