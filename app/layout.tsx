import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NeuroPeak — добавка для фокусу, ясності мислення та продуктивності",
  description:
    "NeuroPeak — преміальна формула для біохакінгу. Підтримка концентрації, ясності мислення та стабільної енергії протягом дня.",
  keywords: [
    "NeuroPeak",
    "фокус",
    "концентрація",
    "продуктивність",
    "біохакінг",
    "добавка",
  ],
  openGraph: {
    title: "NeuroPeak — добавка для фокусу та продуктивності",
    description:
      "Преміальна формула для ясності мислення, концентрації та стабільної енергії.",
    type: "website",
    locale: "uk_UA",
    url: "https://neuropeak-gilt.vercel.app",
    siteName: "NeuroPeak",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeuroPeak — добавка для фокусу та продуктивності",
    description: "Преміальна формула для ясності мислення, концентрації та стабільної енергії.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-white text-ink-900">{children}</body>
    </html>
  );
}
