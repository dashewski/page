'use client'

import { useRouter } from 'next/navigation'
import { Content } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CHAKRA = "'Chakra Petch', sans-serif"

interface MobileExamplesProps {
  t: Content
}

const caseSlug: Record<string, string> = {
  '01': 'starflip',
  '02': 'rwa',
}

export default function MobileExamples({ t }: MobileExamplesProps) {
  const router = useRouter()

  return (
    <section id="mobileExamples" className="flex flex-col gap-[30px] items-start w-full">
      <p className="text-[#aeaeae] text-[50px] leading-normal" style={{ fontFamily: VISITOR }}>
        {t.examples.title}
      </p>

      {t.examples.cases.map((c) => (
        <div key={c.id} className="flex w-full gap-[10px] items-stretch">

          {/* Left: id + tags */}
          <div className="flex flex-col shrink-0 w-[100px]">
            <div className="flex gap-[6px] items-center text-[25px] mt-[-10px]" style={{ fontFamily: VISITOR }}>
              <span className="text-[#aeaeae]">[/&gt;</span>
              <span style={{ color: c.color }}>{c.id}</span>
            </div>
            <p className="text-[#2C2C2C] text-[15px] leading-normal mt-[8px]" style={{ fontFamily: CHAKRA }}>
              {c.tags.split(', ').map((tag, i) => (
                <span key={i} className="block">{tag}</span>
              ))}
            </p>
          </div>

          {/* Right: name box + button */}
          <div className="flex flex-col gap-[8px] flex-1">
            <div className="bg-[#aeaeae] flex items-center justify-center p-[8px] flex-1">
              <p className="text-[#2c2c2c] text-[20px] leading-normal text-center" style={{ fontFamily: VISITOR }}>
                {c.name}
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <button
                onClick={() => router.push(`/cases/${caseSlug[c.id]}`)}
                className="flex-1 h-[30px] flex items-center justify-center bg-[#6cad5e] cursor-pointer
                  shadow-[inset_-2px_-2px_0px_#3d6b35,inset_2px_2px_0px_#8fd47f]
                  hover:bg-[#5a9e4c]
                  active:shadow-[inset_2px_2px_0px_#3d6b35,inset_-2px_-2px_0px_#8fd47f] active:translate-y-[1px]
                  transition-all"
              >
                <span className="text-[#2c2c2c] text-[20px] leading-none whitespace-nowrap" style={{ fontFamily: VISITOR }}>
                  {t.examples.viewButton}
                </span>
              </button>
              <span className="text-[#aeaeae] text-[20px]" style={{ fontFamily: VISITOR }}>{'<<<'}</span>
            </div>
          </div>

        </div>
      ))}
    </section>
  )
}