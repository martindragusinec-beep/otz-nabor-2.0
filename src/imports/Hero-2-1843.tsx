import svgPaths from "./svg-58ag6yjnfh";
import imgHero from "figma:asset/8bcaad357dd251d15ad74ecdaad21e2c1dc184ec.png";

function Frame3() {
  return (
    <div className="bg-[#e30a1a] content-stretch flex items-center justify-center p-[12px] relative rounded-[8px] shrink-0">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[0] relative shrink-0 text-[0px] text-white tracking-[-2px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[1.2] text-[48px]">{`Vydělej si až `}</span>
        <span className="font-['Open_Sans:ExtraBold',sans-serif] leading-[1.2] not-italic text-[48px]">200 000+ Kč</span>
      </p>
    </div>
  );
}

function HeroTextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Hero Text Container">
      <Frame3 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] relative shrink-0 text-[56px] text-white tracking-[0.42px] w-[595px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`Hledáme jen `}
        <br aria-hidden="true" />
        {`3 TOP obchodníky `}
        <br aria-hidden="true" />s citem pro cross-sell
      </p>
    </div>
  );
}

function HdlSub() {
  return (
    <div className="content-stretch flex flex-col items-start justify-end relative shrink-0 w-[595px]" data-name="HDL+SUB">
      <HeroTextContainer />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <HdlSub />
    </div>
  );
}

function Frame() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="action">
          <path clipRule="evenodd" d={svgPaths.p336c5900} fill="var(--fill-0, #F7D52C)" fillRule="evenodd" id="checkmark-check-done-verify" />
        </g>
      </svg>
    </div>
  );
}

function HeroSubtext() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex gap-[10px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Hero Subtext">
      <Frame />
      <p className="font-['Open_Sans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Žádné cold calls, dostáváš hotové leady</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="action">
          <path clipRule="evenodd" d={svgPaths.p336c5900} fill="var(--fill-0, #F7D52C)" fillRule="evenodd" id="checkmark-check-done-verify" />
        </g>
      </svg>
    </div>
  );
}

function HeroSubtext1() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex gap-[10px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Hero Subtext">
      <Frame1 />
      <p className="font-['Open_Sans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Prodáváš celý ekosystém řešení</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="overflow-clip relative shrink-0 size-[22px]" data-name="Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="action">
          <path clipRule="evenodd" d={svgPaths.p336c5900} fill="var(--fill-0, #F7D52C)" fillRule="evenodd" id="checkmark-check-done-verify" />
        </g>
      </svg>
    </div>
  );
}

function HeroSubtext2() {
  return (
    <div className="backdrop-blur-[5px] content-stretch flex gap-[10px] items-center pl-[8px] pr-[12px] py-[8px] relative rounded-[999px] shrink-0" data-name="Hero Subtext">
      <Frame2 />
      <p className="font-['Open_Sans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[18px] text-white whitespace-nowrap">Nemáš strop na provizi</p>
    </div>
  );
}

function HeroSubtextContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-[591px]" data-name="Hero Subtext Container">
      <HeroSubtext />
      <HeroSubtext1 />
      <HeroSubtext2 />
    </div>
  );
}

function Hdl() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0" data-name="HDL">
      <Frame4 />
      <HeroSubtextContainer />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 text-center whitespace-nowrap">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#111928] text-[0px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.2] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Máš na to u nás pracovat?
        </span>
        <span className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.2] text-[20px]" style={{ fontVariationSettings: "'wdth' 100" }}>{` `}</span>
        <span className="font-['Open_Sans:ExtraBold',sans-serif] leading-[1.2] not-italic text-[#4ca400] text-[20px]">Ověř si!</span>
      </p>
      <p className="font-['Open_Sans:Medium',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#374151] text-[14px]">Zabere ti to max. 2 minuty</p>
    </div>
  );
}

function FormOptionItem() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Form Option Item">
      <button className="bg-white block cursor-pointer relative rounded-[100px] shrink-0 size-[24px]" data-name="Form element / Radiobutton">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </button>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#111827] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Méně než rok
      </p>
    </div>
  );
}

function FormOption() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Form Option">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <FormOptionItem />
        </div>
      </div>
    </div>
  );
}

function FormOptionItem1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Form Option Item">
      <button className="bg-white block cursor-pointer relative rounded-[100px] shrink-0 size-[24px]" data-name="Form element / Radiobutton">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </button>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#111827] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1 - 2 roky
      </p>
    </div>
  );
}

function FormOption1() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Form Option">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <FormOptionItem1 />
        </div>
      </div>
    </div>
  );
}

function FormOptionItem2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Form Option Item">
      <button className="bg-white block cursor-pointer relative rounded-[100px] shrink-0 size-[24px]" data-name="Form element / Radiobutton">
        <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[100px]" />
      </button>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#111827] text-[18px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Více než 3 roky
      </p>
    </div>
  );
}

function FormOption2() {
  return (
    <div className="bg-white relative rounded-[6px] shrink-0 w-full" data-name="Form Option">
      <div aria-hidden="true" className="absolute border border-[#d1d5db] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[16px] relative w-full">
          <FormOptionItem2 />
        </div>
      </div>
    </div>
  );
}

function FormOptions() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Form Options">
      <FormOption />
      <FormOption1 />
      <FormOption2 />
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full" data-name="Form">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] relative shrink-0 text-[#111928] text-[18px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Jak dlouho se věnuješ obchodu?
      </p>
      <FormOptions />
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Form">
      <Form1 />
    </div>
  );
}

function FormSimplistic() {
  return (
    <div className="bg-[#f9fafb] relative rounded-[4px] shrink-0 w-full" data-name="Form Simplistic">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center p-[20px] relative w-full">
          <Form />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#4ca400] border-solid inset-[-2px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function FormContainer() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0 w-[445px]" data-name="Form Container">
      <Frame6 />
      <FormSimplistic />
      <div className="absolute flex h-[66.737px] items-center justify-center left-[385px] top-[33.5px] w-[40.802px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[-168.9deg]">
          <div className="h-[62.248px] relative w-[29.371px]" data-name="Vector">
            <div className="absolute inset-[-2.41%_-5.11%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.3715 65.248">
                <path d={svgPaths.p299ac480} id="Vector" stroke="var(--stroke-0, #4CA400)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormAndVideoContainer() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-[445px]" data-name="Form and Video Container">
      <FormContainer />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col h-full items-end justify-end relative shrink-0">
      <FormAndVideoContainer />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1160px]" data-name="Top">
      <Hdl />
      <div className="flex flex-row items-center self-stretch">
        <Frame5 />
      </div>
    </div>
  );
}

function Hero1() {
  return (
    <div className="content-stretch flex flex-col h-[619px] items-center justify-between overflow-clip px-[60px] py-[64px] relative shrink-0 w-[1160px]" data-name="Hero">
      <Top />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col h-[619px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Hero1 />
    </div>
  );
}

export default function Hero() {
  return (
    <div className="content-stretch flex flex-col items-center px-[60px] relative size-full" data-name="Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute bg-[#f9fafb] inset-0" />
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgHero} />
        <div className="absolute inset-0" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1280 619\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(84.75 -39.6 71.563 154.09 105.5 581.5)\\'><stop stop-color=\\'rgba(17,25,40,1)\\' offset=\\'0.13432\\'/><stop stop-color=\\'rgba(16,24,38,0.96154)\\' offset=\\'0.44712\\'/><stop stop-color=\\'rgba(8,12,19,0.48077)\\' offset=\\'0.72356\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      </div>
      <Container />
    </div>
  );
}