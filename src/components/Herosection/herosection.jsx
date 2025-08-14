import { useEffect, useState } from "react";
import heroImg2 from "../images/hero-bg2_1.png";
import arrowRigh from "../images/arrowRight.webp";
import arrowLeft from "../images/arrowLeft.png";
import heroShape from "../images/heroShape2_1.webp";
import heroShapee from "../images/heroShape2_6.webp";
import counterIcon3 from "../images/aron-van-de-pol-hXOGHaGCtdA-unsplash.jpg";  
import Button from "../buttonstatic";

export default function HeroSection() {
  const slidesData = [
    {
      image: counterIcon3,
      text: "Al Madinah Al Munawwarah Technology Solutions and Information Systems Company est un partenaire performant",
      description:
        "We are not only service providers, we are partners in success. Our priority is to add more value to your business. Our goal is the success of the project",
    },
    {
      image: heroImg2,
      text: "We have implemented many website projects",
      description:
        "We have experiences and solutions for many businesses. We have implemented many projects and electronic platforms.",
    },
    {
      image: heroImg2,
      text: "We always use advanced and fluid technologies",
      description:
        "Our developers are professionals in using what suits the business. We start from analyzing the project and choose the best technology that matches the services",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + slidesData.length) % slidesData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-visible pt-[100px] h-screen">
        {slidesData.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Centered Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4   z-50">
              <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-bold leading-snug max-w-[90%] md:max-w-[68%]">
                {slide.text}
              </h2>
              <p className="mt-4 text-sm md:text-lg max-w-[90%] md:max-w-[50%] text-white">
                {slide.description}
              </p>

              {/* Center Button */}
              <div className="mt-6">
                <Button />
              </div>

              {/* Arrows for mobile (inside slide content) */}
              <div className="flex absolute right-5 bottom-20  md:hidden justify-center gap-6 z-50">
                <div
                  onClick={prevSlide}
                  className="text-white border border-white p-3 rounded-full cursor-pointer hover:bg-gradient-to-r from-[#0c3c2d] to-[#5e8d6b]"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    textAlign: "center",
                    transition: "0.5s",
                  }}
                >
                  <img src={arrowLeft} style={{ width: "100%" }} alt="prev" />
                </div>
                <div
                  onClick={nextSlide}
                  className="text-white border border-white p-3 rounded-full cursor-pointer hover:bg-gradient-to-r from-[#0c3c2d] to-[#5e8d6b]"
                  style={{
                    width: "45px",
                    height: "45px",
                    borderRadius: "50%",
                    textAlign: "center",
                    transition: "0.5s",
                  }}
                >
                  <img src={arrowRigh} style={{ width: "100%" }} alt="next" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Shapes */}
        <div className="absolute top-0 -left-10 z-10 hidden md:block">
          <img src={heroShape} alt="" />
        </div>
        <div className="absolute right-0 bottom-0 z-50 hidden md:block">
          <img src={heroShapee} alt="" />
        </div>

        {/* Arrows for desktop */}
        <div
          onClick={prevSlide}
          className="hidden md:flex absolute left-5 top-1/2 transform -translate-y-1/2 text-white border border-white p-3 rounded-full cursor-pointer hover:bg-gradient-to-r from-[#0c3c2d] to-[#5e8d6b] z-10"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            textAlign: "center",
            transition: "0.5s",
          }}
        >
          <img src={arrowLeft} style={{ width: "100%" }} alt="prev" />
        </div>
        <div
          onClick={nextSlide}
          className="hidden md:flex absolute right-5 top-1/2 transform -translate-y-1/2 text-white border border-white p-3 rounded-full cursor-pointer hover:bg-gradient-to-r from-[#0c3c2d] to-[#5e8d6b] z-10"
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            textAlign: "center",
            transition: "0.5s",
          }}
        >
          <img src={arrowRigh} style={{ width: "100%" }} alt="next" />
        </div>
      </div>
    </>
  );
}
