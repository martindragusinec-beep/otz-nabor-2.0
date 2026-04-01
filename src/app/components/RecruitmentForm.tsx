import React, { useState } from 'react';
import { Logo } from './Logo';
import svgPaths from '../../imports/svg-569q2duhdy';

// Types
interface FormData {
  hasDrivingLicense: string;
  travelWillingness: string;
  icoWillingness: string;
  desiredIncome: string;
  salesExperience: string;
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

const WEBHOOK_URL = 'https://hook.eu1.make.com/l5t9g2zh9a1emivilr30m041cgn0t4o6'; // Replace with actual webhook URL

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

  const options = [
    { value: 'less_than_year', label: 'Méně než rok' },
    { value: '1_2_years', label: '1 - 2 roky' },
    { value: 'more_than_3', label: 'Více než 3 roky' }
  ];

  const handleSelect = (value: string) => {
    setSelected(value);
    // Auto-advance after selection with longer delay for visual feedback
    setTimeout(() => {
      onNext({ salesExperience: value });
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col gap-6 items-center w-full">
        <p className="font-normal text-xl text-[#111928] text-center">
          Jak dlouho už děláš v obchodu?
        </p>
        <div className="flex flex-col gap-4 w-full">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              disabled={selected !== '' && selected !== option.value}
              className={`w-full rounded-md border p-4 text-left transition-all ${
                selected === option.value
                  ? 'bg-[rgba(76,164,0,0.1)] border-[#4ca400]'
                  : 'bg-white border-[#9ca3af] hover:border-gray-400'
              } ${selected !== '' && selected !== option.value ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  selected === option.value ? 'bg-[#4ca400] border-[#4ca400]' : 'bg-white border-[#e5e7eb]'
                }`}>
                  {selected === option.value && (
                    <div className="w-3 h-3 rounded-full bg-white" />
                  )}
                </div>
                <span className="text-lg text-[#111827]">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-auto pt-4">
        <p className="text-sm text-[#4b5563] text-center">
          Výběrem automaticky pokračujete na další krok
        </p>
      </div>
    </div>
  );
};

const Step2: React.FC<StepProps> = ({ onNext, onBack, formData }) => {
  const [selected, setSelected] = useState(formData.hasDrivingLicense || '');

  const options = [
    { value: 'yes', label: 'Ano, mám řídičský průkaz sk. B' },
    { value: 'no', label: 'Ne, nemám řídičský průkaz sk. B' }
  ];

  const handleSelect = (value: string) => {
    setSelected(value);
    setTimeout(() => {
      onNext({ hasDrivingLicense: value });
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <p className="font-normal text-xl text-[#111928] text-center">
            Máš platný řidičský průkaz sk. B a jsi aktivní řidič/ka?
          </p>
          <div className="flex flex-col gap-4 w-full">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                disabled={selected !== '' && selected !== option.value}
                className={`w-full rounded-md border p-4 text-left transition-all ${
                  selected === option.value
                    ? 'bg-[rgba(76,164,0,0.1)] border-[#4ca400]'
                    : 'bg-white border-[#9ca3af] hover:border-gray-400'
                } ${selected !== '' && selected !== option.value ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selected === option.value ? 'bg-[#4ca400] border-[#4ca400]' : 'bg-white border-[#e5e7eb]'
                  }`}>
                    {selected === option.value && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-lg text-[#111827]">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-8">
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

  const options = [
    { value: 'region_only', label: 'Pouze v daném regionu' },
    { value: 'whole_country', label: 'Po celé ČR' },
    { value: 'germany', label: 'Do Německa' }
  ];

  const handleSelect = (value: string) => {
    setSelected(value);
    setTimeout(() => {
      onNext({ travelWillingness: value });
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <p className="font-normal text-xl text-[#111928] text-center">
            Kam až jsi ochotný cestovat za klienty?
          </p>
          <div className="flex flex-col gap-4 w-full">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                disabled={selected !== '' && selected !== option.value}
                className={`w-full rounded-md border p-4 text-left transition-all ${
                  selected === option.value
                    ? 'bg-[rgba(76,164,0,0.1)] border-[#4ca400]'
                    : 'bg-white border-[#9ca3af] hover:border-gray-400'
                } ${selected !== '' && selected !== option.value ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                    selected === option.value ? 'bg-[#4ca400] border-[#4ca400]' : 'bg-white border-[#e5e7eb]'
                  }`}>
                    {selected === option.value && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-lg text-[#111827]">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-8">
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

  const options = [
    { value: 'yes', label: 'Ano, bez problémů' },
    { value: 'no', label: 'Ne, dělá mi to problém' }
  ];

  const handleSelect = (value: string) => {
    setSelected(value);
    setTimeout(() => {
      onNext({ icoWillingness: value });
    }, 600);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center">
        <div className="flex flex-col gap-6 items-center w-full">
          <p className="font-normal text-xl text-[#111928] text-center">
            Jsi ochoten pracovat na IČO?
          </p>
          <div className="flex flex-col gap-4 w-full">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(option.value)}
                className={`w-full rounded-md border p-4 text-left transition-all ${
                  selected === option.value
                    ? 'bg-[rgba(16,185,129,0.05)] border-[#4ca400]'
                    : 'bg-white border-[#9ca3af] hover:border-gray-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selected === option.value ? 'bg-[#4ca400] border-[#4ca400]' : 'bg-white border-[#e5e7eb]'
                  }`}>
                    {selected === option.value && (
                      <div className="w-3 h-3 rounded-full bg-white" />
                    )}
                  </div>
                  <span className="text-lg text-[#111827]">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-auto pt-8">
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
          <p className="font-normal text-xl text-[#111928] text-center">
            Kolik si chceš průměrně měsíčně vydělat?
          </p>
          <div className="w-full rounded-md border border-[#9ca3af] bg-white">
            <div className="flex items-center justify-between p-4">
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="Napište částku"
                className="flex-1 text-lg outline-none placeholder:text-[#9ca3af]"
                required
              />
              <span className="text-lg text-[#111928] ml-4">Kč</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto flex gap-4 pt-8">
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
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
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
    <form onSubmit={handleSubmit} className="flex flex-col h-full gap-8">
      <div className="flex flex-col gap-6">
        <p className="font-normal text-xl text-[#111928] text-center">
          Kde Vás můžeme kontaktovat?
        </p>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#9ca3af]">
              Jméno a příjmení<span className="text-[#ff8080]">*</span>
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="např. Jan Novák"
              className="w-full p-4 border border-[#9ca3af] rounded-md text-lg placeholder:text-[#9ca3af] outline-none focus:border-[#4ca400]"
              required
            />
          </div>
          <div className="flex gap-6">
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs text-[#9ca3af]">
                Telefonní číslo<span className="text-[#ff8080]">*</span>
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(formatPhoneInput(e.target.value))}
                placeholder="+420 123 456 789"
                className="w-full p-4 border border-[#9ca3af] rounded-md text-lg placeholder:text-[#9ca3af] outline-none focus:border-[#4ca400]"
                maxLength={16}
                required
              />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <label className="text-xs text-[#9ca3af]">
                PSČ<span className="text-[#ff8080]">*</span>
              </label>
              <input
                type="text"
                value={zipCode}
                onChange={(e) => setZipCode(formatZipCodeInput(e.target.value))}
                placeholder="123 45"
                className="w-full p-4 border border-[#9ca3af] rounded-md text-lg placeholder:text-[#9ca3af] outline-none focus:border-[#4ca400]"
                inputMode="numeric"
                autoComplete="postal-code"
                maxLength={6}
                required
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-[#9ca3af]">
              E-mailová adresa<span className="text-[#ff8080]">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="např. email@email.cz"
              className="w-full p-4 border border-[#9ca3af] rounded-md text-lg placeholder:text-[#9ca3af] outline-none focus:border-[#4ca400]"
              required
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4">
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
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
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
    <div className="flex flex-col items-center justify-center gap-6 flex-1">
      <div className="w-[72px] h-[72px] bg-[#4ca400] rounded-full flex items-center justify-center">
        <svg className="w-12 h-12" fill="none" viewBox="0 0 48 48">
          <path d="M40 14L18 36L8 26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-4xl text-[#4ca400] text-center tracking-wide">
        Úspěšně odesláno
      </p>
      <p className="text-xl text-[#111928] text-center">
        Budeme tě kontaktovat v co nejbližší možné době.
      </p>
    </div>
  );
};

// Main Form Component
export const RecruitmentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    hasDrivingLicense: '',
    travelWillingness: '',
    icoWillingness: '',
    desiredIncome: '',
    salesExperience: '',
    fullName: '',
    phone: '',
    email: '',
    zipCode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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
      // Send to webhook
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...finalData,
          travelWillingnessLabel: TRAVEL_WILLINGNESS_LABELS[finalData.travelWillingness] || finalData.travelWillingness,
          timestamp: new Date().toISOString(),
          source: 'recruitment_form'
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
    <div className="bg-[#111928] rounded-xl p-8 flex gap-8 items-center min-h-[600px] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-[114.73px] top-[-344.74px] w-[1664px] h-[1664px] rotate-[15.75deg] pointer-events-none">
        <div className="relative w-full h-full">
          <svg className="absolute inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1144.59 995.49">
            <path d={svgPaths.p10eb1780} fill="#E30A1A" />
          </svg>
        </div>
      </div>

      {/* Left side - Branding */}
      <div className="flex-1 flex flex-col gap-14 h-full relative z-10">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-semibold text-white tracking-tight leading-[1.2]">
            Začni vydělávat<br />už dnes
          </h1>
          {/* Yellow arrow */}
          <div className="absolute left-[296px] top-[164px]">
            <svg className="w-[100px] h-[123px] -scale-y-100 rotate-[-178deg]" fill="none" viewBox="0 0 104.695 126.548">
              <path d={svgPaths.p3ebfe600} stroke="#F7D52C" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <Logo variant="light" />
        </div>
      </div>

      {/* Right side - Form */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-[646px] h-[459px] flex flex-col gap-6 relative z-10">
        {/* Progress bar */}
        <div className="flex items-center gap-6">
          <div className="flex-1 h-4 bg-[#e5e7eb] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4ca400] rounded-full transition-all duration-300"
              style={{ width: `${progressWidth}%` }}
            />
          </div>
          <span className="text-sm text-[#111827]">{progressWidth} %</span>
        </div>

        {/* Form content */}
        <div className="flex-1 bg-white rounded border-2 border-[#4ca400] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] p-6 overflow-auto">
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
  );
};