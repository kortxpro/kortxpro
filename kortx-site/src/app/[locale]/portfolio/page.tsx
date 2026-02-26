import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PortfolioPageContent } from "@/components/sections/PortfolioPageContent";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.portfolio" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[100px]">
        <PortfolioPageContent />
      </main>
      <Footer />
    </>
  );
}
