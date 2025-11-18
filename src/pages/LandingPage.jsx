import React from "react";
import Hero from "../component/Hero/Hero";
import Tentang from "../component/Tentang/Tentang";
import Produk from "../component/Produk/Produk";
import Testimoni from "../component/Testimoni/Testimoni"

function LandingPage() {
  return (
    <>
      <Hero />
      <Tentang />
      <Produk />
      <Testimoni />
    </>
  );
}

export default LandingPage;
