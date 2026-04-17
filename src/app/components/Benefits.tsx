import React from 'react';
import { Sparkles } from 'lucide-react';

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
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-16 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(227,10,26,0.06),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(91,163,24,0.08),transparent_40%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E30A1A]/15 bg-[#FFF6F7] px-3 py-1.5 text-sm font-semibold text-[#E30A1A]">
            <Sparkles className="h-4 w-4" strokeWidth={2.2} />
            Proč DOMIDOMI OTZ
          </div>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.06] tracking-tight text-[#111928] sm:text-[40px] lg:text-[46px]">
            Pět věcí, které ti změní tempo i výsledek.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {usps.map((item, index) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[22px] border border-[#E8EDF4] bg-[linear-gradient(180deg,#FFFFFF_0%,#F9FBFD_100%)] p-6 shadow-[0_10px_30px_rgba(17,25,40,0.05)] transition-shadow duration-300 hover:shadow-[0_18px_44px_rgba(17,25,40,0.08)]"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#E30A1A]/[0.06] blur-2xl transition-transform duration-500 group-hover:scale-110" aria-hidden />
              <h3 className="text-lg font-bold text-[#111928] sm:text-xl">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-7 text-[#4B5563]">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
