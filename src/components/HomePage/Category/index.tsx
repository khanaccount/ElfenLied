import React from "react";
import s from "./index.module.scss";

import mirror0 from "assets/img/category/mirror0.png";
import mirror1 from "assets/img/category/mirror1.png";
import mirror2 from "assets/img/category/mirror2.png";
import mirror3 from "assets/img/category/mirror3.png";

import ArrowSvg from "./svg/ArrowSvg";

interface CardData {
  id: number;
  image: string;
  title: string;
  quantity: number;
  unit: string;
}
const cardData: CardData[] = [
  {
    id: 1,
    image: mirror0,
    title: "напольные зеркала",
    quantity: 4,
    unit: "шт",
  },
  {
    id: 2,
    image: mirror1,
    title: "торшеры и лампы",
    quantity: 4,
    unit: "шт",
  },
  {
    id: 3,
    image: mirror2,
    title: "кресла и стулья",
    quantity: 4,
    unit: "шт",
  },
  {
    id: 4,
    image: mirror3,
    title: "столы \u200B \u200B и тумбы",
    quantity: 4,
    unit: "шт",
  },
];

export const Category: React.FC = () => {
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
            <button className={s.arrowBtn}>
              <ArrowSvg />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
