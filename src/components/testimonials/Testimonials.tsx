// src/components/testimonials/Testimonials.tsx
import React, { useRef } from "react";
import { testimonials } from "../../constants/testimonials";
import { images, icons } from "../../constants/images";

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgImage = images.testimonialCardBg;

  const scrollBy = (offset: number) => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section
      id="testimonials-section"
      className="max-w-7xl mx-auto px-2 sm:px-4 md:px-32 py-20 md:py-32"
    >
      {/* Bullet above the title */}
      <div className="flex justify-center mb-4">
        <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full">
          Avis Client
        </span>
      </div>

      <h2 className="text-center text-3xl font-semibold mb-12">
        Ils nous font confiance&nbsp;!
      </h2>

      <div className="relative">
        {/* Left arrow */}
        <button
          onClick={() => scrollBy(-400)}
          className="hidden md:flex absolute left-[-48px] top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10"
        >
          <img
            src={icons.arrow}
            alt="Précédent"
            className="w-6 h-6 transform rotate-180"
          />
        </button>

        {/* Scrollable cards */}
        <div className="relative w-80 mx-auto overflow-x-hidden lg:w-auto lg:mx-0 lg:overflow-x-visible">
          <div
            ref={containerRef}
            className="flex overflow-x-auto py-8 scroll-smooth flex-nowrap gap-0 lg:gap-12 snap-x snap-mandatory pl-4 pr-8 lg:w-auto lg:px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((t) => {
              // split first + rest for styling
              const [firstName, ...restName] = t.name.split(" ");
              return (
                <div
                  key={t.id}
                  className="relative flex-shrink-0 w-80 rounded-2xl p-6 flex flex-col justify-between snap-center"
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {/* Avatar */}
                  <div className="lg:absolute lg:-top-2 lg:-left-4 flex justify-start lg:block mt-[-1.5rem] lg:mt-0 mb-4 lg:mb-0 ml-[-1.5rem] lg:ml-0">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                  </div>

                  {/* “Avis client” pill */}
                  <span className="absolute top-4 right-6 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                    Avis client
                  </span>

                  {/* Content: name/title below avatar */}
                  <div className="mt-10">
                    <h3 className="text-2xl">
                      <span className="font-semibold">{firstName}</span>{" "}
                      <span className="font-normal">{restName.join(" ")}</span>
                    </h3>
                    <p className="text-md text-secondary mb-4">{t.title}</p>
                    <p className="text-gray-600 text-sm">{t.review}</p>
                  </div>

                  {/* Footer: percent + stars */}
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-5xl font-normal">{t.percent}%</span>
                    <div className="flex space-x-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <img
                          key={i}
                          src={icons.star}
                          alt="star"
                          className="w-6 h-6"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollBy(400)}
          className="hidden md:flex absolute right-[-48px] top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10"
        >
          <img src={icons.arrow} alt="Suivant" className="w-6 h-6" />
        </button>
      </div>

      {/* CONTACTER / VOIR PLUS buttons */}
      {/* CONTACTER / VOIR PLUS buttons, right‑aligned */}
      <div className="hidden md:flex w-full justify-end space-x-4 mt-8">
        <button className="inline-flex items-center bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition">
          CONTACTER&nbsp;&rarr;
        </button>
        <button className="inline-flex items-center bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-black/90 transition">
          VOIR PLUS&nbsp;&rarr;
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
