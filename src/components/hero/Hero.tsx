// src/components/hero/Hero.tsx
import React from "react";
import { images, icons } from "../../constants/images";

const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${images.heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 mx-auto px-2 sm:px-4 lg:px-32 py-20 md:py-32 flex flex-col lg:flex-row items-center max-w-7xl">
        {/* Left column */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-12 mt-12">
          {/* Title */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-4xl font-bold ">
            Service client spécialisé en location courte durée
          </h1>
          {/* Subtitle (always visible) */}
          <p className="text-white/80 max-w-lg mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Metrics */}
          <div className="mt-4 flex justify-center lg:justify-start space-x-8 text-white">
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
          {/* CTA buttons */}+{" "}
          <div className="mt-6 flex justify-center lg:justify-start gap-4 flex-wrap">
            {/* Blue button */}
            <button className="inline-flex items-center justify-center bg-secondary text-white px-6 py-3 rounded-full text-sm font-normal hover:opacity-90 transition">
              NOS OFFRES&nbsp;
              <img
                src={icons.arrow_icon_to_right_white}
                alt="arrow"
                className="w-5 h-5"
              />
            </button>

            {/* White button */}
            <button className="inline-flex items-center justify-center bg-white text-primary px-6 py-3 rounded-full text-sm font-normal hover:bg-gray-100 transition">
              CONTACTEZ‑NOUS&nbsp;
              <img
                src={icons.arrow_icon_to_right_blue}
                alt="arrow"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Right card with hero shape image, frosted glass effect, and overlayed content */}
        <div className="hidden lg:block lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end">
          <div className="relative mt-48 max-w-sm w-full">
            {/* Hero shape image as background, semi-transparent */}
            <img
              src={images.hero_shape}
              alt="Hero Shape"
              className="absolute top-0 left-0 w-full h-full object-contain"
              style={{ opacity: 0, zIndex: 1 }}
            />
            {/* Frosted glass overlay, masked to hero shape */}
            <div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              style={{
                zIndex: 2,
                WebkitMaskImage: `url(${images.hero_shape})`,
                maskImage: `url(${images.hero_shape})`,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskSize: "contain",
                maskSize: "contain",
                background: "rgba(255,255,255,0.3)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            ></div>
            {/* Content overlays above shape and glass */}
            <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white h-full">
              <h3 className="text-2xl font-normal leading-snug mb-2 -mt-8">
                Votre plateforme de gestion.
                <br />
                <span className="font-normal mt-2">Service client 7/7</span>
              </h3>
              <p className="mt-2 text-base text-white mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor...
              </p>
              {/* dots & badge */}
              <div className="flex items-center justify-end w-full">
                <div className="flex items-center bg-secondary rounded-full px-2 py-1 -mr-6 min-w-[180px]">
                  <div className="flex space-x-2 mr-2">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-7 h-7 bg-white rounded-full"
                      ></span>
                    ))}
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-black font-normal text-xs text-base leading-none">
                      100K+
                    </span>
                    <span className="text-black text-xs leading-none">
                      Our Client Here
                    </span>
                  </div>
                </div>
              </div>
              {/* Arrow circle in top-right */}
              <span className="absolute -top-1 -right-1 bg-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-20">
                <img
                  src={icons.arrow_icon_to_left_bottom_white}
                  alt="arrow"
                  className="w-6 h-6"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
