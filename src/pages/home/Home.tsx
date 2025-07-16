// src/pages/home/Home.tsx
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Offers from "../../components/offers/Offers";
import Partners from "../../components/partners/Partners";
import About from "../../components/about/About";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => (
  <>
    <Navbar />
    <div>
      <Hero />
      <Offers />
      <Partners />
      <About />
      <Testimonials />
    </div>
  </>
);

export default Home;
