import { Content, Lang } from "@/types";

const VISITOR = "'Visitor TT2 Pro', sans-serif";
const CHAKRA = "'Chakra Petch', sans-serif";

interface HeroProps {
  t: Content;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export default function Hero({ t, lang, setLang }: HeroProps) {
  return (
    <section className="flex flex-col items-start pt-[80px] overflow-clip w-full relative">
      {/* Top row: name + lang switcher */}
      <div className="flex items-start justify-between w-full whitespace-nowrap">
        <p
          className="text-[#aeaeae] text-[130px] leading-none"
          style={{ fontFamily: VISITOR }}
        >
          {t.hero.name}
        </p>
        <div
          className="flex gap-[10px] items-center text-[30px] pt-[8px]"
          style={{ fontFamily: VISITOR }}
        >
          <span
            onClick={() => setLang("ru")}
            className={`cursor-pointer transition-colors ${
              lang === "ru" ? "text-[#aeaeae]" : "text-[#2c2c2c]"
            }`}
          >
            Ru
          </span>
          <span className="text-[#2c2c2c]">/</span>
          <span
            onClick={() => setLang("en")}
            className={`cursor-pointer transition-colors ${
              lang === "en" ? "text-[#aeaeae]" : "text-[#2c2c2c]"
            }`}
          >
            En
          </span>
        </div>
      </div>

      {/* Text row */}
      <div className="flex flex-col items-end w-full min-h-[452px]">
        {/* Text block 1 */}
        <div className="flex flex-col gap-[15px] items-start pt-[180px]">
          <div className="bg-[#9a38af] inline-flex overflow-hidden">
            <p
              className="text-[#aeaeae] text-[40px] leading-none whitespace-nowrap -mt-[0.4em] -mb-[0.15em]"
              style={{ fontFamily: VISITOR }}
            >
              {t.hero.tag1}
            </p>
          </div>
          <div
            className="text-[#2c2c2c] text-[15px] leading-normal whitespace-nowrap"
            style={{ fontFamily: CHAKRA }}
          >
            <p>{t.hero.tag1sub1}</p>
            <p>{t.hero.tag1sub2}</p>
          </div>
        </div>

        {/* Text block 2 */}
        <div className="flex flex-col gap-[15px] items-start pt-[100px] pr-[150px] w-[460px]">
          <div className="bg-[#9a38af] inline-flex overflow-hidden">
            <div
              className="text-[#aeaeae] text-[40px] w-fit leading-none whitespace-nowrap -mt-[0.4em] -mb-[0.15em]"
              style={{ fontFamily: VISITOR }}
            >
              <p className="m-0">{t.hero.tag2line1}</p>
              <p className="m-0">{t.hero.tag2line2}</p>
            </div>
          </div>
          <div
            className="text-[#2c2c2c] text-[15px] whitespace-nowrap"
            style={{ fontFamily: CHAKRA, lineHeight: "normal" }}
          >
            <p className="mb-0 whitespace-pre">{t.hero.tag2sub1}</p>
            <p className="whitespace-pre">{t.hero.tag2sub2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
