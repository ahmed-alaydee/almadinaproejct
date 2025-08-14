import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../images/Logo.png";
import Logowight from "../images/logowight.png";
import { Link } from "react-router-dom";
import { BiBorderRadius } from "react-icons/bi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [showStickyNavbar, setShowStickyNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80 && window.innerWidth > 768) {
        setShowStickyNavbar(true);
      } else {
        setShowStickyNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  useEffect change icon and logo 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (window.scrollY > 80 && window.innerWidth > 768) {
        setShowStickyNavbar(true);
      } else {
        setShowStickyNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <>
      <div
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          showStickyNavbar ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Top Bar */}
        {/* <div className="style_ss  container mx-auto px-4 absolute top-0 left-1/2 -translate-x-1/2  z-20 bg-gradient-to-r from-[#0c3c2d] to-[#5e8d6b] text-white py-2 px-4 text-sm flex flex-wrap justify-center md:justify-between items-center rounded-b-[30px] gap-2 max-md:hidden"> */}
        <div className="container mx-auto max-w-screen-xl px-4 absolute top-0 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-r from-[#0c3c2d] to-[#5e8d6b] text-white py-2 text-sm flex flex-wrap justify-center md:justify-between items-center rounded-b-[30px] gap-2 hidden md:flex">
          <div className="flex flex-wrap items-center gap-4 justify-center md:justify-start">
            <span className="flex gap-2 items-center text-sm whitespace-nowrap">
              <i className="fa-solid fa-envelope"></i>
              <a
                href="mailto:info@example.com"
                className="text-white hover:text-gray-200"
              >
                info@example.com
              </a>
            </span>
            <a
              href="tel:01001099344"
              className="flex gap-2 items-center text-sm whitespace-nowrap"
            >
              <i className="fa-solid fa-phone"></i>0100 109 9344
            </a>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <span className="text-sm">Follow Us:</span>
            <a
              href="https://www.facebook.com/people/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9-%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%84-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9/100076767560540/"
              className="hover:text-gray-200"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://x.com/alwasaq1?lang=ar"
              className="hover:text-gray-200"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9-%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%84-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D9%88%D9%86%D8%B8%D9%85-%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA-8072b622b/"
              className="hover:text-gray-200"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/madinahitech/"
              target="_blank"
              className="hover:text-gray-200"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="absolute top-[50px] w-full z-10 flex justify-center transition-all duration-500">
          <div className="w-[1200px] flex justify-between items-center px-0 max-md:w-full max-md:px-4">
            {/* Logo */}

            <img
              src={scrolled ? Logo : Logowight}
              alt="Techbe"
              className="w-[220px] max-md:w-[160px] max-md:pt-7 transition-all"
            />

            {/* Mobile Icon */}
            <div
              className={`mobile-menu-icon hidden  max-md:block font-extrabold text-2xl pt-6 rounded cursor-pointer transition-all duration-300 ${
                scrolled ? "text-black" : "text-yellow-50"
              }`}
              onClick={() => setMenuOpen(true)}
            >
              <i className="fa-solid fa-bars "></i>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="max-md:block absolute top-full left-0 w-full bg-white px-4 py-3 z-1000">
                <div className="flex justify-between items-center mb-4">
                  <img src={Logo} alt="Logo" className="h-8" />
                  <span
                    className="close-btn text-xl cursor-pointer"
                    onClick={() => setMenuOpen(false)}
                  >
                    &times;
                  </span>
                </div>
                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/"
                      onClick={() => setMenuOpen(false)}
                      className="font-bold"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => setSubmenuOpen(!submenuOpen)}
                      className="flex items-center gap-1"
                    >
                      Services <i className="fa fa-chevron-down text-xs"></i>
                    </button>
                    {submenuOpen && (
                      <ul className="pl-4 space-y-2">
                        <Link
                          to="/designdevelopment"
                          onClick={() => setMenuOpen(false)}
                          className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                        >
                          design & development
                        </Link>

                        <li>
                          <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                          >
                            Hosting
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                          >
                            E-marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                          >
                            Graphic Designs
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                          >
                            Motion Graphics
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            onClick={() => setMenuOpen(false)}
                            className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                          >
                            Systems And Software
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>

                  <li>
                    <Link to="/ourworks" onClick={() => setMenuOpen(false)}>
                      our works
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogditals" onClick={() => setMenuOpen(false)}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contactpage" onClick={() => setMenuOpen(false)}>
                      Contact info
                    </Link>
                  </li>
                </ul>
                <div className="flex items-center gap-3 justify-center md:justify-end mt-4">
                  <span className="flooo">Follow Us:</span>
                  <a
                    href="https://www.facebook.com/people/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9-%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%84-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9/100076767560540/"
                    className="my-link"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://x.com/alwasaq1?lang=ar"
                    className="my-link"
                    target="_blank"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/%D8%A7%D9%84%D9%85%D8%AF%D9%8A%D9%86%D8%A9-%D8%A7%D9%84%D9%85%D9%86%D9%88%D8%B1%D8%A9-%D9%84%D9%84%D8%AD%D9%84%D9%88%D9%84-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A9-%D9%88%D9%86%D8%B8%D9%85-%D8%A7%D9%84%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA-8072b622b/"
                    className="my-link"
                    target="_blank"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/madinahitech/"
                    target="_blank"
                    className="my-link"
                  >
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            )}

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center text-white text-sm">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/ourworks">our works</Link>
              <div className="relative group">
                <Link to="/HomeProjectIndex">Services ▾</Link>
                <div className="absolute top-full left-0 bg-green-900 bg-opacity-70 text-white p-3 rounded-md hidden group-hover:block min-w-[150px] z-50">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/designdevelopment"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        design & development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        E-marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        Graphic Designs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        Motion Graphics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        Systems And Software
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/blogditals">Blog</Link>
              <Link to="/contactpage">Contact info</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      {showStickyNavbar && (
        <div className="fixed top-0 left-0 w-full z-[1000] bg-gradient-to-r from-[#e8f5f0] to-[#5e8d6b] to-[#0c3c2d] shadow-lg animate-slideDown transition-all duration-300 hidden md:block">
          <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-3 text-white text-sm">
            <img src={Logo} alt="Logo" className="w-[140px]" />
            <div className="flex gap-5 items-center">
              <Link to="/" className="hover:text-[#d6a73d] transition">
                Home
              </Link>
              <Link to="/about" className="hover:text-[#d6a73d] transition">
                About
              </Link>
              <Link to="/ourworks" className="hover:text-[#d6a73d] transition">
                Works
              </Link>

              <div className="relative group">
                <Link to="/HomeProjectIndex">Services ▾</Link>
                <div className="absolute top-full left-0 bg-green-900 bg-opacity-70 text-white p-3 rounded-md hidden group-hover:block min-w-[150px] z-50">
                  <ul className="space-y-2">
                    <li>
                      <Link
                        to="/designdevelopment"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        design & development
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        Hosting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        E-marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        Graphic Designs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        Motion Graphics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block text-sm hover:bg-black hover:text-white px-2 py-1 rounded"
                      >
                        Systems And Software
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <Link
                to="/blogditals"
                className="hover:text-[#d6a73d] transition"
              >
                Blog
              </Link>
              <Link
                to="/contactpage"
                className="hover:text-[#d6a73d] transition"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
