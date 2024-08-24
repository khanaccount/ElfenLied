import React from "react";

import { Category } from "components/HomePage/Category";
import { Stripes } from "components/HomePage/Stripes";
import { Blog } from "components/HomePage/Blog";
export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Category />
      <Stripes />
      <Blog />
    </React.Fragment>
  );
};
