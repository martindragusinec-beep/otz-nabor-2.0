import React from 'react';
import { Reveal, RevealChild, Stagger } from './motion/Reveal';

const usps = [
  {
    title: 'Žádné Cold Leady',
    body: 'Jen ověřené leady a ryzí obchod.',
  },
  {
    title: 'Pasivní příjem',
    body: 'Provize z energií, které ti chodí každý měsíc. Žádný strop.',
  },
  {
    title: 'Špičková Technologie',
    body: 'Appka, co fotkou faktury spočítá úsporu.',
  },
  {
    title: 'Ekosystém',
    body: 'Neprodáváš jen jedno řešení, ale celý ekosystém.',
  },
  {
    title: 'Svoboda',
    body: 'Jsi pánem svého času (Fitko dopoledne? Žádný problém).',
  },
] as const;

export const Benefits = () => {
  return (
    <section className="border-t border-[#EEF2F6] bg-[#FAFBFC] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">Proč DOMIDOMI OTZ</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0f172a] sm:text-[36px] lg:text-[40px]">
              Pět věcí, které ti změní tempo i výsledek.
            </h2>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06} delayChildren={0.08}>
          {usps.map((item, index) => (
            <RevealChild key={item.title}>
              <article className="group flex h-full flex-col rounded-2xl border border-[#E8EDF3] bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#dce3ee] hover:shadow-[0_12px_40px_-18px_rgba(15,23,42,0.12)]">
                <span className="font-mono text-[11px] font-medium tabular-nums text-[#94a3b8]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-[17px] font-semibold tracking-[-0.01em] text-[#0f172a]">{item.title}</h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#475569]">{item.body}</p>
              </article>
            </RevealChild>
          ))}
        </Stagger>
      </div>
    </section>
  );
};
