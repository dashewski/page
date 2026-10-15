import Link from 'next/link'
import { Content } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CONSOLE = "'Classic Console Neue', sans-serif"

interface AboutInfoProps {
  t: Content
}

export default function AboutInfo({ t }: AboutInfoProps) {
  return (
    <section id="about" className="flex flex-col gap-[40px] items-start text-[#aeaeae]">
      <p
        className="text-[100px] leading-normal whitespace-nowrap"
        style={{ fontFamily: VISITOR }}
      >
        {t.about.title}
      </p>
      <div className="flex items-start justify-between w-full">
        <div className="flex flex-col gap-[40px] items-start w-[730px]">
          <div
            className="text-[35px] w-full leading-normal"
            style={{ fontFamily: CONSOLE }}
          >
            {t.about.text.map((line, i) =>
              line === '' ? (
                <p key={i} className="h-[35px]" />
              ) : (
                <p key={i} className="whitespace-pre-wrap">{line}</p>
              )
            )}
          </div>
          <Link
            href={t.about.cvUrl}
            className="w-[324px] h-[30px] no-underline flex items-center justify-center bg-[#6cad5e] cursor-pointer relative
              shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
              hover:bg-[#5a9e4c]
              active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
              transition-all"
          >
            <span
              className="text-[#2c2c2c] text-[30px] leading-none whitespace-nowrap absolute"
              style={{
                fontFamily: VISITOR,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {t.about.cvButton}
            </span>
          </Link>
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