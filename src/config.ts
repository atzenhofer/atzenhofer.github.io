import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://atzenhofer.github.io/",
  author: "Florian Atzenhofer-B.",
  desc: "A minimal blog.",
  title: "Florian Atzenhofer-B.",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/atzenhofer",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:florian.atzenhofer-baumgartner@uni-graz.at",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  }
];
