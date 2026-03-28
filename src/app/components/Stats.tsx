import React from 'react';
import { ArrowRight, Rocket, Clock, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';
import svgPaths from "../../imports/svg-2q3vvqouzy";

export const Stats = () => {
  return (
    <section className="bg-[#f8fafc] py-20 lg:py-32 px-4 sm:px-6 md:px-12 border-y border-gray-100 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Side: Copy & Benefits */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#111928] text-xs sm:text-sm font-bold tracking-wide mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Proč do toho jít s námi
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            Co znamená práce obchodníka pro <span className="text-[#111928]">DOMIDOMI</span> v číslech?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
            Nenabízíme jistotu fixního platu, nabízíme ti vstupenku na cestu neomezených příjmů a absolutní svobody.
          </p>

          <ul className="space-y-4">
            {[
              { text: 'Žádný limit výdělku', icon: <Rocket className="text-[#E30A1A] w-6 h-6" /> },
              { text: 'Flexibilní pracovní doba', icon: <Clock className="text-[#111928] w-6 h-6" /> },
              { text: 'Pracuješ odkud chceš', icon: <Briefcase className="text-gray-500 w-6 h-6" /> }
            ].map((item, i) => (
              <motion.li 
                key={i} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-center gap-4 group"
              >
                <div className="flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="font-bold text-gray-900 text-base sm:text-lg">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right Side: Bento Cards */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-5"
        >
          {/* Top Card: Earnings */}
          <div className="bg-[#111928] text-white rounded-3xl p-6 sm:p-8 lg:p-10 pb-16 sm:pb-28 lg:pb-28 shadow-2xl relative">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Výdělky obchodníků</h3>
              <div className="bg-[#374151] px-4 py-1.5 rounded-full text-[#eee] text-sm font-medium">
                Měsíčně
              </div>
            </div>
            
            <div className="space-y-8 relative">
              {[
                { label: 'Průměrný obchodník', value: '80 000 Kč', progress: 'w-[45%]', bg: 'bg-white' },
                { label: 'Dobrý obchodník', value: '100 000 Kč', progress: 'w-[55%]', bg: 'bg-white' },
                { label: 'Skvělý obchodník', value: '200 000+ Kč', progress: 'w-[90%]', bg: 'bg-[#f7d52c]', color: 'text-[#f7d52c]' }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 sm:gap-6 relative z-20 w-full">
                  <span className={`text-[14px] sm:text-base font-semibold w-[140px] sm:w-[160px] shrink-0 ${stat.color ? 'text-white' : 'text-[#eee]'}`}>
                    {stat.label}
                  </span>
                  <div className="flex-1 h-2.5 bg-[#374151] rounded-full overflow-hidden shrink-0">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: stat.progress.match(/w-\[(.*?)\]/)?.[1] || '0%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 + (i * 0.2), ease: "easeOut" }}
                      className={`h-full ${stat.bg} rounded-full`} 
                    />
                  </div>
                  <span className={`font-semibold text-[15px] sm:text-lg w-[85px] sm:w-[110px] text-right shrink-0 whitespace-nowrap ${stat.color || 'text-[#eee]'}`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Handwritten Arrow & Text */}
            <div className="hidden sm:block absolute right-[25%] lg:right-[30%] bottom-3 lg:bottom-4 z-10 pointer-events-none">
              <div className="flex items-end gap-2 relative">
                <p className="font-['Bradley_Hand',cursive] font-normal text-[#f7d52c] text-[20px] lg:text-[22px] transform -rotate-6 absolute -left-[180px] lg:-left-[200px] bottom-1 whitespace-nowrap text-left">
                  Průměr po 3 měsících
                </p>
                <div className="w-[50px] h-[60px] lg:w-[60px] lg:h-[73px] transform -scale-y-100 rotate-[108deg]">
                  <svg className="w-full h-full block" fill="none" viewBox="0 0 60.4106 73.2325" preserveAspectRatio="none">
                    <path d={svgPaths.p13182380} stroke="#F7D52C" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards: Commission & Review */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Commission System */}
            <div className="bg-[#ffe97a] rounded-3xl p-6 sm:p-8 flex flex-col justify-center">
              <h4 className="text-[#111928] font-bold text-xl mb-6 tracking-tight">Provizní systém</h4>
              <div className="space-y-3">
                {[
                  { label: 'Sazba', value: '4 %' },
                  { label: 'Výplata', value: 'Měsíčně' },
                  { label: 'Limit', value: 'Bez omezení' }
                ].map((row, i) => (
                  <div key={i} className="flex justify-between items-center border-b border-[#111928]/10 pb-3 last:border-0 last:pb-0">
                    <span className="text-[#111928] text-base">{row.label}</span>
                    <span className="text-[#111928] font-semibold text-base">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Review */}
            <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
              <p className="text-gray-700 text-[15px] leading-relaxed mb-6 italic">
                "Za 2 roky jsem se dostal na 120 000 Kč měsíčně. Férový systém a skvělý tým."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gray-200 object-cover object-top shadow-sm border border-gray-100 flex items-center justify-center text-2xl font-bold text-gray-500">
                  T
                </div>
                <div>
                  <h5 className="font-bold text-[#111928] text-sm">Tomáš Novák</h5>
                  <p className="text-gray-500 text-xs">B2B obchodník, 2 roky</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};