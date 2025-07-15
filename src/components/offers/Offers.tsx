// src/components/offers/OffersSection.tsx
import React from "react";
import { images } from "../../constants/images";

const Offers: React.FC = () => {
  const { serviceClient } = images;

  return (
    <section id="offers-section" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header: top‑aligned, equal spacing */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 md:space-x-8">
          {/* 1. Title */}
          <div className="w-full md:w-auto">
            <h2 className="text-3xl font-bold text-black">Nos offres</h2>
            <p className="mt-2 text-black text-2xl">
              Votre plateforme de gestion.
              <br className="hidden lg:inline" />
              Service client 7/7
            </p>
          </div>

          {/* 2. Metrics (desktop only) */}
          <div className="hidden md:block">
            <span className="block text-4xl font-extrabold text-black">
              52K+
            </span>
            <span className="block mt-4 text-xl text-black">
              Onsectetur adipiscing elit
            </span>
            {/* ← Added lorem ipsum paragraph */}
            <p className="mt-4 text-sm text-black-700 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* 3. CTA buttons (desktop only) */}
          <div className="hidden md:flex space-x-4">
            <button className="inline-flex items-center bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
              CONTACTER&nbsp;&rarr;
            </button>
            <button className="inline-flex items-center bg-black border border-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/95 transition">
              VOIR PLUS&nbsp;&rarr;
            </button>
          </div>
        </div>

        {/* Cards grid (bottom‑aligned) */}
        <div className="grid grid-cols-1 -mt-32 md:grid-cols-3 gap-8 items-end">
          {/* Pack Basic */}
          <div className="relative border border-secondary rounded-3xl p-6 flex flex-col">
            <span className="absolute top-4 right-20 border border-secondary bg-white text-secondary text-xs font-normal px-2 py-1 rounded-full">
              Accès illimités
            </span>
            <span className="absolute top-4 right-4 bg-secondary text-white text-xs font-normal px-2 py-1 rounded-full">
              24/24
            </span>

            <h3 className="text-4xl font-normal text-secondary mt-8">
              Pack Basic
            </h3>
            <ul className="mt-4 space-y-2 flex-1">
              <li className="flex items-start text-secondary">
                <span className="inline-block w-2 h-2 bg-secondary rounded-full mt-2 mr-2" />
                Lorem ipsum dolor
              </li>
            </ul>

            <p className="mt-6 text-7xl font-bold text-secondary">
              19<span className="align-super text-lg">€99</span>
            </p>

            <button className="mt-6 w-full inline-flex items-center justify-center bg-secondary text-white rounded-full py-3 px-6 text-base font-normal hover:opacity-90 transition">
              J’EN PROFITE&nbsp;
              <span className="text-lg leading-none">→</span>
            </button>

            <span className="block text-center text-gray-500 text-xs mt-2">
              Sans engagement
            </span>
          </div>

          {/* Pack Premium */}
          <div className="relative bg-secondary text-white rounded-3xl p-6 flex flex-col md:min-h-[420px]">
            <span className="absolute top-4 right-20 border border-white bg-secondary text-white text-xs font-normal px-2 py-1 rounded-full">
              Accès illimités
            </span>
            <span className="absolute top-4 right-4 bg-white text-secondary text-xs font-normal px-2 py-1 rounded-full">
              24/24
            </span>

            <h3 className="text-4xl font-normal mt-8">Pack Premium</h3>
            <ul className="mt-8 space-y-2 flex-1">
              {[
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
                "Lorem ipsum dolor",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-2" />
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-6 text-6xl font-bold">
              39<span className="align-super text-lg">€99</span>
            </p>

            <button className="mt-6 w-full inline-flex items-center justify-center bg-white text-secondary border border-secondary rounded-full py-3 px-6 text-base font-normal hover:bg-white/90 transition">
              J’EN PROFITE&nbsp;
              <span className="text-lg leading-none">→</span>
            </button>

            <span className="block text-center text-white text-xs mt-2">
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

          {/* Mobile‑only footer CTA */}
          <div className="md:hidden col-span-full mt-6 space-y-4">
            <div className="text-center">
              <span className="block text-3xl font-extrabold text-primary">
                52K+
              </span>
              <span className="block text-sm text-gray-500">
                Onsectetur adipiscing elit
              </span>
            </div>
            <button className="w-full bg-secondary text-white py-2 rounded-md text-sm font-normal hover:opacity-90 transition">
              CONTACTER&nbsp;&rarr;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
