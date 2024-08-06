import Link from "next/link";
import TypeEffect from "@/components/typingEffect";
import { ParallaxText } from "@/components/parallaxText";
import { SquareArrowOutUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import DistortText from "@/components/distortText";
import TiltComponent from "@/components/tilt";

export default function Home() {
  const t = useTranslations("main");

  return (
    <main className="flex flex-col px-40 max-xl:px-12 max-md:px-6 pb-40">
      <section className="flex w-full gap-12 max-xl:gap-8 py-32 justify-between max-lg:justify-normal max-md:flex-col">
        <div className="flex flex-col gap-4 w-1/2 typing-container max-md:w-full">
          <h1 className="text-8xl almarai-extrabold text-focus-in max-lg:text-6xl max-sm:text-4xl">
            CAIO HENRIQUE RODRIGUES
          </h1>
          <h1 className="text-5xl almarai-extrabold tracking-in-expand text-wrap max-lg:text-3xl max-sm:text-2xl">
            {t("profession") === "DEVELOPER" && (
              <DistortText className="text-sky-500">FULL-STACK</DistortText>
            )}{" "}
            {t("profession")}{" "}
            {t("profession") === "DESENVOLVEDOR" && (
              <DistortText className="text-sky-500">FULL-STACK</DistortText>
            )}
          </h1>
          <TypeEffect
            speed={100}
            text={t("message")}
            as={"h3"}
            className="text-3xl max-lg:text-xl gruppo-regular text-[#5F5F5F]"
          />
        </div>
        <div className="flex flex-col gap-4 text-[#5F5F5F] w-1/3 max-lg:w-1/2 max-md:w-full">
          <div className="flex flex-col marcellus-regular gap-1 btn-shine">
            <p>UI/UX</p>
            <p>{t("developer")}</p>
            <p>{t("webDesign")}</p>
            <p>{t("softwareArchitect")}</p>
          </div>
          <hr className="dark:border-[#1f1f1f] w-full border-zinc-300" />
          <div className="flex flex-col gap-2">
            <p className="marcellus-regular">{t("social")}</p>
            <div className="flex gap-4">
              <Link
                href={
                  "https://www.linkedin.com/in/caio-henrique-rodrigues-9b155916b/"
                }
                target="_blank"
                className="link-technologies text-2xl flex gap-2 items-center"
              >
                LINKEDIN
                <SquareArrowOutUpRight size={18} />
              </Link>
              <Link
                href={"https://github.com/caiorodrigues10"}
                target="_blank"
                className="link-technologies text-2xl flex gap-2 items-center"
              >
                GIT HUB
                <SquareArrowOutUpRight size={18} />
              </Link>
              <Link
                href={"https://www.instagram.com/caio_rodrgues_/"}
                target="_blank"
                className="link-technologies text-2xl flex gap-2 items-center"
              >
                INSTAGRAM
                <SquareArrowOutUpRight size={18} />
              </Link>
            </div>
          </div>
          <hr className="dark:border-[#1f1f1f] w-full border-zinc-300" />
          <div className="flex flex-col gap-2">
            <p className="marcellus-regular">{t("technologies")}</p>
            <div className="flex gap-4 relative">
              <div className="absolute z-10 h-full w-16 bg-gradient-to-l from-transparent dark:to-[#110f0f] to-white/90" />
              <ParallaxText baseVelocity={0.2}>
                <div className="flex w-full gap-4">
                  <Link
                    href="https://react.dev/"
                    target="_blank"
                    className="link-technologies"
                  >
                    REACT
                  </Link>
                  <Link
                    href="https://reactnative.dev/"
                    target="_blank"
                    className="link-technologies"
                  >
                    REACT NATIVE
                  </Link>
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                    target="_blank"
                    className="link-technologies"
                  >
                    JAVASCRIPT
                  </Link>
                  <Link
                    href="https://www.typescriptlang.org/"
                    target="_blank"
                    className="link-technologies"
                  >
                    TYPESCRIPT
                  </Link>
                  <Link
                    href="https://nextjs.org/"
                    target="_blank"
                    className="link-technologies"
                  >
                    NEXTJS
                  </Link>
                  <Link
                    href="https://nodejs.org/"
                    target="_blank"
                    className="link-technologies"
                  >
                    NODEJS
                  </Link>
                  <Link
                    href="https://www.postgresql.org/"
                    target="_blank"
                    className="link-technologies"
                  >
                    POSTGRESQL
                  </Link>
                  <Link
                    href="https://tailwindcss.com/"
                    target="_blank"
                    className="link-technologies"
                  >
                    TAILWIND
                  </Link>
                  <Link
                    href="https://styled-components.com/"
                    target="_blank"
                    className="link-technologies"
                  >
                    STYLED COMPONENTS
                  </Link>
                  <Link
                    href="https://vitejs.dev/"
                    target="_blank"
                    className="link-technologies"
                  >
                    VITE
                  </Link>
                  <Link
                    href="https://www.docker.com/"
                    target="_blank"
                    className="link-technologies"
                  >
                    DOCKER
                  </Link>
                  <Link
                    href="https://mui.com/"
                    target="_blank"
                    className="link-technologies"
                  >
                    MUI
                  </Link>
                  <Link
                    href="https://chakra-ui.com/"
                    target="_blank"
                    className="link-technologies"
                  >
                    CHAKRA UI
                  </Link>
                  <Link
                    href="https://www.framer.com/api/motion/"
                    target="_blank"
                    className="link-technologies"
                  >
                    FRAMER MOTION
                  </Link>
                  <Link
                    href="https://www.figma.com/"
                    target="_blank"
                    className="link-technologies"
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
      <section className="flex w-full flex-col gap-12">
        <h1 className="text-5xl text-center text-[#D7D7D7] syncopate-bold">
          {t("aboutTitle")}
        </h1>
        <div className="flex gap-24 items-center relative">
          <TiltComponent>
            <p className="text-3xl marcellus-regular text-[#7d7d7d]">
              {t("aboutMe")}
            </p>
          </TiltComponent>
          <Image
            src={"/me.png"}
            width={700}
            height={200}
            alt=""
            className="rounded-3xl"
          />
          <Image
            src={"/paint.svg"}
            width={300}
            height={200}
            alt=""
            className="absolute top-0 -right-32 -z-10"
          />
          <Image
            src={"/paint.svg"}
            width={300}
            height={200}
            alt=""
            className="absolute -bottom-24 right-1/4 -z-10"
          />
        </div>
      </section>
    </main>
  );
}
