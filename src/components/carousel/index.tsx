"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export interface ItemsProps {
  src: string;
  title: string;
  subTitle: string;
  description: string;
  href: string;
}

interface CarouselProps {
  items: ItemsProps[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const t = useTranslations("main");

  const moveRight = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const moveLeft = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="flex justify-between max-lg:h-[700px] max-sm:h-[600px] w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={clsx("carousel-item", {
            "active flex": index === current,
          })}
        >
          <div className="carousel-item-image items-center flex px-4">
            <span
              id="moveLeft"
              className="carousel-arrow-left"
              onClick={moveLeft}
            >
              <svg
                className="carousel-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
              </svg>
            </span>
            <Image
              src={"/" + item.src}
              alt="Sua Foto"
              width={700}
              height={100}
              className="h-auto max-h-full border border-zinc-300 dark:border-zinc-600 rounded-2xl shadow-md"
            />
            <span
              id="moveRight"
              className="carousel-arrow-right"
              onClick={moveRight}
            >
              <svg
                className="carousel-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
              </svg>
            </span>
          </div>
          <div className="carousel-item-info">
            <h2 className="carousel-item-subtitle">{item.subTitle}</h2>
            <h1 className="carousel-item-title">{item.title}</h1>
            <p className="carousel-item-description">{item.description}</p>
            <Link
              target="_blank"
              href={item.href}
              className="carousel-item-btn cursor-pointer"
            >
              {t("viewWebsite")}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
