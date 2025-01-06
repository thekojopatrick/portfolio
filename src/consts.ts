import type { Site, Metadata, Socials } from "@types";

export const SITE_TITLE = "Build with Kojo.";
export const SITE_DESCRIPTION =
  "Building solutions that thrive in the digital world. Located in Ghana. Delivering tailor-made digital designs and building interactive websites & web application from scratch. © Build with Kojo";

export const SITE: Site = {
  NAME: "Build with Kojo.",
  EMAIL: "kojopatrick.dev@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Kojo Patrick • Freelance Designer & Developer",
  DESCRIPTION:
    "Building solutions that thrive in the digital world. Located in Ghana. Delivering tailor-made digital designs and building interactive websites & web application from scratch. © Build with Kojo",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "read-cv",
    HREF: "https://read.cv/kojopatrick",
  },
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/kojopatrick_",
  },
  {
    NAME: "github",
    HREF: "https://github.com/thekojopatrick",
  },
  {
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/kojo-patrick-43bb87ab",
  },
];
