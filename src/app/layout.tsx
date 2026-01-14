import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auswandern nach Medina | Hijrah & Community",
  description: "Eine geschlossene Community für Muslime, die Hijrah nach Medina und Saudi-Arabien ernst nehmen und Verantwortung für ihre Zukunft übernehmen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
