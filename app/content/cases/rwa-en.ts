import { CaseContent } from '@/types'

export const rwaEn: CaseContent = {
  hero: {
    breadcrumb: 'dashewski.io/',
    back: '← BACK',
    tag: '|-rwa',
    here: '← YOU HERE',
    name: 'rwa exchange',
    subtitle: '/ Exchange for creating and trading\ntokenized assets',
  },
   description: `Businesses lack access to global capital, and investors are tired of middlemen. We built an RWA exchange where tokenized assets are created and traded directly, through crypto.`,
  sections: [
    {
      title: "If you're an investor",
      text: `Find a project, believe in it, buy tokens. This isn't crypto hype: it's a share of a real business with a right to profit. We wrote entry, exit and refund terms into smart contracts, not into a PDF in your inbox. When fundraising ends, tokens are immediately tradable in the built-in AMM. We borrowed the mechanic from Pump.fun, but made it serious. What you bought, what it's worth and what's happening is all in your dashboard.`,
    },
    {
      title: "If you're a business",
      text: `No calls, meetings or paper NDAs. Register your project on the exchange, pass verification, issue tokens, and fundraising is live. Investors worldwide can see you, not just the ones you managed to send a pitch deck to. We moved the whole process into a dashboard and handed the routine to smart contracts. You focus on the business, not on deal admin.`,
    },
    {
      title: "Why you can trust it",
      text: `You don't have to take our word for it. RWA means real assets and real responsibility, so we built multi-layer project verification, including AI analysis of the business plan and financials with risk scoring. The smart contracts are written in Solidity on UUPS proxies, can be stopped in an emergency, and pass an external audit before launch.`,
    },
    {
      title: "What's inside",
      text: `The exchange is governed by a DAO (decentralized autonomous organization): those who buy and lock exchange tokens for a period vote on how the exchange develops. We built the backend from 20+ microservices on Bun.js and Elysia.js (TypeScript), with MongoDB, Redis, and queues on RabbitMQ and BullMQ. The frontend is Next.js with GraphQL, the contracts are Solidity with Hardhat. Everything runs in Docker behind Nginx and Cloudflare, monitored with Prometheus and Grafana.`,
    },
  ],
  github: [
    { label: '{github backend link}', url: 'https://github.com/dashewski/rwa-platform-backend' },
    { label: '{github frontend link}', url: 'https://github.com/dashewski/rwa-platform-frontend' },
    { label: '{github smart-contracts link}', url: 'https://github.com/dashewski/rwa-platform' },
    { label: '{figma design link}', url: 'https://www.figma.com/design/lNA8AJaw8yeKWM69RuMDKu/Slices---Public-share?node-id=2305-6&t=3ekxpMRQxItaIXBE-1'},
  ],
}