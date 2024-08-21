import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./index.module.scss";

import pic01 from "assets/img/blog/pic01.png";
import pic02 from "assets/img/blog/pic02.png";
import pic03 from "assets/img/blog/pic03.png";

type BlogCard = {
  id: number;
  number: string;
  author: string;
  title: string;
  date: string;
  image: string;
  readingTime: {
    minutes: number;
  };
};

const blogData = [
  {
    id: 1,
    number: "01",
    author: "Laura Busche",
    title: "новая коллекция кресел",
    date: "14 Января 2023",
    image: pic01,
    readingTime: { minutes: 3 },
  },
  {
    id: 2,
    number: "02",
    author: "Laura Busche",
    title: "Световой дизайн в интерьере",
    date: "22 Февраля 2023",
    image: pic02,
    readingTime: { minutes: 5 },
  },
  {
    id: 3,
    number: "03",
    author: "Alice Smith",
    title: "инновации в дизайне интерьеров",
    date: "10 Марта 2023",
    image: pic03,
    readingTime: { minutes: 4 },
  },
  {
    id: 4,
    number: "01",
    author: "Laura Busche",
    title: "новая коллекция кресел",
    date: "14 Января 2023",
    image: pic01,
    readingTime: { minutes: 3 },
  },
  {
    id: 5,
    number: "02",
    author: "Laura Busche",
    title: "Световой дизайн в интерьере",
    date: "22 Февраля 2023",
    image: pic02,
    readingTime: { minutes: 5 },
  },
  {
    id: 6,
    number: "03",
    author: "Alice Smith",
    title: "инновации в дизайне интерьеров",
    date: "10 Марта 2023",
    image: pic03,
    readingTime: { minutes: 4 },
  },
  {
    id: 7,
    number: "01",
    author: "Laura Busche",
    title: "новая коллекция кресел",
    date: "14 Января 2023",
    image: pic01,
    readingTime: { minutes: 3 },
  },
  {
    id: 8,
    number: "02",
    author: "Laura Busche",
    title: "Световой дизайн в интерьере",
    date: "22 Февраля 2023",
    image: pic02,
    readingTime: { minutes: 5 },
  },
  {
    id: 9,
    number: "03",
    author: "Alice Smith",
    title: "инновации в дизайне интерьеров",
    date: "10 Марта 2023",
    image: pic03,
    readingTime: { minutes: 4 },
  },
];

export const Blog: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  const totalSlides = Math.ceil(blogData.length / sliderSettings.slidesToShow);
  const currentSlideGroup = Math.ceil((currentSlide + 1) / sliderSettings.slidesToScroll);

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index * sliderSettings.slidesToShow);
    }
  };

  return (
    <div className={`container ${s.blog}`}>
      <div className={s.top}>
        <div className={s.left}>
          <div className={s.paginationDot}>
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                className={`${s.dot} ${
                  i === Math.floor(currentSlide / sliderSettings.slidesToShow) ? s.activeDot : ""
                }`}
                onClick={() => goToSlide(i)}
              ></button>
            ))}
          </div>
          <h3 className={s.blogTitle}>блог</h3>
        </div>
        <div className={s.paginationNumber}>
          <p>{currentSlideGroup}</p>
          <span></span>
          <p>{totalSlides}</p>
        </div>
      </div>
      <div className={s.cards}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {blogData.map((card: BlogCard) => (
            <div key={card.id} className={s.card}>
              <div className={s.cardInfoTop}>
                <p className={s.number}>{card.number}</p>
                <p className={s.author}>{card.author}</p>
              </div>
              <h4 className={s.articleTitle}>{card.title}</h4>
              <p className={s.publicationDate}>{card.date}</p>
              <img src={card.image} alt={card.title} />
              <span className={s.readingTime}>
                <div className={s.readingBlock}>
                  <p className={s.innerBlockTime}>{card.readingTime.minutes}</p>
                  <p className={s.innerBlockMin}>мин</p>
                </div>
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
