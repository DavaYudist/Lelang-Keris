import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./component/MainLayout";
import LelangLayout from "./component/LelangLayout";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import LelangPage from "./pages/LelangPage";
import DetailPage from "./pages/DetailPage";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />
      <Route path="/daftar" element={<SignUpPage />} />

      <Route element={<LelangLayout />}>
        <Route path="/lelang" element={<LelangPage />} />
        <Route path="/lelang/:id" element={<DetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
}

export default App;
