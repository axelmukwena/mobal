import React from "react";
import Header from "./Header";

const MainLayout = function MainLayout({ children }) {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="main">{children}</main>
    </>
  );
};

export default MainLayout;
