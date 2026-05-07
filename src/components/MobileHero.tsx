import { Content, Lang } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CHAKRA = "'Chakra Petch', sans-serif"

interface MobileHeroProps {
  t: Content
  lang: Lang
  setLang: (lang: Lang) => void
}

export default function MobileHero({ t, lang, setLang }: MobileHeroProps) {
  return (
    <section className="flex flex-col w-full">
      <div className="flex flex-col gap-[30px] pt-[16px]">
        <div className="flex justify-end w-full">
          <div className="flex gap-[10px] items-center text-[30px]" style={{ fontFamily: VISITOR }}>
            <span onClick={() => setLang('ru')} className={`cursor-pointer transition-colors ${lang === 'ru' ? 'text-[#aeaeae]' : 'text-[#2c2c2c]'}`}>ru</span>
            <span className="text-[#2c2c2c]">/</span>
            <span onClick={() => setLang('en')} className={`cursor-pointer transition-colors ${lang === 'en' ? 'text-[#aeaeae]' : 'text-[#2c2c2c]'}`}>eng</span>
          </div>
        </div>
        <p className="text-[#aeaeae] text-[50px] leading-none" style={{ fontFamily: VISITOR }}>
          {t.hero.name}
        </p>
      </div>

      <div className="h-[220px]" />

      {/* Tag 1 */}
      <div className="flex flex-col gap-[8px] items-end mb-[40px]">
        <div className="flex flex-col gap-[6px] items-start">
          <div className="bg-[#9a38af] inline-flex overflow-hidden">
            <p className="text-[#aeaeae] text-[25px] leading-none whitespace-nowrap -mt-[0.4em] -mb-[0.15em]" style={{ fontFamily: VISITOR }}>
              {t.hero.tag1}
            </p>
          </div>
          <div className="text-[#2c2c2c] text-[15px] leading-normal" style={{ fontFamily: CHAKRA }}>
            <p>{t.hero.tag1sub1}</p>
            <p>{t.hero.tag1sub2}</p>
          </div>
        </div>
      </div>

      {/* Tag 2  */}
      <div className="flex flex-col gap-[6px] items-start">
        <div className="bg-[#9a38af] inline-flex overflow-hidden">
          <div className="text-[#aeaeae] text-[25px] w-fit leading-none whitespace-nowrap -mt-[0.4em] -mb-[0.15em]" style={{ fontFamily: VISITOR }}>
            <p className="m-0">{t.hero.tag2line1}</p>
            <p className="m-0">{t.hero.tag2line2}</p>
          </div>
        </div>
        <div className="text-[#2c2c2c] text-[15px] leading-normal" style={{ fontFamily: CHAKRA }}>
          <p>{t.hero.tag2sub1}</p>
          <p>{t.hero.tag2sub2}</p>
        </div>
      </div>
    </section>
  )
}