import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import imgRedBlob from "figma:asset/e07f4f089b2165667a35cc5e0f64ff390174f883.png";

const faqs = [
  {
    question: "Co přesně budu prodávat?",
    answer: "Nabízíme komplexní řešení pro domácnosti. Můžete klientům nabídnout fotovoltaiku, tepelná čerpadla, zateplení, nová okna nebo i výhodnější energie. Výhodou je, že klientovi ušetříte peníze a vy získáte zajímavou provizi."
  },
  {
    question: "Jaký je systém odměňování?",
    answer: "Náš systém je čistě provizní. Odměňujeme vás za každý úspěšně uzavřený obchod s klientem. Provize se skládá ze zálohy při podpisu a doplatku po realizaci. Nemáme žádný horní limit – čím více prodáte, tím více vyděláte."
  },
  {
    question: "Je to práce na IČO, nebo HPP?",
    answer: "Spolupráce probíhá výhradně na IČO (živnostenský list). To vám dává maximální svobodu, flexibilitu v plánování času a možnost neomezených příjmů."
  },
  {
    question: "Kdo mi dodává klienty?",
    answer: "Nemusíte nikoho složitě hledat. Naše marketingové oddělení generuje kvalitní a ověřené leady (poptávky od zákazníků), které vám pravidelně přidělujeme. Vaším úkolem je s klientem domluvit schůzku a najít pro něj nejlepší řešení."
  },
  {
    question: "Jak přesně probíhá naše první setkání?",
    answer: "První setkání je nezávazné. Popovídáme si o vašich zkušenostech, představíme vám detailně náš systém, provizní model a zázemí firmy. Pokud si budeme vzájemně vyhovovat, domluvíme se na dalších krocích a zaškolení."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-10 pointer-events-none hidden md:block">
         <img src={imgRedBlob} alt="Decorative" className="w-[600px] h-[600px] object-contain" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Často kladené otázky
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-colors duration-300 ${isOpen ? 'border-[#E30A1A] shadow-md bg-white' : 'border-gray-200 bg-gray-50/50 hover:bg-gray-50'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold pr-8 ${isOpen ? 'text-[#E30A1A]' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#E30A1A] text-white' : 'bg-gray-200 text-gray-600'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
