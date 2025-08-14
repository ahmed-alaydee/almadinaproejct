import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import wcuThumb from "../images/wcuThumb.webp";


import "swiper/css";
import "swiper/css/autoplay";
import videoBoxBg from "../images/videoBoxBg1_1.png"

import {
  FaLaptopCode,
  FaNetworkWired,
  FaRocket,
  FaTools,
  FaGlobe,
  FaAndroid,
  FaApple,
  FaClock,
  FaTv,
} from "react-icons/fa";

// import aboutheaderimage from "../images/aboutheaderimage.png";


import BGfixed from "./bgfixed";
import { ButtonContact } from "../buttonstatic";
import BusinessSuccessSection, { BusinessSuccessSectionhomepage } from "../About/about";



export default function AboutPage() {



  const [showVideo, setShowVideo] = useState(false);
  const services = [
    { icon: <FaGlobe />, label: "Website" },
    { icon: <FaAndroid />, label: "Android" },
    { icon: <FaApple />, label: "iOS" },
    { icon: <FaClock />, label: "Watch" },
    { icon: <FaTv />, label: "TV" },
    { icon: <FaRocket />, label: "IoT" },
  ];

  const features = [
    {
      id: 1,
      title: "Real Time Activity",
      icon: <FaLaptopCode size={22} />,
      desc: "It is a long established fact that a reader will be distracted by layout.",
      points: [
        "Accurate Testing Processes",
        "100% Satisfaction Guarantee",
        "Award Winning Company.",
      ],
      btnText: "Explore More",
      active: true,
    },
    {
      id: 2,
      title: "Easy Integrations",
      icon: <FaNetworkWired size={22} />,
      desc: "Integrate smoothly with any platform or service.",
      points: [],
      btnText: "Explore More",
    },
    {
      id: 3,
      title: "Instant Deploy",
      icon: <FaRocket size={22} />,
      desc: "Deploy your solution instantly and reliably.",
      points: [],
      btnText: "Explore More",
    },
    {
      id: 4,
      title: "Software Services",
      icon: <FaTools size={22} />,
      desc: "Comprehensive tools and platforms tailored to your business.",
      points: [],
      btnText: "Explore More",
    },
  ];


  const [activeId, setActiveId] = useState(1);

  const activeFeature = features.find((f) => f.id === activeId);


  // const [active, setActive] = useState(tabs[0]);

  return (
    <>
      <BGfixed title="About" current="About" />

      {/* -------------------------------------------- */}

      <section
        className="relative bg-gradient-to-tr sm:py-12 from-[#535526] via-[#653b1f] to-[#4d8b6e] py-20 text-white"
        style={{ height: "85vh", marginBottom: "15rem" }}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <p className="uppercase text-sm tracking-widest text-white/70">
            Our Offering
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-snug mt-2">
            Enhance and Pioneer Using
            <br />
            Technology Trends
          </h2>
        </div>

        {/* Slider */}
    <div className="max-w-2xl mx-auto mb-10 px-4">
  <Swiper
    slidesPerView={2}
    spaceBetween={16}
    loop
    autoplay={{ delay: 2000 }}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
    }}
  >
    {services.map((s, i) => (
      <SwiperSlide key={i}>
        <div className="relative w-full max-w-[180px] mx-auto py-11">
          {/* Card */}
          <div className="pt-[30px] pb-4 px-4 bg-white/5 border border-white/20 backdrop-blur rounded-md text-center hover:bg-white/10 transition duration-300">
            <p className="text-white text-sm font-medium">{s.label}</p>
          </div>
          {/* Circle Icon */}
          <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full bg-gradient-to-tr from-[#5e8d6b] via-[#d6a73d] to-[#0c3c2d] flex items-center justify-center text-white text-2xl shadow-md z-10">
            {s.icon}
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


        {/* Image with Video Overlay */}
        <div className="max-w-5xl mx-auto relative rounded-xl overflow-hidden -mt-20 shadow-xl">
          {!showVideo ? (
            <>
              <img
                src={videoBoxBg}
                alt="Team Working"
                className="w-full h-auto object-cover"
              />
              <button
                onClick={() => setShowVideo(true)}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="w-16 h-16 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-[#0c3c2d] text-2xl">
                  <i className="fa-solid fa-play"></i>
                </div>
              </button>
            </>
          ) : (
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </section>

      {/* -------------------------------------------- */}

      <BusinessSuccessSectionhomepage />







      {/* -----------design mople --------------------------------- */}

      <section className="bg-gradient-to-br from-[#f6faff] to-[#eef4f9] py-20 px-6 mb-16">
        <div className="text-center mb-12">
          <p className="text-sm text-[#5e8d6b] font-medium uppercase tracking-wide">
            Why Choose Us App
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f1f1f] leading-tight">
            Smart & Clean User Interface For
            <br /> Our Active Client
          </h2>
        </div>

        <div className="max-w-6xl mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-center">
            {/* Sidebar Tabs */}
            <div className="flex flex-col gap-4 w-full max-w-xs justify-self-center">
              {features.map((feature) => {
                const isActive = feature.id === activeId;

                return (
                  <button
                    key={feature.id}
                    onClick={() => setActiveId(feature.id)}
                    className={`flex items-center gap-4 px-10 py-7 rounded-lg text-left text-sm font-medium relative transition-all duration-300 shadow
          ${
            isActive
              ? "bg-gradient-to-tr from-[#5e8d6b] via-[#d6a73d] to-[#0c3c2d] text-white"
              : "bg-white text-[#0c3c2d] hover:bg-gray-100"
          }`}
                    style={{
                      clipPath: `polygon(
                      0% 0%, calc(100% - 30px) 0%,
                      100% 50%,
                      calc(100% - 30px) 100%, 0% 100%, 0% 50%
                    )`,
                    }}
                  >
                    <div
                      className={`text-xl ${
                        isActive ? "text-white" : "text-[#5e8d6b]"
                      }`}
                    >
                      {feature.icon}
                    </div>
                    <span className="flex-1 text-start">{feature.title}</span>

                    {/* Dot inside active tab */}
                    {isActive && (
                      <span className="absolute top-2 left-2 w-2 h-2 bg-[#d6a73d] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Card with Image + Content */}
            <div
              className="bg-white p-6 md:p-10 rounded-2xl shadow-xl  flex flex-col md:flex-row items-center gap-4 justify-self-center"
              style={{ width: "80%" }}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={wcuThumb}
                  alt="Mockup"
                  className="w-[250px] drop-shadow-xl"
                />
              </div>

              {/* Text Content Section */}
              <div className="w-full md:w-1/2">
                <h3 className="text-xl md:text-2xl font-bold text-[#0c3c2d] mb-4">
                  {activeFeature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                  {activeFeature.desc}
                </p>
                <ul className="space-y-3 mb-6">
                  {[
                    "Accurate Testing Processes",
                    "100% Satisfaction Guarantee",
                    "Award Winning Company.",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm text-[#0c3c2d]"
                    >
                      <span className="w-5 h-5 bg-gradient-to-tr from-[#5e8d6b] via-[#d6a73d] to-[#0c3c2d] rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* <ButtonContact /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
