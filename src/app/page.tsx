'use client'

import { useState } from 'react'
import { Lang } from '@/types'
import { en } from '@/content/en'
import { ru } from '@/content/ru'
import Hero from '@/components/Hero'
import ContactBlock from '@/components/ContactBlock'
import AboutInfo from '@/components/AboutInfo'
import Examples from '@/components/Examples'
import Services from '@/components/Services'
import MarqueeSection from '@/components/Marquee'
import Footer from '@/components/Footer'


export default function Page() {
  const [lang, setLang] = useState<Lang>('en')
  const t = lang === 'en' ? en : ru

  return (
    <div className="relative w-full min-h-screen bg-[#131313] overflow-x-hidden">

      {/* Background photo — позиционируется относительно левого края 1200px контейнера */}
      <div
        className="absolute top-0 pointer-events-none"
        style={{
          left: 'calc(50vw - 600px)',
          width: '850px',
          height: '943px',
        }}
      >
        <img
          src="/images/Background photo.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main container 1200px */}
      <div className="relative mx-auto w-[1200px] flex flex-col gap-[170px]">
        <Hero t={t} lang={lang} setLang={setLang} />
        <ContactBlock t={t} variant="inline" />
        <AboutInfo t={t} />
        <Examples t={t} />
        <Services t={t} />
        <MarqueeSection t={t} />
        <Footer t={t} />
      </div>

    </div>
  )
}
