import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';

type SectionSpotlightProps = {
  children: React.ReactNode;
  className?: string;
  /** index sekce pro velké číslo v pozadí (volitelné) */
  index?: number;
  /** tmavá sekce = světlé číslo */
  dark?: boolean;
};

/**
 * Wrapper sekcí: jemný scroll-linked posun „spotlightu“ + volitelné velké číslo (editorial).
 */
export const SectionSpotlight: React.FC<SectionSpotlightProps> = ({ children, className = '', index, dark = false }) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [0.35, 0.55, 0.45, 0.3]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {!reduced && (
        <motion.div
          className={`pointer-events-none absolute -right-24 top-1/4 h-[420px] w-[420px] rounded-full blur-[120px] ${
            dark ? 'bg-[#E30A1A]/15' : 'bg-[#E30A1A]/[0.07]'
          }`}
          style={{ y: orbY, opacity: orbOpacity }}
          aria-hidden
        />
      )}
      {index != null ? (
        <span
          className={`pointer-events-none absolute left-[max(0px,calc(50%-38rem))] top-8 select-none font-mono text-[clamp(4rem,14vw,9rem)] font-bold leading-none ${
            dark ? 'text-white/[0.04]' : 'text-[#0f172a]/[0.04]'
          }`}
          aria-hidden
        >
          {String(index).padStart(2, '0')}
        </span>
      ) : null}
      <div className="relative z-[1]">{children}</div>
    </div>
  );
};
