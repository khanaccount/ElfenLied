import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import s from "./index.module.scss";
import { HeaderNav } from "components/Layout/HeaderNav";

import img01 from "assets/img/basketModal/01.png";
import img02 from "assets/img/basketModal/02.png";
import img03 from "assets/img/basketModal/03.png";
import trashSvg from "assets/vectors/basketModal/trash.svg";

import bg01 from "assets/img/placeOrderModal/01.png";
import bg02 from "assets/img/placeOrderModal/02.png";
import bg03 from "assets/img/placeOrderModal/03.png";
import bg04 from "assets/img/placeOrderModal/04.png";
import bg05 from "assets/img/placeOrderModal/05.png";

const orderSchema = yup
  .object({
    name: yup.string().required("Ваше имя обязательно"),
    address: yup.string().required("Адрес обязателен"),
    phone: yup
      .string()
      .matches(/^\+?[1-9]\d{1,14}$/, "Неверный формат телефона")
      .required("Телефон обязателен"),
  })
  .required();

interface IOrderInput {
  name: string;
  address: string;
  phone: string;
}

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  img: string;
  quantity: number;
}

export const PlaceOrderModal: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IOrderInput>({
    resolver: yupResolver(orderSchema),
  });

  const [items, setItems] = useState<Item[]>([
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
  ]);

  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const handleDelete = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const onSubmit: SubmitHandler<IOrderInput> = (data) => {
    console.log("Order Data:", data);
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className={s.placeOrderModal}>
        <HeaderNav />
        <div className={s.thankYouContent}>
          <div className={s.thx}>
            <h2>ваш Заказ оформлен</h2>
            <h2>Спасибо за заказ </h2>
          </div>
          <div>
            <div className={s.bgText}>
              <h1>thank you</h1>
              <h1>thank you</h1>
              <h1>thank you</h1>
            </div>
            <div className={s.bgImg}>
              <img className={s.imgSmall} src={bg01} alt="bg01" />
              <img className={s.imgSmall} src={bg02} alt="bg02" />
              <img className={s.imgBig} src={bg05} alt="bg055" />
              <img className={s.imgSmall} src={bg04} alt="bg044" />
              <img className={s.imgSmall} src={bg03} alt="bg033" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={s.placeOrderModal}>
      <HeaderNav />
      <div className={`containerModal ${s.innerBlock}`}>
        <div className={s.top}>
          <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
            <h4>Оформление заказа</h4>
            <div className={s.formGroup}>
              <input
                id="name"
                type="text"
                {...register("name")}
                className={errors.name ? s.errorInput : ""}
                placeholder="Ваше имя"
              />
              {errors.name && <p className={s.errorText}>{errors.name.message}</p>}
            </div>
            <div className={s.formGroup}>
              <input
                id="address"
                type="text"
                {...register("address")}
                className={errors.address ? s.errorInput : ""}
                placeholder="Адрес"
              />
              {errors.address && <p className={s.errorText}>{errors.address.message}</p>}
            </div>
            <div className={s.formGroup}>
              <input
                id="phone"
                type="text"
                {...register("phone")}
                className={errors.phone ? s.errorInput : ""}
                placeholder="Телефон"
              />
              {errors.phone && <p className={s.errorText}>{errors.phone.message}</p>}
            </div>
            <div className={s.placeOrderBtn}>
              <button type="submit">Заказать</button>
            </div>
          </form>

          <div className={s.cards}>
            <h5 className={s.totalOrder}>Состав заказа</h5>
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
                    <span className={s.quantity}>x{item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
            <div className={s.total}>
              <p>Итого:</p>
              <div className={s.placeOrderBtn}>
                <p className={s.orderTotal}>{calculateTotal().toLocaleString()}</p>
                <p className={s.orderCurrency}>₽</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
