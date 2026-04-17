import React from 'react';
import { Play } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';

const ease = [0.22, 1, 0.36, 1] as const;

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.52, ease } },
};

export const Hero = () => {
  const { openModal } = useRecruitmentModal();
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0c111d] px-4 py-14 text-white sm:px-6 sm:py-16 md:px-12 lg:min-h-[calc(100vh-80px)] lg:px-16 lg:py-12">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c111d]/95 via-[#111928]/88 to-[#0f172a]/80" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 20% 0%, rgba(227,10,26,0.18), transparent 55%)`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 lg:min-h-[calc(100vh-144px)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <motion.div
          className="flex max-w-[640px] flex-col items-start"
          initial={reduced ? 'show' : 'hidden'}
          animate="show"
          variants={heroContainer}
        >
          <motion.h1 variants={heroItem} className="text-[32px] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[44px] lg:text-[52px]">
            Získej svobodu, pasivní příjem a práci, která dává smysl.
          </motion.h1>

          <motion.p variants={heroItem} className="mt-5 max-w-xl text-[15px] leading-[1.65] text-white/75 sm:text-[17px] lg:text-[18px] lg:leading-relaxed">
            Neprodáváme produkt, ale kompletní řešení pro dům. S námi neřešíš cold maily – dodáme ti horké leady.
          </motion.p>

          <motion.div variants={heroItem} className="mt-8 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-4">
            <CTAButton onClick={openModal}>Chci se přidat k týmu</CTAButton>
            <div className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-[13px] leading-snug text-white/90 backdrop-blur-md sm:justify-start sm:py-3.5 sm:text-sm">
              <span className="text-center sm:text-left">
                <span className="font-medium text-white/90">Průměrný výdělek našich OZ:</span>{' '}
                <span className="whitespace-nowrap font-semibold tabular-nums text-[#c8f28d]">80 000 – 150 000 Kč</span>
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, scale: 0.98, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: reduced ? 0 : 0.15, ease }}
          className="relative flex justify-center lg:justify-end"
        >
          <button
            type="button"
            onClick={openModal}
            className="group relative w-full max-w-[480px] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f18] text-left shadow-[0_32px_64px_-12px_rgba(0,0,0,0.55)] outline-none ring-offset-2 ring-offset-[#0c111d] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_40px_80px_-16px_rgba(0,0,0,0.6)] focus-visible:ring-2 focus-visible:ring-[#E30A1A]"
          >
            <div className="relative aspect-[16/11] w-full sm:aspect-[16/10] lg:aspect-[5/4]">
              <img
                src="/images/obchodnik-velka.jpg"
                alt="Obchodně technický zástupce DOMIDOMI — video a fotky připravujeme"
                className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c111d]/90 via-[#0c111d]/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#111928] shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <Play className="ml-0.5 h-6 w-6 fill-current" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">Video & příběhy</div>
                <p className="mt-1.5 text-sm leading-relaxed text-white/80">
                  Placeholder — brzy doplníme reálné záběry z terénu.
                </p>
              </div>
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
