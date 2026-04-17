import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';
import { Reveal } from './motion/Reveal';

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
  const reduced = useReducedMotion();

  return (
    <section className={`${dark ? 'bg-[#0c111d]' : 'bg-[#FAFBFC]'} border-t border-[#EEF2F6] px-4 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-16`}>
      <Reveal>
        <motion.div
          whileHover={reduced ? undefined : { y: -2 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className={`mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 rounded-3xl border px-6 py-8 sm:px-10 sm:py-10 lg:flex-row lg:items-center ${
            dark
              ? 'border-white/10 bg-white/[0.04] text-white shadow-[0_24px_64px_-28px_rgba(0,0,0,0.55)]'
              : 'border-[#E8EDF3] bg-white text-[#0f172a] shadow-[0_16px_48px_-28px_rgba(15,23,42,0.08)]'
          }`}
        >
          <div className="max-w-2xl">
            {eyebrow ? (
              <div className={`mb-2 text-[13px] font-semibold uppercase tracking-[0.16em] ${dark ? 'text-red-300/90' : 'text-[#E30A1A]'}`}>
                {eyebrow}
              </div>
            ) : null}
            <h2 className="text-[26px] font-semibold leading-[1.15] tracking-[-0.02em] sm:text-[32px] lg:text-[34px]">{title}</h2>
            <p className={`mt-3 text-[15px] leading-relaxed sm:text-[16px] ${dark ? 'text-white/65' : 'text-[#475569]'}`}>{description}</p>
          </div>

          <CTAButton onClick={openModal} className="shrink-0">
            {buttonLabel}
          </CTAButton>
        </motion.div>
      </Reveal>
    </section>
  );
};
