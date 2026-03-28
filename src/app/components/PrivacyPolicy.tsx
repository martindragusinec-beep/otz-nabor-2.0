import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 flex flex-col">
      <Header />
      
      <main className="flex-grow py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hlavička */}
          <div className="mb-12 md:mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Podmínky ochrany<br className="md:hidden"/> osobních údajů
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pečlivě chráníme vaše osobní údaje a transparentně informujeme o jejich zpracování
            </p>
          </div>

          {/* Obsah */}
          <div className="prose prose-lg max-w-none">
            {/* I. Základní ustanovení */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                I. Základní ustanovení
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Správcem osobních údajů je společnost <strong>Schlieger, s.r.o.</strong> IČ 28787803 se sídlem U nákladového nádraží 3265/10, Strašnice, 130 00 Praha 3 (dále jen: „Správce" nebo „my").
                </p>
                <p>
                  Kontaktní údaje správce jsou Petr Skála (<a href="mailto:petr.skala@schlieger.cz" className="text-[#E30A1A] hover:underline font-medium">petr.skala@schlieger.cz</a>). Správce nejmenoval pověřence pro ochranu osobních údajů.
                </p>
                <p>
                  Zpracování probíhá v souladu s <strong>Nařízením Evropského parlamentu a Rady (EU) 2016/679</strong> ze dne 27. dubna 2016 o ochraně fyzických osob v souvislosti se zpracováním osobních údajů a o volném pohybu těchto údajů a o zrušení směrnice 95/46/ES (obecné nařízení o ochraně osobních údajů), dále také používáme zkratku „GDPR", a blíže je popsáno v těchto podmínkách.
                </p>
              </div>
            </section>

            {/* II. Zdroje a kategorie */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                II. Zdroje a kategorie zpracovávaných osobních údajů
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Osobní údaje získáváme přímo od Vás, při zaslání dotazu či objednávky k našim službám nebo při plnění Vaší objednávky. V omezeném rozsahu můžeme také získat osobní údaje od našich marketingových partnerů, pokud souhlasíte s tím, aby nám Vaše osobní údaje předali.
                </p>
                <p>
                  Dále Vaše osobní údaje přímo od Vás získáváme v případě poskytnutí daru na veřejnou sbírku pořádanou prostřednictvím transparentního bankovního účtu.
                </p>
                <p className="font-semibold text-gray-900 mt-6">
                  Zpracováváme tyto kategorie osobních údajů:
                </p>
                <ul className="list-none space-y-3 ml-0 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Identifikační údaje</strong>, jimiž se rozumí především jméno, příjmení, datum narození a adresa bydliště.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Kontaktní údaje</strong>, jako je e-mailová adresa či telefon.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Informace o zájmu o našich produktech</strong> a o Vašich objednávkách, způsobu dodání, místu realizace či instalace objednaného zboží, platby vč. informace o Vašem bankovním účtu, řešení případných reklamací atd.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Data týkající se roční spotřeby</strong> elektrické energie a energetické náročnosti budovy.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Informace o využívání našich webových stránek</strong>; tyto informace získáváme a zpracováváme především prostřednictvím nástrojů cookies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span><strong>Záznamy z telefonických hovorů</strong> týkající se našich služeb či konkrétních objednávek.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span>IP adresa, rodné číslo, číslo bankovního účtu, fotodokumentace.</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* III. Účely a právní tituly */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                III. Účely a právní tituly ke zpracování osobních údajů
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">
                  Osobní údaje zpracováváme za následujícími účely:
                </p>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Zpracování objednávky a plnění smlouvy
                  </h3>
                  <p>
                    Právním titulem k nezbytnému zpracování osobních údajů je plnění smlouvy ve smyslu čl. 6 odst. 1 písm. b) GDPR. Za tímto účelem zpracováváme identifikační a kontaktní údaje, údaje o Vaší objednávce včetně záznamů Vašich telefonických hovorů a data týkající se roční spotřeby elektrické energie a energetické náročnosti budovy.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Ochrana našich oprávněných zájmů
                  </h3>
                  <p>
                    Abychom např. byli schopni doložit, že jsme Vaši objednávku správně a včas vyřídili. Právním titulem pro toto zpracování je oprávněný zájem dle čl. 6 odst. 1 písm. f) GDPR. Pro tento účel zpracováváme identifikační údaje, údaje o Vaší objednávce a záznamy z telefonických hovorů.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Plnění právních povinností
                  </h3>
                  <p>
                    Některé zpracování osobních údajů nám ukládají další právní předpisy, třeba v oblasti účetnictví. Pro zpracování nezbytné ke splnění našich právních povinností využíváme právní titul dle čl. 6 odst. 1 písm. c) GDPR. Pro tento účel zpracováváme identifikační údaje a údaje o Vaší objednávce.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Nabízení našich produktů a služeb
                  </h3>
                  <p>
                    Našim klientům zasíláme obchodní nabídky, např. o nových produktech v naší nabídce. Právním titulem k tomuto zpracování je náš oprávněný zájem dle čl. 6 odst. 1 písm. f) GDPR ve spojení s § 7 odst. 3 zákona č. 480/2004 Sb. Pokud si však nepřejete, abychom Vaše osobní údaje za tímto účelem zpracovávali, dejte nám to vědět.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Zasílání newsletteru a obchodních sdělení
                  </h3>
                  <p>
                    Pokud nám k tomu dáte souhlas, například formou objednávky newsletteru, můžeme Vám zasílat nabídky našich produktů a služeb i tehdy, pokud nejste naším klientem. Právním titulem je tedy souhlas ve smyslu čl. 6 odst. 1 písm. a) GDPR.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">
                    Online marketing a zobrazování nabídek
                  </h3>
                  <p>
                    S Vaším souhlasem budeme využívat Vaše osobní údaje i pro zobrazování obchodních nabídek v prostředí třetích stran prostřednictvím cookies nebo Vašich identifikačních dat.
                  </p>
                </div>

                <p className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 text-gray-800 mt-6">
                  <strong>Důležité:</strong> Poskytnutí osobních údajů je vždy dobrovolné. Bez Vašich osobních údajů však nemůžeme vyřídit Vaši objednávku ani Vám zasílat nabídky našich produktů či služeb.
                </p>
              </div>
            </section>

            {/* IV. Doba uchovávání */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                IV. Doba uchovávání údajů
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">
                  Správce zpracovává osobní údaje:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                    <div className="font-bold text-blue-900 mb-2">5 let</div>
                    <p className="text-sm text-gray-700">Od ukončení smluvního vztahu pro uplatňování nároků a ochranu práv</p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                    <div className="font-bold text-blue-900 mb-2">10 let</div>
                    <p className="text-sm text-gray-700">Pro archivaci účetních dokumentů podle právních předpisů</p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                    <div className="font-bold text-blue-900 mb-2">10 let</div>
                    <p className="text-sm text-gray-700">Od ukončení smluvního vztahu pro účely přímého marketingu</p>
                  </div>
                  <div className="bg-blue-50 p-5 rounded-xl border border-blue-200">
                    <div className="font-bold text-blue-900 mb-2">4 roky</div>
                    <p className="text-sm text-gray-700">Od skončení spotřebitelské soutěže z důvodu odpovědnosti</p>
                  </div>
                </div>
                <p className="mt-4">
                  Po uplynutí doby uchování správce osobní údaje <strong>nevratně odstraní</strong>.
                </p>
              </div>
            </section>

            {/* V. Příjemci */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                V. Příjemci osobních údajů
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Se zpracováním Vašich údajů nám pomáhá několik našich dodavatelů, zpracovatelů osobních údajů, kteří pro zajištění dané služby musí mít v omezeném rozsahu přístup k Vašim osobním údajům.
                </p>
                <p className="font-semibold text-gray-900 mt-6">
                  Zpracovateli Vašich osobních údajů jsou zejména:
                </p>
                <ul className="list-none space-y-3 ml-0 pl-0">
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Společnosti podílející se na <strong>provozování našich webových stránek</strong> (hostingové služby Lukáš Petřík, IČO: 87317711)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Společnosti zajišťující <strong>marketingové a poradenské služby</strong> (EnergySim, s.r.o., Optimal-Energy.cz, a.s.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Poskytovatelé <strong>mailingových a cloudových služeb</strong> (Google Workspace, Google Ireland Limited)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Subjekty podílející se na <strong>dodání zboží či realizaci plateb</strong> (SCHLIEGER Holding, s.r.o., MV Technology Group s.r.o.)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="inline-block w-2 h-2 bg-[#E30A1A] rounded-full mt-2 flex-shrink-0"></span>
                    <span>Společnosti pro <strong>online marketing</strong> (Meta Platforms Ireland Limited, Google Ireland Limited, Seznam.cz, SendGrid, Microsoft Ireland Operations Limited)</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* VI. Vaše práva */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                VI. Vaše práva
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="font-semibold text-gray-900">
                  Ve vztahu ke zpracování Vašich osobních údajů máte následující práva:
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Právo na informaci a přístup</h4>
                      <p className="text-sm">Máte právo vědět, zda zpracováváme Vaše osobní údaje, a právo na přístup k těmto údajům.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Právo na opravu a omezení</h4>
                      <p className="text-sm">Můžete požádat o opravu, aktualizaci či omezení zpracování Vašich osobních údajů.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Právo na výmaz</h4>
                      <p className="text-sm">Můžete požádat o výmaz osobních údajů (s výjimkou případů, kdy je další zpracování nezbytné pro plnění právních povinností).</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Právo na přenositelnost</h4>
                      <p className="text-sm">Můžete požádat o předání Vašich osobních údajů Vám nebo jinému správci.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Právo odvolat souhlas</h4>
                      <p className="text-sm">Můžete kdykoliv odvolat souhlas se zpracováním osobních údajů, např. odhlášením z newsletteru.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">✓</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Právo vznést námitku</h4>
                      <p className="text-sm">Můžete vznést námitku proti zpracování na základě našeho oprávněného zájmu.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200 mt-8">
                  <p className="font-semibold text-gray-900 mb-2">
                    Máte otázky nebo připomínky?
                  </p>
                  <p className="mb-3">
                    Pokud se domníváte, že prováděné zpracování je v rozporu s GDPR, sdělte nám to na kontakty uvedené v čl. I. Pokud nebudete s vyřízením spokojeni, máte právo obrátit se na <strong>Úřad pro ochranu osobních údajů</strong>.
                  </p>
                  <a 
                    href="https://www.uoou.cz" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-[#E30A1A] hover:underline font-semibold"
                  >
                    www.uoou.cz →
                  </a>
                </div>
              </div>
            </section>

            {/* VII. Závěrečná ustanovení */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-gray-200">
                VII. Závěrečná ustanovení
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Odesláním objednávky z internetového objednávkového formuláře potvrzujete, že jste seznámen/a s těmito podmínkami ochrany osobních údajů a že je v celém rozsahu přijímáte.
                </p>
                <p>
                  Tyto podmínky berete na vědomí rovněž zaškrtnutím souhlasu prostřednictvím internetového formuláře.
                </p>
                <p>
                  Správce je oprávněn tyto podmínky změnit. Novou verzi podmínek ochrany osobních údajů zveřejní na svých internetových stránkách. Proto tyto webové stránky pravidelně kontrolujte.
                </p>
                <div className="bg-gray-100 p-5 rounded-xl mt-6 text-center">
                  <p className="font-semibold text-gray-900">
                    Účinnost podmínek: <span className="text-[#E30A1A]">11. dubna 2023</span>
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* CTA zpět na hlavní stránku */}
          <div className="mt-16 text-center flex justify-center">
            <a href="/" className="inline-block">
              <div className="group bg-[#e30a1a] hover:bg-[#c90816] content-stretch flex gap-[24px] items-center justify-center overflow-clip pl-[32px] pr-[6px] py-[18px] rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300">
                <span className="font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap">
                  ← Zpět na hlavní stránku
                </span>
                
                {/* White Circle with Arrow Icon */}
                <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[42px] transition-transform duration-300 group-hover:scale-110">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="relative size-[24px]">
                      <svg 
                        className="absolute block size-full transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        preserveAspectRatio="none" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          d="M19 12L5 12" 
                          stroke="#111928" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2"
                          className="transition-all duration-300 group-hover:opacity-0"
                        />
                        <path 
                          d="M12 19L19 12L12 5" 
                          stroke="#111928" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};