import React, { useRef } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { CTAButton } from './CTAButton';
import { HeroQuizPreview } from './HeroQuizPreview';
import { useRecruitmentModal } from './RecruitmentModalContext';

const swooshUnderline =
  "bg-[length:100%_0.5em] bg-[position:0_95%] bg-no-repeat pb-[0.15em] [background-image:url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 18'><path d='M2 12 C 40 2, 120 2, 218 10' stroke='%23a3e635' stroke-width='5' fill='none' stroke-linecap='round'/></svg>\")]";

const heroContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 100, damping: 22, mass: 0.9 },
  },
};

export const Hero = () => {
  const { openModal } = useRecruitmentModal();
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], reduced ? [1, 1] : [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, 48]);
  const overlayY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [0, -36]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0c111d] px-4 pb-20 pt-12 text-white sm:px-6 sm:pb-24 sm:pt-16 md:px-12 lg:min-h-[calc(100vh-64px)] lg:px-16"
    >
      <div className="pointer-events-none absolute -right-10 top-10 z-[1] select-none font-mono text-[clamp(7rem,18vw,18rem)] font-bold leading-none text-white/[0.06] md:top-8">
        01
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute inset-0 h-[118%] w-full" style={{ y: bgY, scale: bgScale }}>
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="h-full w-full object-cover object-center opacity-[0.24]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c111d]/95 via-[#111928]/88 to-[#0f172a]/80" />
        <motion.div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 20% 0%, rgba(227,10,26,0.2), transparent 55%)`,
            y: overlayY,
          }}
        />
      </div>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto max-w-[1360px]"
      >
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="flex max-w-[640px] flex-col items-start lg:col-span-7"
            initial={reduced ? 'show' : 'hidden'}
            animate="show"
            variants={heroContainer}
          >
            <motion.div
              variants={heroItem}
              className="mb-6 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[12px] font-medium text-white/90 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#a3e635]" aria-hidden />
                Nábor otevřen · ČR
              </span>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[12px] font-medium text-white/75 backdrop-blur-sm">
                Tým 100+ lidí
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="text-[34px] font-extrabold leading-[1.04] tracking-[-0.025em] text-white sm:text-[42px] lg:text-[54px]"
            >
              Získej svobodu, pasivní příjem
              <span className="mt-1 block">
                <span className={`inline-block ${swooshUnderline}`}>a práci,</span>
                <br />
                která dává <span className="text-[#c8f28d]">smysl</span>.
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mt-5 max-w-[520px] text-[15px] leading-[1.65] text-white/80 md:text-base"
            >
              Neprodáváme produkt, ale <span className="font-semibold text-white">kompletní řešení pro dům</span>. S námi
              neřešíš cold maily — dodáme ti <span className="font-semibold text-white">horké leady</span>.
            </motion.p>

            <motion.div
              variants={heroItem}
              className="mt-6 inline-flex max-w-full flex-wrap items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.08] py-2 pl-2 pr-5 backdrop-blur-md"
            >
              <div className="flex -space-x-2">
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-white/30 to-white/10 ring-2 ring-[#0c111d]" />
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-white/40 to-white/15 ring-2 ring-[#0c111d]" />
                <span className="h-8 w-8 rounded-full bg-gradient-to-br from-[#c8f28d]/50 to-[#84cc16]/30 ring-2 ring-[#0c111d]" />
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#a3e635] text-[10px] font-bold text-[#0c111d] ring-2 ring-[#0c111d]">
                  +100
                </span>
              </div>
              <div className="text-[13px] leading-tight">
                <div className="text-white/60">Průměrný výdělek OZ</div>
                <div className="font-semibold tabular-nums">
                  <span className="text-[#c8f28d]">80 000</span>
                  <span className="text-white/70"> – </span>
                  <span className="text-[#c8f28d]">150 000 Kč</span>
                  <span className="text-white/55"> měsíčně</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={heroItem} className="mt-7 flex flex-wrap items-center gap-4">
              <CTAButton onClick={openModal}>Chci se přidat k týmu</CTAButton>
              <a
                href="#vydelky"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
              >
                Podívat se na čísla
                <ChevronDown className="h-4 w-4 opacity-80" aria-hidden />
              </a>
            </motion.div>

            <motion.div
              variants={heroItem}
              className="mt-8 flex flex-col gap-2 text-[11px] text-white/60 sm:flex-row sm:flex-wrap sm:gap-x-5"
            >
              {['horké leady, žádný cold call', 'provize bez stropu', 'vlastní čas, vlastní pravidla'].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check className="h-3 w-3 shrink-0 text-[#a3e635]" aria-hidden />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90, damping: 20, delay: reduced ? 0 : 0.12 }}
            className="relative flex justify-center lg:col-span-5 lg:justify-end"
          >
            <HeroQuizPreview />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
