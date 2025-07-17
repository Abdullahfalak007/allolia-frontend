// src/components/navbar/Navbar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logos } from "../../constants/images";
import { menuItems } from "../../constants/menuItems";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-2 sm:px-4 md:px-8 lg:mx-20">
      <div className="max-w-7xl mx-auto bg-secondary rounded-full flex flex-nowrap items-center justify-between px-2 sm:px-6 md:px-8 py-3 md:py-4 overflow-x-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logos.logo_white} alt="Allolia" className="h-8 w-auto" />
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex flex-nowrap items-center space-x-4 md:space-x-8 min-w-0">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            // Special handling for 'Nos offres' to scroll to offers section
            if (item.name === "Nos offres") {
              return (
                <a
                  key={item.name}
                  href="#offers-section"
                  className={`text-white transition-colors ${
                    isActive ? "font-semibold" : "font-normal opacity-100"
                  } hover:opacity-70`}
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("offers-section");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              );
            }
            // Special handling for 'A propos' to scroll to about section
            if (item.name === "A propos") {
              return (
                <a
                  key={item.name}
                  href="#about-section"
                  className={`text-white transition-colors ${
                    isActive ? "font-semibold" : "font-normal opacity-100"
                  } hover:opacity-70`}
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("about-section");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
          text-white transition-colors
          ${isActive ? "font-semibold" : "font-normal opacity-100"}
          hover:opacity-70
        `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Auth links (desktop) */}
        <div className="hidden md:flex items-center space-x-2 md:space-x-4 min-w-0">
          <Link
            to="/register"
            className="text-white font-normal hover:underline transition"
          >
            S’inscrire
          </Link>
          <Link
            to="/login"
            className="bg-white text-primary font-normal rounded-full px-4 py-1 hover:bg-secondary hover:text-white transition"
          >
            Se connecter
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-white hover:bg-primary/80 rounded-full"
        >
          {open ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden mt-2 bg-primary rounded-lg py-4 space-y-2 px-4">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`
        block transition-colors
        ${isActive ? "font-semibold text-white" : "font-normal text-white/70"}
        py-1
        hover:text-white
      `}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            to="/register"
            className="block text-white font-medium py-1 hover:underline"
            onClick={() => setOpen(false)}
          >
            S’inscrire
          </Link>
          <Link
            to="/login"
            className="block bg-white text-primary font-medium rounded-full text-center py-2 hover:bg-secondary hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Se connecter
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
