import React from "react";
import s from "./index.module.scss";

import navCross from "assets/vectors/nav/navCross.svg";
import logo from "assets/vectors/logo.svg";
import { NavLink } from "react-router-dom";

const setActive = ({ isActive }: { isActive: boolean }) => (isActive ? s.navBtnActive : s.navBtn);

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.bannerBg}>
        <div className={"container"}>
          <div className={s.text}>
            <p>✨Discover Your Dream Property with Estatein</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <button className={s.closeBannerBtn}>
          <img src={navCross} alt="navCrossSvg" />
        </button>
      </div>
      <nav className={s.navBorder}>
        <div className={`${s.nav} container`}>
          <div className={s.logo}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className={s.pageLists}>
            <NavLink className={setActive} to="/">
              Home
            </NavLink>

            <NavLink className={setActive} to="/aboutus">
              About Us
            </NavLink>

            <NavLink className={setActive} to="/properties">
              Properties
            </NavLink>

            <NavLink className={setActive} to="/services">
              Services
            </NavLink>
          </div>
          <div className={s.contactUs}>
            <button>
              <a href="#">Contact Us</a>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
