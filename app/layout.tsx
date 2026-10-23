import { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import { siteConfig } from "@/config/site";
import { featuredProduct } from "@/config/site";
import { CartProvider } from "@/services/cart";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import ToastContainer from "@/components/ui/ToastContainer";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} – ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "leksaker",
    "köpa leksaker online",
    "leksaker för barn",
    "rolig leksak",
    "pedagogiska leksaker",
    "lärorika leksaker",
    "STEM-leksaker",
    "experimentleksak",
    "present till barn",
    "present till födelsedag",
    "ljudleksak",
    "LillaPlay",
    "Queaky Charge",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}${featuredProduct.images[0].src}`,
        width: 1200,
        height: 630,
        alt: "LillaPlay – Queaky Charge, uppladdningsbar interaktiv leksak",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [`${siteConfig.url}${featuredProduct.images[0].src}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Swedish",
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: featuredProduct.name,
    description: featuredProduct.shortDescription,
    brand: { "@type": "Brand", name: siteConfig.name },
    image: featuredProduct.images.map((img) => `${siteConfig.url}${img.src}`),
    offers: {
      "@type": "Offer",
      availability: featuredProduct.structuredDataAvailability,
      priceCurrency: featuredProduct.currency,
      url: `${siteConfig.url}/#product`,
    },
  };

  return (
    <html lang="sv-SE" className={`${nunito.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </head>
      <body className="antialiased">
        <a href="#main-content" className="skip-link">
          Hoppa till innehåll
        </a>
        <CartProvider>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          <CartDrawer />
          <ToastContainer />
        </CartProvider>
      </body>
    </html>
  );
}
