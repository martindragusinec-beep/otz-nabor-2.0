import React, { useMemo, useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

interface FormData {
  marketShareInterest: string;
  salesExperience: string;
  hasDrivingLicense: string;
  fullName: string;
  phone: string;
  email: string;
}

const WEBHOOK_URL = 'https://hook.eu1.make.com/l5t9g2zh9a1emivilr30m041cgn0t4o6';
const RECAPTCHA_SITE_KEY =
  (import.meta as ImportMeta & { env?: Record<string, string | undefined> }).env?.VITE_RECAPTCHA_SITE_KEY ??
  '6LdEc7osAAAAAN0XQCNAGxQjerYVhMwz4U31oHBP';
const RECAPTCHA_SCRIPT_ID = 'google-recaptcha-v3';

const pushJobsFormSentEvent = () => {
  if (typeof window === 'undefined') return;
  const win = window as Window & { dataLayer?: Array<Record<string, unknown>> };
  win.dataLayer?.push({ event: 'jobs_form_sent' });
};

const loadRecaptchaScript = () =>
  new Promise<void>((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is not available'));
      return;
    }

    if ((window as Window & { grecaptcha?: unknown }).grecaptcha) {
      resolve();
      return;
    }

    const existing = document.getElementById(RECAPTCHA_SCRIPT_ID) as HTMLScriptElement | null;
    if (existing) {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Failed to load reCAPTCHA script')), { once: true });
      return;
    }

    const script = document.createElement('script');
    script.id = RECAPTCHA_SCRIPT_ID;
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load reCAPTCHA script'));
    document.head.appendChild(script);
  });

const getRecaptchaToken = async () => {
  if (typeof window === 'undefined') return '';
  await loadRecaptchaScript();

  const win = window as Window & {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  };

  if (!win.grecaptcha) throw new Error('reCAPTCHA is not available');

  return new Promise<string>((resolve, reject) => {
    win.grecaptcha?.ready(async () => {
      try {
        const token = await win.grecaptcha!.execute(RECAPTCHA_SITE_KEY, { action: 'recruitment_form_submit' });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  });
};

const formatPhoneInput = (value: string) => {
  const trimmed = value.trimStart();
  const hasLeadingPlus = trimmed.startsWith('+');
  const digits = value.replace(/\D/g, '');
  const formatLocal = (localDigits: string) =>
    [localDigits.slice(0, 3), localDigits.slice(3, 6), localDigits.slice(6, 9)].filter(Boolean).join(' ');

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

const steps = [
  {
    key: 'marketShareInterest',
    title: 'O jaký podíl trhu máš zájem?',
    description: 'Zajímá nás, jakou ambici do spolupráce přinášíš.',
    options: [
      { value: 'side_income', label: 'Chci rozumný start a vedlejší příjem' },
      { value: 'strong_region', label: 'Chci si vybudovat silnou pozici v regionu' },
      { value: 'top_performer', label: 'Chci patřit mezi top obchodníky' },
    ],
  },
  {
    key: 'salesExperience',
    title: 'Máš zkušenosti s obchodem?',
    description: 'Nejde jen o roky praxe. Zajímá nás i drive a chuť dělat dobrý obchod.',
    options: [
      { value: 'none', label: 'Jsem na začátku' },
      { value: 'some', label: 'Mám první zkušenosti' },
      { value: 'advanced', label: 'Obchodu se věnuju delší dobu' },
    ],
  },
  {
    key: 'hasDrivingLicense',
    title: 'Máš řidičák sk. B?',
    description: 'Práce je z velké části v terénu, proto je aktivní řízení důležité.',
    options: [
      { value: 'yes', label: 'Ano, mám a aktivně řídím' },
      { value: 'no', label: 'Ne, momentálně neřídím' },
    ],
  },
] as const;

export const RecruitmentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    marketShareInterest: '',
    salesExperience: '',
    hasDrivingLicense: '',
    fullName: '',
    phone: '',
    email: '',
  });

  const progress = useMemo(() => {
    if (isSuccess) return 100;
    return Math.round(((currentStep + 1) / (steps.length + 1)) * 100);
  }, [currentStep, isSuccess]);

  const currentQuizStep = steps[currentStep];
  const isContactStep = currentStep >= steps.length;

  const handleOptionSelect = (value: string) => {
    if (!currentQuizStep) return;
    setFormData((prev) => ({ ...prev, [currentQuizStep.key]: value }));
    window.setTimeout(() => setCurrentStep((prev) => prev + 1), 140);
  };

  const handleBack = () => {
    if (isSuccess) return;
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const recaptchaToken = await getRecaptchaToken();
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
          recaptchaAction: 'recruitment_form_submit',
          timestamp: new Date().toISOString(),
          source: 'recruitment_form',
        }),
      });

      if (!response.ok) throw new Error('Submission failed');
      pushJobsFormSentEvent();
      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Došlo k chybě při odesílání formuláře. Zkuste to prosím znovu.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#0F1728] shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:rounded-[28px] lg:max-h-[min(720px,calc(100vh-56px))]">
      {isSuccess ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center gap-5 bg-white px-5 text-center sm:min-h-[520px] sm:px-6 lg:min-h-[560px]">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5BA318] text-white shadow-lg">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-[#111928]">Děkujeme, máme to.</h2>
            <p className="mx-auto max-w-md text-base leading-7 text-[#4B5563] sm:text-lg">
              Ozveme se ti co nejdřív a domluvíme další krok pohovoru.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[350px_minmax(0,1fr)]">
          <div className="border-b border-white/10 bg-[#111928] px-4 py-4 text-white sm:px-6 sm:py-6 lg:border-b-0 lg:border-r lg:px-6 lg:py-6">
            <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E30A1A] sm:text-sm sm:tracking-[0.18em]">Náborový formulář DOMIDOMI</div>
            <h2 className="mt-2 text-[22px] font-bold leading-tight sm:mt-4 sm:text-3xl lg:text-[30px]">
              Máš na to u nás pracovat?
              <br />
              Ověř si to!
            </h2>
            <p className="mt-2 text-[12px] leading-5 text-white/72 sm:mt-4 sm:text-[14px] sm:leading-6">
              Krátký formulář na 2 minuty, díky kterému rychle zjistíme, jestli si budeme sedět.
            </p>

            <div className="mt-5 sm:mt-8">
              <div className="mb-2.5 flex items-center justify-between text-[13px] font-semibold text-white/75 sm:mb-3 sm:text-sm">
                <span>Průběh</span>
                <span>{progress} %</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-[#5BA318] transition-all duration-300" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>

          <div className="bg-[#F4F7FB] p-4 sm:p-6 lg:p-8 xl:p-9">
            {isContactStep ? (
              <form onSubmit={handleSubmit} className="flex min-h-0 flex-col rounded-[22px] bg-white px-4 py-5 sm:rounded-[24px] sm:px-6 sm:py-6 lg:min-h-[472px] lg:px-8">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#E30A1A]">Poslední krok</div>
                  <h3 className="mt-2.5 max-w-[620px] text-[22px] font-bold leading-tight text-[#111928] sm:mt-3 sm:text-[32px]">Nech nám na sebe kontakt.</h3>
                  <p className="mt-2 text-[14px] leading-5.5 text-[#4B5563] sm:mt-3 sm:text-base sm:leading-7">Pokud si budeme sedět, ozveme se ti a domluvíme termín rozhovoru.</p>
                </div>

                <div className="mt-6 grid gap-3.5 sm:mt-8 sm:gap-4">
                  <input value={formData.fullName} onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))} placeholder="Jméno a příjmení" className="w-full rounded-2xl border border-[#D7DFEA] bg-[#F8FAFC] px-4 py-3.5 text-[15px] text-[#111928] outline-none transition-all focus:border-[#111928]/30 focus:ring-4 focus:ring-[#111928]/5 sm:py-4 sm:text-base" required />
                  <input value={formData.phone} onChange={(e) => setFormData((prev) => ({ ...prev, phone: formatPhoneInput(e.target.value) }))} placeholder="Telefon" className="w-full rounded-2xl border border-[#D7DFEA] bg-[#F8FAFC] px-4 py-3.5 text-[15px] text-[#111928] outline-none transition-all focus:border-[#111928]/30 focus:ring-4 focus:ring-[#111928]/5 sm:py-4 sm:text-base" inputMode="tel" required />
                  <input value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} placeholder="E-mail" type="email" className="w-full rounded-2xl border border-[#D7DFEA] bg-[#F8FAFC] px-4 py-3.5 text-[15px] text-[#111928] outline-none transition-all focus:border-[#111928]/30 focus:ring-4 focus:ring-[#111928]/5 sm:py-4 sm:text-base" required />
                </div>

                <div className="mt-6 flex flex-col gap-2.5 pt-4 sm:mt-auto sm:gap-3 sm:pt-8 sm:flex-row sm:items-center sm:justify-between">
                  <button type="button" onClick={handleBack} className="order-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#D7DFEA] bg-white px-5 py-3.5 text-sm font-semibold text-[#4B5563] transition-all hover:border-[#B6C2D2] hover:bg-[#F8FAFC] sm:order-1 sm:w-auto sm:py-4">
                    <ArrowLeft className="h-4 w-4" />
                    Zpět
                  </button>
                  <button type="submit" disabled={isSubmitting} className="order-1 w-full rounded-2xl bg-[#E30A1A] px-6 py-3.5 text-sm font-bold uppercase tracking-[0.04em] text-white transition-all hover:bg-[#C90816] disabled:cursor-not-allowed disabled:opacity-60 sm:order-2 sm:w-auto sm:py-4">
                    {isSubmitting ? 'Odesílám...' : 'Odeslat a rezervovat termín pohovoru'}
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex min-h-0 flex-col rounded-[22px] bg-white px-4 py-5 sm:rounded-[24px] sm:px-6 sm:py-6 lg:min-h-[472px] lg:px-9">
                <div>
                  <div className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#E30A1A] sm:text-sm sm:tracking-[0.18em]">Krok {currentStep + 1} ze 4</div>
                  <h3 className="mt-2 max-w-[760px] text-[22px] font-bold leading-[1.14] tracking-tight text-[#111928] sm:mt-3 sm:text-[32px] lg:text-[36px]">
                    {currentQuizStep.title}
                  </h3>
                  <p className="mt-2 max-w-[720px] min-h-[38px] text-[14px] leading-5.5 text-[#4B5563] sm:mt-3 sm:min-h-[56px] sm:text-base sm:leading-7">{currentQuizStep.description}</p>
                </div>

                <div className="mt-6 grid max-w-[760px] gap-2.5 sm:mt-8 sm:gap-3">
                  {currentQuizStep.options.map((option) => {
                    const isSelected = formData[currentQuizStep.key] === option.value;
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => handleOptionSelect(option.value)}
                        className={`flex min-h-[62px] w-full items-center gap-3 rounded-2xl border-2 px-3.5 py-3.5 text-left transition-all duration-200 sm:min-h-[72px] sm:gap-4 sm:px-5 sm:py-4 ${
                          isSelected
                            ? 'border-[#111928] bg-[#EEF3F9] shadow-sm'
                            : 'border-[#E5E7EB] bg-[#F8FAFC] hover:border-[#111928]/30 hover:bg-white'
                        }`}
                      >
                        <div className={`flex h-5.5 w-5.5 shrink-0 items-center justify-center rounded-full border-2 bg-white sm:h-6 sm:w-6 ${isSelected ? 'border-[#111928] border-[6px] sm:border-[7px]' : 'border-[#D1D5DB]'}`} />
                        <span className="text-[15px] font-semibold leading-5.5 text-[#111928] sm:text-[18px] sm:leading-7">{option.label}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col gap-2.5 pt-4 sm:mt-auto sm:gap-3 sm:pt-8 sm:flex-row sm:items-center sm:justify-between">
                  {currentStep > 0 ? (
                    <button type="button" onClick={handleBack} className="order-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#D7DFEA] bg-white px-5 py-3.5 text-sm font-semibold text-[#4B5563] transition-all hover:border-[#B6C2D2] hover:bg-[#F8FAFC] sm:order-1 sm:w-auto sm:py-4">
                      <ArrowLeft className="h-4 w-4" />
                      Zpět
                    </button>
                  ) : null}
                  <div className="order-1 text-center text-[13px] text-[#6B7280] sm:order-2 sm:text-left sm:text-sm">Výběrem automaticky pokračuješ dál</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
