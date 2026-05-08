import { CaseContent } from '@/types'

export const rwaEn: CaseContent = {
  hero: {
    breadcrumb: 'dashewski.io/',
    back: '← BACK',
    tag: '|-rwa',
    here: '← YOU HERE',
    name: 'rwa platform',
    subtitle: 'Business tokenization platform\nand RWA-assets trading',
  },
  description: `Picture this: you've got a real business but no access to global capital. Or you're an investor tired of paying middlemen just to exist. We built an RWA platform that fixes both - a Web3 ecosystem where real-world assets get tokenized and businesses connect with investors directly, no banks, no brokers, just crypto.`,
sections: [
  {
    title: '// If youre an investor',
    text: `Find a project you believe in - buy the tokens. This isn't buying into hype, it's a tokenized stake in a real business with actual profit rights. Entry, exit, and refund conditions are locked into the protocol - not buried in some email attachment, but written directly into smart-contracts. Once the fundraising campaign wraps up, tokens are immediately tradable through the built-in AMM (think Pump.fun, but for something that actually matters). Everything shows up in your dashboard: what you hold, what it's worth, what's happening.`,
  },
  {
    title: '// If youre a business',
    text: `Forget the endless calls, pitch meetings, and NDAs going back and forth. Register your project on the platform, pass verification (you're not here to rug people, right?), issue your tokens - and your fundraising campaign goes live. Investors from anywhere in the world can find you, not just the ones you managed to cold-email a deck to. People buy your tokens, capital comes in. Your dashboard tracks the whole pipeline in real time, smart-contracts handle the operational side. You focus on actually building, not on deal admin. Simple as that.`,
  },
  {
    title: '// Why you can trust it',
    text: `We're not asking anyone to take projects on faith. RWA means real assets and real accountability, so every project goes through multi-layer due diligence - including AI analysis of business plans and financials with genuine risk scoring. Smart contracts run on UUPS proxy, have an emergency stop built in, and go through external audit before launch. This isn't "we take security seriously" copy-pasted into a footer — we actually built a system that vets what's worth investing in.`,
  },
  {
    title: '// Whats under the hood',
    text: `Platform governance runs through a DAO (Decentralized Autonomous Organization): users who buy and lock platform tokens get real voting power over where things go — proper DeFi. The tech stack: Bun.js and Elysia.js on TypeScript, MongoDB, Redis, job queues via RabbitMQ and BullMQ. Everything runs in Docker behind Nginx and Cloudflare, monitored through Prometheus and Grafana. Sounds like a standard stack — and that's exactly the point. It works, instead of being "our innovative proprietary architecture" with nothing to back it up.`,
  },
],
  github: [
    { label: '{github backend link}', url: 'https://github.com/digitalsoupteam/rwa-platform-backend' },
    { label: '{github frontend link}', url: 'https://github.com/digitalsoupteam/rwa-platform-frontend' },
    { label: '{github smart-contracts link}', url: 'https://github.com/digitalsoupteam/rwa-platform' },
  ],
}