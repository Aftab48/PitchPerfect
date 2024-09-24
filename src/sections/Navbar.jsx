import { useState } from "react";
import { mobileNavLinks, navLinks } from "../constants/index.js";
import PropTypes from "prop-types";

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li
        key={item.id}
        className="nav-li hover:border-2 rounded-xl hover:border-white"
      >
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const MobileNavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {mobileNavLinks.map((item) => (
      <li
        key={item.id}
        className="nav-li hover:border-2 rounded-xl hover:border-white"
      >
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

NavItems.propTypes = {
  onClick: PropTypes.func,
};

NavItems.defaultProps = {
  onClick: () => {},
};

MobileNavItems.propTypes = {
  onClick: PropTypes.func,
};

MobileNavItems.defaultProps = {
  onClick: () => {},
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed bg-transparent top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="/" className="">
            <img src="/assets/logo.png" alt="logo" className="w-10 h-10" />
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src="assets/menu-icon.png"
              alt="toggle"
              className={`w-10 h-10 transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
              }`}
            />
          </button>

          <nav className="sm:flex hidden gap-x-6">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`nav-sidebar overflow-hidden transition-max-height duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <MobileNavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
