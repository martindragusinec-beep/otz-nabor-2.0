import React, { useState } from 'react';
import { PanelTop, Home, AppWindow, Zap, Settings, Activity } from 'lucide-react';
import { CiperkaLogo } from './logos/CiperkaLogo';
import { LumixoLogo } from './logos/LumixoLogo';
import { DomiDomiEnergieLogo } from './logos/DomiDomiEnergieLogo';
import { DomiDomiFinanceLogo } from './logos/DomiDomiFinanceLogo';
import { DomiDomiCareLogo } from './logos/DomiDomiCareLogo';
import { SchliegerLogo } from './logos/SchliegerLogo';

const servicesData = [
  {
    id: 0,
    icon: <PanelTop className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "FOTOVOLTAIKA A TEPELNÁ ČERPADLA",
    desc: "Komplexní řešení FVE a TČ s řízením pomocí umělé inteligence.",
    image: "/images/fve-house.png",
    partnerType: 'single',
    partnerLogo: <SchliegerLogo className="h-[20px] w-auto" />,
    stats: "15 let na trhu | 23 000 zákazníků | 2% reklamovanosti"
  },
  {
    id: 1,
    icon: <Home className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "ZATEPLENÍ",
    desc: "Efektivní a profesionální zateplení fasád, střech i stropů",
    image: "/images/zatepleni",    
    partnerType: 'single',
    partnerLogo: <CiperkaLogo className="h-[24px] w-auto" />,
    stats: "15 let na trhu | 23 000 zákazníků | 2% reklamovanosti"
  },
  {
    id: 2,
    icon: <AppWindow className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "OKNA A DVEŘE",
    desc: "Okna a dveře na míru s důrazem na úsporu energie a moderní design",
    image: "/images/oknadvere.png",
    partnerType: 'single',
    partnerLogo: <LumixoLogo className="h-[24px] w-auto" />,
    stats: "15 let na trhu | 23 000 zákazníků | 2% reklamovanosti"
  },
  {
    id: 3,
    icon: <Zap className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "ENERGIE A FINANCOVÁNÍ",
    desc: "Nejlevnější tarify a financování pro snadný doprodej a vaši provizi",
    image: "/images/financovani.png",
    partnerType: 'double',
    doublePartners: [
      {
        label1: "Realizační partner",
        label2: "pro energie:",
        logo: <DomiDomiEnergieLogo className="h-[48px] w-auto ml-3" />
      },
      {
        label1: "Realizační partner",
        label2: "pro finance:",
        logo: <DomiDomiFinanceLogo className="h-[48px] w-auto ml-3" />
      }
    ]
  },
  {
    id: 4,
    icon: <Settings className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "SERVIS A POJIŠTĚNÍ",
    desc: "Doživotní servis a pojistka jako finální argument pro okamžitý podpis",
    image: "/images/servis.png",
    partnerType: 'single',
    partnerLabelOverride: (
      <div className="text-[16px] text-[#374151] leading-snug">
        Realizační partner<br/>
        <span className="font-bold">pro pojištění a servis:</span>
      </div>
    ),
    partnerLogo: <DomiDomiCareLogo className="h-[48px] w-auto ml-3" />,
    stats: null
  }
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeService = servicesData[activeTab];

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-14">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h2 className="font-semibold text-4xl sm:text-5xl tracking-tight text-[#111928] leading-[1.2]">
            Prodávej celý DOMIDOMI <span className="font-extrabold text-[#E30A1A]">ekosystém řešení</span>
          </h2>
          <p className="text-[20px] sm:text-[24px] text-[#111928] max-w-[1160px] leading-relaxed">
            Naše síla spočívá v našem portfoliu služeb. <span className="font-bold text-[#E30A1A]">Upsell / crossell musíš mít v malíčku.</span>
          </p>
          <p className="text-[16px] text-[#374151] leading-relaxed max-w-[1160px]">
            Pomáháme lidem modernizovat jejich domovy a šetřit na energiích – chytře a efektivně. Vždy hledáme to nejlepší řešení pro konkrétní dům. Nabízíme široké spektrum řešení a pro zákazníka představujeme jedinečný "one-stop solution" - všechno na jednom místě.
          </p>
        </div>

        {/* Mobile: Accordion Layout */}
        <div className="flex flex-col gap-3 lg:hidden">
          {servicesData.map((service, idx) => {
            const isActive = activeTab === idx;
            return (
              <div key={service.id} className="w-full">
                <div 
                  onClick={() => setActiveTab(isActive ? -1 : idx)}
                  className={`relative w-full rounded-lg cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white border-[#E30A1A] border-[1.5px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]' 
                      : 'bg-white border-[#E5E7EB] border hover:border-gray-300'
                  }`}
                >
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="size-10 shrink-0 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg flex items-center justify-center p-1">
                        {service.icon}
                      </div>
                      <h3 className={`font-bold text-[20px] uppercase leading-tight ${isActive ? 'text-[#E30A1A]' : 'text-[#111928]'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#374151] text-[16px] leading-relaxed ml-[52px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
                
                {/* Expanded Image for Mobile */}
                {isActive && (
                  <div className="mt-3 relative rounded-lg overflow-hidden min-h-[300px]">
                    {/* Partner Banner */}
                    <div className="absolute bottom-4 left-4 right-4">
                      {service.partnerType === 'single' && (
                        <div className="bg-white rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 flex flex-col gap-2">
                          <div className="flex items-center gap-4">
                            {service.partnerLabelOverride ? (
                              service.partnerLabelOverride
                            ) : (
                              <p className="text-[#374151] text-[14px] whitespace-nowrap">
                                Realizační partner:
                              </p>
                            )}
                            {service.partnerLogo}
                          </div>
                          {service.stats && (
                            <p className="text-[#374151] text-[14px]">
                              {service.stats}
                            </p>
                          )}
                        </div>
                      )}

                      {service.partnerType === 'double' && service.doublePartners && (
                        <div className="flex flex-col gap-3">
                          {service.doublePartners.map((partner, pIdx) => (
                            <div key={pIdx} className="bg-white rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 flex items-center gap-4">
                              <p className="text-[#374151] text-[14px] leading-snug">
                                {partner.label1}<br/>
                                <span className="font-bold">{partner.label2}</span>
                              </p>
                              {partner.logo}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Desktop: Side-by-Side Layout */}
        <div className="hidden lg:flex flex-row gap-8 items-stretch">
          
          {/* Left Column: Tabs */}
          <div className="w-5/12 flex flex-col gap-3 shrink-0">
            {servicesData.map((service, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={service.id}
                  onClick={() => setActiveTab(idx)}
                  onMouseEnter={() => setActiveTab(idx)}
                  className={`relative w-full rounded-lg cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? 'bg-white border-[#E30A1A] border-[1.5px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] z-10' 
                      : 'bg-white border-[#E5E7EB] border hover:border-gray-300'
                  }`}
                >
                  <div className="p-4 flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <div className="size-10 shrink-0 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg flex items-center justify-center p-1">
                        {service.icon}
                      </div>
                      <h3 className={`font-bold text-[20px] sm:text-[24px] uppercase leading-tight ${isActive ? 'text-[#E30A1A]' : 'text-[#111928]'}`}>
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[#374151] text-[16px] leading-relaxed ml-[52px]">
                      {service.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Image and Partner Banner */}
          <div className="w-7/12 relative rounded-lg overflow-hidden shrink-0 flex-1 min-h-[568px]">
            <div className="absolute inset-0">
              <img 
                src={activeService.image} 
                alt={activeService.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Floating Partner Banner */}
            <div className="absolute bottom-6 right-6 left-auto">
              {activeService.partnerType === 'single' && (
                <div className="bg-white rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[18px] py-[16px] flex flex-col gap-2 items-start justify-center">
                  <div className="flex items-center gap-4">
                    {activeService.partnerLabelOverride ? (
                      activeService.partnerLabelOverride
                    ) : (
                      <p className="text-[#374151] text-[16px] whitespace-nowrap">
                        Realizační partner:
                      </p>
                    )}
                    {activeService.partnerLogo}
                  </div>
                  {activeService.stats && (
                    <p className="text-[#374151] text-[16px] whitespace-nowrap pt-1">
                      {activeService.stats}
                    </p>
                  )}
                </div>
              )}

              {activeService.partnerType === 'double' && activeService.doublePartners && (
                <div className="flex flex-row gap-4">
                  {activeService.doublePartners.map((partner, pIdx) => (
                    <div key={pIdx} className="bg-white rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] px-[18px] py-[16px] flex items-center gap-4">
                      <p className="text-[#374151] text-[16px] leading-snug">
                        {partner.label1}<br/>
                        <span className="font-bold">{partner.label2}</span>
                      </p>
                      {partner.logo}
                    </div>
                  ))}
                </div>
              )}
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
};
