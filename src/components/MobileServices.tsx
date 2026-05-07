import { Content } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"

interface MobileServicesProps {
  t: Content
}

export default function MobileServices({ t }: MobileServicesProps) {
  return (
    <section className="flex flex-col gap-[20px] items-start text-[#aeaeae] w-full" style={{ fontFamily: VISITOR }}>
      <p className="text-[50px] leading-normal">{t.services.title}</p>
      <ul className="text-[25px] ms-[20px] list-[square]" style={{ lineHeight: 0 }}>
        {t.mobile.services.items.map((item, i) => (
          <li key={i} className="mb-0">
            <span style={{ lineHeight: 'normal' }}>{item}</span>
          </li>
        ))}
      </ul>
      <img src="/images/comp.svg" alt="" className="w-full h-auto mt-[20px]" />
    </section>
  )
}