// src/components/contact/ContactSection.tsx
import React from "react";
import { images, icons } from "../../constants/images";
import { Link } from "react-router-dom";

const ContactSection: React.FC = () => (
  <section
    id="contact-section"
    className="max-w-7xl mx-auto px-2 sm:px-4 md:px-32 py-12 sm:py-16"
  >
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-8 items-center">
      {/* LEFT: image card */}
      <div className="w-full md:w-1/2">
        <div
          className="relative rounded-3xl overflow-hidden shadow-lg mx-auto h-[23rem] md:h-72 md:h-[30rem] min-w-[18rem] max-w-[20rem] min-h-[30rem] w-64 md:w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${images.serviceClient})` }}
        >
          {/* Tabs */}
          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 flex space-x-2">
            <span className="whitespace-nowrap bg-secondary text-white text-xs sm:text-sm px-2 lg:px-3 py-1 rounded-full">
              Nous contacter
            </span>
            <span className="whitespace-nowrap bg-white text-gray-800 text-xs sm:text-sm px-2 lg:px-3 py-1 rounded-full opacity-60">
              Nos partenaires
            </span>
          </div>

          {/* Sub‑badge */}
          <span className="whitespace-nowrap absolute top-14 sm:top-16 left-3 sm:left-4 bg-white/80 text-gray-800 text-xs sm:text-sm px-2 py-1 rounded-full backdrop-blur-sm">
            Service client location courte durée
          </span>

          {/* Main text */}
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white">
            <h3 className="text-lg sm:text-xl font-normal mb-1">
              Your Partner in Business Growth
            </h3>
            <p className="text-xs sm:text-sm">
              From innovative marketing strategies to operational excellence, we
              provide expert guidance.
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT: content */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left justify-center mt-8 md:mt-0 md:space-y-48">
        {/* Title */}
        <div>
          <h2 className="mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal max-w-xs">
            Nous contacter !
          </h2>

          {/* Calendly link */}
          <Link
            to="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center min-w-[400px] bg-secondary text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-sm sm:text-base font-normal hover:opacity-90 transition mt-12"
          >
            PRENDRE RENDEZ‑VOUS
            <img
              src={icons.calendly}
              alt="Calendly"
              className="ml-4 h-6 w-20 mx-2"
            />
            <span className="text-xl sm:text-2xl">&rarr;</span>
          </Link>
        </div>

        {/* Social icons */}
        <div className="flex space-x-4 sm:space-x-6 mt-12">
          {[
            { icon: icons.facebook, label: "Facebook" },
            { icon: icons.linkedin, label: "LinkedIn" },
            { icon: icons.twitter, label: "Twitter" },
          ].map(({ icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="p-3 sm:p-4 border-2 border-secondary rounded-full hover:bg-secondary/10 transition"
            >
              <img src={icon} alt={label} className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
