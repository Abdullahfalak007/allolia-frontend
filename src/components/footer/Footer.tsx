// src/components/footer/Footer.tsx
import React from "react";
import { logos, icons } from "../../constants/images";

const Footer: React.FC = () => (
  <footer className="bg-primary text-white">
    {/* Top grid */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-32 pt-16 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* 1) Logo & tagline */}
      <div>
        <img src={logos.logo_white} alt="Allolia" className="h-8 mb-4" />
        <p className="text-sm">
          Un service client dédié à la location courte durée !
        </p>
      </div>

      {/* 2) Explorer */}
      <div>
        <h3 className="font-semibold mb-4">Explorer</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="hover:underline">
              Resources
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Team
            </a>
          </li>
        </ul>
      </div>

      {/* 3) Menu */}
      <div>
        <h3 className="font-semibold mb-4">Menu</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#offers-section" className="hover:underline">
              Nos offres
            </a>
          </li>
          <li>
            <a href="#about-section" className="hover:underline">
              À propos
            </a>
          </li>
          <li>
            <a href="#partners-section" className="hover:underline">
              Nos clients
            </a>
          </li>
          <li>
            <a href="#contact-section" className="hover:underline">
              Nous contacter
            </a>
          </li>
        </ul>
      </div>

      {/* 4) Platform & Newsletter */}
      <div>
        <h3 className="font-semibold mb-4">Notre plateforme</h3>
        <p className="text-sm text-white/70 mb-6">
          Adresse Lorem Ipsum Dolore Sit Amet
        </p>

        <h3 className="font-semibold mb-2">News letter</h3>
        <div className="text-sm mb-2">Adresse e‑mail</div>
        <hr className="border-white/50" />
      </div>
    </div>

    {/* Bottom row aligned under each column */}
    <div className="bg-primary py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-32 grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        {/* Col 1: expertise blurb */}
        <p className="text-xs text-white/70 text-center md:text-left">
          From innovative marketing strategies to operational excellence, we
          provide expert guidance.
        </p>

        {/* Col 2: social icons */}
        <div className="flex justify-center md:justify-start space-x-4">
          {[icons.facebookWhite, icons.linkedinWhite, icons.twitterWhite].map(
            (src, i) => (
              <a
                key={i}
                href="#"
                className="p-2 border border-white rounded-full hover:bg-white/10 transition"
                aria-label={
                  i === 0 ? "Facebook" : i === 1 ? "LinkedIn" : "Twitter"
                }
              >
                <img src={src} alt="" className="w-5 h-5" />
              </a>
            )
          )}
        </div>

        {/* Col 3: intentionally empty */}
        <div />

        {/* Col 4: copyright */}
        <p className="text-xs text-white/70 text-center md:text-right">
          © By Ooh Wee Studio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
