import React from 'react';
import { Check } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';

export const WhyUs = () => {
  const { openModal } = useRecruitmentModal();

  return (
    <section className="relative w-full overflow-hidden bg-[#111928] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-12 lg:flex lg:items-center lg:px-8 lg:py-[72px]">
      <style>{`
        @keyframes domidomi-float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.01); }
        }
        @keyframes domidomi-ring {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>

      <div className="pointer-events-none absolute -left-40 top-1/4 h-[320px] w-[320px] rounded-full bg-[#E30A1A]/18 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[300px] w-[300px] rounded-full bg-[#5BA318]/10 blur-[90px]" aria-hidden />

      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-20">
        <div className="flex w-full flex-col items-start lg:max-w-[min(100%,520px)] lg:shrink-0">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3 py-1.5 text-sm font-semibold text-red-300">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
            Ekosystém DOMIDOMI
          </div>

          <h2 className="mb-6 text-[34px] font-bold leading-[1.06] tracking-tight text-white sm:text-[42px] lg:text-[52px]">
            Neprodáváš jeden
            <br className="hidden sm:block" />
            produkt. Prodáváš
            <br className="hidden sm:block" />
            funkční celek.
          </h2>

          <div className="flex max-w-xl flex-col gap-6 text-base leading-[1.7] text-gray-400 sm:text-lg">
            <p>
              U nás neprodáváš jen jeden produkt. Dáme ti do ruky{' '}
              <strong className="font-medium text-white">kompletní řešení pro moderní dům</strong>. Pro klienta už nejsi jen
              další prodejce v řadě, ale partner, co mu vyřeší bezstarostné a smysluplné bydlení.
            </p>

            <ul className="mt-2 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="mt-1 shrink-0 rounded-full bg-[#BDFF84]/10 p-1">
                  <Check className="h-4 w-4 text-[#BDFF84]" strokeWidth={3} />
                </div>
                <span className="text-gray-300">Na jedné schůzce otevřeš víc příležitostí.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 shrink-0 rounded-full bg-[#BDFF84]/10 p-1">
                  <Check className="h-4 w-4 text-[#BDFF84]" strokeWidth={3} />
                </div>
                <span className="text-gray-300">Klient v tobě vidí partnera, ne jen prodejce.</span>
              </li>
            </ul>
          </div>

          <CTAButton onClick={openModal} className="mt-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            Chci vědět víc
          </CTAButton>
        </div>

        <div className="relative flex w-full min-w-0 flex-1 items-center justify-center lg:justify-center">
          <div
            className="pointer-events-none absolute inset-[-18%] rounded-full opacity-35 blur-3xl"
            style={{
              background: 'conic-gradient(from 90deg, rgba(227,10,26,0.35), rgba(91,163,24,0.25), rgba(227,10,26,0.35))',
              animation: 'domidomi-ring 28s linear infinite',
            }}
            aria-hidden
          />
          <div className="relative w-full max-w-[520px] lg:max-w-[min(100%,680px)] xl:max-w-[min(100%,760px)]">
            <div
              className="relative will-change-transform"
              style={{ animation: 'domidomi-float-slow 9s ease-in-out infinite' }}
            >
              <div className="absolute -inset-3 rounded-[40px] bg-gradient-to-br from-white/12 via-transparent to-[#5BA318]/20 opacity-70 blur-xl" aria-hidden />
              <img
                src="/images/why-us-circle.png"
                alt="Kompletní portfolio DOMIDOMI — dům, fotovoltaika, tepelná čerpadla a služby"
                className="relative h-auto w-full object-contain drop-shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
