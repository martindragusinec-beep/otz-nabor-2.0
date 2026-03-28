import React from 'react';
import { CTAButton } from './CTAButton';
import { Check } from 'lucide-react';

import imgMainHouse from "figma:asset/8a2e82c42160e18f66b88e6947812076ddee761f.png";
import imgEnergie from "figma:asset/8982a72ee9368e1f231f052f4587165eef06e69e.png";
import imgHeatPump from "figma:asset/0747df5514ba66674e8463ff41958b516276a079.png";
import imgStavby from "figma:asset/27b16e5265441a650fa28197c1c5a6d5ae9230d6.png";
import imgServis from "figma:asset/e0f9f2292aab210d43ef2c9ad39b9dea8d92a4e6.png";
import imgFinance from "figma:asset/4cbca1269f8a6ffa1a1a989e59d61ae3534d7735.png";
import imgSolar from "figma:asset/8003da1f06d50e25093f9af10f203233724d337c.png";

const features = [
  { id: 'heat-pump', label: 'Tepelná čerpadla', img: imgHeatPump },
  { id: 'solar', label: 'Fotovoltaika', img: imgSolar },
  { id: 'finance', label: 'Finance', img: imgFinance },
  { id: 'energie', label: 'Energie', img: imgEnergie },
  { id: 'stavby', label: 'Stavby', img: imgStavby },
  { id: 'servis', label: 'Servis', img: imgServis },
];

export const WhyUs = () => {
  const scrollToForm = () => {
    const leadBanner = document.getElementById('lead-banner-form');
    if (leadBanner) {
      leadBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative w-full bg-[#111928] text-white overflow-hidden py-20 sm:py-28 px-4 sm:px-6 md:px-12 lg:px-8 flex items-center">
      
      {/* Subtle ambient glow behind the layout */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#76A9FA]/5 blur-[120px] rounded-full pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Column - Typography & Content */}
        <div className="flex flex-col items-start w-full lg:w-[45%] z-20">
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div>
            Kompletní portfolio
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Proč prodávat <br className="hidden sm:block" />v DOMIDOMI?
          </h2>

          

          <div className="flex flex-col gap-6 text-base sm:text-lg leading-[1.7] text-gray-400">
            <p>
              U nás neprodáváš jen jeden produkt. Dáme ti do ruky <strong className="text-white font-medium">kompletní řešení pro moderní dům</strong>. Pro klienta už nejsi jen další prodejce v řadě, ale partner, co mu vyřeší bezstarostné a smysluplné bydlení.
            </p>
            
            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-[#BDFF84]/10 p-1 rounded-full shrink-0">
                  <Check className="w-4 h-4 text-[#BDFF84]" strokeWidth={3} />
                </div>
                <span className="text-gray-300">Jednou návštěvou uzavřeš celou zakázku.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-[#BDFF84]/10 p-1 rounded-full shrink-0">
                  <Check className="w-4 h-4 text-[#BDFF84]" strokeWidth={3} />
                </div>
                <span className="text-gray-300">Odpadá nutnost skládat řešení z 5 různých schůzek u konkurence.</span>
              </li>
            </ul>
          </div>

          <CTAButton onClick={scrollToForm} className="mt-10">
            Chci obchod, který dává smysl
          </CTAButton>
        </div>

        {/* Right Column - Premium "Feature Layout" */}
        <div className="w-full lg:w-[55%] z-20 relative">
          
          {/* Main Container with 1px hairline border styling typical for premium UI */}
          <div className="w-full rounded-[24px] sm:rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-[#111928] flex flex-col">
            
            {/* Top Image Section */}
            <div className="relative h-[260px] sm:h-[360px] w-full shrink-0 bg-[#1a2332]">
              <img 
                src={imgMainHouse} 
                alt="Rodinný dům s moderními technologiemi" 
                className="w-full h-full object-cover opacity-90"
              />
              {/* Refined gradient overlay to blend perfectly into the grid below */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111928] via-[#111928]/40 to-transparent" />
              
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 tracking-tight">Vše pod jednou střechou</h3>
                <p className="text-gray-400 text-sm sm:text-base font-medium">Jeden kontakt, kompletní ekosystém.</p>
              </div>
            </div>

            {/* Bottom Grid Section - Using gap strategy for perfect 1px borders */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-[1px] bg-white/10 relative">
              
              {/* Top border to separate image from grid */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>

              {features.map((feature) => (
                <div 
                  key={feature.id} 
                  className="bg-[#111928] hover:bg-[#162032] p-6 sm:p-8 flex flex-col items-center justify-center gap-4 transition-colors duration-300 group cursor-default"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 blur-xl rounded-full transition-opacity duration-300"></div>
                    <img 
                      src={feature.img} 
                      alt={feature.label} 
                      className="w-10 h-10 sm:w-12 sm:h-12 object-contain relative z-10 group-hover:scale-110 transition-transform duration-500 ease-out" 
                    />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-gray-400 group-hover:text-white transition-colors duration-300">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};