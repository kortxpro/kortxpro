export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KORT.X",
    url: "https://kortx.pro",
    logo: "https://kortx.pro/logo/kortx-icon.svg",
    description: "Desenvolvemos sites, aplicativos, sistemas e soluções com IA sob medida.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+55-21-97001-3218",
        contactType: "sales",
        areaServed: ["BR", "US"],
        availableLanguage: ["Portuguese", "English"],
      },
    ],
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const businesses = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "KORT.X - Orlando",
      url: "https://kortx.pro",
      telephone: "+1-407-555-0123",
      email: "hello@kortx.pro",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Orlando",
        addressRegion: "FL",
        addressCountry: "US",
      },
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "KORT.X - Rio de Janeiro",
      url: "https://kortx.pro",
      telephone: "+55-21-97001-3218",
      email: "contato@kortx.pro",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rio de Janeiro",
        addressRegion: "RJ",
        addressCountry: "BR",
      },
      priceRange: "$$",
    },
  ];

  return (
    <>
      {businesses.map((biz, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(biz) }}
        />
      ))}
    </>
  );
}
