import Head from 'next/head';
import Hero from "@/src/components/sections/Hero";
import Stats from "@/src/components/sections/Stats";
import Services from "@/src/components/sections/Services";
import Sustainability from "@/src/components/sections/Sustainability";
import CTA from "@/src/components/sections/CTA";
import ServicesSlider from "@/src/components/sections/ServicesSlider";
import VideoShowcase from "@/src/components/sections/Videos";
import TestimonialSwiper from "@/src/components/sections/TestimonialSwiper";
export default function Home() {

  return (
    <>
    <Head>
        <title>Platinum Home Services | Best Construction Company in Canada</title>
        <meta name="description" content="Platinum Home Services provides professional basement renovation, basement finishing, and home improvement services across the Greater Toronto Area. Contact us today for a consultation" />
        <link rel="canonical" href="https://platinumhomeservices.ca/" />
        <meta name="keywords" content="construction company Canada, construction services Canada, home construction Canada, commercial construction Canada, renovation Canada, building contractor Canada, construction management Canada, construction company near me" />

        {/* Open Graph tags */}
        <meta property="og:title" content="Platinum Home Services | Best Construction Company in Canada" />
        <meta property="og:description" content="Trusted construction company in Canada offering residential and commercial construction, renovation, and project management services." />
        <meta property="og:url" content="https://platinumhomeservices.ca/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://platinumhomeservices.ca/public/previewbanner.png" />
        <meta property="og:image:width" content="1082" />
        <meta property="og:image:height" content="976" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Platinum Home Services | Best Construction Company in Canada" />
        <meta name="twitter:description" content="Trusted construction company in Canada offering residential and commercial construction, renovation, and project management services." />
        <meta name="twitter:image" content="https://platinumhomeservices.ca/public/previewbanner.png" />
      </Head>

        <main>
           <Hero />
      <Stats />
      <ServicesSlider/>
      <Services />
      <VideoShowcase/>
      <TestimonialSwiper />
      {/* <Sustainability /> */}
      <CTA />
        </main>
    
    </>
  );
}
