import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";

import s from "./index.module.scss";

import arrowSvg from "assets/vectors/contactsModal/arrow.svg";
import crossSvg from "assets/vectors/cardModal/crossSvg.svg";
import svg01 from "assets/vectors/contactsModal/01.svg";
import svg02 from "assets/vectors/contactsModal/02.svg";
import svg03 from "assets/vectors/contactsModal/03.svg";
import svg04 from "assets/vectors/contactsModal/04.svg";

const contactSchema = yup
  .object({
    email: yup.string().email("Некорректный e-mail").required("E-mail обязателен"),
    message: yup.string().required("Сообщение обязательно"),
  })
  .required();

interface IContactInput {
  email: string;
  message: string;
}

export const ContactsModal: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const position: LatLngTuple = [55.7558, 37.6176];

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [modalOpen]);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const {
    register: contactRegister,
    handleSubmit: handleContactSubmit,
    formState: { errors: contactErrors },
  } = useForm<IContactInput>({
    resolver: yupResolver(contactSchema),
  });

  const onContactSubmit: SubmitHandler<IContactInput> = (data) => {
    console.log("Contact Data:", data);
  };

  return (
    <section className={`${s.contactsModal} ${!modalOpen ? s.contactsModalCollapsed : ""}`}>
      <div className={`containerModal ${s.innerBlock}`}>
        <div className={s.top}>
          <div className={s.leftBlock}>
            <div className={s.address}>
              <p className={s.opacityText}>Адрес</p>
              <div className={s.addressBlock}>
                <h5 className={s.cityText}>Москва</h5>
                <p className={s.streetText}>Хохловский переулок д. 11, стр. 3</p>
              </div>

              <span>
                Адрес на карте <img src={arrowSvg} alt="ArrowSvg" />
              </span>
            </div>
            <div className={s.media}>
              <p className={s.opacityText}>Телефон</p>
              <div className={s.contactBlock}>
                <h5 className={s.numberText}>+7 (495) 621-26-17</h5>
                <p className={s.allQuestion}>Ответим на все вопросы</p>
              </div>
              <div className={s.socialMedia}>
                <button>
                  <a href="#">
                    <img src={svg01} alt="svg01" />
                  </a>
                </button>
                <button>
                  <a href="#">
                    <img src={svg02} alt="svg02" />
                  </a>
                </button>
                <button>
                  <a href="#">
                    <img src={svg03} alt="svg03" />
                  </a>
                </button>
                <button>
                  <a href="#">
                    <img src={svg04} alt="svg04" />
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className={s.rightBlock}>
            <p className={s.formTitle}>Форма обратной связи</p>
            <form className={s.form} onSubmit={handleContactSubmit(onContactSubmit)}>
              <div className={s.formGroup}>
                <input
                  id="email"
                  type="email"
                  {...contactRegister("email")}
                  className={contactErrors.email ? s.errorInput : ""}
                  placeholder="E-mail"
                />
                {contactErrors.email && (
                  <p className={s.errorText}>{contactErrors.email?.message}</p>
                )}
              </div>

              <div className={s.formGroup}>
                <input
                  id="message"
                  {...contactRegister("message")}
                  className={contactErrors.message ? s.errorInput : ""}
                  placeholder="Сообщение"
                />
                {contactErrors.message && (
                  <p className={s.errorText}>{contactErrors.message?.message}</p>
                )}
              </div>

              <div className={s.placeOrderBtn}>
                <button type="submit">Отправить</button>
              </div>
            </form>
          </div>
          <button className={s.closeModalBtn} onClick={handleCloseModal}>
            <img src={crossSvg} alt="crossSvg" />
          </button>
        </div>
        <div className={s.mapContainer}>
          <MapContainer
            className={s.map}
            center={position}
            zoomControl={false}
            attributionControl={false}
            scrollWheelZoom={false}
            doubleClickZoom={false}
            zoom={15}
            style={{
              height: "335px",
              width: "100%",
              borderBottomRightRadius: "30px",
              borderBottomLeftRadius: "30px",
            }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Хохловский переулок д. 11, стр. 3</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </section>
  );
};
