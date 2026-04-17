import React from 'react';
import { Check } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';

const proofPoints = [
  'Hot leady místo cold callů',
  'Pasivní příjem z navázaných služeb',
  'Appka zrychluje nabídku i práci v terénu',
  'Prodáváš celý ekosystém, ne jednu věc',
  'Jsi pánem svého času',
] as const;

export const Benefits = () => {
  const { openModal } = useRecruitmentModal();

  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-12 lg:px-16 lg:py-18">
      <div className="mx-auto max-w-[1180px]">
        <div className="overflow-hidden rounded-[32px] border border-[#E7ECF3] bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FBFD_100%)] shadow-[0_18px_45px_rgba(17,25,40,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-[360px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)]">
            <div className="relative min-h-[320px] overflow-hidden border-b border-[#E7ECF3] lg:min-h-full lg:border-b-0 lg:border-r">
              <img
                src="/images/obchodnik-velka.jpg"
                alt="Obchodník DOMIDOMI při práci"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111928]/55 via-[#111928]/8 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/68">Jak to vypadá v praxi</div>
                <div className="mt-2 text-xl font-bold leading-tight">Důvěra, vztah, výsledek.</div>
                <p className="mt-2 text-sm leading-6 text-white/78">Obchod, který stojí na kvalitní schůzce a smysluplném řešení pro klienta.</p>
              </div>
            </div>

            <div className="p-6 sm:p-7 lg:p-9 xl:p-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E30A1A]/10 bg-[#FFF6F7] px-3 py-1.5 text-sm font-semibold text-[#E30A1A]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E30A1A]" />
                Co ti to dá v praxi
              </div>

              <h2 className="mt-4 max-w-[720px] text-[30px] font-bold leading-[1.05] tracking-tight text-[#111928] sm:text-[38px] lg:text-[46px]">
                Lepší podmínky pro obchod,
                <br className="hidden sm:block" /> který má větší potenciál.
              </h2>

              <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-[#4B5563] sm:text-[16px]">
                Nejde o korporátní fráze. Jde o to, aby ses dostal k lepším schůzkám, měl silnější argumentaci a zázemí,
                které ti pomůže obchodovat s větším klidem i lepším výsledkem.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {proofPoints.map((item) => (
                  <div
                    key={item}
                    className="flex min-h-[76px] items-center gap-3 rounded-[20px] border border-[#ECF1F6] bg-[linear-gradient(180deg,#FFFFFF_0%,#FBFCFE_100%)] px-4 py-3 shadow-[0_4px_14px_rgba(17,25,40,0.025)] transition-colors duration-200 hover:border-[#DCE4EE]"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F3F6FA] text-[#111928]">
                      <Check className="h-4 w-4" strokeWidth={2.6} />
                    </div>
                    <span className="max-w-[24ch] text-[15px] font-semibold leading-6 text-[#111928]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-5 border-t border-[#E9EEF5] pt-6 xl:flex-row xl:items-end xl:justify-between">
                <div>
                  <div className="text-[38px] font-bold leading-none tracking-tight text-[#111928] sm:text-[46px]">80-150k</div>
                  <div className="mt-2 max-w-[260px] text-sm leading-6 text-[#4B5563]">průměrný měsíční výdělek aktivních OZ</div>
                </div>

                <div className="flex flex-col gap-3 xl:items-end">
                  <CTAButton onClick={openModal} className="h-[52px] pl-7">
                    Zjistit, jestli si sedneme
                  </CTAButton>
                  <div className="text-sm leading-5 text-[#4B5563]">Krátký formulář, 2 minuty, bez závazku.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
