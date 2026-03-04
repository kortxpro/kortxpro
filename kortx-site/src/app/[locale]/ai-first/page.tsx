import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AIFirstPageContent } from "./AIFirstPageContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.aiFirst" });

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: `https://kortx.pro/${locale}/ai-first`,
      locale: locale === "pt-BR" ? "pt_BR" : "en_US",
      siteName: "KORT.X",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "KORT.X AI First" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.png"],
    },
  };
}

export default function AIFirstPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[100px]">
        <AIFirstPageContent />
      </main>
      <Footer />
    </>
  );
}
