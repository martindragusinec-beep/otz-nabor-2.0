import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

const springScroll = { type: 'spring' as const, stiffness: 118, damping: 24, mass: 0.85 };
const springChild = { type: 'spring' as const, stiffness: 128, damping: 22, mass: 0.8 };

type RevealWhen = 'scroll' | 'mount';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  when?: RevealWhen;
  y?: number;
};

export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, when = 'scroll', y = 22 }) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  if (when === 'mount') {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...springScroll, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px -6% 0px', amount: 0.2 }}
      transition={{ ...springScroll, delay }}
    >
      {children}
    </motion.div>
  );
};

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delayChildren?: number;
};

export const Stagger: React.FC<StaggerProps> = ({ children, className, stagger = 0.07, delayChildren = 0 }) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px -6% 0px', amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

type RevealChildProps = {
  children: React.ReactNode;
  className?: string;
  y?: number;
};

export const RevealChild: React.FC<RevealChildProps> = ({ children, className, y = 18 }) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, scale: 0.96 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: springChild,
        },
      }}
    >
      {children}
    </motion.div>
  );
};
