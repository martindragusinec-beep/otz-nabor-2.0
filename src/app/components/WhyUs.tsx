import React from 'react';
import { CTAButton } from './CTAButton';

export const WhyUs = () => {
  const scrollToForm = () => {
    const leadBanner = document.getElementById('lead-banner-form');
    if (leadBanner) {
      leadBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="relative w-full bg-[#111928] text-white overflow-x-hidden py-16 sm:py-20 lg:py-[60px] px-4 sm:px-6 md:px-12 lg:px-8 flex items-center">
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-20 2xl:gap-24">
        <div className="flex flex-col items-start w-full lg:max-w-[min(100%,520px)] shrink-0 gap-4">
          <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
            <span className="underline decoration-[#e30a1a] decoration-2 underline-offset-[6px] sm:underline-offset-[8px]">
              Proč
            </span>{' '}
            prodávat v DOMIDOMI?
          </h2>

          <div className="text-base font-bold leading-[1.5] text-white space-y-4 max-w-xl">
            <p>
              U nás neprodáváš jen jeden produkt. Dáme ti do ruky kompletní řešení pro moderní dům, se kterým pro klienta nejsi jen další prodejce v řadě, ale partner, co mu vyřeší bezstarostné a smysluplné bydlení.
            </p>
            <p>Jednou návštěvou uzavřeš zakázku, kterou jinde skládají z pěti schůzek.</p>
          </div>

          <CTAButton onClick={scrollToForm} className="mt-2 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            Chci obchod, který dává smysl
          </CTAButton>
        </div>

        <div className="flex w-full min-w-0 justify-center font-medium text-white lg:flex-1 lg:justify-end">
          <img
            src="/images/why-us-circle.png"
            alt="Kompletní portfolio DOMIDOMI — dům, fotovoltaika, tepelná čerpadla a služby"
            className="h-auto w-full max-w-[520px] object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
