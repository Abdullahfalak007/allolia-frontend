// src/components/contact/ContactSection.tsx
import React from "react";
import { images, icons } from "../../constants/images";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact-section"
      className="px-4 sm:px-6 md:px-32 py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* LEFT: image card */}
        <div className="w-full md:w-1/3">
          <div
            className="relative rounded-3xl overflow-hidden shadow-lg h-60 md:h-[400px]"
            style={{
              backgroundImage: `url(${images.serviceClient})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Tabs */}
            <div className="absolute top-4 left-4 flex space-x-2">
              <span className="bg-secondary text-white text-xs px-3 py-1 rounded-full">
                Nous contacter
              </span>
              <span className="bg-white text-gray-800 text-xs px-3 py-1 rounded-full opacity-60">
                Nos partenaires
              </span>
            </div>

            {/* Sub‑badge */}
            <span className="absolute top-16 left-4 bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              Service client location courte durée
            </span>

            {/* Main text: increased top padding for extra gap */}
            <div className="p-6 pt-60 text-white">
              <h3 className="text-2xl font-normal mb-2">
                Your Partner in Business Growth
              </h3>
              <p className="text-sm">
                From innovative marketing strategies to operational excellence,
                we provide expert guidance.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="w-full md:w-7/12 flex flex-col items-center md:items-start text-center md:text-left justify-center mt-8 md:mt-0 ml-32">
          {/* Title */}
          <h2 className="text-6xl font-normal mb-8 max-w-12">
            Nous contacter !
          </h2>

          {/* Calendly link (hard‑coded) with extra bottom margin */}
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-secondary text-white px-8 py-3 rounded-full text-base text-xs font-normal hover:opacity-90 transition mb-24"
          >
            PRENDRE RENDEZ‑VOUS
            <img
              src={icons.calendly}
              alt="Calendly"
              className="h-5 w-12 mx-2"
            />
            <span className="text-2xl">&rarr;</span>
          </a>

          {/* Social icons */}
          <div className="flex space-x-6">
            {[
              { icon: icons.facebook, label: "Facebook" },
              { icon: icons.linkedin, label: "LinkedIn" },
              { icon: icons.twitter, label: "Twitter" },
            ].map(({ icon, label }, i) => (
              <a
                key={i}
                href="#"
                aria-label={label}
                className="p-3 border-2 border-secondary rounded-full hover:bg-secondary/10 transition"
              >
                <img src={icon} alt={label} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
