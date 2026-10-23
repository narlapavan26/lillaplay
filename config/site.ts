// ============================================================
// LillaPlay Brand & Site Configuration
// Edit this file to update brand details, product data, and
// SEO without touching component code.
// ============================================================

export const siteConfig = {
  name: "LillaPlay",
  tagline: "Lek, upptäck, utforska",
  description:
    "LillaPlay skapar leksaker som väcker barns nyfikenhet och glädje. Vår första leksak är en uppladdningsbar, interaktiv ljudleksak för barn.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lillaplay.se",
  locale: "sv-SE",
  currency: "SEK",
  logo: "/logo.png",
  // PLACEHOLDER — client to confirm before launch
  contactEmail: "[E-POSTADRESS SAKNAS]",
  contactPhone: "[TELEFONNUMMER SAKNAS]",
  address: "[ADRESS SAKNAS]",
  social: {
    instagram: null,
    facebook: null,
    tiktok: null,
  },
  nav: [
    { label: "Hem", href: "/" },
    { label: "Leksaken", href: "/#product" },
    { label: "Så funkar det", href: "/#how-it-works" },
    { label: "Om oss", href: "/#about" },
    { label: "Vanliga frågor", href: "/#faq" },
    { label: "Kontakt", href: "/#contact" },
  ],
};

// ============================================================
// Product Catalogue
// Replace placeholder values with confirmed product details.
// ============================================================

export interface ProductVariant {
  id: string;
  label: string;
  value: string;
  available: boolean;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  price: number | null; // null = pris inte konfigurerat än
  compareAtPrice: number | null;
  currency: string;
  images: { src: string; alt: string }[];
  videos: { src: string; poster?: string }[];
  variants: ProductVariant[];
  features: { icon: string; title: string; description: string }[];
  specifications: ProductSpecification[];
  recommendedAge: string | null; // null = ej bekräftad ännu
  availability: "in_stock" | "out_of_stock" | "coming_soon";
  whatsInTheBox: string[];
  seoTitle: string;
  seoDescription: string;
  structuredDataAvailability:
    | "https://schema.org/InStock"
    | "https://schema.org/OutOfStock"
    | "https://schema.org/PreOrder";
}

export const products: Product[] = [
  {
    id: "queaky-charge-01",
    slug: "queaky-charge",
    name: "Queaky Charge",
    shortDescription:
      "En uppladdningsbar leksak som spelar glad musik när kretsen sluts. Håll i båda handtagen — och magin börjar!",
    longDescription:
      "Queaky Charge är en rolig och fascinerande leksak som introducerar barn till grundläggande fysik genom lek. Leksaken spelar glad musik när barnet håller i båda de ledande handtagen — och sluter en elektrisk krets — och tystnar så fort ett handtag släpps. Ladda via USB, slå på strömbrytaren och låt upptäckarglädjen börja.",
    price: null, // PLACEHOLDER — ange pris i SEK
    compareAtPrice: null,
    currency: "SEK",
    images: [
      {
        src: "/product-main.jpg",
        alt: "Queaky Charge — grön leksaksfigur med leende ansikte och två öronformade handtag",
      },
    ],
    // PLACEHOLDER — fler produktbilder (livsstil, specifikationer, instruktioner)
    // läggs till här så snart LillaPlay har egen produktfotografering.
    videos: [{ src: "/videos/hero.mp4", poster: "/videos/hero-poster.jpg" }],
    variants: [], // PLACEHOLDER — bekräfta ev. varianter (färg, storlek) med kunden
    features: [
      {
        icon: "Zap",
        title: "Slut kretsen — och musiken startar!",
        description:
          "Håll i båda handtagen för att sluta kretsen och starta musiken. Släpp ett handtag — och tystnaden återvänder.",
      },
      {
        icon: "Battery",
        title: "Laddningsbar via USB",
        description:
          "Enkel laddning via USB. En röd lampa lyser under laddning så att ditt barn alltid vet vad som händer.",
      },
      {
        icon: "Music",
        title: "Glad musik",
        description:
          "Leksaken spelar uppiggande, inbjudande musik som uppmuntrar till upprepad lek och utforskande.",
      },
      {
        icon: "BookOpen",
        title: "Upptäck orsak och verkan",
        description:
          "Barn lär sig att deras handlingar får konsekvenser — ett naturligt steg mot att förstå hur världen fungerar.",
      },
    ],
    // Endast bekräftade specifikationer visas. Resten läggs till när
    // tillverkarens produktblad är bekräftat.
    specifications: [{ label: "Laddning", value: "USB (medföljer)" }],
    recommendedAge: null, // PLACEHOLDER — bekräfta rekommenderad ålder
    availability: "coming_soon", // ändra till "in_stock" när butiken öppnar
    whatsInTheBox: ["1 × Queaky Charge-leksak", "1 × USB-laddkabel"],
    seoTitle: "Queaky Charge — uppladdningsbar ljudleksak | LillaPlay",
    seoDescription:
      "Queaky Charge är en rolig uppladdningsbar leksak som spelar musik när ditt barn håller i båda handtagen. Upptäck LillaPlay — leksaker för nyfikna barn i Sverige.",
    structuredDataAvailability: "https://schema.org/PreOrder",
  },
];

export const featuredProduct = products[0];
