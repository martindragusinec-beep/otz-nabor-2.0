import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { WhyUs } from "./WhyUs";
import { Services } from "./Services";
import { Stats } from "./Stats";
import { LeadBanner } from "./LeadBanner";
import { Requirements } from "./Requirements";
import { Portfolio } from "./Portfolio";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { StickyCTA } from "./StickyCTA";

export const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden flex flex-col relative pb-20 md:pb-0">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyUs />
        <Services />
        <Stats />
        <div id="lead-banner-form">
          <LeadBanner />
        </div>
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
};
