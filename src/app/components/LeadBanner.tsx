import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './Logo';

// Types
interface FormData {
  salesExperience: string;
  hasDrivingLicense: string;
  travelWillingness: string;
  icoWillingness: string;
  desiredIncome: string;
  fullName: string;
  phone: string;
  email: string;
  zipCode: string;
}

interface StepProps {
  onNext: (data: Partial<FormData>) => void;
  onBack: () => void;
  formData: FormData;
}

const WEBHOOK_URL = 'https://hook.eu1.make.com/l5t9g2zh9a1emivilr30m041cgn0t4o6';

const TRAVEL_WILLINGNESS_LABELS: Record<string, string> = {
  region_only: 'Pouze v daném regionu',
  whole_country: 'Po celé ČR',
  germany: 'Do Německa'
};

const pushJobsFormSentEvent = () => {
  if (typeof window === 'undefined') return;
  const win = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  win.dataLayer?.push({
    event: 'jobs_form_sent'
  });
};

const formatZipCodeInput = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 5);
  if (digits.length <= 3) return digits;
  return `${digits.slice(0, 3)} ${digits.slice(3)}`;
};

const formatPhoneInput = (value: string) => {
  const trimmed = value.trimStart();
  const hasLeadingPlus = trimmed.startsWith('+');
  const digits = value.replace(/\D/g, '');
  const formatLocal = (localDigits: string) => [localDigits.slice(0, 3), localDigits.slice(3, 6), localDigits.slice(6, 9)].filter(Boolean).join(' ');

  // Normalize duplicated country code prefixes like +420 420 ...
  const stripRepeatedCzPrefix = (inputDigits: string) => inputDigits.replace(/^(?:420)+/, '');

  if (hasLeadingPlus) {
    const local = stripRepeatedCzPrefix(digits).slice(0, 9);
    return local ? `+420 ${formatLocal(local)}` : '+420';
  }

  if (digits.startsWith('420') && digits.length > 9) {
    const local = stripRepeatedCzPrefix(digits).slice(0, 9);
    return local ? `+420 ${formatLocal(local)}` : '+420';
  }

  return formatLocal(digits.slice(0, 9));
};

// Step Components
const Step1: React.FC<StepProps> = ({ onNext, formData }) => {
  const [selected, setSelected] = useState(formData.salesExperience || '');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update selected when formData changes (when coming back)
  useEffect(() => {
    setSelected(formData.salesExperience || '');
  }, [formData.salesExperience]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const options = [
    { value: 'less_than_year', label: 'Méně než rok' },
    { value: '1_2_years', label: '1 - 2 roky' },
    { value: 'more_than_3', label: 'Více než 3 roky' }
  ];

  const handleSelect = (value: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setSelected(value);
    
    // Set new timeout - shorter for instant feel
    timeoutRef.current = setTimeout(() => {
      onNext({ salesExperience: value });
    }, 200);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-6 items-center w-full">
        <h3 className="text-[18px] sm:text-[20px] font-bold text-center text-[#111928]">
          Jak dlouho už děláš v obchodu?
        </h3>
        
        <div className="flex flex-col gap-3 w-full">
          {options.map((option) => {
            const isSelected = selected === option.value;
            return (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                type="button"
                className={`w-full flex items-center p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-200 border-2 shadow-sm ${
                  isSelected 
                    ? 'border-[#4ca400] bg-[#f0fdf4] shadow-md' 
                    : 'border-[#e5e7eb] bg-white hover:border-[#4ca400]/60 hover:bg-[#f0fdf4]/50'
                }`}
              >
                <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-200 bg-white shadow-inner ${
                  isSelected ? 'border-2 border-[#4ca400] border-[7px]' : 'border-2 border-gray-300'
                }`}>
                </div>
                
                <span className={`text-base sm:text-lg font-semibold text-left transition-colors duration-200 ${
                  isSelected ? 'text-[#111928]' : 'text-[#374151]'
                }`}>
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-auto pt-4">
        <p className="text-center text-[12px] text-gray-500 font-medium">
          Výběrem automaticky pokračujete na další krok
        </p>
      </div>
    </div>
  );
};

const Step2: React.FC<StepProps> = ({ onNext, onBack, formData }) => {
  const [selected, setSelected] = useState(formData.hasDrivingLicense || '');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update selected when formData changes (when coming back)
  useEffect(() => {
    setSelected(formData.hasDrivingLicense || '');
  }, [formData.hasDrivingLicense]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const options = [
    { value: 'yes', label: 'Ano, mám řídičský průkaz sk. B' },
    { value: 'no', label: 'Ne, nemám řídičský průkaz sk. B' }
  ];

  const handleSelect = (value: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setSelected(value);
    
    // Set new timeout - shorter for instant feel
    timeoutRef.current = setTimeout(() => {
      onNext({ hasDrivingLicense: value });
    }, 200);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-center text-[#111928]">
            Máš platný řidičský průkaz sk. B a jsi aktivní řidič/ka?
          </h3>
          
          <div className="flex flex-col gap-3 w-full">
            {options.map((option) => {
              const isSelected = selected === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  type="button"
                  className={`w-full flex items-center p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-200 border-2 shadow-sm ${
                    isSelected 
                      ? 'border-[#4ca400] bg-[#f0fdf4] shadow-md' 
                      : 'border-[#e5e7eb] bg-white hover:border-[#4ca400]/60 hover:bg-[#f0fdf4]/50'
                  }`}
                >
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-200 bg-white shadow-inner ${
                    isSelected ? 'border-2 border-[#4ca400] border-[7px]' : 'border-2 border-gray-300'
                  }`}>
                  </div>
                  
                  <span className={`text-base sm:text-lg font-semibold text-left transition-colors duration-200 ${
                    isSelected ? 'text-[#111928]' : 'text-[#374151]'
                  }`}>
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-6">
        <button
          onClick={onBack}
          className="px-5 py-3 border-2 border-[#e5e7eb] rounded-lg text-[#6b7280] hover:bg-gray-50 hover:border-gray-300 transition-all text-[14px] font-medium"
        >
          ← Zpět
        </button>
      </div>
    </div>
  );
};

const Step3: React.FC<StepProps> = ({ onNext, onBack, formData }) => {
  const [selected, setSelected] = useState(formData.travelWillingness || '');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update selected when formData changes (when coming back)
  useEffect(() => {
    setSelected(formData.travelWillingness || '');
  }, [formData.travelWillingness]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const options = [
    { value: 'region_only', label: 'Pouze v daném regionu' },
    { value: 'whole_country', label: 'Po celé ČR' },
    { value: 'germany', label: 'Do Německa' }
  ];

  const handleSelect = (value: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setSelected(value);
    
    // Set new timeout - shorter for instant feel
    timeoutRef.current = setTimeout(() => {
      onNext({ travelWillingness: value });
    }, 200);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-center text-[#111928]">
            Kam až jsi ochotný cestovat za klienty?
          </h3>
          
          <div className="flex flex-col gap-3 w-full">
            {options.map((option) => {
              const isSelected = selected === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  type="button"
                  className={`w-full flex items-center p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-200 border-2 shadow-sm ${
                    isSelected 
                      ? 'border-[#4ca400] bg-[#f0fdf4] shadow-md' 
                      : 'border-[#e5e7eb] bg-white hover:border-[#4ca400]/60 hover:bg-[#f0fdf4]/50'
                  }`}
                >
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-200 bg-white shadow-inner ${
                    isSelected ? 'border-2 border-[#4ca400] border-[7px]' : 'border-2 border-gray-300'
                  }`}>
                  </div>
                  
                  <span className={`text-base sm:text-lg font-semibold text-left transition-colors duration-200 ${
                    isSelected ? 'text-[#111928]' : 'text-[#374151]'
                  }`}>
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-6">
        <button
          onClick={onBack}
          className="px-5 py-3 border-2 border-[#e5e7eb] rounded-lg text-[#6b7280] hover:bg-gray-50 hover:border-gray-300 transition-all text-[14px] font-medium"
        >
          ← Zpět
        </button>
      </div>
    </div>
  );
};

const Step4: React.FC<StepProps> = ({ onNext, onBack, formData }) => {
  const [selected, setSelected] = useState(formData.icoWillingness || '');
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Update selected when formData changes (when coming back)
  useEffect(() => {
    setSelected(formData.icoWillingness || '');
  }, [formData.icoWillingness]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const options = [
    { value: 'yes', label: 'Ano, bez problémů' },
    { value: 'no', label: 'Ne, dělá mi to problém' }
  ];

  const handleSelect = (value: string) => {
    // Clear any existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setSelected(value);
    
    // Set new timeout - shorter for instant feel
    timeoutRef.current = setTimeout(() => {
      onNext({ icoWillingness: value });
    }, 200);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <h3 className="text-[18px] sm:text-[20px] font-bold text-center text-[#111928]">
            Jsi ochoten pracovat na IČO?
          </h3>
          
          <div className="flex flex-col gap-3 w-full">
            {options.map((option) => {
              const isSelected = selected === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  type="button"
                  className={`w-full flex items-center p-4 sm:p-5 rounded-xl cursor-pointer transition-all duration-200 border-2 shadow-sm ${
                    isSelected 
                      ? 'border-[#4ca400] bg-[#f0fdf4] shadow-md' 
                      : 'border-[#e5e7eb] bg-white hover:border-[#4ca400]/60 hover:bg-[#f0fdf4]/50'
                  }`}
                >
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0 mr-4 transition-all duration-200 bg-white shadow-inner ${
                    isSelected ? 'border-2 border-[#4ca400] border-[7px]' : 'border-2 border-gray-300'
                  }`}>
                  </div>
                  
                  <span className={`text-base sm:text-lg font-semibold text-left transition-colors duration-200 ${
                    isSelected ? 'text-[#111928]' : 'text-[#374151]'
                  }`}>
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-6">
        <button
          onClick={onBack}
          className="px-5 py-3 border-2 border-[#e5e7eb] rounded-lg text-[#6b7280] hover:bg-gray-50 hover:border-gray-300 transition-all text-[14px] font-medium"
        >
          ← Zpět
        </button>
      </div>
    </div>
  );
};

const Step5: React.FC<StepProps> = ({ onNext, onBack, formData }) => {
  const [income, setIncome] = useState(formData.desiredIncome || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (income) {
      onNext({ desiredIncome: income });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <h3 className="text-[17px] font-medium text-center text-[#111928]">
            Kolik si chceš průměrně měsíčně vydělat?
          </h3>
          
          <div className="w-full rounded-md border border-[#9ca3af] bg-white">
            <div className="flex items-center justify-between p-4">
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="Napište částku"
                className="flex-1 text-[15px] outline-none placeholder:text-[#9ca3af]"
                required
              />
              <span className="text-[15px] text-[#111928] ml-4 font-medium">Kč</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto flex gap-3 pt-6">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-3 border-2 border-[#e5e7eb] rounded-lg text-[#6b7280] hover:bg-gray-50 hover:border-gray-300 transition-all text-[14px] font-medium"
        >
          ← Zpět
        </button>
        <button
          type="submit"
          className="flex-1 bg-[#5BA318] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#4a8b13] transition-all text-[15px] flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <span>Pokračovat</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24">
            <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L19 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
};

const Step6: React.FC<Pick<StepProps, 'onBack' | 'formData'> & { onSubmit: (data: Partial<FormData>) => void }> = ({ onSubmit, onBack, formData }) => {
  const [fullName, setFullName] = useState(formData.fullName || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [email, setEmail] = useState(formData.email || '');
  const [zipCode, setZipCode] = useState(formData.zipCode || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ fullName, phone, email, zipCode });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-5">
        <h3 className="text-[19px] sm:text-[21px] font-bold text-center text-[#111928]">
          Kde Vás můžeme kontaktovat?
        </h3>
        
        <div className="flex flex-col gap-4">
          {/* Full Name Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] text-[#374151] font-semibold">
              Jméno a příjmení <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Jan Novák"
              className="w-full px-4 py-3.5 border-2 border-[#e5e7eb] rounded-lg text-[15px] placeholder:text-[#9ca3af] outline-none focus:border-[#5BA318] focus:ring-2 focus:ring-[#5BA318]/20 transition-all"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone Input */}
            <div className="flex flex-col gap-2 sm:col-span-1">
              <label className="text-[13px] text-[#374151] font-semibold">
                Telefonní číslo <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="tel"
                autoComplete="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
                placeholder="+420 123 456 789"
                className="w-full px-4 py-3.5 border-2 border-[#e5e7eb] rounded-lg text-[15px] placeholder:text-[#9ca3af] outline-none focus:border-[#5BA318] focus:ring-2 focus:ring-[#5BA318]/20 transition-all"
                maxLength={16}
                required
              />
            </div>

            {/* ZIP Input */}
            <div className="flex flex-col gap-2 sm:col-span-1">
              <label className="text-[13px] text-[#374151] font-semibold">
                PSČ <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="postal-code"
                autoComplete="postal-code"
                inputMode="numeric"
                value={zipCode}
                onChange={(e) => setZipCode(formatZipCodeInput(e.target.value))}
                placeholder="123 45"
                className="w-full px-4 py-3.5 border-2 border-[#e5e7eb] rounded-lg text-[15px] placeholder:text-[#9ca3af] outline-none focus:border-[#5BA318] focus:ring-2 focus:ring-[#5BA318]/20 transition-all"
                maxLength={6}
                required
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[13px] text-[#374151] font-semibold">
              E-mailová adresa <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vas.email@gmail.com"
              className="w-full px-4 py-3.5 border-2 border-[#e5e7eb] rounded-lg text-[15px] placeholder:text-[#9ca3af] outline-none focus:border-[#5BA318] focus:ring-2 focus:ring-[#5BA318]/20 transition-all"
              required
            />
          </div>
        </div>

        {/* GDPR Notice */}
        <p className="text-[12px] text-[#6b7280] text-center leading-relaxed mt-1">
          Odesláním souhlasíte se{' '}
          <a 
            href="/ochrana-osobnich-udaju" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5BA318] hover:text-[#4a8b13] underline font-medium transition-colors"
          >
            zpracováním osobních údajů
          </a>
          .
        </p>
      </div>
      
      {/* Action Buttons */}
      <div className="flex gap-3 mt-6 pt-4 border-t border-gray-100">
        <button
          type="button"
          onClick={onBack}
          className="px-5 py-3 border-2 border-[#e5e7eb] rounded-lg text-[#6b7280] hover:bg-gray-50 hover:border-gray-300 transition-all text-[14px] font-medium"
        >
          ← Zpět
        </button>
        <button
          type="submit"
          className="flex-1 bg-[#5BA318] text-white px-5 py-3 rounded-lg font-semibold hover:bg-[#4a8b13] transition-all text-[15px] flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
        >
          <span>Odeslat</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
            <path d="M19 12L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 19L19 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </form>
  );
};

const SuccessStep: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 flex-1 py-8">
      <div className="w-[60px] h-[60px] bg-[#5BA318] rounded-full flex items-center justify-center">
        <svg className="w-10 h-10" fill="none" viewBox="0 0 48 48">
          <path d="M40 14L18 36L8 26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-3xl text-[#5BA318] text-center font-semibold">
        Úspěšně odesláno
      </p>
      <p className="text-[15px] text-[#111928] text-center">
        Budeme tě kontaktovat v co nejbližší možné době.
      </p>
    </div>
  );
};

// Main Component
export const LeadBanner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    salesExperience: '',
    hasDrivingLicense: '',
    travelWillingness: '',
    icoWillingness: '',
    desiredIncome: '',
    fullName: '',
    phone: '',
    email: '',
    zipCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Check for data from Hero form on mount and periodically
  React.useEffect(() => {
    const checkHeroData = () => {
      const heroData = localStorage.getItem('heroFormData');
      if (heroData) {
        try {
          const parsed = JSON.parse(heroData);
          if (parsed.salesExperience) {
            setFormData(prev => ({ ...prev, salesExperience: parsed.salesExperience }));
            setCurrentStep(2); // Start from step 2
            localStorage.removeItem('heroFormData'); // Clear after use
          }
        } catch (error) {
          console.error('Error parsing hero form data:', error);
        }
      }
    };

    // Check immediately on mount
    checkHeroData();

    // Listen for storage events (in case data is set from Hero)
    const interval = setInterval(checkHeroData, 100);

    // Cleanup after 3 seconds
    const timeout = setTimeout(() => {
      clearInterval(interval);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  const totalSteps = 6;
  const progressPercentages = [14, 28, 42, 56, 70, 95, 100];

  const handleNext = (data: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (data: Partial<FormData>) => {
    setIsSubmitting(true);
    const finalData = { ...formData, ...data };
    setFormData(finalData);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...finalData,
          travelWillingnessLabel: TRAVEL_WILLINGNESS_LABELS[finalData.travelWillingness] || finalData.travelWillingness,
          timestamp: new Date().toISOString(),
          source: 'lead_banner_form'
        })
      });

      if (response.ok) {
        pushJobsFormSentEvent();
        setIsSuccess(true);
        setCurrentStep(7);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Došlo k chybě při odesílání formuláře. Zkuste to prosím znovu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressWidth = progressPercentages[currentStep - 1];

  return (
    <section className="bg-[#f0f4f8] py-12 sm:py-16 lg:py-20 px-4 overflow-hidden flex justify-center">
      <div className="w-full max-w-[1280px] mx-auto bg-[#111928] rounded-[16px] relative flex flex-col sm:flex-row overflow-hidden shadow-[0_15px_40px_-15px_rgba(0,0,0,0.3)]">
        
        {/* Background red polygon */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="absolute w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 100 100">
            <polygon points="50,0 100,0 100,100 35,100" fill="#E30A1A" />
          </svg>
        </div>

        {/* Left Side - Text */}
        <div className="w-full sm:w-[45%] p-8 sm:p-10 lg:p-14 flex flex-col justify-between relative z-10">
          <h2 className="text-[32px] sm:text-[38px] lg:text-[46px] font-semibold text-white leading-[1.1] tracking-[-0.02em]">
            Vydělávej až <span className="text-[#FFE142] whitespace-nowrap">200 000 Kč</span> měsíčně už dnes
          </h2>
          
          {/* Logo - only on larger screens, at the bottom */}
          <div className="mt-8 hidden lg:block">
            <Logo className="w-[160px] h-[75px]" fill="#ffffff" arrowFill="#E30A1A" />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full sm:w-[55%] p-6 sm:p-8 lg:p-12 xl:p-16 flex items-center justify-center relative z-10">
          <div className="bg-white rounded-[8px] shadow-xl w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px] xl:max-w-[480px] p-4 sm:p-5 lg:p-6 flex flex-col min-h-[480px]">
            
            {/* Progress Bar */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
              <div className="flex-1 h-2.5 sm:h-3 bg-[#e5e7eb] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#5BA318] rounded-full transition-all duration-300" 
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
              <span className="text-[11px] sm:text-[12px] font-medium text-[#111928] min-w-[30px] sm:min-w-[32px]">{progressWidth} %</span>
            </div>

            {/* Inner Green Form Box */}
            <div className="border-[2px] border-[#5BA318] rounded-[8px] p-4 sm:p-5 lg:p-6 xl:p-8 relative bg-white flex-1 flex flex-col overflow-auto">
              {!isSuccess ? (
                <>
                  {currentStep === 1 && <Step1 onNext={handleNext} onBack={handleBack} formData={formData} />}
                  {currentStep === 2 && <Step2 onNext={handleNext} onBack={handleBack} formData={formData} />}
                  {currentStep === 3 && <Step3 onNext={handleNext} onBack={handleBack} formData={formData} />}
                  {currentStep === 4 && <Step4 onNext={handleNext} onBack={handleBack} formData={formData} />}
                  {currentStep === 5 && <Step5 onNext={handleNext} onBack={handleBack} formData={formData} />}
                  {currentStep === 6 && <Step6 onSubmit={handleSubmit} onBack={handleBack} formData={formData} />}
                </>
              ) : (
                <SuccessStep />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};