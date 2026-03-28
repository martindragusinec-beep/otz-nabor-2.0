import svgPaths from "./svg-2q3vvqouzy";
import imgEllipse18 from "figma:asset/732206f8f9c194956594eb3933b38a6c1724f437.png";

function SectionListText() {
  return (
    <div className="bg-[#374151] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Section List Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#eee] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Měsíčně
      </p>
    </div>
  );
}

function SectionListItem() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section List Item">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Vydělky obchodníků
      </p>
      <SectionListText />
    </div>
  );
}

function SectionListBar() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Section List Bar">
      <div className="bg-[#374151] h-[10px] mb-[-10px] rounded-[9999px] shrink-0 w-[200px]" data-name="Section List Bar" />
      <div className="bg-white h-[10px] mb-[-10px] rounded-[9999px] shrink-0 w-[94px]" data-name="Section List Bar" />
    </div>
  );
}

function SectionListText1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Section List Text">
      <SectionListBar />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#eee] text-[16px] w-[90px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`    80 000 Kč`}</p>
    </div>
  );
}

function SectionListItem1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section List Item">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#eee] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Průměrný obchodník
      </p>
      <SectionListText1 />
    </div>
  );
}

function SectionListBar1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Section List Bar">
      <div className="bg-[#374151] h-[10px] mb-[-10px] rounded-[9999px] shrink-0 w-[200px]" data-name="Section List Bar" />
      <div className="bg-white h-[10px] mb-[-10px] rounded-[9999px] shrink-0 w-[112px]" data-name="Section List Bar" />
    </div>
  );
}

function SectionListText2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Section List Text">
      <SectionListBar1 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#eee] text-[16px] w-[90px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`  100 000 Kč`}</p>
    </div>
  );
}

function SectionListItem2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section List Item">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#eee] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Dobrý obchodník `}</p>
      <SectionListText2 />
    </div>
  );
}

function SectionListBar2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-name="Section List Bar">
      <div className="bg-[#374151] h-[10px] mb-[-10px] rounded-[9999px] shrink-0 w-[200px]" data-name="Section List Bar" />
      <div className="bg-[#f7d52c] h-[10px] mb-[-10px] rounded-[9999px] shrink-0 w-[192px]" data-name="Section List Bar" />
    </div>
  );
}

function SectionListText3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Section List Text">
      <SectionListBar2 />
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#f7d52c] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        200 000+ Kč
      </p>
    </div>
  );
}

function SectionListItem3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section List Item">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#eee] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Skvělý obchodník
      </p>
      <SectionListText3 />
    </div>
  );
}

function SectionList() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section List">
      <SectionListItem1 />
      <SectionListItem2 />
      <SectionListItem3 />
    </div>
  );
}

function Element1() {
  return <div className="absolute h-[59px] left-[157px] top-[223px] w-[244px]" data-name="Element 04" />;
}

function Element() {
  return <div className="absolute h-[52px] left-[178px] top-[221px] w-[192px]" data-name="Element 01" />;
}

function Top() {
  return (
    <div className="bg-[#111928] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full" data-name="Top">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center p-[24px] relative size-full">
          <SectionListItem />
          <SectionList />
          <p className="font-['Bradley_Hand:Bold',sans-serif] leading-[1.3] not-italic relative shrink-0 text-[#f7d52c] text-[20px] w-[194px]">Průměr po 3 měsících</p>
          <div className="absolute flex h-[76.665px] items-center justify-center left-[378px] top-[198px] w-[85.437px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
            <div className="-scale-y-100 flex-none rotate-[107.77deg]">
              <div className="h-[71.232px] relative w-[57.675px]" data-name="Vector">
                <div className="absolute inset-[-1.4%_-1.73%_-1.4%_-3.01%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 60.4106 73.2325">
                    <path d={svgPaths.p13182380} id="Vector" stroke="var(--stroke-0, #F7D52C)" strokeLinecap="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <Element1 />
          <Element />
        </div>
      </div>
    </div>
  );
}

function SectionListText4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Section List Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#111928] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Provizní systém
      </p>
    </div>
  );
}

function SectionListText6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Section List Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#111928] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        4 %
      </p>
    </div>
  );
}

function SectionListText5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section List Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#111928] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Sazba
      </p>
      <SectionListText6 />
    </div>
  );
}

function SectionListItem4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-full" data-name="Section List Item">
      <div aria-hidden="true" className="absolute border-[#111928] border-b border-solid inset-0 pointer-events-none" />
      <SectionListText5 />
    </div>
  );
}

function SectionListText8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Section List Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#111928] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Měsíčně
      </p>
    </div>
  );
}

function SectionListText7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section List Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#111928] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Výplata
      </p>
      <SectionListText8 />
    </div>
  );
}

function SectionListItem5() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-center justify-between pb-[8px] relative shrink-0 w-[214px]" data-name="Section List Item">
      <div aria-hidden="true" className="absolute border-[#111928] border-b border-solid inset-0 pointer-events-none" />
      <SectionListText7 />
    </div>
  );
}

function SectionListText10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Section List Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[1.5] relative shrink-0 text-[#111928] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Bez omezení
      </p>
    </div>
  );
}

function SectionListText9() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Section List Text">
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] relative shrink-0 text-[#111928] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Limit
      </p>
      <SectionListText10 />
    </div>
  );
}

function SectionListItem6() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[8px] relative shrink-0 w-[214px]" data-name="Section List Item">
      <div aria-hidden="true" className="absolute border-[#111928] border-b border-solid inset-0 pointer-events-none" />
      <SectionListText9 />
    </div>
  );
}

function SectionList1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section List">
      <SectionListItem4 />
      <SectionListItem5 />
      <SectionListItem6 />
    </div>
  );
}

function LeftBottom() {
  return (
    <div className="bg-[#ffe97a] content-stretch flex flex-col gap-[24px] items-start justify-center p-[24px] relative rounded-[8px] shrink-0" data-name="Left Bottom">
      <SectionListText4 />
      <SectionList1 />
    </div>
  );
}

function SectionListText11() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Section List Text">
      <p className="flex-[1_0_0] font-['Open_Sans:Regular',sans-serif] font-normal leading-[1.5] min-h-px min-w-px relative text-[#374151] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>{`"Za 2 roky jsem se dostal na 120 000 Kč měsíčně. Férový systém a skvělý tým."`}</p>
    </div>
  );
}

function SectionListText12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center leading-[1.5] relative shrink-0 whitespace-nowrap" data-name="Section List Text">
      <p className="font-['Open_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[#111928] text-[16px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        LOREM IPSUM
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[#4b5563] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        B2B obchodník, 2 roky
      </p>
    </div>
  );
}

function SectionListItem7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Section List Item">
      <div className="relative shrink-0 size-[42px]">
        <div className="absolute inset-[-2.38%]">
          <img alt="" className="block max-w-none size-full" height="44" src={imgEllipse18} width="44" />
        </div>
      </div>
      <SectionListText12 />
    </div>
  );
}

function RightBottom() {
  return (
    <div className="bg-[#f3f4f6] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] self-stretch" data-name="Right Bottom">
      <div className="content-stretch flex flex-col items-start justify-between p-[24px] relative size-full">
        <SectionListText11 />
        <SectionListItem7 />
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[548px]" data-name="Bottom">
      <LeftBottom />
      <RightBottom />
    </div>
  );
}

function Cards() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-h-px min-w-px relative" data-name="Cards">
      <Top />
      <Bottom />
    </div>
  );
}

export default function Right() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative size-full" data-name="Right">
      <Cards />
    </div>
  );
}