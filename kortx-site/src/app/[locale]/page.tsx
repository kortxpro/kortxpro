import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroInstitutional } from "@/components/sections/HeroInstitutional";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CTAInstitutional } from "@/components/sections/CTAInstitutional";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.home" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://kortx.pro/${locale}`,
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
      siteName: "KORT.X",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KORT.X" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroInstitutional />
        <ServicesPreview />
        <ClientLogos />
        <PortfolioPreview />
        <AboutPreview />
        <CTAInstitutional />
      </main>
      <Footer />
    </>
  );
}
