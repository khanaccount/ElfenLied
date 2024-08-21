import React from "react";
import { Routes, Route } from "react-router-dom";
import "styles/index.scss";

import { Home } from "./pages/Home";
import Layout from "components/Layout";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
