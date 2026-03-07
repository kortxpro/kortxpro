import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { AiFirstContent } from "./AiFirstContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEN = locale === "en-US";
  return {
    title: isEN ? "AI-First Development — KORT.X" : "AI-First Development — KORT.X",
    description: isEN
      ? "We integrate real AI into your processes. Autonomous agents, intelligent automation, predictive analytics."
      : "Integramos IA real nos seus processos. Agentes autônomos, automação inteligente, análise preditiva.",
  };
}

export default async function AiFirstPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AiFirstContent />;
}
