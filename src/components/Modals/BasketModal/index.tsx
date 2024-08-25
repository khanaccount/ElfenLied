import React, { useState } from "react";
import s from "./index.module.scss";

import cross from "assets/vectors/cardModal/crossSvg.svg";
import trashSvg from "assets/vectors/basketModal/trash.svg";
import img01 from "assets/img/basketModal/01.png";
import img02 from "assets/img/basketModal/02.png";
import img03 from "assets/img/basketModal/03.png";
import { PlaceOrderModal } from "../PlaceOrderModal";

export const BasketModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isPlaceOrderModalOpen, setIsPlaceOrderModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [items, setItems] = useState([
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

    {
      id: 5,
      name: "coppelia",
      description: "Лампа настольная",
      price: 150000,
      img: img03,
      quantity: 1,
    },
    {
      id: 6,
      name: "coppelia",
      description: "Лампа настольная",
      price: 150000,
      img: img01,
      quantity: 1,
    },
  ]);

  const calculateTotal = () => items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (id: number) =>
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );

  const handleDecrease = (id: number) =>
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    );

  const handleDelete = (id: number) =>
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));

  const openPlaceOrderModal = () => {
    setIsPlaceOrderModalOpen(true);
  };

  return (
    <>
      <div className={`${s.basketModal} ${isModalOpen ? s.basketModalOpen : s.basketModalClosed}`}>
        <div className={s.innerBlock}>
          <div className={s.info}>
            <h4>ваша корзина</h4>
            <button className={s.closeModal} onClick={closeModal}>
              <img src={cross} alt="cross" />
            </button>
          </div>
          <div className={s.cards}>
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
                    <button className={s.deleteBtn} onClick={() => handleDelete(item.id)}>
                      <img src={trashSvg} alt="trashSvg" />
                    </button>
                  </div>
                  <div className={s.bottom}>
                    <div className={s.cost}>
                      <p className={s.total}>{item.price.toLocaleString()}</p>
                      <p className={s.currency}>₽</p>
                    </div>
                    <div className={s.calculating}>
                      <button
                        className={item.quantity === 1 ? s.signsInActive : s.minus}
                        onClick={() => handleDecrease(item.id)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className={s.currentNumber}>{item.quantity}</span>
                      <button className={s.plus} onClick={() => handleIncrease(item.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {items.length > 0 && (
            <div className={s.placeOrder}>
              <div className={s.orderInfo}>
                <p className={s.totalText}>итого:</p>
                <div className={s.orderCost}>
                  <p className={s.orderTotal}>{calculateTotal().toLocaleString()}</p>
                  <p className={s.orderCurrency}>₽</p>
                </div>
              </div>
              <div className={s.placeOrderBtn}>
                <button onClick={openPlaceOrderModal}>Оформить</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {isPlaceOrderModalOpen && <PlaceOrderModal />}
    </>
  );
};
