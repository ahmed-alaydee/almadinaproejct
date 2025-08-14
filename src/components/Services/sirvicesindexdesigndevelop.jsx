"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "./services.css";
import { FaLaptopCode, FaPaintBrush, FaCode, FaCogs } from "react-icons/fa";
import disidn2 from "../images/disidn2.jpg";
import imagedisign2 from "../images/disindevelopment.jpg";
import { Link } from "react-router-dom";
import "swiper/css";
import { FaArrowRight } from "react-icons/fa";
import {
  FaLightbulb,
  FaServer,
  FaDatabase,
} from "react-icons/fa";


export default function SirvicesIndexDesignDevelop() {
  const services = [
    {
      title: "E-commerce design",
      desc: "Software services encompass a wide range of",
      icon: <FaLaptopCode size={24} />,
      image: disidn2,
      link: "/HomeProjectIndex",
    },
    {
      title: "Corporate website design",
      desc: "We provide new and emerging technologies",
      icon: <FaLightbulb size={24} />,
      image: imagedisign2,
      link: "/HomeProjectIndex",
    },
    {
      title: "Web Development",
      desc: "Web development is the work involved in",
      icon: <FaServer size={24} />,
      image: disidn2,
      link: "/HomeProjectIndex",
    },
    {
      title: "Database Security",
      desc: "Database security is the processes, tools",
      icon: <FaDatabase size={24} />,
      image: imagedisign2,
      link: "/HomeProjectIndex",
    },
  ];
  return (
    <>
      {/* <section className="py-16 bg-[#f9fbfd]">
        <div className="text-center mb-12">
          <p className="text-[#5e8d6b] font-semibold text-sm tracking-wide uppercase">
            Our Feathered Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f0a3f] leading-snug mt-2">
            We Provide Exclusive Service For <br /> Your Business
          </h2>
        </div>

        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          loop
          autoplay={{ delay: 2500 }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="max-w-7xl px-4 mx-auto"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:-translate-y-1 transition duration-300">
                <div className="relative">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute -bottom-6 left-4 bg-gradient-to-r from-[#5e8d6b] to-[#d6a73d] text-white w-12 h-12 flex items-center justify-center rounded-lg text-xl shadow-md">
                    {s.icon}
                  </div>
                </div>

                <div className="pt-10 px-4 pb-6">
                  <h3 className="text-lg font-bold text-[#1f0a3f] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                  <Link
                    to={s.link}
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5e8d6b] via-[#d6a73d] to-[#0c3c2d] flex items-center justify-center text-white text-sm hover:scale-110 transition duration-300 shadow-md"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section> */}
      <section className="py-16 bg-[#f9fbfd]">
        <div className="text-center mb-12">
          <p className="text-[#5e8d6b] font-semibold text-sm tracking-wide uppercase">
            Our Feathered Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f0a3f] leading-snug mt-2">
            We Provide Exclusive Service For <br /> Your Business
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden group hover:-translate-y-1 transition duration-300"
            >
              <div className="relative">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-40 object-cover"
                />
                <div
                  className="absolute -bottom-6 left-4 bg-gradient-to-r from-[#5e8d6b] to-[#d6a73d] text-white w-12 h-12 flex items-center justify-center rounded-lg text-xl shadow-md 
            transform transition-transform duration-500 group-hover:rotate-[180deg]"
                >
                  {s.icon}
                </div>
              </div>

              <div className="pt-10 px-4 pb-6">
                <h3 className="text-lg font-bold text-[#1f0a3f] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{s.desc}</p>
                <Link
                  to={s.link}
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5e8d6b] via-[#d6a73d] to-[#0c3c2d] flex items-center justify-center text-white text-sm hover:scale-110 transition duration-300 shadow-md"
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}




















