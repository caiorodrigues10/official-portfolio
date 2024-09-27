import { ClientOnly } from "@/components/clientOnly";
import { Navbar } from "@/components/navbar";
import ToastContainerThemed from "@/components/ToastContainerThemed";
import { ThemeProvider } from "@/context/ThemeContext";
import clsx from "clsx";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { cookies } from "next/headers";
import "react-toastify/dist/ReactToastify.css";
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
  const themeValue = cookies().get("theme")?.value;

  const isDark = themeValue === "dark";

  return (
    <html lang={locale} className={clsx({ dark: isDark })}>
      <ThemeProvider>
        <NextIntlClientProvider messages={messages}>
          <ClientOnly>
            <ToastContainerThemed />
          </ClientOnly>
          <body
            className="bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text scrollbar-show-hover"
            id="home"
          >
            <Navbar />

            {children}
          </body>
        </NextIntlClientProvider>
      </ThemeProvider>
    </html>
  );
}
