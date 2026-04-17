import React from 'react';

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
    label: 'pobočky, servis a zázemí pro dlouhodobý růst',
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
  sm: 'w-[176px] sm:w-[210px] lg:w-[228px]',
  md: 'w-[196px] sm:w-[236px] lg:w-[256px]',
  lg: 'w-[216px] sm:w-[270px] lg:w-[300px]',
} as const;

const tileHeightClass = {
  sm: 'h-[112px] sm:h-[128px] lg:h-[142px]',
  md: 'h-[128px] sm:h-[148px] lg:h-[166px]',
  lg: 'h-[144px] sm:h-[170px] lg:h-[192px]',
} as const;

const toneClass = {
  red: 'bg-[#E30A1A] text-white border-[#E30A1A]',
  dark: 'bg-[#111928] text-white border-[#111928]',
  light: 'bg-white text-[#111928] border-[#E7ECF3]',
} as const;

const repeatedTiles = [...tiles, ...tiles];

export const Stats = () => {
  return (
    <section className="overflow-hidden bg-[#F7F9FC] px-4 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-16 lg:py-20">
      <style>{`
        @keyframes domidomi-marquee {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes domidomi-branch-pulse {
          0%, 100% { transform: scale(1); opacity: 0.22; }
          50% { transform: scale(1.7); opacity: 0.06; }
        }
      `}</style>

      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E30A1A]/10 bg-white px-3 py-1.5 text-sm font-semibold text-[#E30A1A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E30A1A]" />
            Stabilita a výsledky
          </div>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.06] tracking-tight text-[#111928] sm:text-[38px] lg:text-[52px]">
            Když máš silnou značku,
            <br className="hidden sm:block" /> dobrý produkt a funkční systém,
            <br className="hidden lg:block" /> obchod vypadá jinak.
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-7 text-[#4B5563] sm:text-[17px]">
            Nejde jen o jednu službu. Klientům přinášíš celý funkční celek pro dům, a právě proto má jedna schůzka větší
            hodnotu i větší potenciál.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-12">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 w-12 -translate-x-[50vw] bg-gradient-to-r from-[#F7F9FC] via-[#F7F9FC]/96 to-transparent sm:w-20 lg:w-28" />
          <div className="pointer-events-none absolute inset-y-0 right-1/2 z-10 w-12 translate-x-[50vw] bg-gradient-to-l from-[#F7F9FC] via-[#F7F9FC]/96 to-transparent sm:w-20 lg:w-28" />

          <div
            className="flex w-max gap-3 sm:gap-4"
            style={{
              animation: 'domidomi-marquee 42s linear infinite',
              willChange: 'transform',
            }}
          >
            {repeatedTiles.map((tile, index) => {
              const size = tile.size ?? 'md';

              if (tile.type === 'image') {
                return (
                  <article
                    key={`${tile.alt}-${index}`}
                    className={`${tileWidthClass[size]} ${tileHeightClass[size]} shrink-0 overflow-hidden rounded-[22px] border border-white/70 bg-white shadow-[0_10px_24px_rgba(17,25,40,0.055)] sm:rounded-[24px]`}
                  >
                    <img src={tile.image} alt={tile.alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
                  </article>
                );
              }

              return (
                <article
                  key={`${tile.value}-${index}`}
                  className={`${tileWidthClass[size]} ${tileHeightClass[size]} ${toneClass[tile.tone ?? 'light']} flex shrink-0 flex-col justify-between rounded-[22px] border p-4.5 shadow-[0_10px_24px_rgba(17,25,40,0.055)] sm:rounded-[24px] sm:p-5`}
                >
                  <div className="text-[32px] font-bold leading-none tracking-tight sm:text-[38px] lg:text-[42px]">{tile.value}</div>
                  <div className={`max-w-[18ch] text-[13px] font-medium leading-5 sm:text-sm sm:leading-6 ${tile.tone === 'light' ? 'text-[#4B5563]' : 'text-white/80'}`}>
                    {tile.label}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
