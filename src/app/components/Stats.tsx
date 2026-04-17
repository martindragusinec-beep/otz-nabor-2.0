import React from 'react';
import { Globe2, MapPin } from 'lucide-react';
import { Reveal } from './motion/Reveal';

type MarqueeTile =
  | {
      type: 'image';
      image: string;
      alt: string;
      size?: 'sm' | 'md' | 'lg';
    }
  | {
      type: 'stat';
      value: string;
      label: string;
      tone?: 'red' | 'dark' | 'light';
      size?: 'sm' | 'md' | 'lg';
    };

const tiles: MarqueeTile[] = [
  {
    type: 'image',
    image: '/images/res1.png',
    alt: 'Realizace rodinného domu DOMIDOMI',
    size: 'md',
  },
  {
    type: 'image',
    image: '/images/res2.png',
    alt: 'Dům po realizaci DOMIDOMI',
    size: 'md',
  },
  {
    type: 'stat',
    value: '23 000+',
    label: 'realizací po celé ČR a SK',
    tone: 'red',
    size: 'sm',
  },
  {
    type: 'image',
    image: '/images/res3.png',
    alt: 'Dům s fotovoltaikou a tepelným čerpadlem',
    size: 'lg',
  },
  {
    type: 'stat',
    value: '80-150k',
    label: 'průměrný měsíční výdělek aktivních OZ',
    tone: 'dark',
    size: 'md',
  },
  {
    type: 'image',
    image: '/images/full-services.jpg',
    alt: 'Montáž a servis technologií DOMIDOMI',
    size: 'md',
  },
  {
    type: 'image',
    image: '/images/servis-pojisteni.jpg',
    alt: 'Technologické řešení domu DOMIDOMI',
    size: 'md',
  },
  {
    type: 'stat',
    value: 'Silná skupina',
    label: 'mezinárodní zázemí, pobočky a servis',
    tone: 'light',
    size: 'lg',
  },
  {
    type: 'image',
    image: '/images/financovani.jpg',
    alt: 'Konzultace a financování řešení pro dům',
    size: 'md',
  },
];

const tileWidthClass = {
  sm: 'w-[200px] sm:w-[240px] lg:w-[260px]',
  md: 'w-[224px] sm:w-[268px] lg:w-[290px]',
  lg: 'w-[248px] sm:w-[300px] lg:w-[330px]',
} as const;

const tileHeightClass = {
  sm: 'h-[128px] sm:h-[148px] lg:h-[162px]',
  md: 'h-[148px] sm:h-[172px] lg:h-[188px]',
  lg: 'h-[168px] sm:h-[196px] lg:h-[214px]',
} as const;

const toneClass = {
  red: 'bg-[#E30A1A] text-white border-[#E30A1A]',
  dark: 'bg-[#111928] text-white border-[#111928]',
  light: 'bg-white text-[#111928] border-[#E7ECF3]',
} as const;

const repeatedTiles = [...tiles, ...tiles];

const branchDots: { label: string; left: string; top: string }[] = [
  { label: 'Praha', left: '48%', top: '34%' },
  { label: 'Brno', left: '54%', top: '56%' },
  { label: 'Ostrava', left: '72%', top: '36%' },
  { label: 'Plzeň', left: '30%', top: '46%' },
  { label: 'Č. Budějovice', left: '44%', top: '76%' },
];

export const Stats = () => {
  return (
    <section className="overflow-hidden border-t border-[#EEF2F6] bg-[#FAFBFC] px-4 py-16 sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <style>{`
        @keyframes domidomi-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes domidomi-map-pulse {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.35); opacity: 0.35; }
        }
      `}</style>

      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">Stabilita a dosah</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#0f172a] sm:text-[36px] lg:text-[40px]">
              <span className="block">Pobočky v Česku i na Slovensku,</span>
              <span className="mt-1 block text-[#475569]">Mezinárodní skupina v zádech.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-[#475569]">
              Know-how, servis a infrastruktura — ať obchoduješ kdekoliv, nejsi na to sám.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <div className="relative overflow-hidden rounded-3xl border border-[#E8EDF3] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2 text-[14px] font-semibold text-[#0f172a]">
              <MapPin className="h-4 w-4 text-[#E30A1A]" />
              Pobočky a zázemí (ČR + SK)
            </div>
            <div className="relative mx-auto mt-6 max-w-[520px]">
              <img
                src="/images/czechia-outline.svg"
                alt="Mapa poboček DOMIDOMI v České republice"
                className="relative z-[1] w-full opacity-[0.92]"
                loading="lazy"
                decoding="async"
              />
              {branchDots.map((dot) => (
                <div key={dot.label} className="absolute z-[2]" style={{ left: dot.left, top: dot.top }}>
                  <div className="relative flex h-3 w-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                    <span
                      className="absolute inline-flex h-7 w-7 rounded-full bg-[#E30A1A]/25"
                      style={{ animation: 'domidomi-map-pulse 2.8s ease-in-out infinite' }}
                      aria-hidden
                    />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-[#E30A1A] ring-2 ring-white shadow" />
                  </div>
                  <span className="absolute left-1/2 top-4 mt-1 hidden -translate-x-1/2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.08em] text-[#111928]/55 sm:block">
                    {dot.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-[14px] leading-relaxed text-[#475569]">
              Slovensko pokrýváme zázemím v <span className="font-semibold text-[#0f172a]">Bratislavě</span> — stejný standard
              služeb jako v ČR.
            </p>
          </div>
          </Reveal>

          <Reveal className="flex flex-col justify-between gap-4 lg:col-span-5" delay={0.1}>
            <div className="rounded-3xl border border-[#E8EDF3] bg-white p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#0f172a] text-white">
                  <Globe2 className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.01em] text-[#0f172a]">Mezinárodní skupina</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#475569]">
                    Sdílené procesy, nákupní síla a servisní síť — prodáváš s klidem, ne v chaosu.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-[#E8EDF3] bg-white p-5 text-center">
                <div className="text-[26px] font-semibold tabular-nums tracking-tight text-[#0f172a] sm:text-[28px]">ČR + SK</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">působení</div>
              </div>
              <div className="rounded-2xl border border-[#E8EDF3] bg-white p-5 text-center">
                <div className="text-[26px] font-semibold tabular-nums tracking-tight text-[#E30A1A] sm:text-[28px]">23k+</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">realizací</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="relative mt-16 sm:mt-20" delay={0.06}>
          <div className="mb-8 flex flex-col gap-1 text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-[#64748B]">Realizace & čísla</p>
            <p className="text-[18px] font-semibold tracking-[-0.02em] text-[#0f172a] sm:text-xl">Pás, který ukazuje šířku skupiny</p>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-16 -translate-x-[50vw] bg-gradient-to-r from-[#FAFBFC] via-[#FAFBFC]/96 to-transparent sm:w-24 lg:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-1/2 z-10 w-16 translate-x-[50vw] bg-gradient-to-l from-[#FAFBFC] via-[#FAFBFC]/96 to-transparent sm:w-24 lg:w-32" />

          <div
            className="flex w-max gap-4 sm:gap-5"
            style={{
              animation: 'domidomi-marquee 48s linear infinite',
              willChange: 'transform',
            }}
          >
            {repeatedTiles.map((tile, index) => {
              const size = tile.size ?? 'md';

              if (tile.type === 'image') {
                return (
                  <article
                    key={`${tile.alt}-${index}`}
                    className={`${tileWidthClass[size]} ${tileHeightClass[size]} shrink-0 overflow-hidden rounded-[26px] border border-white/80 bg-white shadow-[0_14px_32px_rgba(17,25,40,0.08)] sm:rounded-[28px]`}
                  >
                    <img src={tile.image} alt={tile.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </article>
                );
              }

              return (
                <article
                  key={`${tile.value}-${index}`}
                  className={`${tileWidthClass[size]} ${tileHeightClass[size]} ${toneClass[tile.tone ?? 'light']} flex shrink-0 flex-col justify-between rounded-[26px] border p-5 shadow-[0_14px_32px_rgba(17,25,40,0.08)] sm:rounded-[28px] sm:p-6`}
                >
                  <div className="text-[34px] font-bold leading-none tracking-tight sm:text-[40px] lg:text-[44px]">{tile.value}</div>
                  <div
                    className={`max-w-[20ch] text-[13px] font-medium leading-5 sm:text-sm sm:leading-6 ${tile.tone === 'light' ? 'text-[#4B5563]' : 'text-white/85'}`}
                  >
                    {tile.label}
                  </div>
                </article>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
