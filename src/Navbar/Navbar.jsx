import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { scroller, Element, Events } from "react-scroll";
import avatar2 from "./../assets/Imgs/avatar2.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('');
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarHidden, setNavbarHidden] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink('');
    }
  }, [location]);

  const handleScroll = () => {
    const sections = ['home', 'services', 'about', 'contact'];
    let currentSection = '';

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSection = section;
        }
      }
    });

    setActiveLink(currentSection);

    const currentScrollTop = document.documentElement.scrollTop;
    setNavbarHidden(currentScrollTop > lastScrollTop);
    setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      smooth: true,
      duration: 500,
      offset: -70, 
    });
    handleSetActive(section);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar fixed top-0 left-0 w-full bg-white border-gray-200 poppins-extralight ${navbarHidden ? "navbar-hidden" : ""}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <NavLink to="/" className="flex items-center md:px-6 space-x-2 ms-2">
          <img
            src={avatar2}
            className="h-14 bg-green-400 rounded-lg px-0"
            alt="Logo"
          />
          <div className="flex flex-col justify-center text-center">
            <span className="self-center text-[22px] font-semibold whitespace-nowrap text-[#033B63] font-serif">
              NewEra
            </span>
            <span className="text-xs text-[#033B63] font-semibold">
              Warm Connect
            </span>
          </div>
        </NavLink>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
          md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400
           dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:w-auto ${isMenuOpen ? "block" : "hidden"} md:block`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="#home"
                onClick={() => scrollToSection('home')}
                className={`block py-2 px-3 md:px-4 transition-all duration-300 text-base font-semibold ${
                  activeLink === 'home' ? 'bg-white text-[#2575a3] border-b-[1.5px]' : 'text-[#033b63]'
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#services"
                onClick={() => scrollToSection('services')}
                className={`block py-2 px-3 md:px-4 transition-all duration-300 text-base font-semibold ${
                  activeLink === 'services' ? 'bg-white text-[#2575a3] border-b-[1.5px]' : 'text-[#033b63]'
                }`}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="#about"
                onClick={() => scrollToSection('about')}
                className={`block py-2 px-3 md:px-4 transition-all duration-300 text-base font-semibold ${
                  activeLink === 'about' ? 'bg-white text-[#2575a3] border-b-[1.5px]' : 'text-[#033b63]'
                }`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink 
             
                to="#contact"
                onClick={() => scrollToSection('contact')}
                className={`block py-2 px-3 md:px-4 transition-all duration-300 text-base font-semibold ${
                  activeLink === 'contact' ? 'bg-white text-[#2575a3] border-b-[1.5px]' : 'text-[#033b63]'
                }`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
