import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../../contexts/AppContext";
import s from "./index.module.scss";
import { Filters } from "./Filters";

import mirror01 from "assets/img/subcategory/01.png";
import mirror02 from "assets/img/subcategory/02.png";
import mirror03 from "assets/img/subcategory/03.png";
import mirror04 from "assets/img/subcategory/04.png";
import mirror05 from "assets/img/subcategory/05.png";
import basketSvg from "assets/vectors/headerContent/basketSvg.svg";
import arrowSvg from "assets/vectors/subcategory/arrowSvg.svg";

interface Item {
  id: number;
  title: string;
  description: string;
  price: number;
  imageSrc: string;
  color: string;
}

const categorizedItems: { [key: number]: Item[] } = {
  1: [
    {
      id: 1,
      title: "Kristin",
      description: "Зеркало напольное",
      price: 150000,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 2,
      title: "Sophia",
      description: "Зеркало напольное",
      price: 160000,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 3,
      title: "Vivian",
      description: "Зеркало напольное",
      price: 170000,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 4,
      title: "Ophelia",
      description: "Зеркало напольное",
      price: 155000,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 5,
      title: "Aurora",
      description: "Зеркало напольное",
      price: 165000,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
    {
      id: 6,
      title: "Nova",
      description: "Зеркало напольное",
      price: 180000,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 7,
      title: "Elara",
      description: "Зеркало напольное",
      price: 190000,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 8,
      title: "Diana",
      description: "Зеркало напольное",
      price: 175000,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 9,
      title: "Athena",
      description: "Зеркало напольное",
      price: 185000,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 10,
      title: "Selene",
      description: "Зеркало напольное",
      price: 195000,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
  ],
  2: [
    {
      id: 1,
      title: "Luna",
      description: "Торшер",
      price: 90000,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 2,
      title: "Stella",
      description: "Лампа настольная",
      price: 85000,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 3,
      title: "Aurora",
      description: "Торшер",
      price: 95000,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 4,
      title: "Orion",
      description: "Лампа настольная",
      price: 80000,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 5,
      title: "Vega",
      description: "Торшер",
      price: 100000,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
    {
      id: 6,
      title: "Nova",
      description: "Лампа настольная",
      price: 75000,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 7,
      title: "Cassiopeia",
      description: "Торшер",
      price: 105000,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 8,
      title: "Aurelia",
      description: "Лампа настольная",
      price: 85000,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 9,
      title: "Phoebe",
      description: "Торшер",
      price: 95000,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 10,
      title: "Rhea",
      description: "Лампа настольная",
      price: 90000,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
  ],
  3: [
    {
      id: 1,
      title: "Oslo",
      description: "Кресло",
      price: 200000,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 2,
      title: "Stockholm",
      description: "Стул",
      price: 80000,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 3,
      title: "Copenhagen",
      description: "Кресло",
      price: 210000,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 4,
      title: "Helsinki",
      description: "Стул",
      price: 85000,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 5,
      title: "Reykjavik",
      description: "Кресло",
      price: 220000,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
    {
      id: 6,
      title: "Gothenburg",
      description: "Стул",
      price: 90000,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 7,
      title: "Bergen",
      description: "Кресло",
      price: 230000,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 8,
      title: "Trondheim",
      description: "Стул",
      price: 95000,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 9,
      title: "Oslo",
      description: "Кресло",
      price: 240000,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 10,
      title: "Stockholm",
      description: "Стул",
      price: 100000,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
  ],
  4: [
    {
      id: 1,
      title: "Atlas",
      description: "Стол",
      price: 180000,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 2,
      title: "Hermes",
      description: "Тумба",
      price: 70000,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 3,
      title: "Zeus",
      description: "Стол",
      price: 190000,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 4,
      title: "Apollo",
      description: "Тумба",
      price: 75000,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 5,
      title: "Ares",
      description: "Стол",
      price: 200000,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
    {
      id: 6,
      title: "Hephaestus",
      description: "Тумба",
      price: 80000,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 7,
      title: "Dionysus",
      description: "Стол",
      price: 210000,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 8,
      title: "Hera",
      description: "Тумба",
      price: 85000,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 9,
      title: "Poseidon",
      description: "Стол",
      price: 220000,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 10,
      title: "Hades",
      description: "Тумба",
      price: 90000,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
  ],
};

const authenticatedItems: { [key: number]: Item[] } = {
  1: [
    {
      id: 1,
      title: "Kristin",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 2,
      title: "Sophia",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 3,
      title: "Vivian",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 4,
      title: "Ophelia",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 5,
      title: "Aurora",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
    {
      id: 6,
      title: "Nova",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 7,
      title: "Elara",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 8,
      title: "Diana",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 9,
      title: "Athena",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 10,
      title: "Selene",
      description: "Зеркало напольное",
      price: 100,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
  ],
  2: [
    {
      id: 1,
      title: "Luna",
      description: "Торшер",
      price: 100,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 2,
      title: "Stella",
      description: "Лампа настольная",
      price: 100,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 3,
      title: "Aurora",
      description: "Торшер",
      price: 100,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 4,
      title: "Orion",
      description: "Лампа настольная",
      price: 100,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 5,
      title: "Vega",
      description: "Торшер",
      price: 100,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
    {
      id: 6,
      title: "Nova",
      description: "Лампа настольная",
      price: 100,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 7,
      title: "Cassiopeia",
      description: "Торшер",
      price: 100,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 8,
      title: "Aurelia",
      description: "Лампа настольная",
      price: 100,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 9,
      title: "Phoebe",
      description: "Торшер",
      price: 100,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 10,
      title: "Rhea",
      description: "Лампа настольная",
      price: 100,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
  ],
  3: [
    {
      id: 1,
      title: "Oslo",
      description: "Кресло",
      price: 100,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 2,
      title: "Stockholm",
      description: "Стул",
      price: 100,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 3,
      title: "Copenhagen",
      description: "Кресло",
      price: 100,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 4,
      title: "Helsinki",
      description: "Стул",
      price: 100,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 5,
      title: "Reykjavik",
      description: "Кресло",
      price: 100,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
    {
      id: 6,
      title: "Gothenburg",
      description: "Стул",
      price: 100,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 7,
      title: "Bergen",
      description: "Кресло",
      price: 100,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 8,
      title: "Trondheim",
      description: "Стул",
      price: 100,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 9,
      title: "Oslo",
      description: "Кресло",
      price: 100,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 10,
      title: "Stockholm",
      description: "Стул",
      price: 100,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
  ],
  4: [
    {
      id: 1,
      title: "Atlas",
      description: "Стол",
      price: 100,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 2,
      title: "Hermes",
      description: "Тумба",
      price: 100,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 3,
      title: "Zeus",
      description: "Стол",
      price: 100,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 4,
      title: "Apollo",
      description: "Тумба",
      price: 100,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 5,
      title: "Ares",
      description: "Стол",
      price: 100,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
    {
      id: 6,
      title: "Hephaestus",
      description: "Тумба",
      price: 100,
      imageSrc: mirror01,
      color: "#F0B3EA",
    },
    {
      id: 7,
      title: "Dionysus",
      description: "Стол",
      price: 100,
      imageSrc: mirror02,
      color: "#8ECDFA",
    },
    {
      id: 8,
      title: "Hera",
      description: "Тумба",
      price: 100,
      imageSrc: mirror03,
      color: "#FBE4CA",
    },
    {
      id: 9,
      title: "Poseidon",
      description: "Стол",
      price: 100,
      imageSrc: mirror04,
      color: "#F0B5FA",
    },
    {
      id: 10,
      title: "Hades",
      description: "Тумба",
      price: 100,
      imageSrc: mirror05,
      color: "#F0B3EA",
    },
  ],
};

export const Subcategory: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(5);
  const { selectedCategoryId } = useContext(AppContext);
  const [items, setItems] = useState<Item[]>([]);

  const checkAuthentication = () => {
    const authStatus = localStorage.getItem("isAuthenticated");
    return authStatus === "true";
  };

  useEffect(() => {
    const isUserAuthenticated = checkAuthentication();

    const currentItems =
      isUserAuthenticated && selectedCategoryId !== null
        ? authenticatedItems[selectedCategoryId] || []
        : selectedCategoryId !== null
        ? categorizedItems[selectedCategoryId] || []
        : [];

    setItems(currentItems);
  }, [selectedCategoryId]);

  useEffect(() => {
    const handleStorageChange = () => {
      const isUserAuthenticated = checkAuthentication();
      const currentItems =
        isUserAuthenticated && selectedCategoryId !== null
          ? authenticatedItems[selectedCategoryId] || []
          : selectedCategoryId !== null
          ? categorizedItems[selectedCategoryId] || []
          : [];

      setItems(currentItems);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [selectedCategoryId]);

  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };
  return (
    <section
      id="catalog"
      className={`container ${
        selectedCategoryId !== null ? s.subcategory : s.subcategoryCollapsed
      }`}
    >
      <div className={s.filterBlock}>
        <Filters />
        <div className={s.quantity}>
          <p>
            <span>{items.length}</span> позиций в категории
          </p>
        </div>
      </div>
      <div className={s.cards}>
        {items.slice(0, visibleItems).map((item) => (
          <div key={item.id} className={s.card}>
            <div className={s.image}>
              <span className={s.mirrorColor} style={{ backgroundColor: item.color }}></span>
              <img src={item.imageSrc} alt={item.title} />
            </div>
            <div className={s.text}>
              <p className={s.title}>{item.title}</p>
              <p className={s.semiText}>{item.description}</p>
              <div className={s.buyBlock}>
                <div className={s.cost}>
                  <p className={s.total}>{item.price.toLocaleString()}</p>
                  <p className={s.currency}>₽</p>
                </div>
                <div className={s.buyBtn}>
                  <img src={basketSvg} alt="basketSvg" />
                  <p>Купить</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleItems < items.length && (
        <button className={s.downloadMore} onClick={loadMoreItems}>
          <div className={s.textBtn}>
            <p>Загрузить еще</p>
            <img src={arrowSvg} alt="arrowSvg" />
          </div>
        </button>
      )}
    </section>
  );
};
