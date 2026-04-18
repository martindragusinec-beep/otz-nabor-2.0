import React from 'react';
import { useRecruitmentModal } from './RecruitmentModalContext';

const step1Options = [
  { value: 'side_income', label: 'Chci rozumný start a vedlejší příjem' },
  { value: 'strong_region', label: 'Chci si vybudovat silnou pozici v regionu' },
  { value: 'top_performer', label: 'Chci patřit mezi top obchodníky' },
] as const;

/**
 * Náhled 1. kroku náborového kvízu (viz reference/otz/landing.html) — klik otevře modální formulář.
 */
export const HeroQuizPreview = () => {
  const { openModal } = useRecruitmentModal();

  return (
    <div className="relative w-full max-w-[480px] rounded-[24px] border border-white/10 bg-white p-5 text-[#0f172a] shadow-[0_24px_60px_-24px_rgba(15,23,42,0.35)] sm:p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#E30A1A]" aria-hidden />
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#64748B]">1/4</span>
        </div>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#f1f5f9]">
        <div
          className="h-full origin-left scale-x-[0.08] rounded-full bg-gradient-to-r from-[#E30A1A] via-[#f59e0b] to-[#a3e635]"
          aria-hidden
        />
      </div>
      <h3 className="mt-5 text-[22px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0f172a] sm:text-[26px]">
        Máš na to u nás pracovat?
        <br />
        <span className="text-[#E30A1A]">Ověř si to.</span>
      </h3>
      <p className="mt-1.5 text-[13.5px] text-[#64748B]">O jaký podíl trhu máš zájem?</p>
      <div className="mt-4 grid gap-2">
        {step1Options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => openModal()}
            className="rounded-[14px] border border-[#E8EDF3] bg-[#FAFBFC] px-4 py-3 text-left text-[14px] font-medium leading-snug text-[#0f172a] transition hover:border-[#cbd5e1] hover:bg-white"
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[11px] text-[#64748B]">
        <span>Potrvá to 60 sekund.</span>
        <span className="font-semibold text-[#E30A1A]">→ pokračovat</span>
      </div>
    </div>
  );
};
