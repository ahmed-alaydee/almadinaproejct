import React from "react";
import { FaPlay } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { Link } from "react-router-dom";
// import bgvideo from "../images/shorakaa/bgimage.png";
import image1 from "../images/shorakaa/1.png";
import image2 from "../images/shorakaa/2.png";
import image3 from "../images/shorakaa/3.png";
import image4 from "../images/shorakaa/4.png";
import image5 from "../images/shorakaa/5.png";
import image6 from "../images/shorakaa/6.png";
import image7 from "../images/shorakaa/7.png";
import image8 from "../images/shorakaa/8.png";
import image9 from "../images/shorakaa/9.png";
import image10 from "../images/shorakaa/10.png";
// import Button from "../buttonstatic";



const logos = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10
];

const ClientsSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#5e8d6b] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">


        {/* --- Background Video Cover --- */}
        {/* <div
          className="relative w-full h-96 bg-cover bg-center rounded-xl overflow-hidden shadow-lg mb-16"
          style={{ backgroundImage: `url(${bgvideo})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
            <Link
              to="/"
              className="bg-white text-[#234e3b] p-4 rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaPlay size={20} />
            </Link>
            <h2 className="text-white text-3xl font-bold mt-4">
              Design Makes Anything Much Beautiful
            </h2>
          <div className="mt-9">
                       <Button />
           
          </div>

          </div>
        </div> */}







        {/* --- Clients Slider --- */}
        <Swiper
          modules={[Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
        >
          {logos.map((logo, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition hover:scale-105 px-7">
                <img
                  src={logo}
                  alt={`client-${i + 1}`}
                  className="h-12 mx-auto grayscale hover:grayscale-0 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientsSection;
