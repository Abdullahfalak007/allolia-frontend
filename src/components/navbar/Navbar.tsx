import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { logos, icons } from "../../constants/images";
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
    <nav className="fixed top-4 left-0 right-0 z-50 px-2 sm:px-4 md:px-28 lg:mx-16">
      <div className="max-w-7xl mx-auto bg-transparent lg:bg-secondary rounded-full flex items-center justify-between px-3 mx-auto max-w-full py-8 lg:py-3 lg:py-3 overflow-x-auto">
        {/* Logo */}
        <Link
          to="/"
          className="hidden lg:block flex-shrink-0"
          style={{ cursor: "pointer" }}
        >
          <img src={logos.logo_white} alt="Allolia" className="h-12 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center min-w-0 pl-16 md:pl-4 lg:pl-16 space-x-6 justify-start flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            const baseClass =
              "transition font-poppins" +
              (isActive
                ? " font-bold text-[20px] text-white"
                : " font-normal text-[14px] text-white opacity-100");
            const hoverClass = "hover:opacity-70";

            if (item.name === "Nos offres") {
              return (
                <a
                  key={item.name}
                  href="#offers-section"
                  className={`${baseClass} ${hoverClass}`}
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("offers-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  style={{ fontFamily: "Poppins" }}
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
                  className={`${baseClass} ${hoverClass}`}
                  onClick={(e) => {
                    if (pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("about-section");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  style={{ fontFamily: "Poppins" }}
                >
                  {item.name}
                </a>
              );
            }

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`${baseClass} ${hoverClass}`}
                style={{ marginLeft: 0, fontFamily: "Poppins" }}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Auth links (desktop) */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            to="/register"
            className="bg-secondary text-white hover:text-secondary hover:bg-white rounded-full px-8 py-3 transition"
            style={{ fontFamily: "Poppins", fontSize: 14, fontWeight: 200 }}
          >
            S’inscrire
          </Link>
          <Link
            to="/login"
            className="bg-white text-black rounded-full px-8 py-3 hover:bg-secondary hover:text-white transition"
            style={{ fontFamily: "Poppins", fontSize: 14, fontWeight: 200 }}
          >
            Se connecter
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center justify-between w-full px-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 text-white rounded-full"
          >
            {open ? (
              <img src={icons.iconClose} alt="Close menu" className="h-6 w-6" />
            ) : (
              <img src={icons.iconMenu} alt="Open menu" className="h-6 w-6" />
            )}
          </button>

          <img src={icons.logoMobile} alt="Allolia" className="h-8 w-auto" />

          <Link to="/profile">
            <img src={icons.iconUser} alt="Profile" className="h-6 w-auto" />
          </Link>
        </div>

        {/* mobile menu */}
        {open && (
          <div className="lg:hidden absolute inset-x-0 top-full mt-2 mx-4 bg-white rounded-xl py-4 px-4 space-y-3 text-sm">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block transition ${
                  pathname === item.path
                    ? "font-semibold text-primary"
                    : "font-normal text-secondary"
                } hover:text-primary`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/register"
              className="block text-secondary hover:bg-secondary hover:text-white font-medium rounded-full py-2 text-center transition"
              onClick={() => setOpen(false)}
            >
              S’inscrire
            </Link>
            <Link
              to="/login"
              className="block hover:bg-primary bg-secondary text-black font-medium rounded-full text-center py-2 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              Se connecter
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
