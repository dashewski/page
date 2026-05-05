import { Content } from '@/types'

const CHAKRA = "'Chakra Petch', sans-serif"

interface FooterProps {
  t: Content
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="flex items-center justify-center w-full pb-[60px]">
      <div
        className="flex gap-[20px] items-center text-[#aeaeae] text-[15px]"
        style={{ fontFamily: CHAKRA }}
      >
        <span>{t.footer.email}</span>
        <span>|</span>
        <a
          href={t.footer.teamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#aeaeae] no-underline hover:text-white transition-colors"
        >
          {t.footer.team}
        </a>
        <span>|</span>
        <a
          href={t.footer.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#aeaeae] no-underline hover:text-white transition-colors"
        >
          {t.footer.github}
        </a>
      </div>
    </footer>
  )
}
