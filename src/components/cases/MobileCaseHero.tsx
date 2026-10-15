"use client";

import { CaseContent, Lang } from "@/types";
import { useRouter } from "next/navigation";

const VISITOR = "'Visitor TT2 Pro', sans-serif";

interface MobileCaseHeroProps {
  t: CaseContent;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function MobileCaseHero({
  t,
  lang,
  setLang,
}: MobileCaseHeroProps) {
  const router = useRouter();

  return (
    <section className="flex flex-col pt-[20px] w-full">
      {/* Top row: back + lang switcher */}
      <div className="flex items-start justify-between w-full mb-[30px]">
        {/* replace, not push: otherwise each visit stacks history entries and browser Back loops into the case */}
        <button
          type="button"
          onClick={() => router.replace("/#mobileExamples")}
          className="text-[#aeaeae] text-[30px] leading-none cursor-pointer hover:opacity-70 transition-opacity"
          style={{ fontFamily: VISITOR }}
        >
          {t.hero.back}
        </button>

        <div
          className="flex gap-[10px] items-center text-[30px] leading-none"
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
          className="text-[#aeaeae] text-[20px] max-[360px]:text-[17px] leading-none whitespace-pre-wrap -mt-[0.3em] -mb-[0.15em]"
          style={{ fontFamily: VISITOR }}
        >
          {t.hero.subtitle}
        </p>
      </div>
    </section>
  );
}
