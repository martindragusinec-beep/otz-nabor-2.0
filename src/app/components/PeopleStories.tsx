import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SectionSpotlight } from './SectionSpotlight';
import { Reveal, RevealChild, Stagger } from './motion/Reveal';

const colleagues = [
  {
    name: 'Karel',
    image: '/images/karel-vystrcil.png',
    imageClassName: 'object-cover object-center',
    quote: 'Změnilo mi to režim dne — víc času na rodinu a pořád cítím, že rostu v číslech.',
  },
  {
    name: 'Tomáš',
    image: '/images/unsplash-person-1.jpg',
    imageClassName: 'object-cover object-center',
    quote: 'Nejvíc mě posunulo, že už nehoním kontakty naslepo. Můžu se soustředit na klienta a řešení pro celý dům.',
  },
  {
    name: 'Martin',
    image: '/images/unsplash-person-2.jpg',
    imageClassName: 'object-cover object-center',
    quote: 'Z korporátu jsem šel kvůli svobodě — tady mám ji i férový systém, který drží slovo.',
  },
] as const;

export const PeopleStories = () => {
  const reduced = useReducedMotion();

  return (
    <section
      id="pribehy"
      className="scroll-mt-20 border-t border-[#EEF2F6] bg-[#FAFBFC] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:scroll-mt-24 lg:px-16"
    >
      <SectionSpotlight index={3}>
        <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">Příběhy našich lidí</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0f172a] sm:text-[36px] lg:text-[40px]">
              Tváře z terénu
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-[#475569]">
              Krátké citáty o tom, jak jim práce u nás změnila život.
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6" stagger={0.08} delayChildren={0.08}>
          {colleagues.map((person) => (
            <RevealChild key={person.name}>
              <motion.article
                whileHover={reduced ? undefined : { y: -4 }}
                transition={{ type: 'spring', stiffness: 420, damping: 28 }}
                className="group flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111827] shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)]"
              >
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src={person.image}
                    alt={person.name}
                    className={`h-full min-h-[280px] w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] ${person.imageClassName}`}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/25 to-transparent" />
                </div>
                <div className="relative z-[1] -mt-14 flex flex-1 flex-col justify-end px-6 pb-7 pt-10 sm:px-7">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55">Obchodně technický zástupce</div>
                  <h3 className="mt-2 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[26px]">{person.name}</h3>
                  <p className="mt-3 text-[14px] font-medium leading-relaxed text-white/85">„{person.quote}“</p>
                </div>
              </motion.article>
            </RevealChild>
          ))}
        </Stagger>
        </div>
      </SectionSpotlight>
    </section>
  );
};
