import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("main");

  return (
    <main className="">
      <section className="flex w-full gap-12 justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-8xl almarai-extrabold">
            CAIO HENRIQUE RODRIGUES
          </h1>
          <h2 className="text-5xl almarai-extrabold">{t("profession")}</h2>
          <h3 className="text-5xl gruppo-regular">{t("message")}</h3>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <p>UI/UX</p>
            <p>{t("developer")}</p>
            <p>{t("webDesign")}</p>
            <p>{t("softwareArchitect")}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
