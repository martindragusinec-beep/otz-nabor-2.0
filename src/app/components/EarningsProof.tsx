import React, { useRef } from 'react';
import { TrendingUp } from 'lucide-react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';
import { SectionSpotlight } from './SectionSpotlight';
import { Reveal } from './motion/Reveal';

const bars = [
  { label: 'Start', amount: '80 000 Kč', widthPct: 38 },
  { label: 'Aktivní OZ', amount: '120 000 Kč', widthPct: 62 },
  { label: 'Top výkon', amount: '200 000+ Kč', widthPct: 100 },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;

function AnimatedBar({ widthPct, delay }: { widthPct: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' });
  const reduced = useReducedMotion();

  if (reduced) {
    return (
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-white/95 via-[#fde68a] to-[#fbbf24]"
          style={{ width: `${widthPct}%` }}
        />
      </div>
    );
  }

  return (
    <div ref={ref} className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
      <motion.div
        className="h-full rounded-full bg-gradient-to-r from-white/95 via-[#fde68a] to-[#fbbf24]"
        initial={{ width: 0 }}
        animate={{ width: isInView ? `${widthPct}%` : 0 }}
        transition={{ duration: 0.75, delay, ease }}
      />
    </div>
  );
}

export const EarningsProof = () => {
  const { openModal } = useRecruitmentModal();
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0a0f18] px-4 py-16 text-white sm:px-6 sm:py-20 md:px-12 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_15%_0%,rgba(227,10,26,0.12),transparent_50%)]" aria-hidden />

      <SectionSpotlight index={2} dark>
        <div className="relative z-10 mx-auto max-w-[1200px]">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-white/45">Výdělek & důvěra</p>
            <h2 className="mt-3 text-[28px] font-semibold leading-[1.12] tracking-[-0.02em] text-white sm:text-[36px] lg:text-[40px]">
              Průměr je začátek.
              <span className="mt-1 block text-[17px] font-normal leading-snug text-white/60 sm:text-[18px]">
                Horní hranici drží výkon — ne strop systému.
              </span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-white/55">
              Čísla v kontextu člověka z terénu — přehledně, bez korporátní tabulky.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <motion.div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111822]"
              animate={reduced ? undefined : { y: [0, -5, 0] }}
              transition={reduced ? undefined : { duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img
                src="/images/obchodnik-velka.jpg"
                alt="Obchodně technický zástupce DOMIDOMI"
                className="aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0a0f18] via-[#0a0f18]/50 to-transparent px-6 pb-6 pt-16">
                <p className="text-[15px] font-medium leading-snug text-white/90">
                  „Když máš ověřené leady, řešíš obchod — ne lov kontaktů.“
                </p>
              </div>
            </motion.div>
          </Reveal>

          <div className="flex flex-col gap-5 lg:col-span-7">
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70">
                      <TrendingUp className="h-3.5 w-3.5 text-[#a3e635]" />
                      Výdělky OZ
                    </div>
                    <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] sm:text-2xl">Roste to s výkonem</h3>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-right">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">Průměr</div>
                    <div className="text-xl font-semibold tabular-nums">80–150k</div>
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  {bars.map((bar, i) => (
                    <div key={bar.label}>
                      <div className="flex items-end justify-between gap-3 text-[13px] text-white/55">
                        <span className="font-medium text-white/90">{bar.label}</span>
                        <span className="tabular-nums text-white/80">{bar.amount}</span>
                      </div>
                      <AnimatedBar widthPct={bar.widthPct} delay={i * 0.1} />
                    </div>
                  ))}
                  <p className="text-[13px] leading-relaxed text-white/40">Orientační rozmezí u aktivních obchodně-technických zástupců.</p>
                </div>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Reveal delay={0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-[#facc15]/25 bg-[#facc15] p-6 text-[#0f172a]">
                  <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#0f172a]/55">Provizní systém</div>
                  <dl className="mt-4 space-y-3 text-[14px] font-semibold">
                    <div className="flex justify-between gap-3 border-b border-black/10 pb-3">
                      <dt className="font-medium text-[#0f172a]/55">Sazba</dt>
                      <dd>od 4 %</dd>
                    </div>
                    <div className="flex justify-between gap-3 border-b border-black/10 pb-3">
                      <dt className="font-medium text-[#0f172a]/55">Výplata</dt>
                      <dd>měsíčně</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="font-medium text-[#0f172a]/55">Strop</dt>
                      <dd>žádný</dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.05] p-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/45">Důvěra</div>
                    <p className="mt-3 text-[15px] font-medium leading-relaxed text-white/85">
                      „Za 2 roky jsem se dostal na 120 000 Kč měsíčně. Férový systém a skvělý tým.“
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
                    <img src="/images/karel-vystrcil.png" alt="" className="h-11 w-11 rounded-full object-cover ring-2 ring-white/15" />
                    <div>
                      <div className="text-sm font-semibold">Karel Vystrčil</div>
                      <div className="text-[13px] text-white/45">B2B obchodník</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.06}>
              <CTAButton onClick={openModal} className="h-[50px] w-full sm:w-auto">
                Chci se přidat k týmu
              </CTAButton>
            </Reveal>
          </div>
        </div>
        </div>
      </SectionSpotlight>
    </section>
  );
};
