"use client";

import { use, useState } from "react";
import { Lang, CaseContent } from "@/types";
import { starflipEn } from "../../content/cases/starflip-en";
import { starflipRu } from "../../content/cases/starflip-ru";
import { rwaEn } from "../../content/cases/rwa-en";
import { rwaRu } from "../../content/cases/rwa-ru";
import CaseHero from "@/components/cases/CaseHero";
import CaseBlock from "@/components/cases/CaseBlock";
import MobileCaseHero from "@/components/cases/MobileCaseHero";
import MobileCaseBlock from "@/components/cases/MobileCaseBlock";
import MarqueeSection from "@/components/Marquee";
import MobileMarquee from "@/components/MobileMarquee";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import { en } from "../../content/en";
import { ru } from "../../content/ru";
import { useLang } from "@/hooks/useLang";

const VISITOR = "'Visitor TT2 Pro', sans-serif";

const caseColors: Record<string, string> = {
  starflip: "#6cad5e",
  rwa: "#9a38af",
};

const caseImages: Record<string, string[]> = {
  starflip: [
    "/images/cases/starflip/1.png",
    "/images/cases/starflip/2.png",
    "/images/cases/starflip/3.png",
    "/images/cases/starflip/4.png",
  ],
  rwa: [
    "/images/cases/rwa/rwa1.png",
    "/images/cases/rwa/rwa2.png",
    "/images/cases/rwa/rwa3.png",
    "/images/cases/rwa/rwa4.png",
  ],
};

const caseData: Record<string, Record<Lang, CaseContent>> = {
  starflip: { en: starflipEn, ru: starflipRu },
  rwa: { en: rwaEn, ru: rwaRu },
};

export default function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { lang, setLang, mounted } = useLang();

  if (!mounted) return null;

  const t = lang === "en" ? en : ru;

  const currentCase = caseData[slug]?.[lang] ?? starflipEn;
  const color = caseColors[slug] || "#6cad5e";
  const images = caseImages[slug] || [];

  return (
    <div className="relative w-full min-h-screen bg-[#131313] overflow-x-hidden">
      {/* ───── DESKTOP ───── */}
      <div className="hidden md:block relative">
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-100px",
            left: "calc(50vw - 300px)",
            width: "600px",
            height: "600px",
            transform: "rotate(90deg)",
            zIndex: 0,
          }}
        >
          <img
            src="/images/Background photo.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative mx-auto w-[1200px] flex flex-col gap-[150px]">
          <CaseHero
            t={currentCase}
            lang={lang}
            setLang={setLang}
            color={color}
          />

          <p
            className="text-[#aeaeae] text-[25px] leading-normal w-full"
            style={{ fontFamily: "'Classic Console Neue', sans-serif" }}
          >
            {currentCase.description}
          </p>

          {currentCase.sections.map((section, i) => (
            <CaseBlock
              key={i}
              section={section}
              index={i}
              imageSrc={images[i]}
            />
          ))}

          <div className="flex flex-col gap-[20px] w-full">
            {currentCase.github.map((link, i) => (
              <div key={i} className="flex items-center w-full">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aeaeae] text-[40px] hover:opacity-70 transition-opacity"
                  style={{ fontFamily: VISITOR }}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          <MarqueeSection t={t} />
          <Footer t={t} />
        </div>
      </div>

      {/* ───── MOBILE ───── */}
      <div className="block md:hidden">

        <div
          className="absolute top-0 left-0 right-0 pointer-events-none"
          style={{
            height: "max(400px, 85vw)",
            maxWidth: "480px",
            margin: "0 auto",
          }}
        ></div>

        <div
          className="relative mx-auto w-full px-[16px] flex flex-col "
          style={{ maxWidth: "480px" }}
        >
          <MobileCaseHero
            t={currentCase}
            lang={lang}
            setLang={setLang}
            color={color}
          />

          {/* intro */}
          <p
            className="text-[#aeaeae] text-[15px] leading-normal w-full  mt-[15px]"
            style={{ fontFamily: "'Classic Console Neue', sans-serif" }}
          >
            {currentCase.description}
          </p>

          {/* Case blocs */}
          {currentCase.sections.map((section, i) => (
            <div key={i} className="mt-[70px]">
              <MobileCaseBlock
                section={section}
                index={i}
                imageSrc={images[i]}
              />
            </div>
          ))}

          {/* GitHub links */}
          <div className="flex flex-col gap-[15px] w-full  mt-[70px]">
            {currentCase.github.map((link, i) => (
              <div key={i} className="flex items-center w-full">
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#aeaeae] text-[20px] hover:opacity-70 transition-opacity"
                  style={{ fontFamily: VISITOR }}
                >
                  {link.label}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-[70px]">
            <MobileMarquee t={t} />
          </div>
          <div className="mt-[70px]">
            <MobileFooter t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}
