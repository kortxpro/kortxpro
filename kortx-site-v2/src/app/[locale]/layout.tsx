import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { inter, robotoMono } from "@/lib/fonts";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEN = locale === "en-US";

  return {
    title: isEN ? "KORT.X — Software that moves business" : "KORT.X — Software que move negócios",
    description: isEN
      ? "We build websites, apps, systems and full digital platforms. Clean code, intentional design, real delivery."
      : "Desenvolvemos sites, aplicativos, sistemas e plataformas digitais completas. Código limpo, design intencional, entrega real.",
    alternates: {
      canonical: `https://kortx.pro/${locale}`,
      languages: {
        "pt-BR": "https://kortx.pro/pt-BR",
        "en-US": "https://kortx.pro/en-US",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <meta name="theme-color" content="#050a12" />
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
      </head>
      <body className="font-sans antialiased bg-bg-primary text-text-primary overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
