import React from "react";

import { Category } from "components/HomePage/Category";
import { Subcategory } from "components/HomePage/Subcategory";
import { Stripes } from "components/HomePage/Stripes";
import { Blog } from "components/HomePage/Blog";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Category />
      <Subcategory />
      <Stripes />
      <Blog />
    </React.Fragment>
  );
};
