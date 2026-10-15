"use client";

import { CaseContent } from "@/types";
import { Lang } from "@/types";
import { useRouter } from "next/navigation";

const VISITOR = "'Visitor TT2 Pro', sans-serif";

interface CaseHeroProps {
  t: CaseContent;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function CaseHero({ t, lang, setLang }: CaseHeroProps) {
  const router = useRouter();

  return (
    <section className="flex flex-col pt-[80px] w-full relative">
      {/* Top row: back + lang switcher */}
      <div className="flex items-start justify-between w-full mb-[40px]">
        {/* replace, not push: otherwise each visit stacks history entries and browser Back loops into the case */}
        <button
          type="button"
          onClick={() => router.replace("/#examples")}
          className="text-[#aeaeae] text-[30px] leading-none cursor-pointer hover:opacity-70 transition-opacity pt-[8px]"
          style={{ fontFamily: VISITOR }}
        >
          {t.hero.back}
        </button>

        <div
          className="flex gap-[10px] items-center text-[30px] pt-[8px]"
          style={{ fontFamily: VISITOR }}
        >
          <span
            onClick={() => setLang("ru")}
            className={`cursor-pointer transition-colors ${lang === "ru" ? "text-[#aeaeae]" : "text-[#2c2c2c]"}`}
          >
            ru
          </span>
          <span className="text-[#2c2c2c]">/</span>
          <span
            onClick={() => setLang("en")}
            className={`cursor-pointer transition-colors ${lang === "en" ? "text-[#aeaeae]" : "text-[#2c2c2c]"}`}
          >
            eng
          </span>
        </div>
      </div>

      {/* Name + subtitle */}
      <div className="flex items-end justify-between w-full min-h-[200px]">
        <p
          className="text-[#aeaeae] text-[100px] leading-none"
          style={{ fontFamily: VISITOR }}
        >
          {t.hero.name}
        </p>
        <div className="bg-[#9a38af] inline-flex overflow-hidden mb-[10px]">
          <p
            className="text-[#aeaeae] text-[40px] leading-none whitespace-pre -mt-[0.4em] -mb-[0.15em]"
            style={{ fontFamily: VISITOR }}
          >
            {t.hero.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
