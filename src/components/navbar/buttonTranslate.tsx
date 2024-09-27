"use client";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { Popover } from "../popover";
import Image from "next/image";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");
  const flag =
    Cookies.get("locale") === "en" ? "/flag-eua.png" : "/flag-brasil.png";

  const [currentFlag, setCurrentFlag] = useState(flag);

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
      <Popover.Toggle>
        <button className="p-2 dark:hover:bg-slate-100/40 hover:bg-slate-400/40 duration-200 rounded-full active:scale-90 cursor-pointer">
          <Image src={currentFlag} alt="" width={24} height={10} />
        </button>
      </Popover.Toggle>
      <Popover.Content className="w-[200px]">
        <button
          className="p-2 dark:hover:bg-zinc-600/40 hover:bg-slate-400/40 h-fit duration-200 flex gap-4 items-center rounded-t-md"
          onClick={() => {
            changeLanguage("pt-br");
            setCurrentFlag("/flag-brasil.png");
          }}
        >
          <Image src="/flag-brasil.png" alt="" width={20} height={10} />
          <p className="text-sm">Português Brasil</p>
        </button>
        <button
          className="p-2 dark:hover:bg-zinc-600/40 hover:bg-slate-400/40 h-fit duration-200 flex gap-4 items-center rounded-b-md"
          onClick={() => {
            changeLanguage("en");
            setCurrentFlag("/flag-eua.png");
          }}
        >
          <Image src="/flag-eua.png" alt="" width={20} height={10} />
          <p className="text-sm">English</p>
        </button>
      </Popover.Content>
    </Popover.Root>
  );
};

export default LanguageSwitcher;
