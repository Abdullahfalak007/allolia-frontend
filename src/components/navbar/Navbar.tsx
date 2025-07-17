import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logos } from "../../constants/images";
import { menuItems } from "../../constants/menuItems";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Optional: Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-2 sm:px-4 md:px-8 lg:mx-20">
      <div className="max-w-7xl mx-auto bg-secondary rounded-full flex items-center justify-between px-3 sm:px-6 md:px-8 py-3 md:py-4 overflow-x-auto">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src={logos.logo_white} alt="Allolia" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 min-w-0">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            if (item.name === "Nos offres") {
              return (
                <a
                  key={item.name}
                  href="#offers-section"
                  className={`text-white transition ${
                    isActive ? "font-semibold" : "font-normal opacity-100"
                  } hover:opacity-70`}
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("offers-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                </a>
              );
            }

            if (item.name === "A propos") {
              return (
                <a
                  key={item.name}
                  href="#about-section"
                  className={`text-white transition ${
                    isActive ? "font-semibold" : "font-normal opacity-100"
                  } hover:opacity-70`}
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("about-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
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
                className={`text-white transition ${
                  isActive ? "font-semibold" : "font-normal opacity-100"
                } hover:opacity-70`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Auth links (desktop) */}
        <div className="hidden md:flex items-center space-x-4">
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
          className="md:hidden p-2 text-white hover:bg-secondary/80 rounded-full"
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
        <div className="md:hidden mt-2 bg-secondary rounded-xl py-4 px-4 space-y-3 text-sm">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`block transition ${
                  isActive
                    ? "font-semibold text-white"
                    : "font-normal text-white/70"
                } hover:text-white`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            to="/register"
            className="block text-white font-medium hover:underline"
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
