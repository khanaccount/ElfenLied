import React from "react";
import { Routes, Route } from "react-router-dom";
import "styles/index.scss";

import { Home } from "./pages/Home";

const App: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
    </Routes>
  );
};

export default App;
