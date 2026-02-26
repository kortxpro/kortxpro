import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroInstitutional } from "@/components/sections/HeroInstitutional";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CTAInstitutional } from "@/components/sections/CTAInstitutional";

export const dynamic = "force-dynamic";

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
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
      siteName: "KORT.X",
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
        <PortfolioPreview />
        <AboutPreview />
        <CTAInstitutional />
      </main>
      <Footer />
    </>
  );
}
