import React from 'react';
import { Link } from 'react-router';
import { Logo } from './Logo';
import { useRecruitmentModal } from './RecruitmentModalContext';

const nav = [
  { href: '#benefity', label: 'Benefity' },
  { href: '#ekosystem', label: 'Ekosystém' },
  { href: '#pribehy', label: 'Lidé' },
  { href: '#vydelky', label: 'Výdělky' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const Header = () => {
  const { openModal } = useRecruitmentModal();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8EDF3] bg-[#FAFBFC]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-4 px-4 lg:px-16">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <Logo className="h-9 w-[76px] shrink-0 sm:h-10 sm:w-[86px]" />
          <span className="hidden truncate text-[14px] font-extrabold tracking-tight text-[#0f172a] sm:inline">
            DOMIDOMI <span className="font-semibold text-[#64748B]">· OTZ</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Sekce stránky">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#64748B] transition hover:text-[#0f172a]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={openModal}
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#E30A1A] py-1.5 pl-4 pr-1.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#c90816] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E30A1A]"
        >
          <span className="hidden sm:inline">Chci se přidat</span>
          <span className="sm:hidden">Přidat se</span>
          <span className="grid h-7 w-7 place-items-center rounded-full bg-white/15 transition group-hover:bg-white/25">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
};
