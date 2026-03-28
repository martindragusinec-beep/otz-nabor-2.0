import img from "figma:asset/e07f4f089b2165667a35cc5e0f64ff390174f883.png";

function Frame2() {
  return (
    <div className="bg-[#f9fafb] h-[49px] relative rounded-[8px] shrink-0 w-[50px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[40px] top-1/2" data-name="🇩🇪">
        <img alt="" className="absolute block max-w-none size-full" height="40" src={img} width="40" />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center min-h-px min-w-px relative text-white">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.3] min-w-full relative shrink-0 text-[20px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Umíš německy? Dej nám o sobě vědět!
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rozšiřujeme tým i s B2B obchodníky v německy mluvících zemích.
      </p>
    </div>
  );
}

function IconFrame() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="Icon Frame">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon Frame">
          <g id="Base" />
          <path d="M19 12L5 12" id="Vector" stroke="var(--stroke-0, #111928)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 19L19 12L12 5" id="Vector_2" stroke="var(--stroke-0, #111928)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function SectionButtonIcon() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[42px]" data-name="Section Button Icon">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Section Button Icon">
        <IconFrame />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#e30a1a] content-stretch flex gap-[24px] h-[56px] items-center justify-center overflow-clip pl-[32px] pr-[6px] py-[18px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-name="Button">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chci dělat B2B v Německu
      </p>
      <SectionButtonIcon />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-[#111928] content-stretch flex gap-[20px] items-center p-[20px] relative rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] size-full">
      <Frame2 />
      <Frame />
      <Button />
    </div>
  );
}