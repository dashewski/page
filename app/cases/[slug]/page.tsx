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
    "/images/cases/rwa/rwa-liquidity.webp",
    "/images/cases/rwa/rwa3.png",
    "/images/cases/rwa/rwa-portfolio.webp",
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
        <div className="relative mx-auto w-[1200px] flex flex-col gap-[120px]">
          <CaseHero t={currentCase} lang={lang} setLang={setLang} />

          <div className="flex flex-col gap-[100px] w-[720px] self-center">
            <p
              className="text-[#aeaeae] text-[26px] leading-relaxed w-full"
              style={{ fontFamily: "'Chakra Petch', sans-serif" }}
            >
              {currentCase.description}
            </p>

            {currentCase.sections.map((section, i) => (
              <CaseBlock
                key={i}
                section={section}
                index={i}
                imageSrc={images[i]}
                color={color}
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-[20px] w-full">
            {currentCase.github.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[40px] px-[24px] w-full last:odd:col-span-2 flex items-center justify-center bg-[#6cad5e] no-underline cursor-pointer
                  shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
                  hover:bg-[#5a9e4c]
                  active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
                  transition-all"
              >
                <span
                  className="text-[#2c2c2c] text-[30px] leading-none whitespace-nowrap"
                  style={{ fontFamily: VISITOR }}
                >
                  {link.label}
                </span>
              </a>
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
          <MobileCaseHero t={currentCase} lang={lang} setLang={setLang} />

          {/* intro */}
          <p
            className="text-[#aeaeae] text-[18px] leading-relaxed w-full mt-[40px]"
            style={{ fontFamily: "'Chakra Petch', sans-serif" }}
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
                color={color}
              />
            </div>
          ))}

          {/* GitHub links */}
          <div className="flex flex-col gap-[12px] w-full mt-[70px]">
            {currentCase.github.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[36px] px-[12px] py-[6px] flex items-center justify-center bg-[#6cad5e] no-underline cursor-pointer
                  shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
                  hover:bg-[#5a9e4c]
                  active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
                  transition-all"
              >
                <span
                  className="text-[#2c2c2c] text-[20px] leading-tight text-center"
                  style={{ fontFamily: VISITOR }}
                >
                  {link.label}
                </span>
              </a>
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
