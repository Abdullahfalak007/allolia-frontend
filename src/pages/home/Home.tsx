// src/pages/home/Home.tsx
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Offers from "../../components/offers/Offers";

const Home = () => (
  <>
    <Navbar />
    <div>
      <Hero />
      <Offers />
    </div>
  </>
);

export default Home;
