import React from "react";
import s from "./index.module.scss";

import catalogSvg from "assets/vectors/headerNav/cataligSvg.svg";
import searchSvg from "assets/vectors/headerNav/searchSvg.svg";
import heartSvg from "assets/vectors/headerNav/heartSvg.svg";
import userSvg from "assets/vectors/headerNav/userSvg.svg";
import basketSvg from "assets/vectors/headerNav/basketSvg.svg";

export const HeaderNav: React.FC = () => {
  return (
    <nav className={`container ${s.headerNav}`}>
      <div className={s.logoCatalog}>
        <a className={s.logo} href="/">
          <h5>Elfen Lied</h5>
        </a>
        <div className={s.catalog}>
          <img src={catalogSvg} alt="catalogSvg" />
          <p>Каталог</p>
        </div>
      </div>
      <div className={s.blogContacts}>
        <button>
          <p>Блог</p>
        </button>
        <button>
          <p>Контакты</p>
        </button>
      </div>
      <div className={s.searchUserAction}>
        <div className={s.search}>
          <img src={searchSvg} alt="searchSvg" />
          <button>
            <p>Поиск</p>
          </button>
        </div>
        <div className={s.userAction}>
          <button>
            <img className={s.heartSvg} src={heartSvg} alt="heartSvg" />
          </button>
          <button>
            <img className={s.userSvg} src={userSvg} alt="userSvg" />
          </button>
          <button>
            <img className={s.basketSvg} src={basketSvg} alt="basketSvg" />
          </button>
        </div>
      </div>
    </nav>
  );
};
