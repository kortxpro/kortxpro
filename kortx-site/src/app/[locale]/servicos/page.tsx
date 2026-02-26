import { getTranslations } from "next-intl/server";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ServicesPageContent } from "@/components/sections/ServicesPageContent";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.services" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[100px]">
        <ServicesPageContent />
      </main>
      <Footer />
    </>
  );
}
