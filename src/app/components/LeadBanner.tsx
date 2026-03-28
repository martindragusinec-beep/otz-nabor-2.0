import React, { useState } from 'react';
import { Logo } from './Logo';

export const LeadBanner = () => {
  const [step, setStep] = useState(1);
  const [selectedExp, setSelectedExp] = useState('1-2');

  return (
    <section className="bg-[#f0f4f8] py-12 lg:py-24 px-4 sm:px-6 md:px-12 overflow-hidden flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto bg-[#111928] rounded-[16px] relative flex flex-col md:flex-row overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)]">
        
        {/* Background red polygon */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="50,0 100,0 100,100 35,100" fill="#E30A1A" />
          </svg>
        </div>

        {/* Left Side */}
        <div className="md:w-[45%] p-10 md:p-14 flex flex-col justify-between relative z-10 min-h-[400px]">
          <h2 className="text-[38px] md:text-[46px] font-semibold text-white leading-[1.1] tracking-[-0.02em]">
            Začni vydělávat <br/> už dnes
          </h2>
          
          <div className="mt-auto pt-20">
            <Logo className="w-[160px] h-[75px]" fill="#ffffff" arrowFill="#E30A1A" />
          </div>
          
          {/* Hand-drawn Arrow SVG */}
          <div className="absolute right-[-15%] top-[45%] w-[120px] h-[120px] hidden md:block z-20 text-[#FBBF24]">
             <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[120px] h-[120px] overflow-visible transform rotate-12 -translate-y-4 translate-x-4">
               <path d="M10,20 Q60,10 90,60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
               <path d="M75,45 L92,62 L75,75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-[55%] p-6 md:p-12 lg:p-16 flex items-center justify-end md:justify-center lg:justify-end relative z-10">
          <div className="bg-white rounded-[8px] shadow-xl w-full max-w-[480px] p-6 flex flex-col">
            
            {/* Progress Bar */}
            <div className="flex items-center gap-4 mb-5 px-1">
              <div className="flex-1 h-3 bg-[#e5e7eb] rounded-full overflow-hidden flex">
                <div className="h-full bg-[#5BA318] rounded-full w-[14%]" />
              </div>
              <span className="text-[12px] font-medium text-[#111928] min-w-[32px]">14 %</span>
            </div>

            {/* Inner Green Form Box */}
            <div className="border-[2px] border-[#5BA318] rounded-[8px] p-6 md:p-8 relative bg-white">
              <h3 className="text-[17px] font-medium text-center mb-6 text-[#111928]">
                Jak dlouho už děláš v obchodu?
              </h3>
              
              <div className="space-y-3 mb-8">
                {[
                  { id: 'less-1', label: 'Méně než rok' },
                  { id: '1-2', label: '1 - 2 roky' },
                  { id: 'more-3', label: 'Více než 3 roky' }
                ].map((opt) => {
                  const isSelected = selectedExp === opt.id;
                  return (
                    <label 
                      key={opt.id}
                      className={`flex items-center p-3.5 rounded-[6px] cursor-pointer transition-colors border ${
                        isSelected 
                          ? 'border-[#5BA318] bg-white' 
                          : 'border-gray-200 bg-white hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedExp(opt.id)}
                    >
                      <input type="radio" name="experience" className="sr-only" checked={isSelected} readOnly />
                      
                      <div className={`w-[20px] h-[20px] rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-colors ${
                        isSelected ? 'border-2 border-[#5BA318]' : 'border border-gray-300'
                      }`}>
                        {isSelected && (
                          <div className="w-[10px] h-[10px] bg-[#5BA318] rounded-full" />
                        )}
                      </div>
                      
                      <span className={`text-[15px] ${
                        isSelected ? 'text-[#111928] font-medium' : 'text-gray-600'
                      }`}>
                        {opt.label}
                      </span>
                    </label>
                  );
                })}
              </div>

              <p className="text-center text-[12px] text-gray-500 font-medium">
                Výběrem automaticky pokračujete na další krok
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};