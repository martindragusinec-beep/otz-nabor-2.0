import React from 'react';
import { TrendingUp } from 'lucide-react';
import { CTAButton } from './CTAButton';
import { useRecruitmentModal } from './RecruitmentModalContext';

const bars = [
  { label: 'Start', amount: '80 000 Kč', widthPct: 38, delay: '0ms' },
  { label: 'Aktivní OZ', amount: '120 000 Kč', widthPct: 62, delay: '120ms' },
  { label: 'Top výkon', amount: '200 000+ Kč', widthPct: 100, delay: '240ms' },
] as const;

export const EarningsProof = () => {
  const { openModal } = useRecruitmentModal();

  return (
    <section className="relative overflow-hidden bg-[#0B1220] px-4 py-14 text-white sm:px-6 sm:py-16 md:px-12 lg:px-16 lg:py-20">
      <style>{`
        @keyframes domidomi-bar-grow {
          from { transform: scaleX(0.06); opacity: 0.35; }
          to { transform: scaleX(1); opacity: 1; }
        }
        @keyframes domidomi-soft-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes domidomi-shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>

      <div className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#E30A1A]/20 blur-[100px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-[#5BA318]/12 blur-[90px]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1280px]">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-semibold text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#BDFF84]" />
            Výdělek v číslech — a co za ním je
          </div>
          <h2 className="mt-4 text-[30px] font-bold leading-[1.06] tracking-tight sm:text-[40px] lg:text-[48px]">
            Průměr je jen začátek.
            <span className="block text-white/75">Horní hranice tě neomezuje.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/70 sm:text-[16px]">
            Spojili jsme graf výdělků s reálným člověkem z terénu — ať je vidět, že za čísly stojí živý obchod, ne tabulka z
            korporátu.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="relative lg:col-span-5">
            <div
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
              style={{ animation: 'domidomi-soft-float 7s ease-in-out infinite' }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#E30A1A]/25 via-transparent to-[#5BA318]/15" />
              <img
                src="/images/obchodnik-velka.jpg"
                alt="Obchodně technický zástupce DOMIDOMI"
                className="relative z-[1] aspect-[4/5] w-full object-cover object-top sm:aspect-[3/4]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-[#0B1220] via-[#0B1220]/55 to-transparent p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Z terénu</div>
                <p className="mt-2 text-lg font-semibold leading-snug">„Když máš ověřené leady, řešíš obchod — ne lov kontaktů.“</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:col-span-7">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background: 'linear-gradient(110deg, transparent 0%, rgba(227,10,26,0.15) 45%, transparent 70%)',
                  backgroundSize: '200% 200%',
                  animation: 'domidomi-shimmer 8s ease-in-out infinite',
                }}
                aria-hidden
              />
              <div className="relative flex items-start justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                    <TrendingUp className="h-3.5 w-3.5 text-[#BDFF84]" />
                    Výdělky OZ
                  </div>
                  <h3 className="mt-4 text-2xl font-bold leading-tight sm:text-3xl">Roste to s výkonem i ekosystémem</h3>
                </div>
                <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right sm:block">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/55">Průměr</div>
                  <div className="mt-1 text-2xl font-bold tabular-nums">80–150k</div>
                </div>
              </div>

              <div className="relative mt-8 space-y-5">
                {bars.map((bar) => (
                  <div key={bar.label}>
                    <div className="flex items-end justify-between gap-3 text-sm text-white/70">
                      <span className="font-semibold text-white">{bar.label}</span>
                      <span className="tabular-nums text-white/90">{bar.amount}</span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full origin-left rounded-full bg-gradient-to-r from-white via-[#FDE047] to-[#FDE047]"
                        style={{
                          width: `${bar.widthPct}%`,
                          transformOrigin: 'left center',
                          animation: `domidomi-bar-grow 1.1s cubic-bezier(0.22, 1, 0.36, 1) both`,
                          animationDelay: bar.delay,
                        }}
                      />
                    </div>
                  </div>
                ))}
                <p className="pt-2 text-sm leading-6 text-white/55">Orientační rozmezí podle výkonu aktivních obchodně-technických zástupců.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#FDE047]/35 bg-[#FDE047] p-6 text-[#111928] shadow-[0_16px_40px_rgba(253,224,71,0.22)]">
                <div className="text-sm font-bold uppercase tracking-[0.12em]">Provizní systém</div>
                <dl className="mt-4 space-y-3 text-[15px] font-semibold">
                  <div className="flex justify-between gap-3 border-b border-black/10 pb-3">
                    <dt className="text-black/60">Sazba</dt>
                    <dd>od 4 %</dd>
                  </div>
                  <div className="flex justify-between gap-3 border-b border-black/10 pb-3">
                    <dt className="text-black/60">Výplata</dt>
                    <dd>měsíčně</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-black/60">Strop</dt>
                    <dd>žádný</dd>
                  </div>
                </dl>
              </div>

              <div className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-white/[0.06] p-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">Důvěra</div>
                  <p className="mt-3 text-[17px] font-medium leading-7 text-white/85">
                    „Za 2 roky jsem se dostal na 120 000 Kč měsíčně. Férový systém a skvělý tým.“
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <img src="/images/karel-vystrcil.png" alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-white/20" />
                  <div>
                    <div className="font-semibold">Karel Vystrčil</div>
                    <div className="text-sm text-white/55">B2B obchodník</div>
                  </div>
                </div>
              </div>
            </div>

            <CTAButton onClick={openModal} className="h-[52px] w-full sm:w-auto sm:self-start">
              Chci se přidat k týmu
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};
