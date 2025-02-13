interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: ProjectImage;
  logo: string;
  href: string;
}

export const projects: Project[] = [
  {
    category: "Personal",
    title: "WeOuddy",
    subtitle: "Design & Development",
    description:
      "WeOuddy is a social platform designed to transform how people connect with events,moments and communities. It enables users to discover, share, and engage with moments in real time, fostering authentic connections and making every moments memorable",
    image: {
      src: "/projects/weouddy-cover.png",
      alt: "WeOuddy mobile app screenshot 1",
    },
    logo: "/projects/weouddy-logo.png",
    href: "/projects/weouddy",
  },
  {
    category: "Side project",
    title: "Wdyk (What do you know)",
    subtitle: "Design & Development",
    description:
      'A mobile app designed to improve users\' spelling skills through a fun and engaging spelling bee game. With features like word pronunciation, immediate feedback, and a unique "guess the word" game mode, it makes learning spellings interactive and enjoyable',
    image: {
      src: "/projects/wdyk-cover.png",
      alt: "Wdyk mobile app screenshot 1",
    },
    logo: "/projects/wdyk-logo.png",
    href: "/projects/wdyk",
  },
  {
    category: "Client",
    title: "FarmersPortal",
    subtitle: "Design & Development",
    description:
      "A SaaS platform designed to help farmers boost productivity and profitability. With tools for managing crops, livestock, and finances, the platform connects farmers to resources and data, enabling smarter, more efficient farming",
    image: {
      src: "/projects/fmp-cover.png",
      alt: "Famersportal mobile app screenshot 1",
    },
    logo: "/projects/fmp-logo.png",
    href: "/projects/farmersportal",
  },
  {
    category: "Client",
    title: "Supplykhart",
    subtitle: "Design & Development",
    description:
      "A delivery platform offering fresh, high-quality farm produce to households, restaurants, and businesses. By bridging the gap between local farms and customers, it ensures affordability, convenience, and farm-to-table freshness",
    image: {
      src: "/projects/supplykhart-cover.png",
      alt: "Supplykhart mobile app screenshot 1",
    },
    logo: "/projects/supplykhart-logo.png",
    href: "/projects/supplykhart",
  },
  {
    category: "Client",
    title: "Syka",
    subtitle: "Product Design & Interaction",
    description:
      "Remit money effortlessly between Ghana and Europe. With a free bank account setup in just 10 minutes, users can manage their finances directly from their smartphone—fast, secure, and convenient",
    image: {
      src: "/projects/skya-cover.png",
      alt: "Skya mobile app screenshot 1",
    },
    logo: "/projects/skya-logo.png",
    href: "/projects/syka",
  },
];
