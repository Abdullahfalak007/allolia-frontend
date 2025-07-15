// src/pages/home/Home.tsx
import React from "react";
import Navbar from "../../components/navbar/Navbar";

const Home = () => (
  <>
    <Navbar />
    <div className="pt-16">
      {/* ← on décale le contenu sous la navbar */}
      {/* ... ton Hero, Sections, etc. */}
    </div>
  </>
);

export default Home;
