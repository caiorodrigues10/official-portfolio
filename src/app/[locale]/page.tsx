import { ParallaxText } from "@/components/parallaxText";
import { SquareArrowOutUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("main");

  return (
    <main className="flex flex-col px-40">
      <section className="flex w-full gap-12 py-32 justify-between">
        <div className="flex flex-col gap-4 w-1/2">
          <h1 className="text-8xl almarai-extrabold">
            CAIO HENRIQUE RODRIGUES
          </h1>
          <h2 className="text-5xl almarai-extrabold">{t("profession")}</h2>
          <h3 className="text-3xl gruppo-regular text-[#5F5F5F]">
            {t("message")}
          </h3>
        </div>
        <div className="flex flex-col gap-4 text-[#5F5F5F] w-1/3">
          <div className="flex flex-col marcellus-regular gap-1">
            <p>UI/UX</p>
            <p>{t("developer")}</p>
            <p>{t("webDesign")}</p>
            <p>{t("softwareArchitect")}</p>
          </div>
          <hr className="border-[#1f1f1f] w-full" />
          <div className="flex flex-col gap-2">
            <p className="marcellus-regular">{t("social")}</p>
            <div className="flex gap-4">
              <Link
                href={
                  "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                }
                target="_blank"
                className="benchnine-regular text-2xl flex gap-2 items-center"
              >
                LINKEDIN
                <SquareArrowOutUpRight size={18} />
              </Link>
              <Link
                href={"https://github.com/caiorodrigues10"}
                target="_blank"
                className="benchnine-regular text-2xl flex gap-2 items-center"
              >
                GIT HUB
                <SquareArrowOutUpRight size={18} />
              </Link>
              <Link
                href={"https://www.instagram.com/caio_rodrgues_/"}
                target="_blank"
                className="benchnine-regular text-2xl flex gap-2 items-center"
              >
                INSTAGRAM
                <SquareArrowOutUpRight size={18} />
              </Link>
            </div>
          </div>
          <hr className="border-[#1f1f1f] w-full" />
          <div className="flex flex-col gap-2">
            <p className="marcellus-regular">{t("technologies")}</p>
            <div className="flex gap-4 relative">
              <div className="absolute z-10 h-full w-16 bg-gradient-to-l from-transparent dark:to-[#110f0f] to-white/90" />
              <ParallaxText baseVelocity={1}>
                <div className="flex w-full gap-4">
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    REACT
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    REACT NATIVE
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    JAVASCRIPT
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    TYPESCRIPT
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    NEXTJS
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    NODEJS
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    POSTGRESQL
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    TAILWIND
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    STYLED COMPONENTS
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    VITE
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    DOCKER
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    MUI
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    CHAKRA UI
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    FRAMER MOTION
                  </Link>
                  <Link
                    href={
                      "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                    }
                    target="_blank"
                    className="benchnine-regular text-2xl items-center whitespace-nowrap dark:hover:text-white duration-200 h-fit"
                  >
                    FIGMA
                  </Link>
                </div>
              </ParallaxText>

              <div className="absolute right-0 z-10 h-full w-24 bg-gradient-to-r from-transparent dark:to-[#110f0f] to-white/90" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
