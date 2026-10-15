import { CaseContent } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CHAKRA = "'Chakra Petch', sans-serif"

interface MobileCaseBlockProps {
  section: CaseContent['sections'][0]
  index: number
  imageSrc?: string
  color: string
}

export default function MobileCaseBlock({ section, index, imageSrc, color }: MobileCaseBlockProps) {
  return (
    <div className="flex flex-col gap-[14px] w-full">
      {/* number + title */}
      <div className="flex items-baseline gap-[12px]">
        <span className="text-[20px] leading-none shrink-0" style={{ fontFamily: VISITOR, color }}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <p className="text-[#aeaeae] text-[20px] leading-tight" style={{ fontFamily: VISITOR }}>
          {section.title}
        </p>
      </div>

      {/* text */}
      <p className="text-[#aeaeae] text-[15px] leading-relaxed w-full" style={{ fontFamily: CHAKRA }}>
        {section.text}
      </p>

      {/* media */}
      <div className="w-full" style={{ aspectRatio: '343/214' }}>
        {section.video ? (
          <video src={section.video} autoPlay loop muted playsInline className="w-full h-full object-cover" />
        ) : imageSrc ? (
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center">
            <span className="text-[#2c2c2c] text-[15px]" style={{ fontFamily: VISITOR }}>
              [ image {index + 1} ]
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
