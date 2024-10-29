import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.css";

// const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["300", "400", "700"] });

export const metadata: Metadata = {
  title: "Gasolina RD",
  description:
    "Buscador de estaciones de combustible en la republica dominicana",
  keywords: [
    "gasolina",
    "combustible",
    "republica dominicana",
    "combustible en republica dominicana",
    "Gasolina RD",
    "gasolineras República Dominicana",
    "calidad de combustible",
    "estaciones de servicio",
    "motor de búsqueda de gasolineras",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
