export type Lang = "en" | "ru";

export interface Content {
  hero: {
    name: string;
    tag1: string;
    tag1line2?: string;
    tag1sub1: string;
    tag1sub2: string;
    tag2line1: string;
    tag2line2: string;
    tag2sub1: string;
    tag2sub2: string;
  };
  contact1: {
    text: string;
    button: string;
  };
  about: {
    title: string;
    text: string[];
    cvButton: string;
    cvUrl: string;
  };
  examples: {
    title: string;
    cases: {
      id: string;
      color: string;
      name: string;
      tags: string;
    }[];
    viewButton: string;
  };
  services: {
    title: string;
    items: string[];
  };
  contact2: {
    line1: string;
    line2: string;
    button: string;
    marquee: string;
  };
  footer: {
    email: string;
    team: string;
    teamUrl: string;
    github: string;
    githubUrl: string;
  };
  mobile: {
    contact2lines: {
      line1: string;
      line2: string;
    };
    about: {
      text: string[];
    };
    services: {
      items: string[];
    };
  };
  
}

export interface CaseContent {
  hero: {
    breadcrumb: string
    back: string
    tag: string
    here: string
    name: string
    subtitle: string
  }
  description: string
  sections: {
    title: string
    text: string
    video?: string
  }[]
  github: {
    label: string
    url: string
  }[]
}
export interface CvContent {
  back: string
  title: string
  subtitle: string
  headline: string
  paragraphs: string[]
  skillsTitle: string
  skills: string[]
  skillsLayout: 'list' | 'tags'
  closing: string
}
