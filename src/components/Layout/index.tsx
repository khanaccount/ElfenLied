import React from "react";
import { Outlet } from "react-router-dom";
import { HeaderContent } from "./HeaderContent";
import { HeaderNav } from "./HeaderNav";
import { Footer } from "./Footer";

const Layout: React.FC = () => {
  return (
    <>
      <header className="header">
        <HeaderNav />
        <HeaderContent />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
