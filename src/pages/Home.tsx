import React from "react";

import { HeaderNav } from "components/HomePage/HeaderNav";
import { HeaderContent } from "components/HomePage/HeaderContent";
export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <header className="header">
        <HeaderNav />
        <HeaderContent />
      </header>
    </React.Fragment>
  );
};
