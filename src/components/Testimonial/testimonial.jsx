import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonial.css";
import { useState } from "react";

export default function Testimonial() {
  const testimonials = [
    {
      text: "Techo offers exceptional value for money. The comprehensive suite of tools and seamless integration with various plugins and services make it a for all",
      name: "Ronald Richards",
      role: "Web Entrepreneur",
      img: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      text: "Techo has completely transformed our process. The user–friendly interface and powerful features maintaining our website. Highly recommended for all!",
      name: "Kristin Watson",
      role: "Web Designer",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      text: "I’ve been using Techo for several months now, I’m extremely impressed with the ease of customization it offers. The wide range of templates.",
      name: "Theresa Webb",
      role: "Tech enthusiast",
      img: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
      text: "I’ve been using Techo for several months now, I’m extremely impressed with the ease of customization it offers. The wide range of templates.",
      name: "Theresa Webb",
      role: "Tech enthusiast",
      img: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    {
      text: "I’ve been using Techo for several months now, I’m extremely impressed with the ease of customization it offers. The wide range of templates.",
      name: "Theresa Webb",
      role: "Tech enthusiast",
      img: "https://randomuser.me/api/portraits/women/85.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonial-section  container mx-auto px-4 -mt-10 ">
      <div className="testimonial-header">
        <h6>TESTIMONIALS</h6>
        <h2>What Happy Clients Says About Us?</h2>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={3}
        spaceBetween={30}
        loop
        grabCursor
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true, el: ".swiper-pagination" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        onSlideChange={(swiper) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);
        }}
        className="testimonial-swiper"
      >
        {testimonials.map((t, index) => {
          const isActive = index === (activeIndex + 1) % testimonials.length;
          return (
            <SwiperSlide key={index}>
              <div className={`testimonial-card   ${isActive ? "active" : ""}`}>
                <div className="stars">★★★★☆</div>
                <p className="text">“{t.text}”</p>
                <div className="author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <h5>{t.name}</h5>
                    <small>{t.role}</small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination pagination-bar"></div>
      </Swiper>
    </section>
  );
}
