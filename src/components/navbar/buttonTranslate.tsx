"use client";

import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Popover } from "../popover";
import { Languages } from "lucide-react";
import Image from "next/image";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  const changeLanguage = (newLocale: string) => {
    Cookies.set("locale", newLocale, { expires: 365 });

    const newPath =
      currentPath.startsWith("/en") || currentPath.startsWith("/pt-br")
        ? currentPath.replace(/^\/(en|pt-br)/, `/${newLocale}`)
        : `/${newLocale}${currentPath}`;

    router.push(newPath);
  };

  return (
    <Popover.Root>
      <Popover.Toggle className="p-2 dark:hover:bg-slate-100/40 hover:bg-slate-400/40 h-fit duration-200 rounded-full active:scale-90">
        <Image src="/flag-brasil.png" alt="" width={30} height={10} />
      </Popover.Toggle>
      <Popover.Content>
        <button className="p-2 dark:hover:bg-slate-100/40 hover:bg-slate-400/40 h-fit duration-200 rounded-full active:scale-90">
          <Image src="/flag-brasil.png" alt="" width={30} height={10} />
        </button>
      </Popover.Content>
    </Popover.Root>
  );
};

export default LanguageSwitcher;
