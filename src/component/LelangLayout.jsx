import React from "react";
import { Outlet } from "react-router-dom";
import NavbarLelang from "./NavbarLelang/NavbarLelang";
import Footer from "./Footer/Footer";

function LelangLayout() {
  return (
    <div>
      <NavbarLelang />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default LelangLayout;
