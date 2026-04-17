import React from 'react';
import { Play } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';

export const Hero = () => {
  const { openModal } = useRecruitmentModal();

  return (
    <section className="relative overflow-hidden bg-[#111928] px-4 py-12 text-white sm:px-6 sm:py-14 md:px-12 lg:min-h-[calc(100vh-80px)] lg:px-16 lg:py-10 xl:py-12">
      <div className="absolute inset-0">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(227,10,26,0.22),transparent_42%),linear-gradient(110deg,rgba(17,25,40,0.97)_0%,rgba(17,25,40,0.9)_48%,rgba(17,25,40,0.78)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-10 lg:min-h-[calc(100vh-144px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <div className="flex max-w-3xl flex-col items-start self-center lg:justify-center">
          <h1 className="max-w-[820px] text-[34px] font-bold leading-[1.05] tracking-tight text-white sm:text-[46px] lg:text-[52px] xl:text-[56px]">
            Získej svobodu, pasivní příjem a práci, která dává smysl.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 sm:text-lg lg:text-[19px]">
            Neprodáváme produkt, ale kompletní řešení pro dům. S námi neřešíš cold maily – dodáme ti horké leady.
          </p>

          <div className="mt-7 flex w-full max-w-xl flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <CTAButton onClick={openModal}>Chci se přidat k týmu</CTAButton>
            <div className="rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm leading-6 text-white/85 backdrop-blur-md">
              <span className="font-semibold text-white">Průměrný výdělek našich OZ:</span>{' '}
              <span className="whitespace-nowrap font-bold text-[#BDFF84]">80 000 – 150 000 Kč</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-10 rounded-[48px] bg-[#E30A1A]/15 blur-3xl" aria-hidden />
          <button
            type="button"
            onClick={openModal}
            className="group relative w-full max-w-[520px] overflow-hidden rounded-[32px] border border-white/12 bg-black/20 text-left shadow-[0_40px_90px_rgba(0,0,0,0.45)] outline-none ring-offset-2 ring-offset-[#111928] transition-transform duration-500 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#E30A1A]"
          >
            <div className="relative aspect-[16/11] w-full sm:aspect-[16/10] lg:aspect-[5/4]">
              <img
                src="/images/obchodnik-velka.jpg"
                alt="Tým a práce obchodně-technického zástupce DOMIDOMI — video a fotky připravujeme"
                className="h-full w-full object-cover object-top opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111928]/85 via-[#111928]/15 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-[#111928] shadow-[0_18px_40px_rgba(0,0,0,0.35)] transition-transform duration-500 group-hover:scale-105">
                  <Play className="ml-1 h-7 w-7 fill-current" />
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">Video & příběhy — brzy</div>
                <p className="mt-2 max-w-md text-sm font-medium leading-6 text-white/90">
                  Natáčíme a fotíme reálné lidi z terénu. Zatím držíme placeholdery, ale vibe bude stejný jako u referencí ve
                  stylu Schlieger.
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
