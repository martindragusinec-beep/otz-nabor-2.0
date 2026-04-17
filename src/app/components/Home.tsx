import React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { WhyUs } from "./WhyUs";
import { Benefits } from "./Benefits";
import { PeopleStories } from "./PeopleStories";
import { Stats } from "./Stats";
import { FAQ } from "./FAQ";
import { Footer } from "./Footer";
import { CTASection } from "./CTASection";
import { RecruitmentModalProvider } from "./RecruitmentModalContext";

export const Home = () => {
  return (
    <RecruitmentModalProvider>
      <div className="min-h-screen bg-white font-sans text-gray-900 overflow-x-hidden flex flex-col relative">
        <Header />
        <main className="flex-grow">
          <Hero />
          <Benefits />
          <PeopleStories />
          <CTASection
            eyebrow="Reálná příležitost"
            title="Zajímají tě podmínky a jestli si budeme sedět?"
            description="Vyplň krátký formulář. Když to bude dávat smysl oběma stranám, navážeme dalším hovorem."
            buttonLabel="Zkusit si to"
          />
          <WhyUs />
          <Stats />
          <CTASection
            dark
            eyebrow="Další krok"
            title="Chceš vědět víc o tom, jak vypadá práce obchodníka u DOMIDOMI?"
            description="Stačí pár odpovědí a můžeme se pobavit konkrétně o tvojí situaci, motivaci i možnostech spolupráce."
            buttonLabel="Přidat se k týmu"
          />
          <FAQ />
        </main>
        <Footer />
      </div>
    </RecruitmentModalProvider>
  );
};