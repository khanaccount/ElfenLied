import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from "./index.module.scss";
import { CardModal } from "components/Modals/CardModal";
import basketSvg from "assets/vectors/headerContent/basketSvg.svg";

import img01 from "assets/img/headerContent/lamp0.png";
import img02 from "assets/img/headerContent/lamp1.png";
import img03 from "assets/img/headerContent/lamp2.png";

interface CardData {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  imgSrc: string;
  color: string;
  colorText: string;
  slide: string;
  titleBg: string;
  quantity: number;
}

const cardData: CardData[] = [
  {
    id: 1,
    titleBg: "Benjamin Moore",
    name: "Светильник",
    description: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    price: 150000,
    currency: "₽",
    imgSrc: img02,
    color: "#C5B0FA",
    colorText: "#CBB6FF",
    slide: "01",
    quantity: 1,
  },
  {
    id: 2,
    titleBg: "Paint Here Glory",
    name: "Кресло",
    description: "Эргономичное кресло для комфортного сидения и работы.",
    price: 85000,
    currency: "₽",
    imgSrc: img01,
    color: "#FA8EEF",
    colorText: "#FFA8F6",
    slide: "02",
    quantity: 1,
  },
  {
    id: 3,
    titleBg: "Benjamin Moore",
    name: "Высокий стол",
    description: "Современный высокий стол для вашего рабочего пространства.",
    price: 120000,
    currency: "₽",
    imgSrc: img03,
    color: "#AECFFF",
    colorText: "#C8DEFF",
    slide: "03",
    quantity: 1,
  },
];

export const HeaderContent: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const sliderRef = useRef<Slider>(null);

  const selectedCard = cardData.find((card) => card.id === selectedCardId);

  const handleCardClick = (id: number) => {
    setSelectedCardId(id === selectedCardId ? null : id);
  };

  const handleBuyClick = (card: CardData) => {
    setSelectedCardId(card.id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedCardId(null);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    afterChange: (current: number) => setCurrentSlide(current),
  };

  return (
    <div className={`container ${s.headerContent}`}>
      <div className={s.cards}>
        {cardData.map((card) => (
          <div
            key={card.id}
            className={`${s.card} ${selectedCardId === card.id ? s.cardExpanded : ""} ${
              selectedCardId !== null && selectedCardId !== card.id ? s.cardCollapsed : ""
            }`}
            style={{ backgroundColor: card.color }}
            onClick={() => handleCardClick(card.id)}
          >
            <div className={s.imgBlock}>
              {selectedCardId === card.id || selectedCardId === null ? (
                <>
                  <p style={{ color: card.colorText }}>{card.titleBg}</p>
                  <img src={card.imgSrc} alt={card.name} />
                </>
              ) : (
                <img src={card.imgSrc} alt={card.name} />
              )}
            </div>
            <div
              className={`${s.info} ${
                selectedCardId === card.id || selectedCardId === null
                  ? s.infoExpanded
                  : s.infoCollapsed
              }`}
            >
              {selectedCardId === card.id || selectedCardId === null ? (
                <div className={s.infoActive}>
                  <div className={s.block}>
                    <h5 className={s.title}>{card.name}</h5>
                    <p className={s.text}>{card.description}</p>
                    <div className={s.cost}>
                      <p className={s.total}>{card.price.toLocaleString()}</p>
                      <p className={s.currency}>{card.currency}</p>
                    </div>
                  </div>
                  <button
                    className={s.buyBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBuyClick(card);
                    }}
                  >
                    <span className={s.innerCircle}></span>
                    <span className={s.externalCircle}></span>
                    <img src={basketSvg} alt="Basket" />
                    <p>Купить</p>
                  </button>
                </div>
              ) : (
                <>
                  <h5 className={s.slide}>Слайд</h5>
                  <p className={s.number}>{card.slide}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className={s.slider}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {cardData.map((card) => (
            <div key={card.id} className={s.card}>
              <div className={s.imgBlock}>
                <img className={s.bgImg} src={card.imgSrc} alt={card.titleBg} />
                <p className={s.bgText}>{card.titleBg}</p>
                <p className={s.dayProduct}>товар дня</p>
              </div>
              <button
                className={s.buyBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  handleBuyClick(card);
                }}
              >
                <span className={s.innerCircle}></span>
                <span className={s.externalCircle}></span>
                <img src={basketSvg} alt="Basket" />
                <p>Купить</p>
              </button>
              <div className={s.productInfo}>
                <h5>{card.name}</h5>
                <p>{card.description}</p>
                <div className={s.cost}>
                  <p className={s.total}>{card.price.toLocaleString()}</p>
                  <p className={s.currency}>{card.currency}</p>
                </div>
              </div>
              <div className={s.pagination}>
                <span>{String(currentSlide + 1).padStart(2, "0")}</span>
                <span className={s.line}></span>
                <span>{String(cardData.length).padStart(2, "0")}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {modalOpen && selectedCard && <CardModal card={selectedCard} onClose={handleCloseModal} />}
    </div>
  );
};
