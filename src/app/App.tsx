import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { LeadBanner } from "./components/LeadBanner";
import { Requirements } from "./components/Requirements";
import { Portfolio } from "./components/Portfolio";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden flex flex-col relative pb-20 md:pb-0">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <Services />
        <Stats />
        <LeadBanner />
        <Requirements />
        <Portfolio />
        <FAQ />
        {/* Repeating the LeadBanner at the bottom for higher conversion as per typical landing page patterns */}
        <LeadBanner />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}