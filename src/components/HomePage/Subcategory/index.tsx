import React, { useState } from "react";
import s from "./index.module.scss";
import { Filters } from "./Filters";

import mirror01 from "assets/img/subcategory/01.png";
import mirror02 from "assets/img/subcategory/02.png";
import mirror03 from "assets/img/subcategory/03.png";
import mirror04 from "assets/img/subcategory/04.png";
import mirror05 from "assets/img/subcategory/05.png";
import basketSvg from "assets/vectors/headerContent/basketSvg.svg";
import arrowSvg from "assets/vectors/subcategory/arrowSvg.svg";

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  color: string;
}

const items: Item[] = [
  {
    id: 1,
    title: "Kristin",
    description: "Зеркало напольное",
    price: 150000,
    imageSrc: mirror01,
    color: "#F0B3EA",
  },
  {
    id: 2,
    title: "Luna",
    description: "Зеркало настенное",
    price: 120000,
    imageSrc: mirror02,
    color: "#8ECDFA",
  },
  {
    id: 3,
    title: "Aurelia",
    description: "Зеркало круглое",
    price: 135000,
    imageSrc: mirror03,
    color: "#FBE4CA",
  },
  {
    id: 4,
    title: "Orion",
    description: "Зеркало с подсветкой",
    price: 180000,
    imageSrc: mirror04,
    color: "#F0B5FA",
  },
  {
    id: 5,
    title: "Vega",
    description: "Зеркало для ванной",
    price: 100000,
    imageSrc: mirror05,
    color: "#F0B3EA",
  },
  {
    id: 6,
    title: "Nova",
    description: "Зеркало в прихожую",
    price: 110000,
    imageSrc: mirror01,
    color: "#F0B3EA",
  },
  {
    id: 7,
    title: "Stella",
    description: "Зеркало настенное",
    price: 140000,
    imageSrc: mirror02,
    color: "#8ECDFA",
  },
  {
    id: 8,
    title: "Aurora",
    description: "Зеркало настольное",
    price: 90000,
    imageSrc: mirror03,
    color: "#FBE4CA",
  },
  {
    id: 9,
    title: "Cassiopeia",
    description: "Зеркало для спальни",
    price: 125000,
    imageSrc: mirror04,
    color: "#F0B5FA",
  },
  {
    id: 10,
    title: "Cassiopeia",
    description: "Зеркало настольное",
    price: 125000,
    imageSrc: mirror01,
    color: "#F0B5FA",
  },
];

export const Subcategory: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(5);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };
  return (
    <section className={`container ${s.subcategory}`}>
      <div className={s.filterBlock}>
        <Filters />
        <div className={s.quantity}>
          <p>
            <span>{items.length}</span> позиций в категории
          </p>
        </div>
      </div>
      <div className={s.cards}>
        {items.slice(0, visibleItems).map((item) => (
          <div key={item.id} className={s.card}>
            <div className={s.image}>
              <span className={s.mirrorColor} style={{ backgroundColor: item.color }}></span>
              <img src={item.imageSrc} alt={item.title} />
            </div>
            <div className={s.text}>
              <p className={s.title}>{item.title}</p>
              <p className={s.semiText}>{item.description}</p>
              <div className={s.buyBlock}>
                <div className={s.cost}>
                  <p className={s.total}>{item.price.toLocaleString()}</p>
                  <p className={s.currency}>₽</p>
                </div>
                <div className={s.buyBtn}>
                  <img src={basketSvg} alt="basketSvg" />
                  <p>Купить</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleItems < items.length && (
        <button className={s.downloadMore} onClick={loadMoreItems}>
          <div className={s.textBtn}>
            <p>Загрузить еще</p>
            <img src={arrowSvg} alt="arrowSvg" />
          </div>
        </button>
      )}
    </section>
  );
};
