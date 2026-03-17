import Script from "next/script";
import type { Metadata } from "next";

import TemplateReinit from "@/components/TemplateReinit";

export const metadata: Metadata = {
  title: {
    default: "Box Truck Boys Trucking | Medical Courier & Delivery Service Minneapolis",
    template: "%s | Box Truck Boys Trucking",
  },
  description:
    "Box Truck Boys Trucking provides medical courier, same-day delivery, final-mile delivery, and box truck freight services in Minneapolis, Saint Paul, and the Twin Cities metro. Call (612) 237-7374.",
  keywords: [
    "medical courier Minneapolis",
    "same-day delivery Minneapolis",
    "box truck delivery Twin Cities",
    "final-mile delivery Minnesota",
    "medical delivery service",
    "freight delivery Minneapolis",
    "LTL shipping Minneapolis",
    "sprinter van delivery",
    "courier service Saint Paul",
  ],
  openGraph: {
    title: "Box Truck Boys Trucking | Medical Courier & Delivery Service Minneapolis",
    description:
      "Medical courier, same-day delivery, and box truck freight services in Minneapolis and the Twin Cities. Locally owned. USDOT 3823948.",
    url: "https://boxtruckboys.com",
    siteName: "Box Truck Boys Trucking",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://boxtruckboys.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Box Truck Boys Trucking",
  description:
    "Medical courier, same-day delivery, final-mile delivery, and box truck freight services in Minneapolis and the Twin Cities.",
  url: "https://boxtruckboys.com",
  telephone: "(612) 237-7374",
  email: "Boxtruckboystrucking@gmail.com",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "3327 N Washburn Ave",
      addressLocality: "Minneapolis",
      addressRegion: "MN",
      postalCode: "55412",
      addressCountry: "US",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "7734 Nebraska Ave",
      addressLocality: "Omaha",
      addressRegion: "NE",
      postalCode: "68134",
      addressCountry: "US",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Minneapolis" },
    { "@type": "City", name: "Saint Paul" },
    { "@type": "State", name: "Minnesota" },
  ],
  serviceType: [
    "Medical Courier Service",
    "Same-Day Delivery",
    "Final-Mile Delivery",
    "Scheduled Route Delivery",
    "Box Truck Freight",
    "White Glove Delivery",
    "LTL Shipping",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "06:00",
    closes: "20:00",
  },
  sameAs: [],
  identifier: [
    { "@type": "PropertyValue", name: "USDOT", value: "3823948" },
    { "@type": "PropertyValue", name: "MC", value: "MC-1384682" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/icon.webp" type="image/gif" sizes="16x16" />
        <meta content="text/html;charset=utf-8" httpEquiv="Content-Type" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />

        {/* CSS Files */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" id="bootstrap" />
        <link href="/css/plugins.css" rel="stylesheet" type="text/css" />
        <link href="/css/swiper.css" rel="stylesheet" type="text/css" />
        <link href="/css/swiper-custom-1.css" rel="stylesheet" type="text/css" />
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <link href="/css/coloring.css" rel="stylesheet" type="text/css" />
        {/* color scheme */}
        <link id="colors" href="/css/colors/scheme-01.css" rel="stylesheet" type="text/css" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div id="wrapper">
          <a href="#" id="back-to-top"></a>

          {children}

        </div>

        {/* Javascript Files */}
        <Script src="/js/plugins.js" strategy="beforeInteractive" />
        <Script src="/js/designesia.js" strategy="afterInteractive" />
        <Script src="/js/swiper.js" strategy="afterInteractive" />
        <Script src="/js/custom-swiper-1.js" strategy="afterInteractive" />
        <Script src="/js/custom-marquee.js" strategy="afterInteractive" />
        <TemplateReinit />
      </body>
    </html>
  );
}
