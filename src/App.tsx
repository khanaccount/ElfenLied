import React from "react";
import { Routes, Route } from "react-router-dom";
import "styles/index.scss";

import { Home } from "pages/Home";
import Layout from "components/Layout";
import { AboutUs } from "pages/AboutUs";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        {/* <Route path="posts" element={<Posts />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
