import React from 'react';
import { Check } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';

export const WhyUs = () => {
  const { openModal } = useRecruitmentModal();

  return (
    <section className="relative w-full bg-[#111928] text-white overflow-x-hidden py-16 sm:py-20 lg:py-[60px] px-4 sm:px-6 md:px-12 lg:px-8 flex items-center">
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-20 2xl:gap-24">
        <div className="flex flex-col items-start w-full lg:max-w-[min(100%,520px)] shrink-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
            Ekosystém DOMIDOMI
          </div>

          <h2 className="text-[34px] sm:text-[42px] lg:text-[52px] font-bold leading-[1.06] tracking-tight text-white mb-6">
            Neprodáváš jeden
            <br className="hidden sm:block" />
            produkt. Prodáváš
            <br className="hidden sm:block" />
            funkční celek.
          </h2>

          <div className="flex flex-col gap-6 text-base sm:text-lg leading-[1.7] text-gray-400 max-w-xl">
            <p>
              U nás neprodáváš jen jeden produkt. Dáme ti do ruky{' '}
              <strong className="text-white font-medium">kompletní řešení pro moderní dům</strong>. Pro klienta už nejsi jen další prodejce v řadě, ale partner, co mu vyřeší bezstarostné a smysluplné bydlení.
            </p>

            <ul className="flex flex-col gap-4 mt-2">
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-[#BDFF84]/10 p-1 rounded-full shrink-0">
                  <Check className="w-4 h-4 text-[#BDFF84]" strokeWidth={3} />
                </div>
                <span className="text-gray-300">Na jedné schůzce otevřeš víc příležitostí.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 bg-[#BDFF84]/10 p-1 rounded-full shrink-0">
                  <Check className="w-4 h-4 text-[#BDFF84]" strokeWidth={3} />
                </div>
                <span className="text-gray-300">Klient v tobě vidí partnera, ne jen prodejce.</span>
              </li>
            </ul>
          </div>

          <CTAButton onClick={openModal} className="mt-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            Chci vědět víc
          </CTAButton>
        </div>

        <div className="flex w-full min-w-0 justify-center items-center lg:flex-1 lg:justify-center">
          <img
            src="/images/why-us-circle.png"
            alt="Kompletní portfolio DOMIDOMI — dům, fotovoltaika, tepelná čerpadla a služby"
            className="h-auto w-full max-w-[520px] object-contain lg:max-w-[min(100%,680px)] xl:max-w-[min(100%,760px)]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
