import React from 'react';
import { Coins, ShieldCheck } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';

export const Hero = () => {
  const { openModal } = useRecruitmentModal();

  return (
    <section className="relative overflow-hidden bg-[#111928] px-4 py-12 text-white sm:px-6 sm:py-14 md:px-12 lg:min-h-[calc(100vh-80px)] lg:px-16 lg:py-8 xl:py-10">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt="Obchodní zástupce DOMIDOMI v terénu"
          className="h-full w-full object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(227,10,26,0.20),transparent_30%),linear-gradient(110deg,rgba(17,25,40,0.96)_0%,rgba(17,25,40,0.88)_52%,rgba(17,25,40,0.72)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:min-h-[calc(100vh-144px)] lg:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.9fr)] lg:gap-10">
        <div className="flex max-w-3xl flex-col items-start self-center lg:justify-center">
          <div className="inline-flex flex-wrap items-center gap-3 rounded-[24px] border border-[#E30A1A]/20 bg-[#E30A1A]/10 px-4 py-3 text-white shadow-[0_20px_50px_rgba(227,10,26,0.12)] backdrop-blur sm:px-5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E30A1A] text-white">
              <Coins className="h-5 w-5" strokeWidth={2} />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">Výdělek obchodníků</span>
              <span className="text-lg font-bold leading-tight sm:text-2xl">80 000 - 150 000 Kč měsíčně</span>
            </div>
          </div>

          <h1 className="mt-6 max-w-[780px] text-[38px] font-bold leading-[1.04] tracking-tight text-white sm:text-[50px] lg:text-[56px] xl:text-[60px]">
            Získej svobodu,
            <br className="hidden sm:block" /> pasivní příjem a práci,
            <br className="hidden lg:block" /> která dává smysl.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg lg:text-[19px]">
            Neprodáváme produkt, ale kompletní řešení pro dům. S námi neřešíš cold maily ani nekonečný lov kontaktů.
            Dostaneš horké leady, funkční systém a zázemí týmu, o které se můžeš opřít.
          </p>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton onClick={openModal}>Chci se přidat k týmu</CTAButton>
            <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur">
              <ShieldCheck className="h-5 w-5 text-[#BDFF84]" />
              <span>Hot leady, týmové zázemí a obchod bez cold callů</span>
            </div>
          </div>
        </div>

        <div className="relative self-center lg:flex lg:justify-center">
          <div className="absolute -inset-6 rounded-[40px] bg-[#E30A1A]/10 blur-3xl" aria-hidden="true" />
          <div className="relative w-full max-w-[460px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-sm xl:max-w-[500px]">
            <div className="relative aspect-[4/5] sm:aspect-[16/11] lg:aspect-[0.88] xl:aspect-[0.9]">
              <img
                src="/images/obchodnik-velka.jpg"
                alt="Obchodník DOMIDOMI při práci s klientem"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
