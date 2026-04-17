import React from 'react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel: string;
  dark?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  eyebrow,
  title,
  description,
  buttonLabel,
  dark = false,
}) => {
  const { openModal } = useRecruitmentModal();

  return (
    <section className={`${dark ? 'bg-[#111928]' : 'bg-[#F9FAFB]'} px-4 py-14 sm:px-6 md:px-12 lg:px-16 lg:py-16`}>
      <div
        className={`mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-8 rounded-[32px] border px-6 py-8 sm:px-8 lg:flex-row lg:items-center lg:px-10 ${
          dark
            ? 'border-white/10 bg-white/5 text-white'
            : 'border-[#E5E7EB] bg-white text-[#111928]'
        }`}
      >
        <div className="max-w-3xl">
          {eyebrow ? (
            <div className={`mb-3 text-sm font-semibold ${dark ? 'text-red-300' : 'text-[#E30A1A]'}`}>{eyebrow}</div>
          ) : null}
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
          <p className={`mt-3 text-base leading-7 ${dark ? 'text-gray-300' : 'text-[#4B5563]'}`}>{description}</p>
        </div>

        <CTAButton onClick={openModal} className="shrink-0">
          {buttonLabel}
        </CTAButton>
      </div>
    </section>
  );
};
