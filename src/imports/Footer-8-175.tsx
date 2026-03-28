import svgPaths from "./svg-2bvb6w87z2";

function FooterItem() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Footer Item">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Zavolejte nám
      </p>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="phone">
          <path d={svgPaths.p7517c80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FooterItem2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Footer Item">
      <Phone />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[18px] text-white tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        +420 777 888 999
      </p>
    </div>
  );
}

function FooterItem1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer Item">
      <FooterItem2 />
    </div>
  );
}

function FooterColumn() {
  return (
    <div className="bg-[#1f2a37] relative rounded-[8px] self-stretch shrink-0" data-name="Footer Column">
      <div className="content-stretch flex flex-col gap-[24px] h-full items-start p-[24px] relative">
        <FooterItem />
        <FooterItem1 />
      </div>
    </div>
  );
}

function FooterItem3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Footer Item">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Napište nám
      </p>
    </div>
  );
}

function Envelope() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="envelope">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="envelope">
          <g id="Vector">
            <path d={svgPaths.p263ad780} fill="var(--fill-0, white)" />
            <path d={svgPaths.pfdb4f00} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function FooterItem4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Footer Item">
      <Envelope />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[18px] text-white tracking-[0.4px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        info@domidomi.cz
      </p>
    </div>
  );
}

function FooterColumn1() {
  return (
    <div className="bg-[#1f2a37] relative rounded-[8px] self-stretch shrink-0" data-name="Footer Column">
      <div className="content-stretch flex flex-col gap-[24px] h-full items-start p-[24px] relative">
        <FooterItem3 />
        <FooterItem4 />
      </div>
    </div>
  );
}

function FooterText() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Footer Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Pracujte u nás
      </p>
    </div>
  );
}

function FooterText1() {
  return (
    <div className="bg-[#374151] content-stretch flex items-center justify-center px-[12px] py-[8px] relative rounded-[9999px] shrink-0" data-name="Footer Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Aktuálně hledáme obchodníky z oboru
      </p>
    </div>
  );
}

function FooterItem5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Footer Item">
      <FooterText />
      <FooterText1 />
    </div>
  );
}

function FooterText3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Footer Text">
      <p className="[text-decoration-skip-ink:none] decoration-solid font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[15px] text-white underline whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Zobrazit volné pozice
      </p>
    </div>
  );
}

function FooterText2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Footer Text">
      <FooterText3 />
    </div>
  );
}

function IconFrame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Icon Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Frame">
          <g id="Base" />
          <path d="M19 12L5 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 19L19 12L12 5" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function FooterIcon() {
  return (
    <div className="bg-[#e30a1a] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[36px]" data-name="Footer Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Footer Icon">
        <IconFrame />
      </div>
    </div>
  );
}

function FooterItem6() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Footer Item">
      <FooterText2 />
      <FooterIcon />
    </div>
  );
}

function FooterColumn2() {
  return (
    <div className="bg-[#1f2a37] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Footer Column">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-end justify-center p-[24px] relative w-full">
          <FooterItem5 />
          <FooterItem6 />
        </div>
      </div>
    </div>
  );
}

function FooterContent() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Footer Content">
      <FooterColumn />
      <FooterColumn1 />
      <FooterColumn2 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[35.558px] relative shrink-0 w-[64.365px]" data-name="Group">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64.365 35.5581">
        <g id="Group">
          <path d={svgPaths.p2ce78480} fill="var(--fill-0, #E30A1A)" id="Vector" />
          <path d={svgPaths.p1b01b300} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p23ef5b40} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p2c5de380} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p201c90d0} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p17cd2f00} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p111c0b80} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p12112b80} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p4d77e80} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function Linkedin() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Linkedin">
      <div className="absolute inset-[-2.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5 36.5">
          <g id="Linkedin">
            <path clipRule="evenodd" d={svgPaths.pf03bf00} fillRule="evenodd" id="Oval 10 Copy 3" opacity="0.1" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <g id="Footer Social Icon">
              <path d={svgPaths.p13095100} fill="var(--fill-0, white)" id="Oval" />
              <path d={svgPaths.p4113900} fill="var(--fill-0, white)" id="Shape" />
              <path d={svgPaths.p24b35b00} fill="var(--fill-0, white)" id="Shape_2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function Facebook() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Facebook">
      <div className="absolute inset-[-2.14%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36.5 36.5">
          <g id="Facebook">
            <path clipRule="evenodd" d={svgPaths.pf03bf00} fillRule="evenodd" id="Oval 10" opacity="0.1" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
            <path d={svgPaths.p3991b0f0} fill="var(--fill-0, white)" id="Shape" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function FooterSocialIcon2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Footer Social Icon">
      <Linkedin />
      <Facebook />
    </div>
  );
}

function FooterSocialIcon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Footer Social Icon">
      <FooterSocialIcon2 />
    </div>
  );
}

function FooterSocialText() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[694.818px]" data-name="Footer Social Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sledujte nás na sociálních sítích:
      </p>
      <FooterSocialIcon1 />
    </div>
  );
}

function FooterSocialIcon() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Footer Social Icon">
      <Group />
      <FooterSocialText />
    </div>
  );
}

function FooterLegalText() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Footer Legal Text">
      <p className="font-['Open_Sans:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-pre">{`© Copyright 2025© Schlieger -  Všechna práva vyhrazena.  | Ochrana osobních údajů (GDPR)`}</p>
    </div>
  );
}

function FooterLegal() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="Footer Legal">
      <FooterLegalText />
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#e5e7eb] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Společnost Schlieger s.r.o. |IČ 28787803 se sídlem U nákladového nádraží 3265/10, Strašnice, 130 00 Praha 3 | C 385508/MSPH Městský soud v Praze
      </p>
    </div>
  );
}

function FooterSocial() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Footer Social">
      <FooterSocialIcon />
      <div className="h-0 relative shrink-0 w-[1159px]">
        <div className="absolute inset-[-1.5px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1159 1.5">
            <line id="Line 7" stroke="var(--stroke-0, white)" strokeOpacity="0.1" strokeWidth="1.5" x2="1159" y1="0.75" y2="0.75" />
          </svg>
        </div>
      </div>
      <FooterLegal />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#111928] content-stretch flex flex-col gap-[44px] items-start pb-[20px] pt-[60px] px-[60px] relative size-full" data-name="Footer">
      <FooterContent />
      <FooterSocial />
    </div>
  );
}