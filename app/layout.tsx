import type { Metadata } from "next";
import { Unbounded, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { LenisRoot } from "@/components/ui";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Foontro — India's Most Verified Freelance Marketplace",
  description:
    "Browse verified freelance services, order in minutes, and pay only when the work is right. Escrow-protected payments, manual human verification, login streaks with metallic tier frames.",
  keywords: [
    "freelance marketplace India",
    "hire verified freelancers",
    "escrow payments",
    "freelance services",
    "Foontro",
  ],
  openGraph: {
    title: "Foontro — India's Most Verified Freelance Marketplace",
    description:
      "5,000+ creators. 21% get seated. Browse verified services, order in minutes, pay only when the work is right.",
    type: "website",
    url: "https://foontro.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Foontro — India's Most Verified Freelance Marketplace",
    description: "5,000+ creators. 21% get seated. Escrow-protected freelance marketplace.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "Foontro",
      url: "https://foontro.com",
      description:
        "India's most verified freelance marketplace — escrow-protected payments, manually verified freelancers.",
      areaServed: "IN",
    },
    {
      "@type": "WebSite",
      name: "Foontro",
      url: "https://foontro.com",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Foontro?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Foontro is India's most verified freelance marketplace, helping startups and small businesses hire trusted creative and digital talent without the usual risk.",
          },
        },
        {
          "@type": "Question",
          name: "How does the escrow payment work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "When you place an order, your payment goes into Foontro; it does not reach the freelancer yet. Once you approve the delivery, the payment is released to the freelancer.",
          },
        },
        {
          "@type": "Question",
          name: "How are freelancers verified?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every freelancer application is manually reviewed by the Foontro team. Only 21% of applicants are approved.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="grain">
        <a href="#main" className="skip-link rounded-full bg-(--primary) px-5 py-2.5 font-mono text-xs font-semibold text-[#0c0b09]">
          Skip to content
        </a>
        <div className="margin-rails" aria-hidden="true" />
        <div className="margin-line" aria-hidden="true" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LenisRoot>{children}</LenisRoot>
      </body>
    </html>
  );
}
