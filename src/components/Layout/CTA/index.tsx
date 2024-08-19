import React from "react";
import s from "./index.module.scss";

export const CTA: React.FC = () => {
  return (
    <div className={s.ctaBg}>
      <div className={s.cta}>
        <div className={`${s.ctaInfo} container`}>
          <div className={s.text}>
            <h3>Start Your Real Estate Journey Today</h3>
            <p>
              Your dream property is just a click away. Whether you're looking for a new home, a
              strategic investment, or expert real estate advice, Estatein is here to assist you
              every step of the way. Take the first step towards your real estate goals and explore
              our available properties or get in touch with our team for personalized assistance.
            </p>
          </div>
          <button className={s.exploreBtn}>
            <a href="/">Explore Properties</a>
          </button>
        </div>
      </div>
    </div>
  );
};
