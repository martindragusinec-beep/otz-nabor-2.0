import React, { useState } from 'react';
import { PanelTop, Home, AppWindow, Zap, Settings, Activity } from 'lucide-react';
import imgFve from "figma:asset/043a62b9626b1a8f237667680c73da1920f3c00c.png";
import imgZat from "figma:asset/ba75a1fac7c058304153f035748da86c71b02129.png";
import imgOkna from "figma:asset/4250ce923c5b9d7be4dc97feb3c67fd0d88c6378.png";
import imgEnergie from "figma:asset/ad8c0a232e1e17f513868b48f798bd44a6f3da97.png";

const servicesData = [
  {
    id: 0,
    icon: <PanelTop className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "FOTOVOLTAIKA A TEPELNÁ ČERPADLA",
    desc: "Komplexní řešení FVE a TČ s řízením pomocí umělé inteligence.",
    image: imgFve,
    partnerType: 'single',
    partnerLogo: (
      <div className="flex items-center gap-1.5">
        <div className="flex gap-0.5 text-[#DA000F] -ml-1">
           <Activity className="w-6 h-6" strokeWidth={2.5} />
        </div>
        <span className="font-extrabold text-[20px] tracking-tight text-black">SCHLIEGER</span>
      </div>
    ),
    stats: "15 let na trhu | 23 000 zákazníků | 2% reklamovanosti"
  },
  {
    id: 1,
    icon: <Home className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "ZATEPLENÍ",
    desc: "Efektivní a profesionální zateplení fasád, střech i stropů",
    image: imgZat,
    partnerType: 'single',
    partnerLogo: (
      <div className="flex items-center gap-1.5">
        <Home className="w-6 h-6 text-[#FF2500]" strokeWidth={2.5} />
        <span className="font-extrabold text-[20px] tracking-tight text-black">ČIPERKA</span>
      </div>
    ),
    stats: "15 let na trhu | 23 000 zákazníků | 2% reklamovanosti"
  },
  {
    id: 2,
    icon: <AppWindow className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "OKNA A DVEŘE",
    desc: "Okna a dveře na míru s důrazem na úsporu energie a moderní design",
    image: imgOkna,
    partnerType: 'single',
    partnerLogo: (
      <div className="flex items-center gap-1.5">
        <div className="flex items-center gap-0.5 text-[#F0423B]">
          <div className="w-1.5 h-4 bg-current transform -skew-x-12"></div>
          <div className="w-1.5 h-5 bg-current transform -skew-x-12"></div>
          <div className="w-1.5 h-6 bg-current transform -skew-x-12"></div>
        </div>
        <span className="font-extrabold text-[20px] tracking-wide text-black">LUMIXO</span>
      </div>
    ),
    stats: "15 let na trhu | 23 000 zákazníků | 2% reklamovanosti"
  },
  {
    id: 3,
    icon: <Zap className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "ENERGIE A FINANCOVÁNÍ",
    desc: "Nejlevnější tarify a financování pro snadný doprodej a vaši provizi",
    image: imgEnergie,
    partnerType: 'double',
    doublePartners: [
      {
        label1: "Realizační partner",
        label2: "pro energie:",
        logo: (
          <div className="flex flex-col items-start leading-none ml-3">
            <span className="font-extrabold text-[18px] text-black tracking-tight">DOMI</span>
            <span className="font-extrabold text-[18px] text-black tracking-tight flex items-center">DOM<span className="w-2 h-2 bg-[#E30A1A] mx-0.5 inline-block"></span>I</span>
            <span className="text-[8px] font-bold tracking-widest mt-0.5 text-black">ENERGIE</span>
          </div>
        )
      },
      {
        label1: "Realizační partner",
        label2: "pro finance:",
        logo: (
          <div className="flex flex-col items-start leading-none ml-3">
            <span className="font-extrabold text-[18px] text-black tracking-tight">DOMI</span>
            <span className="font-extrabold text-[18px] text-black tracking-tight flex items-center">DOM<span className="w-2 h-2 bg-[#E30A1A] mx-0.5 inline-block"></span>I</span>
            <span className="text-[8px] font-bold tracking-widest mt-0.5 text-black">FINANCE</span>
          </div>
        )
      }
    ]
  },
  {
    id: 4,
    icon: <Settings className="w-5 h-5 text-[#374151]" strokeWidth={1.5} />,
    title: "SERVIS A POJIŠTĚNÍ",
    desc: "Doživotní servis a pojistka jako finální argument pro okamžitý podpis",
    image: "https://images.unsplash.com/photo-1662340701470-fb6aba0ca47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xhciUyMHBhbmVsJTIwd29ya2VyJTIwcm9vZiUyMHRhYmxldHxlbnwxfHx8fDE3NzQ2OTYxMTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    partnerType: 'single',
    partnerLabelOverride: (
      <div className="text-[16px] text-[#374151] leading-snug">
        Realizační partner<br/>
        <span className="font-bold">pro pojištění a servis:</span>
      </div>
    ),
    partnerLogo: (
      <div className="flex flex-col items-start leading-none ml-3">
        <span className="font-extrabold text-[22px] text-black tracking-tight">DOMI</span>
        <span className="font-extrabold text-[22px] text-black tracking-tight flex items-center">DOM<span className="w-2.5 h-2.5 bg-[#E30A1A] mx-0.5 inline-block"></span>I</span>
        <span className="text-[10px] font-bold tracking-widest mt-1 text-black">CARE</span>
      </div>
    ),
    stats: null
  }
];

export const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeService = servicesData[activeTab];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 md:px-12 relative overflow-hidden">
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
            Pomáháme lidem modernizovat jejich domovy a šetřit na energiích – chytře a efektivně. Vždy hledáme to nejlepší řešení pro konkrétní dům. Nabízíme široké spektrum řešení a pro zákazníka představujeme jedinečný “one-stop solution” - všechno na jednom místě.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Tabs */}
          <div className="w-full lg:w-5/12 flex flex-col gap-3 shrink-0">
            {servicesData.map((service, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={service.id}
                  onClick={() => setActiveTab(idx)}
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
          <div className="w-full lg:w-7/12 relative rounded-lg overflow-hidden shrink-0 flex-1 min-h-[400px] lg:min-h-[568px]">
            <div className="absolute inset-0">
              <img 
                src={activeService.image} 
                alt={activeService.title}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            
            {/* Floating Partner Banner */}
            <div className="absolute bottom-5 right-5 sm:bottom-6 sm:right-6 left-5 sm:left-auto">
              {activeService.partnerType === 'single' && (
                <div className="bg-white rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 sm:px-[18px] sm:py-[16px] flex flex-col gap-2 items-start justify-center">
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
                    <p className="text-[#374151] text-[14px] sm:text-[16px] whitespace-nowrap pt-1">
                      {activeService.stats}
                    </p>
                  )}
                </div>
              )}

              {activeService.partnerType === 'double' && activeService.doublePartners && (
                <div className="flex flex-col sm:flex-row gap-4">
                  {activeService.doublePartners.map((partner, pIdx) => (
                    <div key={pIdx} className="bg-white rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 sm:px-[18px] sm:py-[16px] flex items-center gap-4">
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