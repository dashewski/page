import { Content } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CONSOLE = "'Classic Console Neue', sans-serif"

interface AboutInfoProps {
  t: Content
}

export default function AboutInfo({ t }: AboutInfoProps) {
  return (
    <section className="flex flex-col gap-[40px] items-start text-[#aeaeae]">
      <p
        className="text-[100px] leading-normal whitespace-nowrap"
        style={{ fontFamily: VISITOR }}
      >
        {t.about.title}
      </p>
      <div className="flex items-start justify-between w-full">
        <div
          className="text-[40px] w-[730px] leading-normal"
          style={{ fontFamily: CONSOLE }}
        >
          {t.about.text.map((line, i) =>
            line === '' ? (
              <p key={i} className="h-[40px]" />
            ) : (
              <p key={i} className="whitespace-pre-wrap">{line}</p>
            )
          )}
        </div>
        <img
          src="/images/comp.svg"
          alt=""
          className="w-[430px] h-auto shrink-0"
        />
      </div>
    </section>
  )
}