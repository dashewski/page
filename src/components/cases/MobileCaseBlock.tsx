import { CaseContent } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CONSOLE = "'Classic Console Neue', sans-serif"
const CHAKRA = "'Chakra Petch', sans-serif";

interface MobileCaseBlockProps {
  section: CaseContent['sections'][0]
  index: number
  imageSrc?: string
}

export default function MobileCaseBlock({ section, index, imageSrc }: MobileCaseBlockProps) {
  return (
    <div className="flex flex-col gap-[10px] w-full">
      {/* pic */}
      <div className="w-full" style={{ aspectRatio: '343/214' }}>
        {imageSrc ? (
          <img src={imageSrc} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center">
            <span className="text-[#2c2c2c] text-[15px]" style={{ fontFamily: VISITOR }}>
              [ image {index + 1} ]
            </span>
          </div>
        )}
      </div>

      {/* title */}
      <p className="text-[#aeaeae] text-[20px] leading-normal" style={{ fontFamily: VISITOR }}>
        {section.title}
      </p>

      {/* tekst */}
      <p className="text-[#aeaeae] text-[15px] leading-normal w-full" style={{ fontFamily: CHAKRA }}>
        {section.text}
      </p>
    </div>
  )
}