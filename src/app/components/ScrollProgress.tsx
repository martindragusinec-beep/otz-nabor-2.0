import React from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

/**
 * Tenký indikátor čtení stránky — značka DOMIDOMI (červená → akcent).
 */
export const ScrollProgress: React.FC = () => {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 32,
    restDelta: 0.001,
  });

  if (reduced) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-[#E30A1A] via-[#c41e3a] to-[#84cc16]"
      style={{ scaleX }}
      aria-hidden
    />
  );
};
