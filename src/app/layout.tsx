import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Caio Henrique Rodrigues",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages({ locale });

  return (
    <html lang="en">
      <NextIntlClientProvider messages={messages}>
        <body className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text">
          <Navbar />

          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
