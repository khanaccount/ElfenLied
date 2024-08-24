import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "contexts/AppContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./index.module.scss";

import mirror0 from "assets/img/category/mirror0.png";
import mirror1 from "assets/img/category/mirror1.png";
import mirror2 from "assets/img/category/mirror2.png";
import mirror3 from "assets/img/category/mirror3.png";

import ArrowSvg from "./svg/ArrowSvg";
import { CategoryModal } from "components/Modals/CategoryModal";
import { Subcategory } from "../Subcategory";

interface CardData {
  id: number;
  image: string;
  title: string;
  quantity: number;
  unit: string;
}

const sliderSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1.5,
  slidesToScroll: 1,
  arrows: false,
};

const cardData: CardData[] = [
  { id: 1, image: mirror0, title: "напольные зеркала", quantity: 4, unit: "шт" },
  { id: 2, image: mirror1, title: "настенные зеркала", quantity: 3, unit: "шт" },
  { id: 3, image: mirror2, title: "триммеры", quantity: 5, unit: "шт" },
  { id: 4, image: mirror3, title: "встраиваемые зеркала", quantity: 2, unit: "шт" },
];

export const Category: React.FC = () => {
  const { selectedCategoryId, setSelectedCategoryId } = useContext(AppContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 390);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 390);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSubcategory = (id: number) => {
    const newSelectedId = selectedCategoryId === id ? null : id;
    setSelectedCategoryId(newSelectedId);

    if (newSelectedId !== null && isMobileView) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategoryId(null);
  };

  return (
    <section className={`container ${s.category}`}>
      <h2 className={s.categoryTitle}>категории</h2>
      <div className={s.categoryCards}>
        {cardData.map((card) => (
          <div key={card.id} className={s.card}>
            <img className={s.lamp} src={card.image} alt={card.title} />
            <p className={s.title}>{card.title}</p>
            <svg className={s.customMade} viewBox="0 0 100 40">
              <path
                id="flatter-half-circle"
                d="M 10,40 a 45,30 0 0,1 80,0"
                fill="none"
                stroke="none"
              />
              <text fill="white" fontSize={12}>
                <textPath xlinkHref="#flatter-half-circle">изготовление на заказ</textPath>
              </text>
            </svg>
            <span className={s.quantityBg}>
              <div className={s.quantityText}>
                <p className={s.number}>{card.quantity}</p>
                <p className={s.pieces}>{card.unit}</p>
              </div>
            </span>
            <button
              className={selectedCategoryId === card.id ? s.arrowBtnActive : s.arrowBtn}
              onClick={() => toggleSubcategory(card.id)}
            >
              <ArrowSvg />
            </button>
          </div>
        ))}
      </div>
      <Slider {...sliderSettings} className={s.categoryCardsSlider}>
        {cardData.map((card) => (
          <div key={card.id} className={s.card}>
            <img className={s.lamp} src={card.image} alt={card.title} />
            <p className={s.title}>{card.title}</p>
            <svg className={s.customMade} viewBox="0 0 100 40">
              <path
                id="flatter-half-circle"
                d="M 10,40 a 45,30 0 0,1 80,0"
                fill="none"
                stroke="none"
              />
              <text fill="white" fontSize={12}>
                <textPath xlinkHref="#flatter-half-circle">изготовление на заказ</textPath>
              </text>
            </svg>
            <span className={s.quantityBg}>
              <div className={s.quantityText}>
                <p className={s.number}>{card.quantity}</p>
                <p className={s.pieces}>{card.unit}</p>
              </div>
            </span>
            <button
              className={selectedCategoryId === card.id ? s.arrowBtnActive : s.arrowBtn}
              onClick={() => toggleSubcategory(card.id)}
            >
              <ArrowSvg />
            </button>
          </div>
        ))}
      </Slider>
      {isModalOpen && isMobileView && <CategoryModal onClose={closeModal} />}
      {!isMobileView && selectedCategoryId !== null && <Subcategory />}
    </section>
  );
};
