import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

const ease = [0.22, 1, 0.36, 1] as const;

type RevealWhen = 'scroll' | 'mount';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** scroll = při vstupu do viewportu, mount = při načtení (hero) */
  when?: RevealWhen;
  /** Nižší = jemnější pohyb */
  y?: number;
};

export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, when = 'scroll', y = 18 }) => {
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
        transition={{ duration: 0.55, delay, ease }}
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
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
      transition={{ duration: 0.5, delay, ease }}
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

/** Rodič pro staggerované děti (použijte s RevealChild nebo motion přímo). */
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
      viewport={{ once: true, margin: '-12% 0px -8% 0px' }}
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

export const RevealChild: React.FC<RevealChildProps> = ({ children, className, y = 14 }) => {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
      }}
    >
      {children}
    </motion.div>
  );
};
