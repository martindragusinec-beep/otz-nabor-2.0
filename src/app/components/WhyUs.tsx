import React from 'react';
import { Check } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';
import { SectionSpotlight } from './SectionSpotlight';
import { Reveal } from './motion/Reveal';

export const WhyUs = () => {
  const { openModal } = useRecruitmentModal();
  const reduced = useReducedMotion();

  return (
    <section
      id="ekosystem"
      className="relative w-full scroll-mt-20 overflow-hidden bg-[#0c111d] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-12 lg:flex lg:scroll-mt-24 lg:items-center lg:px-16 lg:py-[4.5rem]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_80%_20%,rgba(227,10,26,0.09),transparent_55%)]" aria-hidden />

      <SectionSpotlight index={2} dark>
        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-14 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <Reveal className="flex w-full flex-col items-start lg:max-w-[min(100%,480px)] lg:shrink-0">
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#f87171]/90">Ekosystém DOMIDOMI</p>

          <h2 className="mt-4 text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[38px] lg:text-[44px]">
            Neprodáváš jeden produkt.
            <span className="mt-1 block text-white/85">Prodáváš funkční celek.</span>
          </h2>

          <div className="mt-6 flex max-w-xl flex-col gap-5 text-[15px] leading-relaxed text-white/55 sm:text-[16px]">
            <p>
              U nás neprodáváš jen jeden produkt. Dáme ti do ruky{' '}
              <strong className="font-semibold text-white/95">kompletní řešení pro moderní dům</strong>. Pro klienta už nejsi jen
              další prodejce v řadě, ale partner, co mu vyřeší bezstarostné a smysluplné bydlení.
            </p>

            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a3e635]/12">
                  <Check className="h-3.5 w-3.5 text-[#a3e635]" strokeWidth={2.5} />
                </div>
                <span>Na jedné schůzce otevřeš víc příležitostí.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a3e635]/12">
                  <Check className="h-3.5 w-3.5 text-[#a3e635]" strokeWidth={2.5} />
                </div>
                <span>Klient v tobě vidí partnera, ne jen prodejce.</span>
              </li>
            </ul>
          </div>

          <CTAButton onClick={openModal} className="mt-10">
            Chci vědět víc
          </CTAButton>
        </Reveal>

        <Reveal className="relative flex w-full min-w-0 flex-1 items-center justify-center" delay={0.08}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_62%)]" aria-hidden />
          <motion.div
            className="relative w-full max-w-[560px]"
            animate={reduced ? undefined : { y: [0, -7, 0] }}
            transition={reduced ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <img
              src="/images/why-us-circle.png"
              alt="Kompletní portfolio DOMIDOMI — dům, fotovoltaika, tepelná čerpadla a služby"
              className="relative h-auto w-full object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.35)]"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </Reveal>
        </div>
      </SectionSpotlight>
    </section>
  );
};
