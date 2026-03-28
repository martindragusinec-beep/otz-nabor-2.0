import svgPaths from "./svg-qaq552d7t1";

export default function Form() {
  return (
    <div className="bg-[#111928] content-stretch flex items-center overflow-clip p-[20px] relative rounded-[8px] size-full" data-name="form">
      <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[12px]">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full">
          <div className="content-stretch flex gap-[24px] items-center justify-center relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pb-[16px] relative">
              <div className="bg-[#e5e7eb] h-[16px] mb-[-16px] rounded-[999px] shrink-0 w-full" />
              <div className="bg-[#4ca400] h-[16px] mb-[-16px] rounded-[999px] shrink-0 w-full" />
            </div>
            <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] relative shrink-0 text-[#111827] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              100 %
            </p>
          </div>
          <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full" data-name="Form Simplistic">
            <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-center p-[24px] relative size-full">
                <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px min-w-px relative w-full">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center justify-center min-h-px min-w-px relative w-full">
                    <div className="relative shrink-0 size-[72.15px]">
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72.1499 72.1499">
                        <g id="Frame 1321315494">
                          <path d={svgPaths.p351b2b60} fill="var(--fill-0, white)" />
                          <path d={svgPaths.p4755600} fill="var(--fill-0, #4CA400)" id="Vector" />
                        </g>
                      </svg>
                    </div>
                    <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.2] min-w-full relative shrink-0 text-[#4ca400] text-[36px] text-center tracking-[0.27px] w-[min-content]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Úspěšně odesláno
                    </p>
                    <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.3] relative shrink-0 text-[#111928] text-[20px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
                      Budeme tě kontaktovat v co nejbližší možné době.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="absolute border-2 border-[#4ca400] border-solid inset-[-2px] pointer-events-none rounded-[14px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]" />
          </div>
        </div>
      </div>
    </div>
  );
}