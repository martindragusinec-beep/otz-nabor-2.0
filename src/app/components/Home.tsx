import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { WhyUs } from "./WhyUs";
import { Benefits } from "./Benefits";
import { EarningsProof } from "./EarningsProof";
import { PeopleStories } from "./PeopleStories";
import { Stats } from "./Stats";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { CTASection } from "./CTASection";
import { InlineRecruitmentSection } from "./InlineRecruitmentSection";
import { RecruitmentModalProvider } from "./RecruitmentModalContext";

export const Home = () => {
  return (
    <RecruitmentModalProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden flex flex-col relative">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Benefits />
          <EarningsProof />
          <CTASection
            eyebrow="Další krok"
            title="Chceš vědět, jestli je tohle pro tebe?"
            description="Vyplň krátký formulář — bez závazku. Když to dává smysl oběma stranám, navážeme dalším hovorem."
            buttonLabel="Chci se přidat k týmu"
          />
          <WhyUs />
          <PeopleStories />
          <Stats />
          <CTASection
            dark
            eyebrow="Jsi na správné adrese?"
            title="Ověř si to ve formuláři — a uvidíme se u pohovoru."
            description="Projdi krátký formulář — zájem o trh, zkušenosti, řidičák a kontakt. Bez závazku, jen jasný další krok."
            buttonLabel="Otevřít formulář"
          />
          <InlineRecruitmentSection />
          <FAQ />
        </main>
        <Footer />
      </div>
    </RecruitmentModalProvider>
  );
};
