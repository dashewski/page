import { Content } from '@/types'
import ContactBlock from './ContactBlock'

const VISITOR = "'Visitor TT2 Pro', sans-serif"

interface MarqueeSectionProps {
  t: Content
}

export default function MarqueeSection({ t }: MarqueeSectionProps) {
  return (
    <section className="flex items-stretch gap-[28px] w-full overflow-hidden">
      <ContactBlock t={t} variant="stacked" />      <a
        href="https://t.me/dashewski/"
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      ></a>

      <div className="bg-[#9a38af] flex-1 overflow-hidden flex items-center">
        
        <div className="flex animate-marquee whitespace-nowrap">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="text-[#aeaeae] text-[100px] leading-normal pr-[80px]"
              style={{ fontFamily: VISITOR }}
            >
              {t.contact2.marquee}&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
