import { CaseContent } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CHAKRA = "'Chakra Petch', sans-serif"

interface CaseBlockProps {
  section: CaseContent['sections'][0]
  index: number
  imageSrc?: string
  color: string
}

export default function CaseBlock({ section, index, imageSrc, color }: CaseBlockProps) {
  return (
    <div className="flex flex-col gap-[24px] w-full">

      {/* number + title */}
      <div className="flex items-baseline gap-[20px]">
        <span className="text-[30px] leading-none" style={{ fontFamily: VISITOR, color }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="text-[#aeaeae] text-[40px] leading-none" style={{ fontFamily: VISITOR }}>
          {section.title}
        </p>
      </div>

      {/* text */}
      <p className="text-[#aeaeae] text-[22px] leading-relaxed w-full" style={{ fontFamily: CHAKRA }}>
        {section.text}
      </p>

      {/* media */}
      <div className="relative w-full aspect-[719/449] overflow-hidden">
        {section.video ? (
          <video src={section.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
        ) : imageSrc ? (
          <img src={imageSrc} alt="" className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center">
            <span className="text-[#2c2c2c] text-[20px]" style={{ fontFamily: VISITOR }}>
              [ image {index + 1} ]
            </span>
          </div>
        )}
      </div>

    </div>
  )
}
