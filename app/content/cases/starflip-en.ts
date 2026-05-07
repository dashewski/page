import { CaseContent } from '@/types'

export const starflipEn: CaseContent = {
  hero: {
    breadcrumb: 'dashewski.com/',
    back: '← BACK',
    tag: '|-starflip',
    here: '← YOU HERE',
    name: 'starflip',
    subtitle: '/ casino-like\nplayer vs player game',
  },
  description: `StarFlip, with its PvP format, was my own idea. In 2025, I secured a small initial round of investment and assembled a small team. I took on the role of technical lead: I was responsible for the architecture, backend, smart contracts, and overall product management — from the idea to launch.`,
  sections: [
    {
      title: '// We generated a mascot using AI',
      text: `To bring the project to fruition, we needed the help of two more specialists: a designer and a front-end developer. I was responsible for the backend — the game engine, payout logic, moves and results — as well as blockchain development: smart contracts for the player depository. The final tech stack: TS, Node.js, Redis, SQLite, Express, Next.js, Solidity.`,
    },
    {
      title: '// desktop game',
      text: `I decided to base my first game on the Grid Game. In my PvP version: both players place a bet, say $50, and the platform pairs them up for a match. Their combined $50+$50 bet is divided across 12 cells by a crypto-randomiser, with a portion of the money hidden under each cell. The players take turns opening the cells, six at a time. Whoever is lucky enough to collect more than they bet is the lucky dog.`,
    },
    {
      title: '// gaming process',
      text: `I launched the first version of the game on the desktop platform. I wanted to start with the crypto gaming audience. Most users in the DeFi sector use desktops, as there is still no convenient way (as of 2026!) to connect crypto wallets from a mobile phone. WalletConnect doesn't recognise mobile MetaMask or other wallets. We started advertising with a focus on Asia, and to our surprise, there was practically no desktop traffic there. Almost all players tried to log in from their phones.`,
    },
    {
      title: '// Development of a mobile version',
      text: `After the initial launch, I re-evaluated the game and set about reworking it. The solution: to create a mobile version and upload it to Telegram, so that the game is accessible with a single click within Telegram — this simplifies the onboarding process and opens up access to millions of users via native advertising and Telegram communities. At the same time, I removed the wallet integration and implemented a balance system with top-ups via a unique address generated upon entering the game — this way, players can do without WalletConnect. Additionally, I introduced ranking points for a future airdrop of the project's token, as part of the marketing mechanics.`,
    },
  ],
  github: [
    { label: "{github backend link}", url: "https://github.com/digitalsoupteam/starflipbackend/" },
  ],
}