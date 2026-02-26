import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AIFirstPageContent } from "./AIFirstPageContent";

export const dynamic = "force-dynamic";

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
