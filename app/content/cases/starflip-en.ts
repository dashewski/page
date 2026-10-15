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
  description: `It started with a question: why does the casino always win? The answer is simple: the owner needs a fast car. I already have one, so I took the casino out of the equation and designed a game where players compete against each other. Equal odds, a fair outcome, and the platform takes only a fee. In 2025 I raised my first investment and started building.`,
  sections: [
    {
      title: "The team",
      text: `I didn't feel like carrying it alone, so I found a designer and a frontend developer. I took the backend: I wrote the game engine, the turn logic, payouts and the smart contracts for deposits. Stack: TypeScript, Node.js, Express, Redis, SQLite, Next.js, Solidity (Hardhat).`,
    },
    {
      title: "How the game works",
      text: `The first game I built was PvP Grid Game. Two players stake, say, $50 each. The platform matches them and uses cryptographic randomness to spread the $100 pot across 12 cells. Players take turns opening 6 cells each. Whoever takes out more than they put in wins. Everything is transparent and recorded on the blockchain.`,
    },
    {
      title: "Lesson from the first launch",
      text: `At first I built a desktop version, since DeFi players sit at computers. But when we started advertising in Asia, it turned out that players in Vietnam and India are almost all on phones. We had to rethink the product.`,
    },
    {
      title: "Solo rework: Telegram",
      text: `After that I reworked everything on my own. I built a mobile version as a Telegram Mini App: it opens in one tap, right inside the messenger, with nothing to install. I dropped WalletConnect: every player gets a personal deposit address in their account and sends crypto directly. I also added rating points ahead of a future token airdrop, a growth mechanic for the community. Stack: Next.js with the Telegram Apps SDK and a Node.js bot.`,
    },
    {
      title: "Playable now",
      text: `Everything I built from scratch is live: you can play in Telegram from a computer or a phone. I added sound and reworked referrals: a referrer gets 50% of the platform fee and 5 pts for every game. I'm finishing a leaderboard. Socials, how-to-play and articles are done.`,
      video: "/videos/starflip.mp4",
    },
  ],

  github: [
    {
      label: "{github backend link}",
      url: "https://github.com/dashewski/starflip-gridgame-backend",
    },        {
      label: "{figma design link}",
      url: "https://www.figma.com/design/m0z6QvQyizFoH6BZbAo5lr/Astra-Game---Public-share?node-id=0-1&t=XQTXoF705VimTeIv-1",     
    },
  ],
};
