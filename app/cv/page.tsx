"use client";

import { useRouter } from "next/navigation";
import { CvContent, Lang } from "@/types";
import { cvEn } from "../content/cv/cv-en";
import { cvRu } from "../content/cv/cv-ru";
import { en } from "../content/en";
import { ru } from "../content/ru";
import MarqueeSection from "@/components/Marquee";
import MobileMarquee from "@/components/MobileMarquee";
import Footer from "@/components/Footer";
import MobileFooter from "@/components/MobileFooter";
import { useLang } from "@/hooks/useLang";

const VISITOR = "'Visitor TT2 Pro', sans-serif";
const CHAKRA = "'Chakra Petch', sans-serif";
const GREEN = "#6cad5e";

// "**bold**" in the content strings -> <strong>
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-bold text-[#e6e6e6]">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}

function LangSwitch({
  lang,
  setLang,
  mobile,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  mobile: boolean;
}) {
  return (
    <div
      className="flex gap-[10px] items-center leading-none text-[30px]"
      style={{ fontFamily: VISITOR }}
    >
      <span
        onClick={() => setLang("ru")}
        className={`cursor-pointer transition-colors ${lang === "ru" ? "text-[#aeaeae]" : "text-[#2c2c2c]"}`}
      >
        {mobile ? "Ru" : "ru"}
      </span>
      <span className="text-[#2c2c2c]">/</span>
      <span
        onClick={() => setLang("en")}
        className={`cursor-pointer transition-colors ${lang === "en" ? "text-[#aeaeae]" : "text-[#2c2c2c]"}`}
      >
        {mobile ? "En" : "eng"}
      </span>
    </div>
  );
}

function Skills({ cv, mobile }: { cv: CvContent; mobile: boolean }) {
  return (
    <div className={`flex flex-col ${mobile ? "gap-[14px]" : "gap-[24px]"}`}>
      <p
        className={`text-[#aeaeae] leading-tight ${mobile ? "text-[20px]" : "text-[30px]"}`}
        style={{ fontFamily: VISITOR }}
      >
        {cv.skillsTitle}
      </p>
      {cv.skillsLayout === "tags" ? (
        <div className="flex flex-wrap gap-[10px]">
          {cv.skills.map((s) => (
            <span
              key={s}
              className={`bg-[#1e1e1e] text-[#aeaeae] ${mobile ? "text-[15px] px-[10px] py-[4px]" : "text-[20px] px-[14px] py-[6px]"}`}
              style={{ fontFamily: CHAKRA }}
            >
              {s}
            </span>
          ))}
        </div>
      ) : (
        <ul className={`flex flex-col ${mobile ? "gap-[10px]" : "gap-[14px]"}`}>
          {cv.skills.map((s) => (
            <li
              key={s}
              className={`flex gap-[12px] text-[#aeaeae] leading-relaxed ${mobile ? "text-[15px]" : "text-[22px]"}`}
              style={{ fontFamily: CHAKRA }}
            >
              <span className="shrink-0" style={{ color: GREEN }}>
                –
              </span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function CvPage() {
  const router = useRouter();
  const { lang, setLang, mounted } = useLang();

  if (!mounted) return null;

  const t = lang === "en" ? en : ru;
  const cv = lang === "en" ? cvEn : cvRu;

  return (
    <div className="relative w-full min-h-screen bg-[#131313] overflow-x-hidden">
      {/* ───── DESKTOP ───── */}
      <div className="hidden md:block relative">
        <div className="relative mx-auto w-[1200px] flex flex-col gap-[120px]">
          <section className="flex flex-col pt-[80px] w-full">
            <div className="flex items-start justify-between w-full mb-[40px]">
              {/* replace, not push: otherwise each visit stacks history entries and browser Back loops into the page */}
              <button
                type="button"
                onClick={() => router.replace("/#about")}
                className="text-[#aeaeae] text-[30px] leading-none cursor-pointer hover:opacity-70 transition-opacity pt-[8px]"
                style={{ fontFamily: VISITOR }}
              >
                {cv.back}
              </button>
              <div className="pt-[8px]">
                <LangSwitch lang={lang} setLang={setLang} mobile={false} />
              </div>
            </div>

            <div className="flex items-end justify-between w-full min-h-[200px]">
              <h1
                className="text-[#aeaeae] text-[100px] leading-none font-normal"
                style={{ fontFamily: VISITOR }}
              >
                {cv.title}
              </h1>
              <div className="bg-[#9a38af] inline-flex overflow-hidden mb-[10px]">
                <p
                  className="text-[#aeaeae] text-[40px] leading-none whitespace-pre -mt-[0.3em] -mb-[0.15em]"
                  style={{ fontFamily: VISITOR }}
                >
                  {cv.subtitle}
                </p>
              </div>
            </div>
          </section>

          <div className="flex flex-col gap-[60px] w-[720px] self-center">
            <div className="flex gap-[40px] items-start">
              <img
                src="/images/cv/photo.jpg"
                alt={cv.subtitle.replace("/ ", "")}
                className="w-[300px] shrink-0 h-auto"
              />
              <h2
                className="text-[#aeaeae] text-[32px] leading-tight font-normal"
                style={{ fontFamily: VISITOR }}
              >
                {cv.headline}
              </h2>
            </div>

            <div className="flex flex-col gap-[28px]">
              {cv.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[#aeaeae] text-[22px] leading-relaxed"
                  style={{ fontFamily: CHAKRA }}
                >
                  <Rich text={p} />
                </p>
              ))}
            </div>

            <Skills cv={cv} mobile={false} />

            <p
              className="text-[#aeaeae] text-[32px] leading-tight"
              style={{ fontFamily: VISITOR }}
            >
              {cv.closing}
            </p>
          </div>

          <MarqueeSection t={t} showContactText={false} />
          <Footer t={t} />
        </div>
      </div>

      {/* ───── MOBILE ───── */}
      <div className="block md:hidden">
        <div
          className="relative mx-auto w-full px-[16px] flex flex-col"
          style={{ maxWidth: "480px" }}
        >
          <section className="flex flex-col pt-[20px] w-full">
            <div className="flex items-start justify-between w-full mb-[30px]">
              <button
                type="button"
                onClick={() => router.replace("/#mobileAbout")}
                className="text-[#aeaeae] text-[30px] leading-none cursor-pointer hover:opacity-70 transition-opacity"
                style={{ fontFamily: VISITOR }}
              >
                {cv.back}
              </button>
              <LangSwitch lang={lang} setLang={setLang} mobile />
            </div>

            <h1
              className="text-[#aeaeae] text-[70px] leading-none font-normal mb-[20px]"
              style={{ fontFamily: VISITOR }}
            >
              {cv.title}
            </h1>
            <div className="bg-[#9a38af] inline-block w-fit overflow-hidden">
              <p
                className="text-[#aeaeae] text-[20px] max-[360px]:text-[17px] leading-none whitespace-pre-wrap -mt-[0.3em] -mb-[0.15em]"
                style={{ fontFamily: VISITOR }}
              >
                {cv.subtitle}
              </p>
            </div>
          </section>

          <img
            src="/images/cv/photo.jpg"
            alt={cv.subtitle.replace("/ ", "")}
            className="w-full h-auto mt-[40px]"
          />

          <h2
            className="text-[#aeaeae] text-[22px] leading-tight font-normal mt-[30px]"
            style={{ fontFamily: VISITOR }}
          >
            {cv.headline}
          </h2>

          <div className="flex flex-col gap-[18px] mt-[30px]">
            {cv.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[#aeaeae] text-[15px] leading-relaxed"
                style={{ fontFamily: CHAKRA }}
              >
                <Rich text={p} />
              </p>
            ))}
          </div>

          <div className="mt-[50px]">
            <Skills cv={cv} mobile />
          </div>

          <p
            className="text-[#aeaeae] text-[22px] leading-tight mt-[50px]"
            style={{ fontFamily: VISITOR }}
          >
            {cv.closing}
          </p>

          <div className="mt-[70px]">
            <MobileMarquee t={t} showContactText={false} />
          </div>
          <div className="mt-[70px]">
            <MobileFooter t={t} />
          </div>
        </div>
      </div>
    </div>
  );
}
