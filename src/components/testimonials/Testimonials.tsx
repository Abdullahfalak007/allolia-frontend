// src/components/testimonials/Testimonials.tsx
import React, { useRef } from "react";
import { testimonials } from "../../constants/testimonials";
import { icons } from "../../constants/images";

const Testimonials: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

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
          className="flex space-x-6 overflow-x-auto px-4 scroll-smooth"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {/* Hide scrollbar for Chrome, Safari, Opera */}
          <style>
            {`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}
          </style>
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-1/3 md:w-80 bg-white p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.title}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-600 text-sm">{t.review}</p>

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
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scrollBy(300)}
          className="hidden md:flex absolute right-[-48px] top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10"
        >
          <img src={icons.arrow} alt="Suivant" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
