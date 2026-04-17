import React from 'react';
import { RecruitmentForm } from './RecruitmentForm';
import { Reveal } from './motion/Reveal';

export const InlineRecruitmentSection = () => {
  return (
    <section className="border-t border-[#EEF2F6] bg-[#FAFBFC] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1100px]">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">Formulář</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0f172a] sm:text-[36px]">
              Vyplň to rovnou tady
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-[#475569]">
              Stejný postup jako po kliknutí na CTA. Až dokončíš, ozveme se a domluvíme pohovor.
            </p>
          </div>
        </Reveal>

        <div className="mt-10">
          <RecruitmentForm variant="inline" />
        </div>
      </div>
    </section>
  );
};
