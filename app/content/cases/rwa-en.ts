import { CaseContent } from '@/types'

export const rwaEn: CaseContent = {
  hero: {
    breadcrumb: 'dashewski.com/',
    back: '← BACK',
    tag: '|-rwa',
    here: '← YOU HERE',
    name: 'rwa platform',
    subtitle: 'Business tokenization platform\nand RWA-assets trading',
  },
  description: `We have developed a blockchain platform that enables businesses—from local manufacturers to IT start-ups—to attract investment from around the world without unnecessary barriers. It is a unified Web3 ecosystem where entrepreneurs interact directly with investors, and all processes are transparent and automated.`,
  sections: [
    {
      title: '// For users',
      text: `Investors purchase project tokens — ‘crypto-shares’ — thereby acquiring an ownership stake and the right to future profits. The terms are set out in the protocol, including the return of invested funds. Once the campaign is complete, the tokens immediately become liquid thanks to the built-in AMM market, where they can be freely traded. Each user has a personal account with a wide range of features for managing and interacting with the platform.`,
    },
    {
      title: '// For business',
      text: `For businesses, the process takes the form of a straightforward pipeline: project registration, KYC and verification, token issuance, and the launch of an investment campaign. A personal dashboard is provided for monitoring and managing all processes. All operations are facilitated by smart contracts, ensuring transparency and compliance with security requirements.`,
    },
    {
      title: '// Security',
      text: `The platform prioritises security and analytics: projects undergo multi-level verification, including AI assessment of business plans and financial data with risk scoring. Smart contracts use UUPS proxies, feature an emergency stop mechanism, and undergo a mandatory external audit prior to launch.`,
    },
    {
      title: '// Technology stack ',
      text: `Governance is implemented via a DAO: token holders participate in votes on the system’s development. Technologically, the platform is built on Bun.js and Elysia.js (TypeScript), using MongoDB and Redis, with RabbitMQ and BullMQ queues. The infrastructure comprises Docker, Nginx and Cloudflare, with monitoring via Prometheus and Grafana, ensuring stability and scalability.`,
    },
  ],
  github: [
    { label: '{github backend link}', url: 'https://github.com/digitalsoupteam/rwa-platform-backend' },
    { label: '{github frontend link}', url: 'https://github.com/digitalsoupteam/rwa-platform-frontend' },
    { label: '{github smart-contracts link}', url: 'https://github.com/digitalsoupteam/rwa-platform' },
  ],
}