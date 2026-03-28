import React from 'react';
import { Phone, Mail, ArrowRight, Linkedin, Facebook } from 'lucide-react';
import { Logo } from './Logo';

export const Footer = () => {
  return (
    <footer className="bg-[#111928] py-12 lg:py-16 px-4 sm:px-6 md:px-12 w-full mt-auto overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        
        {/* Top Section - Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] gap-6 items-stretch">
          
          {/* Column 1 - Phone */}
          <div className="bg-[#1F2A37] rounded-[8px] p-6 lg:p-8 flex flex-col items-start gap-8">
            <div className="bg-white px-5 py-2.5 rounded-full inline-flex items-center justify-center">
              <span className="text-[14px] font-medium text-[#111928]">Zavolejte nám</span>
            </div>
            <a href="tel:+420777888999" className="flex items-center gap-3 mt-auto hover:opacity-80 transition-opacity">
              <Phone className="w-6 h-6 text-white" strokeWidth={1.5} />
              <span className="text-[18px] text-white tracking-wide whitespace-nowrap">+420 777 888 999</span>
            </a>
          </div>

          {/* Column 2 - Email */}
          <div className="bg-[#1F2A37] rounded-[8px] p-6 lg:p-8 flex flex-col items-start gap-8">
            <div className="bg-white px-5 py-2.5 rounded-full inline-flex items-center justify-center">
              <span className="text-[14px] font-medium text-[#111928]">Napište nám</span>
            </div>
            <a href="mailto:info@domidomi.cz" className="flex items-center gap-3 mt-auto hover:opacity-80 transition-opacity">
              <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
              <span className="text-[18px] text-white tracking-wide whitespace-nowrap">info@domidomi.cz</span>
            </a>
          </div>

          {/* Column 3 - Careers */}
          
          
        </div>

        {/* Middle Section - Socials & Logo */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full pt-2">
          
          {/* Logo (DOMI DOMI style approximation) */}
          <div className="shrink-0">
            <Logo className="w-[120px] h-[56px]" fill="#ffffff" arrowFill="#E30A1A" />
          </div>

          {/* Socials */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-[14px] text-white font-medium">Sledujte nás na sociálních sítích:</span>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all group">
                <Linkedin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} fill="currentColor" fillOpacity={0.2} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 transition-all group">
                <Facebook className="w-4 h-4 text-white group-hover:scale-110 transition-transform" strokeWidth={1.5} fill="currentColor" fillOpacity={0.2} />
              </a>
            </div>
          </div>
          
        </div>

        {/* Divider & Bottom Section */}
        <div className="flex flex-col gap-6 pt-2">
          <div className="h-px bg-white/10 w-full"></div>
          
          <div className="flex flex-col gap-2 mt-2">
            <p className="text-[14px] text-white font-medium">
              © Copyright 2025© Schlieger - Všechna práva vyhrazena. | Ochrana osobních údajů (GDPR)
            </p>
            <p className="text-[12px] text-[#9CA3AF] font-normal leading-relaxed max-w-5xl">
              Společnost Schlieger s.r.o. | IČ 28787803 se sídlem U nákladového nádraží 3265/10, Strašnice, 130 00 Praha 3 | C 385508/MSPH Městský soud v Praze
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};