export const SITE_CONFIG = {
  name: "KORT.X",
  domain: "kortx.pro",
  tagline: {
    "pt-BR": "Tecnologia que transforma negocios.",
    "en-US": "Technology that transforms businesses.",
  },
} as const;

export const COLORS = {
  azulQuadrado: "#00A3FF",
  azulEscuro: "#0A1628",
  backgroundDark: "#0D1117",
  branco: "#FFFFFF",
  cinzaClaro: "#F8FAFC",
  cinzaTexto: "#8B949E",
  cinzaBorda: "#30363D",
} as const;

export const SERVICES = [
  "globe",
  "smartphone",
  "server",
  "rocket",
  "shoppingCart",
  "barChart",
  "zap",
  "bot",
  "users",
  "database",
  "download",
] as const;

export const OFFICES = [
  {
    city: "Orlando",
    state: "FL",
    country: "USA",
  },
  {
    city: "Rio de Janeiro",
    state: "RJ",
    country: "Brasil",
  },
] as const;
