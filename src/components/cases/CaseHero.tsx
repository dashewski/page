"use client";

import { CaseContent } from "@/types";
import { Lang } from "@/types";
import { useRouter } from "next/navigation";

const VISITOR = "'Visitor TT2 Pro', sans-serif";
const CHAKRA = "'Chakra Petch', sans-serif";

interface CaseHeroProps {
  t: CaseContent;
  lang: Lang;
  setLang: (lang: Lang) => void;
  color: string;
}

export default function CaseHero({ t, lang, setLang, color }: CaseHeroProps) {
  const router = useRouter();

  return (
    <section className="flex flex-col pt-[80px] w-full relative">
      {/* Top row */}
      <div className="flex items-start justify-between w-full mb-[40px]">
        {/* Left: breadcrumb nav */}
        <div
          className="flex flex-col gap-[20px]"
          style={{ fontFamily: VISITOR }}
        >
          {/* Line 1 */}
          <div className="flex items-center gap-[20px]">
            <span
              className="text-[#aeaeae] text-[40px] leading-none cursor-pointer hover:opacity-70 transition-opacity"
              onClick={() => {
                window.location.href = "/";
              }}
            >
              {t.hero.breadcrumb}
            </span>
          </div>
          {/* Line 2 */}
          <div className="flex items-center gap-[20px]">
            <span className="text-[#aeaeae] text-[40px] leading-none">
              |#cases
            </span>
            <span
              className="text-[#2c2c2c] text-[15px] leading-none cursor-pointer hover:text-[#aeaeae] transition-colors"
              style={{ fontFamily: CHAKRA }}
              onClick={() => {
                window.location.href = "/#examples";
              }}
            >
              {t.hero.back}
            </span>
          </div>
          {/* Line 3 */}
          <div>
            <span className="text-[40px] leading-none" style={{ color }}>
              {t.hero.tag}
            </span>
            <span
              className="text-[#2c2c2c] text-[15px] leading-none ml-[20px]"
              style={{ fontFamily: CHAKRA }}
            >
              {t.hero.here}
            </span>
          </div>
        </div>

        {/* Right: lang switcher */}
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

      {/* Bottom row: name + subtitle */}
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
