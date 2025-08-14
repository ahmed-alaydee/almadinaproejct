import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./ourworks.css";
import kakakass from "../images/kakakass.jpg";

export default function OurWorks() {
  const swiperRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    "all",
    "technology",
    "security",
    "design",
    "medical",
    "tourist",
  ];

  const slidesData = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    category: i % 2 === 0 ? "technology" : "security",
    title: i % 2 === 0 ? "IT Management" : "Data Visualizations",
    label: i % 2 === 0 ? "Technology" : "Security",
  }));

  return (
//     <section className="relative w-full min-h-screen bg-gradient-to-tr sm:py-12 from-[#535526] via-[#653b1f] to-[#4d8b6e] py-40 px-4 md:px-10">
     
// <div className="absolute md:left-10 md:top-52 right-5 top-[22em] z-10 flex items-center gap-4">
//   <button className="swiper-button-prev-custom bg-[#e5e5e5] text-green-900 w-10 h-10 flex items-center justify-center rounded-full transition hover:scale-105">
//     <i className="fa-solid fa-arrow-left"></i>
//   </button>
//   <button className="swiper-button-next-custom bg-[#e5e5e5] text-green-900 w-10 h-10 flex items-center justify-center rounded-full transition hover:scale-105">
//     <i className="fa-solid fa-arrow-right"></i>
//   </button>
// </div>


//       {/* Heading */}
//       <div className="mb-16 text-center text-white">
//         <p className="text-sm tracking-wide uppercase opacity-80 mb-4">
//           Recently Work
//         </p>
//         <h2
//           className="mx-auto text-3xl font-bold leading-tight md:text-5xl"
//           style={{ width: "80%" }}
//         >
//           Latest projects from <br />
//           <span> our Techbe</span>
//         </h2>
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex flex-wrap gap-3 justify-center md:mb-10 -mt-10 mb-20  md:justify-end">
//         {filters.map((filter, i) => (
//           <button
//             key={i}
//             className={`project-filter-btn px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-md bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all duration-300 ${
//               activeFilter === filter ? "active" : ""
//             }`}
//             data-filter={filter}
//             onClick={() => setActiveFilter(filter)}
//           >
//             {filter.charAt(0).toUpperCase() + filter.slice(1)}
//           </button>
//         ))}
//       </div>

//       {/* Swiper Slider */}
//       <div className="w-full -mb-10">
//         <Swiper
//           ref={swiperRef}
//           modules={[Autoplay, Navigation]}
//           navigation={{
//             nextEl: ".swiper-button-next-custom",
//             prevEl: ".swiper-button-prev-custom",
//           }}
//           spaceBetween={20}
//           loop={false}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             640: { slidesPerView: 1.2 },
//             768: { slidesPerView: 2 },
//             1024: { slidesPerView: 4 },
//           }}
//           className="project-slider"
//         >
//           {slidesData
//             .filter(
//               (slide) =>
//                 activeFilter === "all" || slide.category === activeFilter
//             )
//             .map((slide) => (
//               <SwiperSlide
//                 key={slide.id}
//                 className="group relative flex overflow-hidden flex-col rounded-3xl shadow-lg h-[370px] project-card"
//                 data-category={slide.category}
//               >
//                 <div className="relative w-full h-full overflow-hidden">
//                   <img
//                     src={kakakass}
//                     alt="cloud"
//                     className="object-cover z-0 w-full h-full"
//                   />
//                   {/* تأثير اللمعة */}
//                   <div className="img-shine group-hover:left-[100%] group-hover:opacity-100"></div>
//                 </div>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//       </div>
//     </section>

<section className="relative w-full md:min-h-screen bg-gradient-to-tr sm:py-12 from-[#535526] via-[#653b1f] to-[#4d8b6e] py-40 px-4 md:px-10">
      
   <div className="-mt-32 md:mt-7">
    <div className="absolute md:left-[143px] md:top-[16.5em] left-6 top-[340px] z-10 flex items-center gap-4">
        <button className="swiper-button-prev-custom bg-[#e5e5e5] text-green-900 w-10 h-10 flex items-center justify-center rounded-full transition hover:scale-105">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <button className="swiper-button-next-custom bg-[#e5e5e5] text-green-900 w-10 h-10 flex items-center justify-center rounded-full transition hover:scale-105">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>

      <div className="mb-24 text-center text-white max-w-screen-xl mx-auto">
        <p className="text-sm tracking-wide uppercase opacity-80 mb-4">
          Recently Work
        </p>
        <h2 className="mx-auto text-3xl font-bold leading-tight md:text-5xl md:w-[80%]">
          Latest projects from <br />
          <span> our Techbe</span>
        </h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-1 justify-center   md:mb-10 -mt-10 mb-20 md:justify-end max-w-screen-xl mx-auto">
        {filters.map((filter, i) => (
          <button
            key={i}
            className={`project-filter-btn px-5 py-3 rounded-full mb-3 md:mb-5 text-sm font-semibold backdrop-blur-md bg-white/10 border border-white/30 text-white hover:bg-white/20 transition-all duration-300 ${
              activeFilter === filter ? "active" : ""
            }`}
            data-filter={filter}
            onClick={() => setActiveFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <div className="w-full md:h-[400px] h-[300px] -mb-10 max-w-screen-xl mx-auto">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={20}
          loop={false}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="project-slider"
        >
          {slidesData
            .filter(
              (slide) =>
                activeFilter === "all" || slide.category === activeFilter
            )
            .map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="group relative flex overflow-hidden flex-col rounded-3xl shadow-lg h-[370px] project-card"
                data-category={slide.category}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={kakakass}
                    alt="cloud"
                    className="object-cover z-0 w-full h-full"
                  />
                  {/* تأثير اللمعة */}
                  <div className="img-shine group-hover:left-[100%] group-hover:opacity-100"></div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
   </div>
    </section>
  );
}
