import React, { useState } from "react";
import s from "./index.module.scss";

import lamp0 from "assets/img/headerContent/lamp0.png";
import lamp1 from "assets/img/headerContent/lamp1.png";
import lamp2 from "assets/img/headerContent/lamp2.png";
import basketSvg from "assets/vectors/headerContent/basketSvg.svg";

interface CardData {
  id: number;
  titleBg: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  imgSrc: string;
  color: string;
  colorText: string;
  slide: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    titleBg: "Benjamin Moore",
    name: "Светильник",
    description: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    price: 150000,
    currency: "₽",
    imgSrc: lamp1,
    color: "#C5B0FA",
    colorText: "#CBB6FF",
    slide: "01",
  },
  {
    id: 2,
    titleBg: "Paint Here Glory",
    description: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    price: 150000,
    currency: "₽",
    imgSrc: lamp0,
    name: "кресло",
    color: "#FA8EEF",
    colorText: "#FFA8F6",
    slide: "02",
  },
  {
    id: 3,
    titleBg: "Benjamin Moore",
    description: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    price: 150000,
    currency: "₽",
    name: "высокий стол",
    imgSrc: lamp2,
    color: "#AECFFF",
    colorText: "#C8DEFF",
    slide: "03",
  },
];

export const HeaderContent: React.FC = () => {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCardId(id === selectedCardId ? null : id);
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
                  <button className={s.buyBtn}>
                    <span className={s.innerCircle}></span>
                    <span className={s.externalCircle}></span>
                    <img src={basketSvg} alt="basketSvg" />
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
    </div>
  );
};
