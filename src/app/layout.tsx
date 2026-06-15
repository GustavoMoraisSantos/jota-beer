import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { business } from "@/data/business";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "Jota Beer! Distribuidora de Bebidas | Corumbataí do Sul - PR";
const description =
  "Site institucional da Jota Beer! Distribuidora de Bebidas, empresa familiar de Corumbataí do Sul - PR, com atuação em conveniência, bar e distribuição de bebidas nacionais e importadas.";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://jotabeer.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    "Jota Beer",
    "Distribuidora de bebidas Corumbataí do Sul",
    "Conveniência Corumbataí do Sul",
    "Bar Corumbataí do Sul",
    "Bebidas nacionais e importadas",
    "Jota Beer Oficial",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_BR",
    siteName: business.name,
    images: [
      {
        url: business.logo,
        alt: `Logo da ${business.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
