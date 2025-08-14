"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "./services.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import {
  FaDatabase,
  FaPaintBrush,
  FaShieldAlt,
  FaMobileAlt,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      icon: <FaDatabase size={30} />,
      title: "Hosting management",
      desc: "Trusting your web hosting company is very important; Therefore, we have a team of specialized engine....",
    },
    {
      icon: <FaPaintBrush size={30} />,
      title: "E-Marketing",
      desc: "E-MarketingTrusting your web hosting company is very important; Therefore, we have a team of specialized engine....",
    },
    {
      icon: <FaShieldAlt size={30} />,
      title: "Website design and development",
      desc: "We follow in Al-Madina Al-Munawwarah Company for Technical Solutions and Information Systems An in....",
      link: "/designdevelopment",
    },
    {
      icon: <FaMobileAlt size={30} />,
      title: "motion graphics",
      desc: "Al Madinah Al Munawwarah Company for Technical Solutions and Information Systems team of professiona....",
    },
    {
      icon: <FaUsers size={30} />,
      title: "Graphic Designs",
      desc: "Hardly any commercial, educational or governmental entity is devoid of paper publications, which hav....",
    },
    {
      icon: <FaUsers size={30} />,
      title: "Systems and software",
      desc: "We have a team of dedicated programmers, a team of creative designers; They have the experience and....",
    },
    {
      icon: <FaUsers size={30} />,
      title: "Applications pour téléphones intelligents",
      desc: "Une application mobile est un programme informatique conçu pour fonctionner sur des smartphones, des....",
    },
  ];

  return (
    <section className="py-10  -mt-10   bg-white text-white">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-left mb-10">
          <p className="text-[#5e8d6b] font-semibold text-sm tracking-wide uppercase">
            Our Feathered Services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f0a3f] leading-snug mt-2">
            We Provide Exclusive  <br /> Service For Your Business
          </h2>
        </div>

        {/* الأسهم المخصصة */}
        <div className="flex justify-end md:-mt-24 mb-10 -mt-10  md:mb-20 gap-4">
          <div className="swiper-button-prev-custom cursor-pointer text-[#5e8d6b]  text-2xl">
            <i className="fa-solid fa-arrow-left"></i>
          </div>
          <div className="swiper-button-next-custom cursor-pointer text-[#5e8d6b] text-2xl">
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>

        {/* السلايدر */}
        <Swiper
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          slidesPerView={4}
          spaceBetween={10}
          loop
          autoplay={{ delay: 2500 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white text-[#0c3c2d] p-6 rounded-xl shadow h-full flex flex-col items-center justify-between">
                <div className="bg-[#0c3c2d]/10 p-4 rounded-full text-[#5e8d6b] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-center text-gray-600 mb-4">
                  {service.desc}
                </p>
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5e8d6b] via-[#d6a73d] to-[#0c3c2d] flex items-center justify-center text-white">
                  <Link
                    to={service.link}
                    className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#5e8d6b] via-[#d6a73d] to-[#0c3c2d] flex items-center justify-center text-white text-sm hover:scale-110 transition duration-300 shadow-md"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
