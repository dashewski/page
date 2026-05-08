import { Content } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"

interface MobileContactBlockProps {
  t: Content
}

export default function MobileContactBlock({ t }: MobileContactBlockProps) {
  return (
    <section className="flex flex-col gap-[20px] items-start w-full">
      <p className="text-[#aeaeae] text-[40px] leading-normal w-full" style={{ fontFamily: VISITOR }}>
        {t.contact1.text}
      </p>
      <a href="https://t.me/dashewski/" target="_blank" rel="noopener noreferrer" className="w-full">
        <button className="bg-[#6cad5e] flex items-center justify-center h-[40px] w-full cursor-pointer
          shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
          hover:bg-[#5a9e4c]
          active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
          transition-all">
          <span className="text-[#2c2c2c] text-[40px] leading-normal whitespace-nowrap" style={{ fontFamily: VISITOR }}>
            {t.contact1.button}
          </span>
        </button>
      </a>
    </section>
  )
}