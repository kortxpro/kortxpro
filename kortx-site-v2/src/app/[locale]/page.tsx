import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Metrics } from "@/components/sections/Metrics";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { Work } from "@/components/sections/Work";
import { Approach } from "@/components/sections/Approach";
import { GlobalPresence } from "@/components/sections/GlobalPresence";
import { CTA } from "@/components/sections/CTA";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Metrics />
      <WhatWeBuild />
      <Work />
      <Approach />
      <GlobalPresence />
      <CTA />
    </>
  );
}
