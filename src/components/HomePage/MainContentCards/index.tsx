import React from "react";
import s from "./index.module.scss";
import homeSvg from "assets/vectors/header/home.svg";
import arrowSvg from "assets/vectors/header/arrow.svg";
import camSvg from "assets/vectors/header/camera.svg";
import housesSvg from "assets/vectors/header/houses.svg";
import sunSvg from "assets/vectors/header/sun.svg";

export const MainContentCards: React.FC = () => {
  return (
    <section className={s.mainContentCards}>
      <div className={s.innerBlock}>
        <div className={s.cards}>
          <a href="#" className={s.card}>
            <img className={s.arrowSvg} src={arrowSvg} alt="arrow" />
            <img className={s.bgSvg} src={homeSvg} alt="homeSvg" />
            <p>Find Your Dream Home</p>
          </a>
          <a href="#" className={s.card}>
            <img className={s.arrowSvg} src={arrowSvg} alt="arrow" />
            <img className={s.bgSvg} src={camSvg} alt="camSvg" />
            <p>Unlock Property Value</p>
          </a>
          <a href="#" className={s.card}>
            <img className={s.arrowSvg} src={arrowSvg} alt="arrow" />
            <img className={s.bgSvg} src={housesSvg} alt="housesSvg" />
            <p>Effortless Property Management</p>
          </a>
          <a href="#" className={s.card}>
            <img className={s.arrowSvg} src={arrowSvg} alt="arrow" />
            <img className={s.bgSvg} src={sunSvg} alt="sunSvg" />
            <p>Smart Investments, Informed Decisions</p>
          </a>
        </div>
      </div>
    </section>
  );
};
