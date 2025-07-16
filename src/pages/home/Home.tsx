// src/pages/home/Home.tsx
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Offers from "../../components/offers/Offers";
import Partners from "../../components/partners/Partners";

const Home = () => (
  <>
    <Navbar />
    <div>
      <Hero />
      <Offers />
      <Partners />
    </div>
  </>
);

export default Home;
