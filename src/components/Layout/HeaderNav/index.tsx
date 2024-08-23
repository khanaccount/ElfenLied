import React, { useState, useContext } from "react";
import { Link as LinkScroll } from "react-scroll";
import s from "./index.module.scss";
import catalogSvg from "assets/vectors/headerNav/cataligSvg.svg";
import searchSvg from "assets/vectors/headerNav/searchSvg.svg";
import heartSvg from "assets/vectors/headerNav/heartSvg.svg";
import userSvg from "assets/vectors/headerNav/userSvg.svg";
import basketSvg from "assets/vectors/headerNav/basketSvg.svg";

import { BasketModal } from "components/Modals/BasketModal";
import { AuthModal } from "components/Modals/AuthModal";
import { FavoriteModal } from "components/Modals/FavoriteModal";
import { ContactsModal } from "components/Modals/ContactsModal";
import { SearchModal } from "components/Modals/SearchModal";
import { AppContext } from "../../../contexts/AppContext";

type ModalType = "basket" | "auth" | "favorite" | "contacts" | "searchModal" | null;

export const HeaderNav: React.FC = () => {
  const [openModal, setOpenModal] = useState<ModalType>(null);
  const { setSelectedCategoryId } = useContext(AppContext);

  const handleModalToggle = (modal: ModalType) => {
    setOpenModal((prevModal) => (prevModal === modal ? null : modal));
  };

  const handleCatalogClick = () => {
    setSelectedCategoryId(1);
  };

  return (
    <nav className={`container ${s.headerNav}`}>
      <div className={s.logoCatalog}>
        <a className={s.logo} href="/">
          <h5>Elfen Lied</h5>
        </a>
        <LinkScroll
          to="catalog"
          smooth={true}
          duration={500}
          offset={-300}
          onClick={handleCatalogClick}
        >
          <div className={s.catalog}>
            <img src={catalogSvg} alt="catalogSvg" />
            <p>Каталог</p>
          </div>
        </LinkScroll>
      </div>
      <div className={s.blogContacts}>
        <LinkScroll to="blog-anchor" smooth={true} duration={500} offset={-70}>
          <button>
            <p>Блог</p>
          </button>
        </LinkScroll>
        <button onClick={() => handleModalToggle("contacts")}>
          <p>Контакты</p>
        </button>
      </div>
      <div className={s.searchUserAction}>
        <div className={s.search} onClick={() => handleModalToggle("searchModal")}>
          <img src={searchSvg} alt="searchSvg" />
          <button>
            <p>Поиск</p>
          </button>
        </div>
        <div className={s.userAction}>
          <button onClick={() => handleModalToggle("favorite")}>
            <img className={s.heartSvg} src={heartSvg} alt="heartSvg" />
          </button>
          <button onClick={() => handleModalToggle("auth")}>
            <img className={s.userSvg} src={userSvg} alt="userSvg" />
          </button>
          <button onClick={() => handleModalToggle("basket")}>
            <img className={s.basketSvg} src={basketSvg} alt="basketSvg" />
          </button>
        </div>
      </div>
      {openModal === "basket" && <BasketModal />}
      {openModal === "auth" && <AuthModal />}
      {openModal === "favorite" && <FavoriteModal />}
      {openModal === "contacts" && <ContactsModal />}
      {openModal === "searchModal" && <SearchModal />}
    </nav>
  );
};
