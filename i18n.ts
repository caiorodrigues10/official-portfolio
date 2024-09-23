import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

const supportedLocales = ["en", "pt-br"];

export default getRequestConfig(async () => {
  const cookieLocale = cookies().get("locale")?.value;

  const locale = supportedLocales.includes(cookieLocale || "")
    ? cookieLocale
    : "pt-br";

  return {
    locale,
    messages: (await import(`./src/languages/${locale}.json`)).default,
  };
});
