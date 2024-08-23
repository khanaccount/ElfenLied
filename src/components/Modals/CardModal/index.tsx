import React, { useEffect, useContext } from "react";
import { AppContext } from "contexts/AppContext";
import s from "./index.module.scss";
import basketSvg from "assets/vectors/headerContent/basketSvg.svg";
import crossSvg from "assets/vectors/cardModal/crossSvg.svg";
import HeartSvg from "./svg/HeartSvg";

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

interface CardModalProps {
  card: CardData;
  onClose: () => void;
}

export const CardModal: React.FC<CardModalProps> = ({ card, onClose }) => {
  const { favoriteItems, toggleFavorite } = useContext(AppContext);
  const isFavorite = favoriteItems.some((i) => i.id === card.id);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleCloseModal = () => {
    onClose();
  };

  const handleToggleFavorite = () => {
    toggleFavorite(card);
  };

  return (
    <section className={s.cardModal}>
      <div className={`containerModal ${s.innerBlock}`}>
        <div className={s.top}>
          <p className={s.article}>Арт. {card.id}</p>
          <div className={s.right}>
            <button className={s.closeModal} onClick={handleCloseModal}>
              закрыть
              <img src={crossSvg} alt="Close" />
            </button>
            <button
              className={`${s.favoriteBtn} ${isFavorite ? s.favoriteBtnActive : ""}`}
              onClick={handleToggleFavorite}
            >
              <HeartSvg />
            </button>
          </div>
        </div>
        <div className={s.middle}>
          <div className={s.colorHeight}>
            <div className={s.colorBlock}>
              <p className={s.option}>Цвет:</p>
              <span></span>
              <p className={s.nameColor}>{card.colorText}</p>
            </div>
            <div className={s.characteristics}>
              <p>Высота:</p>
              <p>60см</p>
            </div>
          </div>
          <div className={s.bg}>
            <h1>{card.titleBg}</h1>
            <img src={card.imgSrc} alt={card.name} />
          </div>
        </div>
        <div className={s.bottom}>
          <p className={s.functional}>{card.description}</p>
          <div className={s.productInfo}>
            <h3 className={s.title}>{card.name}</h3>
            <div className={s.cost}>
              <p className={s.total}>{card.price.toLocaleString()}</p>
              <p className={s.currency}>{card.currency}</p>
            </div>
          </div>
          <button className={s.buyBtn}>
            <span className={s.innerCircle}></span>
            <span className={s.externalCircle}></span>
            <img src={basketSvg} alt="Basket" />
            <p>Купить</p>
          </button>
        </div>
      </div>
    </section>
  );
};
