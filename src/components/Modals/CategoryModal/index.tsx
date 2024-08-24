import React, { useEffect, useState } from "react";

import s from "./index.module.scss";

import crossSvg from "assets/vectors/cardModal/crossSvg.svg";
import basketSvg from "assets/vectors/headerContent/basketSvg.svg";
import img01 from "assets/img/basketModal/01.png";
import img02 from "assets/img/basketModal/02.png";
import img03 from "assets/img/basketModal/03.png";

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  quantity: number;
}

export const CategoryModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const [items] = useState<Item[]>([
    {
      id: 1,
      name: "coppelia",
      description: "Лампа настольная",
      price: 150000,
      img: img01,
      quantity: 2,
    },
    {
      id: 2,
      name: "Facchetta",
      description: "Лампа настольная",
      price: 150000,
      img: img02,
      quantity: 1,
    },
    {
      id: 3,
      name: "coppelia",
      description: "Лампа настольная",
      price: 150000,
      img: img03,
      quantity: 1,
    },
    {
      id: 4,
      name: "coppelia",
      description: "Лампа настольная",
      price: 150000,
      img: img01,
      quantity: 2,
    },
    {
      id: 5,
      name: "coppelia",
      description: "Лампа настольная",
      price: 150000,
      img: img01,
      quantity: 2,
    },
    {
      id: 6,
      name: "coppelia",
      description: "Лампа настольная",
      price: 150000,
      img: img01,
      quantity: 2,
    },
  ]);

  return (
    <section className={s.categoryModal}>
      <div className={s.innerBlock}>
        <button className={s.closeModalBtn} onClick={onClose}>
          <img src={crossSvg} alt="crossSvg" />
        </button>
        <div className={s.cards}>
          <h5 className={s.totalOrder}>торшеры и лампы</h5>
          {items.map((item) => (
            <div key={item.id} className={s.card}>
              <img className={s.productImg} src={item.img} alt={item.name} />
              <div className={s.options}>
                <div className={s.top}>
                  <div className={s.productInfo}>
                    <div className={s.productName}>
                      <span className={s.mirrorColor}></span>
                      <p className={s.title}>{item.name}</p>
                    </div>
                    <p className={s.description}>{item.description}</p>
                  </div>
                </div>
                <div className={s.bottom}>
                  <div className={s.cost}>
                    <p className={s.total}>{item.price.toLocaleString()}</p>
                    <p className={s.currency}>₽</p>
                  </div>
                  <div className={s.buyBtn}>
                    <img src={basketSvg} alt="Basket" />
                    <p>Купить</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
