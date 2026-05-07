"use client";

import { useEffect } from "react";
import { en } from "./content/en";
import { ru } from "./content/ru";

import Hero from "@/components/Hero";
import ContactBlock from "@/components/ContactBlock";
import AboutInfo from "@/components/AboutInfo";
import Examples from "@/components/Examples";
import Services from "@/components/Services";
import MarqueeSection from "@/components/Marquee";
import Footer from "@/components/Footer";

import MobileHero from "@/components/MobileHero";
import MobileContactBlock from "@/components/MobileContactBlock";
import MobileAboutInfo from "@/components/MobileAboutInfo";
import MobileExamples from "@/components/MobileExamples";
import MobileServices from "@/components/MobileServices";
import MobileMarquee from "@/components/MobileMarquee";
import MobileFooter from "@/components/MobileFooter";

import { useLang } from "@/hooks/useLang";

export default function Page() {
  const { lang, setLang, mounted } = useLang();

  useEffect(() => {
    if (!mounted) return
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }, [mounted])

  if (!mounted) return null;

  const t = lang === "en" ? en : ru;

  return (
    <div className="relative w-full min-h-screen bg-[#131313] overflow-x-hidden">
      {/* ───── DESKTOP ───── */}
      <div className="hidden md:block relative">
        <div
          className="absolute top-0 pointer-events-none"
          style={{
            left: "calc(50vw - 600px)",
            width: "850px",
            height: "943px",
          }}
        >
          <img
            src="/images/Background photo.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative mx-auto w-[1200px] flex flex-col gap-[170px]">
          <Hero t={t} lang={lang} setLang={setLang} />
          <ContactBlock t={t} variant="inline" />
          <AboutInfo t={t} />
          <Examples t={t} />
          <Services t={t} />
          <MarqueeSection t={t} />
          <Footer t={t} />
        </div>
      </div>

      {/* ───── MOBILE ───── */}
      <div className="block md:hidden">
        <div className="relative mx-auto w-full" style={{ maxWidth: "480px" }}>
          <div
            className="absolute top-0 left-0 right-0 pointer-events-none"
            style={{ height: "max(500px, 50vw)" }}
          >
            <img
              src="/images/Background photo.svg"
              alt=""
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="relative w-full px-[16px] flex flex-col gap-[75px]">
            <MobileHero t={t} lang={lang} setLang={setLang} />
            <MobileContactBlock t={t} />
            <MobileAboutInfo t={t} />
            <MobileExamples t={t} />
            <MobileServices t={t} />
            <MobileMarquee t={t} />
            <MobileFooter t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}