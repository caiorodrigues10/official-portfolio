"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Button } from "../button";
import { useTranslations } from "next-intl";

export function InfoCookies({
  description,
  buttonTitle,
}: {
  buttonTitle: string;
  description: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const t = useTranslations();
  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "true", { expires: 365 });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-100 dark:bg-zinc-800 p-8 flex items-center justify-between z-50">
      <p>{description}</p>
      <Button onClick={handleAccept} className="px-4 py-2 rounded-md ml-4">
        {buttonTitle}
      </Button>
    </div>
  );
}
