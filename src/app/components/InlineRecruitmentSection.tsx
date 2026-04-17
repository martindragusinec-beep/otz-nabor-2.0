import React from 'react';
import { RecruitmentForm } from './RecruitmentForm';

export const InlineRecruitmentSection = () => {
  return (
    <section className="bg-[#F7F9FC] px-4 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E30A1A]/10 bg-white px-3 py-1.5 text-sm font-semibold text-[#E30A1A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E30A1A]" />
            Přímý vstup — bez čekání
          </div>
          <h2 className="mt-4 text-[28px] font-bold leading-[1.08] tracking-tight text-[#111928] sm:text-[38px] lg:text-[44px]">
            Vyplň formulář rovnou tady.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-7 text-[#4B5563] sm:text-[16px]">
            Stejný krok jako po kliknutí na CTA — jen na jednom místě. Až dokončíš, ozveme se a domluvíme pohovor.
          </p>
        </div>

        <div className="mt-10">
          <RecruitmentForm variant="inline" />
        </div>
      </div>
    </section>
  );
};
