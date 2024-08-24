import React from "react";
import s from "./index.module.scss";

import logoSvg from "assets/vectors/footer/logoSvg.svg";

export const Footer: React.FC = () => {
  return (
    <div className={`container ${s.footer}`}>
      <div className={s.phoneBlock}>
        <p className={s.rightsPhone}>Все права защищены</p>
        <p className={s.year}>@2023</p>
      </div>
      <button className={s.footerBtn}>
        <div className={s.textBtn}>
          <img src={logoSvg} alt="arrowSvg" />
          <p>
            Request <span>Design</span>
          </p>
        </div>
      </button>
      <p className={s.rights}>Все права защищены</p>
    </div>
  );
};
