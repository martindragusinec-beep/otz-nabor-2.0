import React from 'react';

const YellowCheckIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7 shrink-0 drop-shadow-sm" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22ZM15.8202 8.44116C16.147 8.01955 16.0706 7.41164 15.649 7.0848C15.2274 6.75797 14.6195 6.83445 14.2926 7.25606L9.81308 13.0335L7.75133 10.7303C7.38202 10.3178 6.74838 10.2829 6.33591 10.6522C5.92344 11.0215 5.88856 11.6551 6.25787 12.0676L9.00787 15.139C9.20038 15.3541 9.47525 15.4805 9.76451 15.4851C10.0538 15.4897 10.3327 15.3719 10.5317 15.1648L15.8202 8.44116Z" fill="#F7D52C"/>
  </svg>
);

const experienceOptions = [
  { id: 'exp1', value: 'less_than_year', label: 'Méně než rok' },
  { id: 'exp2', value: '1_2_years', label: '1 - 2 roky' },
  { id: 'exp3', value: 'more_than_3', label: 'Více než 3 roky' }
];

export const Hero = () => {
  const handleExperienceSelect = (value: string) => {
    // Save to localStorage
    localStorage.setItem('heroFormData', JSON.stringify({ salesExperience: value }));
    
    // Scroll to LeadBanner form
    setTimeout(() => {
      const leadBanner = document.getElementById('lead-banner-form');
      if (leadBanner) {
        leadBanner.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 300);
  };

  return (
    <section className="relative w-full bg-[#111928] text-white overflow-hidden min-h-[auto] lg:min-h-[700px] flex flex-col justify-center py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16">
      <style>{`
        @keyframes drawArrowDown {
          0% { stroke-dashoffset: 1; opacity: 0; }
          100% { stroke-dashoffset: 0; opacity: 1; }
        }
      `}</style>
      
      {/* Background Layer */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#f9fafb]" />
        <img 
          alt="Rodinný dům na pozadí" 
          className="absolute w-full h-full object-cover object-center lg:object-[80%_center] opacity-90" 
          src="/assets/hero-bg.png"
        />
        {/* Gradient overlays to ensure text readability on all screen sizes */}
        {/* Mobile: Top to bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111928] via-[#111928]/90 to-[#111928]/40 lg:hidden" />
        {/* Desktop: Left to right gradient */}
        <div className="absolute inset-0 hidden lg:block bg-gradient-to-r from-[#111928] via-[#111928]/95 via-30% to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-8">
        
        {/* Left Column - Content */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 w-full lg:w-3/5">
          
          {/* Red Badge */}
          <div className="bg-[#E30A1A] text-white px-5 py-3 sm:px-6 sm:py-4 rounded-xl shadow-xl shadow-red-500/20 w-full sm:inline-block sm:w-auto" style={{ animation: 'gentleGlow 3s ease-in-out infinite' }}>
            <h2 className="font-semibold leading-tight tracking-tight text-center sm:text-left">
              <span className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] opacity-90">Vydělej si až </span>
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tighter whitespace-nowrap">200 000+ Kč</span>
            </h2>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-bold leading-[1.15] sm:leading-[1.1] tracking-tight max-w-[700px] text-white drop-shadow-md">
            Hledáme jen <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">3 TOP obchodníky</span> <br className="hidden sm:block" />
            s citem pro cross-sell
          </h1>

          {/* Value Proposition List */}
          <ul className="flex flex-col gap-3 sm:gap-4 mt-2 sm:mt-4">
            {[
              'Žádné cold calls, dostáváš hotové leady',
              'Prodáváš celý ekosystém řešení',
              'Nemáš strop na provizi'
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 sm:gap-4 w-full">
                <div className="mt-0.5">
                  <YellowCheckIcon />
                </div>
                <span className="font-medium text-base sm:text-xl lg:text-2xl text-white/95 leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column - Form Card */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end mt-4 lg:mt-0">
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl w-full max-w-[460px] relative text-center border border-gray-100">
            
            {/* Top Text Header */}
            <div className="flex flex-col gap-1.5 items-center mb-6">
              <h3 className="text-[#111928] text-xl sm:text-2xl leading-tight text-center">
                <span className="font-bold">Máš na to u nás pracovat?</span>
                <br />
                <span className="font-black text-[#4ca400] uppercase tracking-wide">Ověř si!</span>
              </h3>
              <p className="font-medium text-[#4b5563] text-sm sm:text-base">Zabere ti to max. 2 minuty</p>
            </div>

            {/* Inner Form Wrapper with Green Border */}
            <div className="bg-[#f8fafc] p-5 sm:p-7 rounded-2xl border-2 border-[#4ca400] relative w-full flex flex-col items-center shadow-inner mt-2">
              
              <div className="w-full flex flex-col items-center mb-5">
                <h4 className="font-bold text-[#111928] text-[18px] sm:text-[20px] leading-snug text-center">
                  Jak dlouho se věnuješ obchodu?
                </h4>
                
                {/* Clean Vertical Animated Arrow */}
                <div className="mt-4 mb-2 h-[40px] flex items-center justify-center pointer-events-none">
                  <svg 
                    width="24" 
                    height="40" 
                    viewBox="0 0 24 40" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 2L12 38M12 38L4 30M12 38L20 30" 
                      stroke="#4CA400" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      strokeDasharray="1"
                      pathLength="1"
                      style={{ animation: 'drawArrowDown 1.5s ease-in-out infinite', strokeDashoffset: 1 }}
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-3 w-full relative z-20">
                {experienceOptions.map((option) => (
                  <label 
                    key={option.id} 
                    htmlFor={option.id}
                    className="group bg-white border-2 border-[#e5e7eb] rounded-xl p-4 sm:p-5 flex items-center gap-4 cursor-pointer hover:border-[#4ca400]/60 hover:bg-[#f0fdf4]/50 transition-all duration-200 w-full relative shadow-sm has-[:checked]:border-[#4ca400] has-[:checked]:bg-[#f0fdf4] has-[:checked]:shadow-md"
                  >
                    <input 
                      type="radio" 
                      id={option.id}
                      name="hero_experience" 
                      className="peer sr-only"
                      onChange={() => handleExperienceSelect(option.value)}
                    />
                    {/* Custom Radio Button */}
                    <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 border-gray-300 flex items-center justify-center group-hover:border-[#4ca400] peer-checked:border-[#4ca400] peer-checked:border-[7px] transition-all duration-200 bg-white shrink-0 shadow-inner"></div>
                    <span className="font-semibold text-[#374151] peer-checked:text-[#111928] text-base sm:text-lg text-left leading-tight w-full transition-colors duration-200">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
