import ScrollToTop from "@/src/components/layout/ScrollToTop";
import TopBar from "@/src/components/layout/TopBar";
import Navbar from "@/src/components/layout/Navbar";
import MovingTagline from "@/src/components/layout/MovingTagline";
import Footer from "@/src/components/layout/Footer";
import FloatingButton from '@/src/components/layout/FlotingButton';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SeoHelper from '../src/components/layout/SeoHelper';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
