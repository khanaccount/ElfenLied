import React, { useState, useContext } from "react";
import { AppContext } from "contexts/AppContext";
import s from "./index.module.scss";

import HeartSvg from "./svg/HeartSvg";

import cross from "assets/vectors/cardModal/crossSvg.svg";
import img01 from "assets/img/favoriteModal/01.png";
import img02 from "assets/img/favoriteModal/02.png";
import img03 from "assets/img/favoriteModal/03.png";

export const FavoriteModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const { favoriteItems, toggleFavorite } = useContext(AppContext);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const allItems = [
    {
      id: 1,
      name: "coppelia",
      description: "Лампа настольная",
      price: 150000,
      img: img01,
      quantity: 1,
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
      quantity: 1,
    },
  ];

  const items = allItems.filter((item) => favoriteItems.some((fav) => fav.id === item.id));

  return (
    <div
      className={`${s.favoriteModal} ${isModalOpen ? s.favoriteModalOpen : s.favoriteModalClosed}`}
    >
      <div className={s.innerBlock}>
        <div className={s.info}>
          <h4>товары в избранном</h4>
          <button className={s.closeModal} onClick={closeModal}>
            <img src={cross} alt="close" />
          </button>
        </div>
        <div className={s.cards}>
          {items.length > 0 ? (
            items.map((item) => (
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
                    <button
                      className={`${s.favoriteBtn} ${
                        favoriteItems.some((fav) => fav.id === item.id) ? s.favoriteBtnActive : ""
                      }`}
                      onClick={() => toggleFavorite(item)}
                    >
                      <HeartSvg />
                    </button>
                  </div>
                  <div className={s.bottom}>
                    <div className={s.cost}>
                      <p className={s.total}>{item.price.toLocaleString()}</p>
                      <p className={s.currency}>₽</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className={s.noFavorites}>Нет избранных товаров</p>
          )}
        </div>
      </div>
    </div>
  );
};
