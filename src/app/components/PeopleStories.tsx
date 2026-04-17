import React from 'react';
import { Quote } from 'lucide-react';

const storyCards = [
  {
    name: 'Tomáš',
    role: 'Obchodně technický zástupce',
    earnings: 'cca 95 000 Kč / měsíc',
    image: '/images/unsplash-person-1.jpg',
    imageClassName: 'object-cover object-center',
    teaser: 'Nejvíc mi sedí, že nejdu do schůzky naslepo a schůzky mají reálný potenciál.',
    story:
      'Když přijdu za klientem, většinou už něco aktivně řeší. Nebavíme se o tom, jestli má schůzka smysl, ale jak pro něj najít nejlepší řešení pro dům jako celek.',
  },
  {
    name: 'Martin',
    role: 'Obchodně technický zástupce',
    earnings: 'cca 120 000 Kč / měsíc',
    image: '/images/unsplash-person-2.jpg',
    imageClassName: 'object-cover object-center',
    teaser: 'Dobře se mi pracuje s tím, že za mnou stojí systém, leady i silná značka.',
    story:
      'V terénu je znát každá maličkost. Když máš kvalitní leady, jasný proces a tým, který tě podrží, můžeš se soustředit hlavně na klienta, vztah a výsledek.',
  },
] as const;

export const PeopleStories = () => {
  return (
    <section className="bg-[#F7F9FC] px-4 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E30A1A]/10 bg-white px-3 py-1.5 text-sm font-semibold text-[#E30A1A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E30A1A]" />
            Lidé a realita z terénu
          </div>
          <h2 className="mt-4 max-w-[760px] text-[28px] font-bold leading-[1.06] tracking-tight text-[#111928] sm:text-[36px] lg:text-[44px]">
            Tohle není anonymní obchod.
            <br className="hidden sm:block" /> Tohle je práce postavená na lidech.
          </h2>
          <p className="mt-3 max-w-[680px] text-[14px] leading-6 text-[#4B5563] sm:text-[15px]">
            Podívej se, proč tahle práce sedí lidem, kteří chtějí dobrý obchod dělat poctivě, s větší svobodou a jasným
            výsledkem.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr_0.82fr]">
          {storyCards.map((card) => (
            <article
              key={card.name}
              className="group relative min-h-[430px] overflow-hidden rounded-[28px] bg-white shadow-[0_14px_36px_rgba(17,25,40,0.06)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(17,25,40,0.08)]"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.name}
                  className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.015] ${card.imageClassName}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111928]/84 via-[#111928]/20 to-transparent" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="rounded-[24px] border border-white/12 bg-white/10 p-4 text-white backdrop-blur-md transition-colors duration-500 group-hover:bg-white/[0.14] sm:p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{card.role}</div>
                  <h3 className="text-[28px] font-bold leading-tight">{card.name}</h3>
                  <div className="mt-1 text-sm font-medium leading-6 text-[#BDFF84]">{card.earnings}</div>
                  <p className="mt-2 max-w-[300px] text-sm leading-6 text-white/80">{card.teaser}</p>

                  <div className="grid transition-[grid-template-rows,opacity,margin] duration-500 ease-out [grid-template-rows:0fr] group-hover:[grid-template-rows:1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-0 text-sm leading-6 text-white/84 opacity-0 transition-opacity duration-300 ease-out group-hover:mt-4 group-hover:opacity-100">
                        {card.story}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}

          <article className="flex min-h-[430px] flex-col justify-between rounded-[28px] border border-[#E6ECF3] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFD_100%)] p-7 shadow-[0_14px_36px_rgba(17,25,40,0.05)] sm:p-8">
            <div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#111928] text-white">
                <Quote className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <div className="mt-7 text-sm font-semibold uppercase tracking-[0.16em] text-[#E30A1A]">Co je na tom jiné</div>
              <h3 className="mt-4 max-w-[280px] text-[26px] font-bold leading-[1.08] text-[#111928]">
                Tady se obchod nestaví na tlaku, ale na důvěře.
              </h3>
              <p className="mt-5 max-w-[290px] text-[15px] leading-7 text-[#4B5563]">
                Klient necítí, že mu něco tlačíš. Vidí partnera, který rozumí domu jako celku. To zlepšuje průběh schůzky i její
                výsledek.
              </p>
            </div>

            <div className="mt-8 rounded-[22px] border border-[#E8EDF3] bg-white p-5 sm:p-6">
              <div className="text-[34px] font-bold leading-none tracking-tight text-[#111928]">80-150k</div>
              <div className="mt-3 max-w-[240px] text-sm leading-6 text-[#4B5563]">průměrný měsíční výdělek aktivních OZ, kteří umí využít celý ekosystém DOMIDOMI</div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
