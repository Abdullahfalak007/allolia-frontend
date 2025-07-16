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
      className="px-2 sm:px-4 md:px-32 py-20 md:py-32 bg-gray-50"
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
          onClick={() => scrollBy(-300)}
          className="hidden md:flex absolute left-[-48px] top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10"
        >
          <img
            src={icons.arrow}
            alt="Précédent"
            className="w-6 h-6 transform rotate-180"
          />
        </button>

        {/* Scrollable cards */}
        <div
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto px-4 py-8 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((t) => {
            // split first + rest for styling
            const [firstName, ...restName] = t.name.split(" ");
            return (
              <div
                key={t.id}
                className="relative flex-shrink-0 w-80 rounded-2xl p-6 flex flex-col justify-between"
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Avatar */}
                <div className="absolute -top-2 -left-2">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white"
                  />
                </div>

                {/* “Avis client” pill */}
                <span className="absolute top-4 right-6 bg-secondary text-white text-xs px-3 py-1 rounded-full">
                  Avis client
                </span>

                {/* Content: name/title below avatar */}
                <div className="mt-10">
                  <h3 className="text-lg">
                    <span className="font-semibold">{firstName}</span>{" "}
                    <span className="font-normal">{restName.join(" ")}</span>
                  </h3>
                  <p className="text-sm text-secondary mb-4">{t.title}</p>
                  <p className="text-gray-600 text-sm">{t.review}</p>
                </div>

                {/* Footer: percent + stars */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold">{t.percent}%</span>
                  <div className="flex space-x-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <img
                        key={i}
                        src={icons.star}
                        alt="star"
                        className="w-5 h-5"
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollBy(300)}
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
