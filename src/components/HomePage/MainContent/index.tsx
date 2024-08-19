import React from "react";
import s from "./index.module.scss";
import bgPng from "assets/img/header/bgPng.png";
import arrow from "assets/vectors/header/arrow.svg";

export const MainContent: React.FC = () => {
  return (
    <section className={s.mainContent}>
      <div className="container">
        <div className={s.mainTop}>
          <div className={s.info}>
            <div className={s.leftBlock}>
              <h1 className={s.mainText}>Discover Your Dream Property with Estatein</h1>
              <p className={s.semiText}>
                Your journey to finding the perfect property begins here. Explore our listings to
                find the home that matches your dreams.
              </p>
              <div className={s.buttons}>
                <button className={s.learnBtn}>
                  <a href="">Learn More</a>
                </button>
                <button className={s.browseBtn}>
                  <a href="">Browse Properties</a>
                </button>
              </div>
              <div className={s.cards}>
                <div className={s.card}>
                  <h5>200+</h5>
                  <p>Happy Customers</p>
                </div>
                <div className={s.card}>
                  <h5>10k+</h5>
                  <p>Properties For Clients</p>
                </div>
                <div className={s.card}>
                  <h5>16+</h5>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>

            <div className={s.circleContainer}>
              <svg className={s.circle} viewBox="0 0 110 110">
                <path id="circlePath" d="M 55,55 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                <text>
                  <textPath xlinkHref="#circlePath">✨Discover Your Dream Property</textPath>
                </text>
              </svg>
              <div className={s.innerCircle}>
                <img src={arrow} alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.ImgBlock}>
        <img src={bgPng} alt="Background" className={s.mainImage} />
      </div>
    </section>
  );
};
