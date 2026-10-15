import { Content } from '@/types'

const CHAKRA = "'Chakra Petch', sans-serif"

interface MobileFooterProps {
  t: Content
}

export default function MobileFooter({ t }: MobileFooterProps) {
  return (
    <footer className="flex flex-col items-center gap-[6px] w-full pb-[40px]">
      <div
        className="flex flex-col items-center gap-[6px] text-[#aeaeae] text-[15px]"
        style={{ fontFamily: CHAKRA }}
      >
        <span>{t.footer.email}</span>
        <a href={t.footer.teamUrl} target="_blank" rel="noopener noreferrer" className="text-[#aeaeae] no-underline hover:text-white transition-colors py-[4px]">
          {t.footer.team}
        </a>
        <a href={t.footer.githubUrl} target="_blank" rel="noopener noreferrer" className="text-[#aeaeae] no-underline hover:text-white transition-colors py-[4px]">
          {t.footer.github}
        </a>
      </div>
    </footer>
  )
}