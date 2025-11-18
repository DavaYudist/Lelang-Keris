import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function MainLayout() {
  return (
    <div>
      <MainNavbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
