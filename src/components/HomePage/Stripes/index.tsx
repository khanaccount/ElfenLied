import React from "react";
import s from "./index.module.scss";

import starSvg from "assets/vectors/stripes/starSvg.svg";

export const Stripes: React.FC = () => {
  const renderTextContent = () => (
    <>
      {[...Array(42)].map((_, index) => (
        <React.Fragment key={index}>
          <img src={starSvg} alt="starSvg" />
          <p>creating a great art</p>
        </React.Fragment>
      ))}
    </>
  );

  return (
    <div className={s.stripes}>
      <div className={s.firstStripe}>
        <div className={s.textBlockLeft}>{renderTextContent()}</div>
      </div>
      <div className={s.secondStripe}>
        <div className={s.textBlockRight}>{renderTextContent()}</div>
      </div>
    </div>
  );
};
