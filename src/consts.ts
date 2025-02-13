import type { Site, Metadata, Socials } from "@types";
export const GA_TRACKING_ID = "G-QBGYSF417P";

export const SITE_TITLE = "Kojo Patrick • Full-Stack Product Engineer";
export const SITE_DESCRIPTION =
  "Bridging design and code to build AI-augmented web experiences. React/TypeScript specialist crafting scalable SaaS solutions for startups. 95% client satisfaction across 10+ shipped products.";

export const SITE: Site = {
  NAME: "Kojo Patrick",
  EMAIL: "kojo.obengpatrick@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 3, // Showcase freelance + studio work
  NUM_PROJECTS_ON_HOMEPAGE: 4, // Include paused projects as case studies
};

export const HOME: Metadata = {
  TITLE: "Full-Stack Product Engineer | React + TypeScript + AI",
  DESCRIPTION:
    "I turn complex problems into elegant digital solutions. 4+ years building production-ready web apps with modern stacks (React, Supabase, Framer Motion). Featured on Product Hunt ×2.",
};

export const ABOUT: Metadata = {
  TITLE: "From Ghana to Global Products",
  DESCRIPTION:
    "Founder turned technical builder. Pivoted from paused SaaS ventures to solving engineering challenges for startups. My superpower? Shipping MVPs 30% faster using AI-augmented workflows.",
};

export const BLOG: Metadata = {
  TITLE: "Engineering Insights",
  DESCRIPTION:
    "Breaking down technical decisions: Why I chose Supabase over Firebase for FarmersPortal’s real-time features",
};

export const WORK: Metadata = {
  TITLE: "Builds & Collaborations",
  DESCRIPTION:
    "Client work that moved metrics: 20% sales boosts, 100+ SaaS sign-ups, 30% faster iterations through AI prototyping",
};

export const PROJECTS: Metadata = {
  TITLE: "Technical Showcase",
  DESCRIPTION:
    "Production-grade code samples: From supply-chain SaaS to real-time event platforms. Includes paused projects with lessons learned.",
};

export const SOCIALS: Socials = [
  {
    NAME: "resume",
    HREF: "https://kojopatrick.com/kojo-patrick-resume.pdf",
  },
  {
    NAME: "read-cv",
    HREF: "https://read.cv/kojopatrick",
  },
  {
    NAME: "github",
    HREF: "https://github.com/thekojopatrick",
  },
  {
    NAME: "portfolio",
    HREF: "https://kojopatrick.com/projects", // Direct to project case studies
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/kojo-patrick-43bb87ab",
  },
];
