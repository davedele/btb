import Script from "next/script";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Box Truck Boys Trucking",
  description: "Transportation, Cargo & Logistics",
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
      </head>
      <body>
        <div id="wrapper">
          <a href="#" id="back-to-top"></a>

          <Header />
          {children}
          <Footer />

        </div>

        {/* Javascript Files */}
        <Script src="/js/plugins.js" strategy="lazyOnload" />
        <Script src="/js/designesia.js" strategy="lazyOnload" />
        <Script src="/js/swiper.js" strategy="lazyOnload" />
        <Script src="/js/custom-swiper-1.js" strategy="lazyOnload" />
        <Script src="/js/custom-marquee.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
