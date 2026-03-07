import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt-BR", "en-US"],
  defaultLocale: "pt-BR",
  pathnames: {
    "/": "/",
    "/servicos": {
      "pt-BR": "/servicos",
      "en-US": "/services",
    },
    "/portfolio": {
      "pt-BR": "/portfolio",
      "en-US": "/portfolio",
    },
    "/sobre": {
      "pt-BR": "/sobre",
      "en-US": "/about",
    },
    "/contato": {
      "pt-BR": "/contato",
      "en-US": "/contact",
    },
    "/ai-first": {
      "pt-BR": "/ai-first",
      "en-US": "/ai-first",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;
