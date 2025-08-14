import React from "react";
import { Link } from "react-router-dom";
import bgwight from "../images/logowight.png";
import { ButtonContact } from "../buttonstatic";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#1e1e2f] via-[#151520] to-[#10101A] text-white pt-16 md:mt-0 -mt-20 pb-8 px-4">

      {/* Call to Action Card */}
      <div className=" cardbuttom  hidden md:block absolute left-1/2  -translate-x-1/2 -mt-40 z-40 w-full px-4 sm:px-6 md:px-8 max-w-6xl ">
        <div className="bg-gradient-to-r from-[#d6a73d] via-[#5e8d6b] to-[#0f3d2b] rounded-[120px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-lg ">
          <div className="content">
            <h2 className="mb-2 text-2xl font-bold md:text-3xl">
              Ready to elevate your digital presence?
            </h2>
          </div>
          <ButtonContact />
        </div>
      </div>


      {/* Main Footer Content */}
    
      <div className="grid grid-cols-1 gap-8  mx-auto max-w-7xl md:mt-7 md:grid-cols-4">
        {/* About Section */}
        <div>
              <img
        src={bgwight}
        alt=""
        style={{ width: "190px", marginLeft: "0% ", marginBottom: "2%" }}
      />
            <p className="text-sm leading-relaxed opacity-70">
            Al Madinah Al Munawwarah Company has been a pioneer in digital
            solutions since 2012, delivering innovation across the Arab world.
          </p>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold mb-6 text-[#f2c373]">Services</h2>
          <ul className="space-y-2 text-sm">
            {[
              "Design & Development",
              "Hosting",
              "E-marketing",
              "Graphic Design",
              "Motion Graphics",
              "Systems & Software",
            ].map((item, idx) => (
              <li key={idx}>
                <a
                  href="#"
                  className="transition-all duration-300 hover:text-[#f2c373] hover:pl-2 block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#f2c373]">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "/" },
              { label: "Our Works", href: "/ourworks" },
              { label: "Contact Info", href: "/contact" },
              { label: "Sign Up", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Blog", href: "/blog" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item.href}
                  className="transition-all duration-300 hover:text-[#f2c373] hover:pl-2 block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold mb-4 text-[#f2c373]">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-phone text-[#f2c373]"></i>
              <span>0547079825 / 0100 109 9344</span>
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope text-[#f2c373]"></i>
              <span>info@madinahitech.com</span>
            </li>
            <li className="flex gap-2 items-start">
              <i className="fa-solid fa-location-dot text-[#f2c373]"></i>
              <span>
                1 Ibrahim Al-Jabri St., from Al-Zafer Street,
                <br />
                Al-Haram, Giza
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-6 mt-10 text-sm text-center border-t opacity-60 border-white/10">
        <p>© 2024 Madina El Monawara. All Rights Reserved.</p>
        <div className="flex justify-center mt-3 space-x-4">
          {["facebook-f", "twitter", "linkedin", "instagram", "youtube"].map(
            (icon, idx) => (
              <a
                key={idx}
                href="#"
                className="hover:text-[#f2c373] transition duration-300"
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}
