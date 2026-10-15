import Link from 'next/link'
import { Content } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CONSOLE = "'Classic Console Neue', sans-serif"

interface MobileAboutInfoProps {
  t: Content
}

export default function MobileAboutInfo({ t }: MobileAboutInfoProps) {
  return (
    <section id="mobileAbout" className="flex flex-col gap-[20px] items-start text-[#aeaeae] w-full">
      <p className="text-[50px] leading-normal" style={{ fontFamily: VISITOR }}>
        {t.about.title}
      </p>
      <div className="text-[25px] max-[332px]:text-[22px] w-full leading-normal" style={{ fontFamily: CONSOLE }}>
        {t.mobile.about.text.map((line, i) =>
          line === '' ? (
            <p key={i} className="h-[25px] max-[332px]:h-[22px]" />
          ) : (
            <p key={i} className="whitespace-pre-wrap">{line}</p>
          )
        )}
      </div>
      <Link
        href={t.about.cvUrl}
        className="w-full h-[30px] no-underline flex items-center justify-center bg-[#6cad5e] cursor-pointer
          shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
          hover:bg-[#5a9e4c]
          active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
          transition-all"
      >
        <span className="text-[#2c2c2c] text-[20px] leading-none whitespace-nowrap" style={{ fontFamily: VISITOR }}>
          {t.about.cvButton}
        </span>
      </Link>
    </section>
  )
}