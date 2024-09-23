import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Navbar } from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio | Caio Henrique Rodrigues",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text scrollbar-show-hover">
          <Navbar />

          {children}
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
