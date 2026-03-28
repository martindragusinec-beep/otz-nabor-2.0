import React from 'react';
import { Target, TrendingUp, Award } from 'lucide-react';

export const Requirements = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center mb-16">
          
          {/* Left - Image */}
          <div className="relative w-full max-w-lg mx-auto lg:max-w-none order-2 lg:order-1">
            <div className="relative w-full overflow-hidden rounded-[32px] bg-gray-50">
              <img 
                src="/public/images/obchodnik-velka.png" 
                alt="Obchodník DOMIDOMI" 
                className="w-full object-cover object-top aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5]"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] text-[#111928] leading-[1.15] mb-12 tracking-tight">
              <span className="font-semibold block mb-1">Co hledáme</span> 
              <span className="font-light text-gray-500">v obchodníkovi DOMIDOMI?</span>
            </h2>

            <div className="space-y-8 sm:space-y-10">
              {/* Item 1 */}
              <div className="flex gap-4 sm:gap-6 group">
                <div className="mt-1">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-[#E30A1A] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-900 mb-1.5">Profesionál s hladem po úspěchu</h3>
                  <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed">
                    Máš ambici být nejlepší v oboru a reprezentovat prémiovou značku na trhu.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-4 sm:gap-6 group">
                <div className="mt-1">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-[#E30A1A] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-900 mb-1.5">Mistr cross-sellu</h3>
                  <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed">
                    Dokážeš vytěžit každou schůzku na maximum a prodat celý ekosystém služeb.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-4 sm:gap-6 group">
                <div className="mt-1">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 text-gray-400 group-hover:text-[#E30A1A] transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-[18px] sm:text-[20px] font-medium text-gray-900 mb-1.5">Vášnivý vyjednavač</h3>
                  <p className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed">
                    Umíš naslouchat a s jistotou dotáhnout obchod do úspěšného konce.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner - Clean, light, without CTA */}
        <div className="bg-[#111928] rounded-[8px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="flex items-center gap-4 sm:gap-5 flex-1">
            <div className="w-12 h-12 bg-[#f9fafb] rounded-lg flex items-center justify-center shrink-0">
              <div className="w-10 h-10 flex flex-col rounded-[1px] overflow-hidden">
                <div className="h-1/3 bg-[#000000]"></div>
                <div className="h-1/3 bg-[#DD0000]"></div>
                <div className="h-1/3 bg-[#FFCE00]"></div>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-[18px] sm:text-[20px] leading-[1.3] mb-1">
                Umíš německy? Dej nám o sobě vědět!
              </p>
              <p className="text-white/90 text-[14px] sm:text-[16px] leading-[1.5]">
                Rozšiřujeme tým i s B2B obchodníky v německy mluvících zemích.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => {
              const leadBanner = document.getElementById('lead-banner-form');
              if (leadBanner) {
                leadBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="group bg-[#e30a1a] hover:bg-[#c90816] flex gap-6 items-center justify-center h-[56px] pl-8 pr-1.5 py-[18px] rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shrink-0"
          >
            <span className="font-bold text-[16px] leading-[1.5] text-white whitespace-nowrap">
              Chci dělat B2B v Německu
            </span>
            
            {/* White Circle with Arrow Icon */}
            <div className="bg-white flex items-center justify-center rounded-full shrink-0 size-[42px] transition-transform duration-300 group-hover:scale-110">
              <svg 
                className="size-[24px] transition-transform duration-300 group-hover:translate-x-0.5" 
                fill="none" 
                viewBox="0 0 24 24"
              >
                <path 
                  d="M19 12L5 12" 
                  stroke="#111928" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2"
                />
                <path 
                  d="M12 19L19 12L12 5" 
                  stroke="#111928" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
