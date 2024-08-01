// components/LanguageSwitcher.tsx
"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    Cookies.set("locale", newLocale, { expires: 365 });

    const currentPath = window.location.pathname;
    const newPath =
      currentPath.startsWith("/en") || currentPath.startsWith("/pt-br")
        ? currentPath.replace(/^\/(en|pt-br)/, `/${newLocale}`)
        : `/${newLocale}${currentPath}`;

    router.push(newPath);
  };

  return (
    <div className="language-switcher">
      <button
        onClick={() => changeLanguage("en")}
        className={`p-2 ${
          window.location.pathname.startsWith("/en")
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("pt-br")}
        className={`p-2 ${
          window.location.pathname.startsWith("/pt-br")
            ? "bg-blue-500 text-white"
            : "bg-gray-200"
        }`}
      >
        PT-br
      </button>
    </div>
  );
};

export default LanguageSwitcher;
