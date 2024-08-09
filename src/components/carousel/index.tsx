"use client";
import React, { useState } from "react";

interface ItemsProps {
  src: string;
  title: string;
  subTitle: string;
}

interface CarouselProps {
  items: ItemsProps[];
}

const Carousel = ({ items }: CarouselProps) => {
  const [current, setCurrent] = useState(0);

  const moveRight = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const moveLeft = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="">
      <div className="carousel__nav">
        <span id="moveLeft" className="carousel__arrow" onClick={moveLeft}>
          <svg
            className="carousel__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
          </svg>
        </span>
        <span id="moveRight" className="carousel__arrow" onClick={moveRight}>
          <svg
            className="carousel__icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
          </svg>
        </span>
      </div>
      {items.map((_, index) => (
        <div
          key={index}
          className={`carousel-item ${index === current ? "active" : ""}`}
        >
          <div
            className="carousel-item__image"
            style={{ backgroundImage: `url(${getImageUrl(index)})` }}
          ></div>
          <div className="carousel-item__info">
            <div className="carousel-item__container">
              <h2 className="carousel-item__subtitle">Subtitle {index + 1}</h2>
              <h1 className="carousel-item__title">Title {index + 1}</h1>
              <p className="carousel-item__description">
                Description for slide {index + 1}.
              </p>
              <a href="#" className="carousel-item__btn">
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Função para obter a URL da imagem com base no índice
const getImageUrl = (index: number) => {
  const imageUrls = [
    "https://images.pexels.com/photos/991012/pexels-photo-991012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/921294/pexels-photo-921294.png?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/92733/pexels-photo-92733.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/1008732/pexels-photo-1008732.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    "https://images.pexels.com/photos/1029614/pexels-photo-1029614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  ];
  return imageUrls[index];
};

export default Carousel;
