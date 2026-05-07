import { CaseContent } from '@/types'

const VISITOR = "'Visitor TT2 Pro', sans-serif"
const CONSOLE = "'Classic Console Neue', sans-serif"
const CHAKRA = "'Chakra Petch', sans-serif"

interface CaseBlockProps {
  section: CaseContent['sections'][0]
  index: number
  imageSrc?: string
}

export default function CaseBlock({ section, index, imageSrc }: CaseBlockProps) {
  return (
    <div className="flex flex-col gap-[20px] w-full">

      {/* pic */}
      <div className="flex justify-center w-full">
        <div style={{ width: '719px', height: '449px' }}>
          {imageSrc ? (
            <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-[#1e1e1e] flex items-center justify-center">
              <span className="text-[#2c2c2c] text-[20px]" style={{ fontFamily: VISITOR }}>
                [ image {index + 1} ]
              </span>
            </div>
          )}
        </div>
      </div>

      {/* name */}
      <p className="text-[#aeaeae] text-[40px] leading-normal flex justify-center " style={{ fontFamily: VISITOR }}>
        {section.title}
      </p>

      {/* text */}
      <p className="text-[#aeaeae] text-[25px] leading-normal w-full" style={{ fontFamily: CHAKRA }}>
        {section.text}
      </p>

    </div>
  )
}