import { Content } from "@/types";
import { link } from "node:fs/promises";

export const en: Content = {
  hero: {
    name: "NIK DASHEWSKI",
    tag1: "/ Backend, web3, AI",
    tag1line2: "& financial services",
    tag1sub1: "Product and technical architecture,",
    tag1sub2: "end-to-end development",
    tag2line1: "/ Product-director",
    tag2line2: "& developer",
    tag2sub1: "I lead teams and contractors, work with ",
    tag2sub2: "investors, take ideas through to product",
  },
  contact1: {
    text: "Feel free to reach out and collaborate",
    button: "{contact button}",
  },
  about: {
    title: "about info",
    cvButton: "{open CV button}",
    cvUrl: "#", // TODO: link to CV
    text: [
      `/* Leading IT & digital projects since 2017, developing since 2021: backend, AI, web3, and financial services.`,
      ``,
      `I'm that developer with a business mindset. That's why, together, we can build something cool -------------- and make great money. */`,
    ],
  },
  examples: {
    title: "examples",
    viewButton: "{view button}",
    cases: [
      {
        id: "01",
        color: "#6cad5e",
        name: "*** Solo built a fair PvP game with crypto deposits ***",
        tags: "",
      },
      {
        id: "02",
        color: "#9a38af",
        name: "*** Built a team and developed an exchange for creating and trading tokenized assets ***",
        tags: "",
      },
    ],
  },
  services: {
    title: "What i can",
    items: [
      "\u00A0\u00A0\u00A0Quickly build and launch an MVP",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Develop the product — solo & with a team",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Lead your IT and digital department",
      "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Sell the idea & product to investors",
    ],
  },
  contact2: {
    line1: "Feel free to reach out",
    line2: "and collaborate",
    button: "{contact button}",
    marquee: `you know someone who needs a developer? refer me, I'll pay a great finder's fee.`,
  },
  footer: {
    email: "nikitadashewski@gmail.com",
    team: "telegram link",
    teamUrl: "https://t.me/dashewski",
    github: "gitHub link",
    githubUrl: "https://github.com/dashewski/",
  },
  mobile: {
    contact2lines: {
      line1: "Feel free to reach",
      line2: "out and collaborate",
    },
    about: {
      text: [
        `/* Leading IT & digital projects since 2017, developing since 2021: backend, AI, web3, and financial services.`,
        ``,
       `I am that developer with a business mindset. That's why, together, we can build something cool`,
        `
        -------------- and make great money. */`,
      ],
    },
    services: {
      items: [
        "Quickly build and launch an MVP",
        "Develop the product — solo & with a team",
        "Lead your IT and digital department",
        "Sell the idea & product to investors",
      ],
    },
  },
};
