import React from "react";
import { images } from "../../constants/images";

const AboutSection: React.FC = () => {
  return (
    <section
      id="about-section"
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${images.aboutSectionBackground})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 md:px-32 py-20 md:py-32">
        {/* Top label */}
        <span className="text-white text-3xl font-normal">À propos</span>

        {/* Headline + badges + metrics */}
        <div className="mt-2 lg:flex lg:justify-between lg:items-start">
          {/* Left side: title + small badges */}
          <div className="lg:w-1/2 text-white">
            <h2 className="sm:text-4xl lg:text-7xl font-normal">
              Votre plateforme de gestion.
              <br />
              Service client 7/7
            </h2>
          </div>

          {/* Right side: 2 metrics */}
          <div className="mt-6 lg:mt-0 lg:w-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white text-center">
            <div>
              <span className="block text-2xl font-semibold">
                Système automatisé
              </span>
              <span className="block text-xs mt-1">Expertises terrain</span>
            </div>
            <div>
              <span className="block text-2xl font-semibold">7/7</span>
              <span className="block text-xs mt-1">
                Disponible pour nos clients
              </span>
            </div>
            <div>
              <span className="block text-2xl font-semibold">24/24</span>
              <span className="block text-xs mt-1">
                Pour le bonheur des voyageurs
              </span>
            </div>
          </div>
        </div>

        {/* Carousel pill */}
        <div className="mt-10 flex justify-center lg:justify-start">
          <div className="flex items-center bg-secondary rounded-full px-2 py-2 -mr-6 min-w-[180px]">
            <div className="flex space-x-1 mr-2">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-7 h-7 bg-white rounded-full"></span>
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

        {/*Title */}
        <h3 className="mt-8 max-w-md text-white/90 text-normal text-2xl leading-relaxed">
          Un service client dédié à la location courte durée !
        </h3>

        {/* Paragraph text */}
        <div className="mt-8 max-w-md text-white/90 text-sm leading-relaxed">
          Un service client dédié à la location courte durée ! Ne tardez plus,
          découvrez un service sur‑mesure et réactif pensé pour fluidifier
          chaque étape de l’expérience locative.
        </div>

        {/* Glass‑morphism stats card (desktop only; mobile you can stack below) */}
        <div className="mt-24 lg:absolute lg:top-1/2 lg:right-8 lg:transform lg:-translate-y-1/2 hidden lg:block">
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-16 w-full max-w-xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div>
                <h3 className="text-3xl font-normal text-white">52K+</h3>
                <p className="mt-2 text-white text-base font-normal w-32">
                  Your Success Is Our Business
                </p>
              </div>
              {/* Right column */}
              <div className="flex flex-col items-start">
                <span className="bg-secondary text-black text-xs px-3 py-1 rounded-lg">
                  Helping
                </span>
                <p className="mt-4 text-white/90 font-normal text-sm leading-relaxed">
                  From innovative marketing strategies to operational
                  excellence, we provide expert guidance to help your
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* On mobile, show the card after paragraph */}
        <div className="mt-8 lg:hidden">
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 w-full max-w-md shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {/* Left column */}
              <div>
                <h3 className="text-3xl font-bold text-white">52K+</h3>
                <p className="mt-2 text-white text-base font-medium">
                  Your Success Is Our Business
                </p>
              </div>
              {/* Right column */}
              <div className="flex flex-col items-start lg:items-end">
                <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full">
                  Helping
                </span>
                <p className="mt-4 text-white/90 text-sm leading-relaxed">
                  From innovative marketing strategies to operational
                  excellence, we provide expert guidance to help your
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
