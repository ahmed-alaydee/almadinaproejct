

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Example images (replace with your own paths)
import app1 from "../images/projects/mopil1image.png";
import app2 from "../images/projects/mopil1image.png";
import app3 from "../images/projects/mopil1image.png";
import app4 from "../images/projects/mopil1image.png";
import app5 from "../images/projects/mopil1image.png";


export default function OurWorksMopilapplication() {
  return (
    <section
      className="py-20 text-white -mb-36"
      //        style={{
      //     backgroundImage:
      //       "linear-gradient(135deg, rgba(25, 135, 84, 0.15), rgba(32, 201, 151, 0.15), rgba(13, 202, 240, 0.15))",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
      //   style={{
      //     backgroundImage:
      //       "linear-gradient(135deg, rgba(25, 135, 84, 0.15), rgba(32, 201, 151, 0.15), rgba(13, 202, 240, 0.15))",
      //     backgroundSize: "cover",
      //     backgroundPosition: "center",
      //     backgroundRepeat: "no-repeat",
      //   }}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(12, 60, 45, 0.2), rgba(94, 141, 107, 0.2), rgba(214, 167, 61, 0.2))",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-4 mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-4xl font-bold md:text-5xl">
          Let’s See Our App Screenshots
        </h2>
        <p className="mb-12 text-lg text-white/90">
          Our mobile application designs that highlight the user-friendly
          interface and powerful features.
        </p>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[app1, app2, app3, app4, app5].map((img, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <img
                src={img}
                alt={`app-screenshot-${i + 1}`}
                className="rounded-xl shadow-2xl max-h-[500px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
