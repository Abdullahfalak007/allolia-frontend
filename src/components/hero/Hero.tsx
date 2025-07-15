// src/components/hero/Hero.tsx
import React from "react";
import Button from "../button/Button";
import { images } from "../../constants/images";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${images.heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mx-auto px-2 sm:px-4 md:px-32 py-20 md:py-32 flex flex-col md:flex-row items-center ">
        {/* Left column */}
        <div className="md:w-1/2 text-center md:text-left space-y-12 mt-12">
          {/* Title */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold ">
            Service client spécialisé en location courte durée
          </h1>

          {/* Subtitle (always visible) */}
          <p className="text-white/80 max-w-md mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Metrics */}
          <div className="mt-4 flex justify-center md:justify-start space-x-8 text-white">
            <div className="text-left">
              <span className="block text-2xl font-semibold">+2300</span>
              <span className="block text-sm uppercase">Logements en LCD</span>
            </div>
            <div className="text-left">
              <span className="block text-2xl font-semibold">98%</span>
              <span className="block text-sm uppercase">
                Clients satisfaits
              </span>
            </div>
            <div className="text-left">
              <span className="block text-2xl font-semibold">98%</span>
              <span className="block text-sm uppercase">
                Clients satisfaits
              </span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-4 flex-wrap">
            {/* Blue button */}
            <button className="inline-flex items-center justify-center bg-secondary text-white px-6 py-3 rounded-full text-sm font-normal hover:opacity-90 transition">
              NOS OFFRES&nbsp;<span className="text-lg">→</span>
            </button>

            {/* White button */}
            <button className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-full text-sm font-normal hover:bg-gray-100 transition">
              CONTACTEZ‑NOUS&nbsp;<span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Right card with concave corners */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
          <div className="relative">
            <div className="hero-shape mt-48 p-12 max-w-sm min-h-md text-white relative">
              <h3 className="text-xl font-normal leading-snug">
                Votre plateforme de gestion.
                <br />
                Service client 7/7
              </h3>
              <p className="mt-2 text-sm text-white/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor…
              </p>
              {/* dots & badge */}
              <div className="mt-6 flex items-center justify-end">
                <div className="flex items-center bg-secondary rounded-full px-4 py-1 min-w-[160px]">
                  <div className="flex space-x-2 mr-4">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-5 h-5 bg-white rounded-full"
                      ></span>
                    ))}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-black font-normal text-base leading-none">
                      100K+
                    </span>
                    <span className="text-black text-xs leading-none">
                      Our Client Here
                    </span>
                  </div>
                </div>
              </div>

              {/* arrow circle sits inside the top‑right bite */}
              <span className="absolute top-1 right-1 bg-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-black -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
