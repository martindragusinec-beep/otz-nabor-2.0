import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CTAButton } from './CTAButton';

const categories = ["Prodaná řešení", "Aktivní poptávky"];

const items = [
  {
    id: 1,
    img: "/images/res1.png",
    title: "Zateplení fasády domu",
    feature: "Vyšší komfort pro rodinu",
    provize: "Provize pro obchodníka 68 000 Kč",
    details: "potenciál z FV a TČ"
  },
  {
    id: 2,
    img: "/images/res2.png",    
    title: "Výměna oken",
    feature: "Nové řešení pro zákazníka v dotaci",
    provize: "Provize pro obchodníka 43 000 Kč",
    details: "Rodinný dům, 4 osoby"
  },
  {
    id: 3,
    img: "/images/res3.png",    
    title: "Fotovoltaika s čerpadlem",
    feature: "Západ - Středočeský kraj, rodinný dům",
    provize: "Provize pro obchodníka 75 000 Kč",
    details: "kompletní vyřízení"
  },
  {
    id: 4,
    img: "/images/res4.png",    
    title: "Fotovoltaika",
    feature: "Západ - Středočeský kraj, rodinný dům",
    provize: "Provize pro obchodníka 52 000 Kč",
    details: "Rodinný dům s velkou střechou"
  }
];

export const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);

  const scrollToForm = () => {
    const leadBanner = document.getElementById('lead-banner-form');
    if (leadBanner) {
      leadBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center md:text-left">
            Naše aktuálně prodaná řešení
          </h2>
          
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-12">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#111928] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {item.provize}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <div className="flex items-start gap-2 mb-4">
                  <CheckCircle2 className="w-5 h-5 text-[#34C759] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 font-medium leading-tight">{item.feature}</p>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{item.details}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <CTAButton onClick={scrollToForm}>
          Začít vydělávat ještě dnes
        </CTAButton>
      </div>
    </section>
  );
};
