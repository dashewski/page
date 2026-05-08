import { CaseContent } from "@/types";

export const starflipEn: CaseContent = {
  hero: {
    breadcrumb: "dashewski.io/",
    back: "← BACK",
    tag: "|-starflip",
    here: "← YOU HERE",
    name: "starflip",
    subtitle: "/ casino-like\nplayer vs player game",
  },
  description: `StarFlip started with a question I couldn't stop thinking about: why does the house always win in gambling? The answer's pretty straightforward - somebody's gotta pay for the casino owner's new fast car. I already have mine, so I just cut the house out of the equation and let players go head-to-head. Equal odds, fair game, platform takes a small fee. Got my first funding round in 2025 and started building.`,
  sections: [
    {
      title: "// How the team came together",
      text: `I couldn't really be bothered to work on the project on my own - so i brought on a designer and a frontend dev. I took the backend myself: game engine, move logic, payouts, results. Plus the blockchain side: smart contracts for the deposit vault where players lock their funds. The stack ended up refreshingly no-nonsense - TS, Node.js, Redis, SQLite, Express, Next.js, Solidity.`,
    },
    {
      title: "// How the game works",
      text: `The first game we shipped is a PvP Grid Game. Two players place their bets - say $50 each. The platform matches them, pools the $100, and uses on-chain randomness to scatter it across 12 tiles - a random chunk hiding under each one. Players take turns flipping tiles, six apiece. Whoever uncovers more than they put in walks away with free money basically. Clean, transparent, everything settled on Blockchain.`,
    },
    {
      title: "// First launch and the lesson nobody warned us about",
      text: `We went desktop-first - targeting the DeFi crowd that historically lives on their computers. The logic was solid: decent mobile crypto wallet support basically doesn't exist in 2026 (shoutout to WalletConnect that doesn't recognize the MetaMask Mobile app). Ran ads across Asia and found out fast that desktop traffic in Vietnam, India, across the whole region - basically zero. Everyone tried to play from their phone. The whole approach needed a rethink.`,
    },
    {
      title: "// The rework: Telegram and a new way in",
      text: `After that launch I went back and rebuilt the thing properly. Shipped a mobile version packaged as a Telegram Mini App - one tap to open, no downloads, lives right inside the messenger where the audience already hangs out. Dropped WalletConnect entirely: now when you sign in, a unique deposit address gets generated in your account, players send crypto straight to it - zero wallet connection drama. Added a ranked points system with a future token airdrop in mind, as a community growth mechanic.`,
    },
  ],
  github: [
    {
      label: "{github backend link}",
      url: "https://github.com/digitalsoupteam/starflipbackend/",
    },
  ],
};
