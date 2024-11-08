import "./globals.css";
import Classificado from "../assets/icons/classificado.svg"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classificados",
  icons: {
    icon: `/assets/classificado.svg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`antialiased bg-black`}
      >
        <main className="mx-auto max-w-4xl pb-28">
          {children}
        </main>
      </body>
    </html>
  );
}
