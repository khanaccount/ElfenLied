import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import s from "./index.module.scss";

import filterSvg from "assets/vectors/filters/filterSvg.svg";

type Color = {
  name: string;
  value: number;
};

const colors: Color[] = [
  { name: "Зеленый", value: 580 },
  { name: "Синий", value: 1296 },
  { name: "Оранжевый", value: 2340 },
  { name: "Розовый", value: 656 },
  { name: "Лавандовый", value: 150 },
  { name: "Голубой", value: 113 },
];

export const Filters: React.FC = () => {
  const [priceRange, setPriceRange] = React.useState([0, 500000]);
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleSliderChange = (value: number | number[]) => {
    if (Array.isArray(value) && value.length === 2) {
      setPriceRange([value[0], value[1]]);
    }
  };

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <div className={s.filters}>
      <div className={s.main} onClick={toggleExpand}>
        <img src={filterSvg} alt="filterSvg" />
        <p>фильтры</p>
      </div>
      <div className={isExpanded ? s.top : `${s.top} ${s.collapsed}`}>
        <p>Цена</p>
        <div className={s.inputBlock}>
          <label className={s.priceLabel}>
            от
            <input
              onChange={(e) => {
                const min = Number(e.target.value);
                if (min <= priceRange[1]) {
                  setPriceRange([min, priceRange[1]]);
                }
              }}
              value={priceRange[0]}
              type="number"
              className={s.priceInput}
            />
          </label>
          <label className={s.priceLabel}>
            до
            <input
              onChange={(e) => {
                const max = Number(e.target.value);
                if (max >= priceRange[0]) {
                  setPriceRange([priceRange[0], max]);
                }
              }}
              value={priceRange[1]}
              type="number"
              className={s.priceInput}
            />
          </label>
        </div>

        <Slider
          value={priceRange}
          onChange={handleSliderChange}
          allowCross={false}
          pushable={true}
          min={0}
          max={999999}
          range
        />
      </div>
      <div className={isExpanded ? s.bottom : `${s.bottom} ${s.collapsed}`}>
        <p>Цвета</p>
        <div className={s.radioBlock}>
          {colors.map((color) => (
            <div key={color.value} className={s.radioContainer}>
              <input type="checkbox" id={color.name} className={s.radioBtn} value={color.value} />
              <label htmlFor={color.name} className={s.radioLabel}>
                {color.name} <span>({color.value})</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
