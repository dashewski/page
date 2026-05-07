import { Content } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CONSOLE = "'Classic Console Neue', sans-serif"

interface MobileAboutInfoProps {
  t: Content
}

export default function MobileAboutInfo({ t }: MobileAboutInfoProps) {
  return (
    <section className="flex flex-col gap-[20px] items-start text-[#aeaeae] w-full">
      <p className="text-[50px] leading-normal" style={{ fontFamily: VISITOR }}>
        {t.about.title}
      </p>
      <div className="text-[25px] w-full leading-normal" style={{ fontFamily: CONSOLE }}>
        {t.mobile.about.text.map((line, i) =>
          line === '' ? (
            <p key={i} className="h-[25px]" />
          ) : (
            <p key={i} className="whitespace-pre-wrap">{line}</p>
          )
        )}
      </div>
    </section>
  )
}