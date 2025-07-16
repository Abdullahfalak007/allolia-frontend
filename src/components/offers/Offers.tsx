// src/components/offers/OffersSection.tsx
import React from "react";
import { images, icons } from "../../constants/images";

const OffersSection: React.FC = () => {
  const { packBasicBg, packPremiumBg, serviceClient } = images;

  return (
    <section id="offers-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-32 py-20 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 md:space-x-8">
          <div className="w-full md:w-auto">
            <h2 className="text-3xl font-bold text-black">Nos offres</h2>
            <p className="mt-2 text-black">
              Votre plateforme de gestion.
              <br className="hidden lg:inline" />
              Service client 7/7
            </p>
          </div>

          <div className="hidden md:block text-right">
            <span className="block text-4xl font-extrabold text-black">
              52K+
            </span>
            <span className="block mt-2 text-sm text-black">
              Onsectetur adipiscing elit
            </span>
            <p className="mt-4 text-sm text-gray-700 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="hidden md:flex space-x-4">
            <button className="inline-flex items-center bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
              CONTACTER&nbsp;&rarr;
            </button>
            <button className="inline-flex items-center bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition">
              VOIR PLUS&nbsp;&rarr;
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end -mt-16">
          {/* Pack Basic */}
          <div
            className="relative overflow-hidden flex flex-col p-6 text-secondary rounded-3xl"
            style={{
              backgroundImage: `url(${packBasicBg})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* top-left circle with arrow */}
            <div className="absolute top-0 left-4 w-14 h-14 bg-secondary rounded-full flex items-center justify-center z-10">
              <img
                src={icons.arrow_icon_to_left_top_white}
                alt="arrow"
                className="w-5 h-5"
              />
            </div>

            {/* Badges */}
            <span className="absolute top-4 right-20 bg-white/80 text-secondary text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              Accès illimités
            </span>
            <span className="absolute top-4 right-4 bg-secondary text-white text-xs px-2 py-1 rounded-full">
              24/24
            </span>

            {/* Content */}
            <h3 className="text-3xl font-semibold mt-24">Pack Basic</h3>
            <ul className="mt-4 flex-1 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mt-2 mr-2" />
                Lorem ipsum dolor
              </li>
            </ul>
            <p className="text-5xl font-bold mt-4">
              19<span className="align-super text-lg">€99</span>
            </p>
            <button className="mt-6 w-full inline-flex items-center justify-center bg-secondary text-white rounded-full py-3 px-6 text-base font-normal hover:opacity-90 transition">
              J’EN PROFITE&nbsp;<span className="text-lg">→</span>
            </button>
            <span className="block text-center text-white/80 text-xs mt-2">
              Sans engagement
            </span>
          </div>

          {/* Pack Premium */}
          <div
            className="relative overflow-hidden flex flex-col p-6 text-white md:min-h-[420px] rounded-3xl"
            style={{
              backgroundImage: `url(${packPremiumBg})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute top-3 left-4 w-14 h-14 bg-secondary rounded-full flex items-center justify-center z-10">
              <img
                src={icons.arrow_icon_to_left_top_white}
                alt="arrow"
                className="w-5 h-5"
              />
            </div>

            <span className="absolute top-4 right-20 bg-white text-secondary text-xs px-2 py-1 rounded-full">
              Accès illimités
            </span>
            <span className="absolute top-4 right-4 bg-white text-secondary text-xs px-2 py-1 rounded-full">
              24/24
            </span>

            <h3 className="text-3xl font-semibold mt-24">Pack Premium</h3>
            <ul className="mt-4 flex-1 space-y-2">
              {[
                "Lorem ipsum dolor",
                "Sed do eiusmod tempor",
                "Dolore magna aliqua",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-5xl font-bold mt-4">
              39<span className="align-super text-lg">€99</span>
            </p>
            <button className="mt-6 w-full inline-flex items-center justify-center bg-white text-secondary rounded-full py-3 px-6 text-base font-normal hover:bg-white/90 transition">
              J’EN PROFITE&nbsp;<span className="text-lg">→</span>
            </button>
            <span className="block text-center text-white/80 text-xs mt-2">
              Sans engagement
            </span>
          </div>

          {/* Service client */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-lg flex flex-col md:min-h-[520px] bg-cover bg-center"
            style={{ backgroundImage: `url(${serviceClient})` }}
          >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative p-6 flex-1 flex flex-col justify-end text-white">
              <h3 className="text-xl font-semibold">
                Service client personnalisé
              </h3>
              <p className="mt-2 text-sm text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor…
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
