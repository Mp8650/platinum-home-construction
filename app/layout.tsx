import ScrollToTop from "@/src/components/layout/ScrollToTop";
import TopBar from "@/src/components/layout/TopBar";
import Navbar from "@/src/components/layout/Navbar";
import MovingTagline from "@/src/components/layout/MovingTagline";
import Footer from "@/src/components/layout/Footer";
import FloatingButton from '@/src/components/layout/FlotingButton';
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SeoHelper from '../src/components/layout/SeoHelper';

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  weight: ["600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Construction",
  description: "Building Canada’s Next Generation of Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${playfairDisplay.variable} antialiased`}
      >
        <SeoHelper/>
        <ScrollToTop/>
        <TopBar/>
        <Navbar/>
        <MovingTagline/>
        {children}
        <FloatingButton/>
        <Footer/>
      </body>
    </html>
  );
}
