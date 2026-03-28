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

export default function Button() {
  return (
    <div className="bg-[#e30a1a] content-stretch flex gap-[24px] items-center justify-center overflow-clip pl-[32px] pr-[6px] py-[18px] relative rounded-[9999px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] size-full" data-name="Button">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.5] relative shrink-0 text-[16px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Chci obchod, který dává smysl
      </p>
      <SectionButtonIcon />
    </div>
  );
}