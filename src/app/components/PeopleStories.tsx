import React from 'react';

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
  return (
    <section className="bg-white px-4 py-14 sm:px-6 sm:py-16 md:px-12 lg:px-16 lg:py-20">
      <div className="mx-auto max-w-[1280px]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E30A1A]/10 bg-[#FFF6F7] px-3 py-1.5 text-sm font-semibold text-[#E30A1A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#E30A1A]" />
            Příběhy našich lidí
          </div>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.06] tracking-tight text-[#111928] sm:text-[40px] lg:text-[46px]">
            Tváře z terénu — ne stock fotky.
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#4B5563] sm:text-[16px]">
            Krátký citát o tom, jak se jim změnil život — reálné tváře z obchodu, ne ilustrační fotky.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {colleagues.map((person) => (
            <article
              key={person.name}
              className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-[28px] bg-[#111928] shadow-[0_22px_55px_rgba(17,25,40,0.12)]"
            >
              <div className="relative flex-1 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className={`h-full min-h-[280px] w-full transition-transform duration-700 ease-out group-hover:scale-[1.03] ${person.imageClassName}`}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111928] via-[#111928]/35 to-transparent" />
              </div>
              <div className="relative z-[1] -mt-16 flex flex-1 flex-col justify-end px-6 pb-7 pt-10 sm:px-7">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">Obchodně technický zástupce</div>
                <h3 className="mt-2 text-[28px] font-bold leading-tight text-white sm:text-[30px]">{person.name}</h3>
                <p className="mt-4 text-[15px] font-medium leading-7 text-white/85">„{person.quote}“</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
