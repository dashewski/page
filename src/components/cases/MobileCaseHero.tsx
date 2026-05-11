"use client";

import { CaseContent, Lang } from "@/types";

const VISITOR = "'Visitor TT2 Pro', sans-serif";
const CHAKRA = "'Chakra Petch', sans-serif";

interface MobileCaseHeroProps {
  t: CaseContent;
  lang: Lang;
  setLang: (lang: Lang) => void;
  color: string;
}

export default function MobileCaseHero({
  t,
  lang,
  setLang,
  color,
}: MobileCaseHeroProps) {
  return (
    <section className="flex flex-col pt-[20px] w-full">
      {/* Lang switcher */}
      <div className="flex justify-end w-full mb-[30px]">
        <div
          className="flex gap-[10px] items-center text-[30px]"
          style={{ fontFamily: VISITOR }}
        >
          <span
            onClick={() => setLang("ru")}
            className={`cursor-pointer transition-colors ${lang === "ru" ? "text-[#aeaeae]" : "text-[#2c2c2c]"}`}
          >
            Ru
          </span>
          <span className="text-[#2c2c2c]">/</span>
          <span
            onClick={() => setLang("en")}
            className={`cursor-pointer transition-colors ${lang === "en" ? "text-[#aeaeae]" : "text-[#2c2c2c]"}`}
          >
            En
          </span>
        </div>
      </div>

      {/* Breadcrumb nav */}
      <div
        className="flex flex-col gap-[15px] mb-[30px]"
        style={{ fontFamily: VISITOR }}
      >
        <div className="flex items-center gap-[15px]">
          <span
            className="text-[#aeaeae] text-[30px] leading-none cursor-pointer hover:opacity-70"
            onClick={() => {
              window.location.href = "/";
            }}
          >
            {t.hero.breadcrumb}
          </span>
        </div>
        <div className="flex items-center gap-[15px]">
          <span className="text-[#aeaeae] text-[30px] leading-none">
            |#cases
          </span>
          <span
            className="text-[#2c2c2c] text-[15px] cursor-pointer hover:text-[#aeaeae] transition-colors"
            style={{ fontFamily: CHAKRA }}
            onClick={() => {
              window.location.href = "/#mobileExamples";
            }}
          >
            {t.hero.back}
          </span>
        </div>
        <div className="flex items-center gap-[15px]">
          <span className="text-[30px] leading-none" style={{ color }}>
            {t.hero.tag}
          </span>
          <span
            className="text-[#2c2c2c] text-[15px]"
            style={{ fontFamily: CHAKRA }}
          >
            ← YOU HERE
          </span>
        </div>
      </div>

      {/* Name */}
      <p
        className="text-[#aeaeae] text-[70px] leading-none mb-[20px]"
        style={{ fontFamily: VISITOR }}
      >
        {t.hero.name}
      </p>

      {/* Subtitle */}
      <div className="bg-[#9a38af] inline-block w-fit overflow-hidden">
        <p
          className="text-[#aeaeae] text-[40px] leading-none whitespace-pre-wrap -mt-[0.4em] -mb-[0.15em]"
          style={{ fontFamily: VISITOR }}
        >
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
