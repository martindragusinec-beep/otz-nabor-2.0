import React from 'react';

type SectionTransitionProps = {
  /** světlý = jemná linka na světlém pozadí, tmavý = na tmavé */
  tone?: 'light' | 'dark';
};

/** Oddělovač sekcí — čistá gradientová linka, bez vizuálního šumu. */
export const SectionTransition: React.FC<SectionTransitionProps> = ({ tone = 'light' }) => {
  return (
    <div
      className={`relative h-px w-full overflow-hidden ${
        tone === 'light' ? 'bg-[#EEF2F6]' : 'bg-white/10'
      }`}
      aria-hidden
    >
      <div
        className={`absolute inset-y-0 left-1/2 h-full w-[min(100%,72rem)] -translate-x-1/2 bg-gradient-to-r ${
          tone === 'light'
            ? 'from-transparent via-[#E30A1A]/25 to-transparent'
            : 'from-transparent via-white/20 to-transparent'
        }`}
      />
    </div>
  );
};
