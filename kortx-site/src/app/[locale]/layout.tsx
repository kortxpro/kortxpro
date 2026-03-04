import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import type { Locale } from "@/i18n/routing";
import type { Metadata } from "next";
import { inter } from "@/lib/fonts";
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/JsonLd";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      languages: {
        "pt-BR": `https://kortx.pro/pt-BR`,
        "en-US": `https://kortx.pro/en-US`,
        "x-default": `https://kortx.pro`,
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

  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0A1628" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-[#0A1628]`}>
        <OrganizationJsonLd />
        <LocalBusinessJsonLd />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
