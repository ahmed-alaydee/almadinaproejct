import {
  FaClipboardList,
  FaPencilRuler,
  FaMobileAlt,
  FaCode,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const steps = [
  {
    icon: <FaClipboardList size={30} />,
    title: "Software Experts",
    desc: "Requirements are ",
    number: "01",
  },
  {
    icon: <FaPencilRuler size={30} />,
    title: "Protection System",
    desc: "Focuses on the look ",
    number: "02",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Protection System",
    desc: "A prototype is an early ",
    number: "03",
  },
  {
    icon: <FaCode size={30} />,
    title: "Protection System",
    desc: "Development is the process ",
    number: "04",
  },
  {
    icon: <FaCode size={30} />,
    title: "Technical Support",
    desc: "Development is the  ",
    number: "04",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-16 bg-white -mb-16 relative ">
      <div className="text-center mb-12">
        <p className="text-sm text-[#234e3b] font-medium tracking-wide uppercase">
          OUR FEATURED SERVICES
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f0a3f] mt-2">
          Our software development 
        </h2>
        </p>
      </div>

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        style={{ width: "70%", margin: "auto" }}
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-b-full pt-2 pb-5 px-7 mt-4  shadow-md text-center transition duration-300 hover:shadow-xl">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#5e8d6b] to-[#234e3b] flex items-center justify-center text-white text-2xl mb-6 border-4 border-white shadow-lg">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1f0a3f] mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{step.desc}</p>
              <span className="text-4xl text-gray-200 font-bold">
                {step.number}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
