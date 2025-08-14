import BGfixed from "../Aboutpage/bgfixed";
import OurWorksditals from "../images/projectThumb1_1.webp"; 
import project3 from "../images/project_3.webp"; 
import projct2 from "../images/project_2.webp"; 
import OurWorksMopilapplication from "./ourworksmopileapplication";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";



import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";


export default function DetailsProjectWork(){
  const prevRef = useRef(null);
  const nextRef = useRef(null);
    return (
      <>
        <BGfixed title="OUr Works " current="our works" />

        <div className="max-w-5xl mx-auto px-4 py-10">
          {/* Top Image Section */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img
              src={OurWorksditals}
              alt="Project"
              className="w-full h-auto object-cover"
            />

            {/* Project Info Box */}

            <div className="absolute -bottom-0 z-50 right-2  h-[300px] bg-white  shadow-lg border border-gray-200 w-72 overflow-hidden text-sm">
              {/* Header */}
              <div className="  border-b border-[#5e8d6b] px-4 py-3">
                <h4
                  className="font-bold text-[#5e8d6b] mb-6  "
                  style={{ fontSize: "30px", marginTop: "10px" }}
                >
                  Project Info:
                </h4>
              </div>

              {/* Details */}
              <div className="divide-y divide-gray-200 text-[#1f0a3f]">
                <div className="flex justify-between px-4 py-4">
                  <span className="font-medium">Client:</span>
                  <span className="text-right">Ralph Edwards</span>
                </div>
                <div className="flex justify-between px-4 py-4">
                  <span className="font-medium">Category:</span>
                  <span className="text-right">IT Management</span>
                </div>
                <div className="flex justify-between px-4 py-4">
                  <span className="font-medium">Location:</span>
                  <span className="text-right">London</span>
                </div>
                <div className="flex justify-between items-center px-4 py-4">
                  <span className="font-medium">Share:</span>
                  <div className="flex gap-3 text-[#5e8d6b] text-lg">
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-10 space-y-8 text-sm text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-3xl mb-4 font-semibold text-black">
                App Development
              </h2>
              <p style={{ width: "60%" }}>
                Nulla faucibus malesuada. In placerat feugiat eros ac tempor.
                Integer euismod massa sapien, et consequat enim laoreet et.
                Nulla sit amet nisi dapibus, gravida turpis sit amet, accumsan
                nisl. Fusce vel semper risus. Morbi congue eros sagittis,
                sodales turpis venenatis, iaculis dui. Proin ac purus sed nibh
                dapibus neque. scelerisque sed quis ante.
              </p>
            </div>

            <div>
              <h3 className="  font-semibold text-black text-3xl mb-4">
                Our Challenge
              </h3>
              <p>
                Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus
                in magna ut orci malesuada sollicitudin. Aenean faucibus
                scelerisque convallis. Quisque interdum mauris id nunc molestie,
                ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et,
                venenatis tincidunt quam. Proin nec volutpat ligula, id
                porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc
                justo, ac aliquam ex molestie id.
              </p>
            </div>

            {/* Features List */}
            <div className="grid md:grid-cols-3 gap-4 text-sm text-[#150035]">
              <p>
                <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                Branding and design identity
              </p>

              <p>
                <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                Web site marketing solutions
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                Branding and design identity
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                Web site marketing solutions
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                Branding and design Identity
              </p>
              <p>
                <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                Web site Marketing Solutions
              </p>
            </div>

            <div>
              <h3 className=" font-semibold text-black text-3xl mb-4">
                The Result of Project
              </h3>
              <p className="" style={{ lineHeight: "28px" }}>
                Pellentesque egestas rutrum nibh facilisis ultrices. Phasellus
                in magna ut orci malesuada sollicitudin. Aenean faucibus
                scelerisque convallis. Quisque interdum mauris id nunc molestie,
                ac tincidunt erat gravida. Nullam dui libero, mollis ac quam et,
                venenatis tincidunt quam. Proin nec volutpat ligula, id
                porttitor augue. Proin id volutpat massa. Vivamus tincidunt nunc
                justo, ac aliquam ex molestie id.
              </p>
            </div>
          </div>

          {/* <div className="max-w-6xl mx-auto px-4 py-12">
            
            <Swiper
              spaceBetween={30}
              slidesPerView={2}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              className="rounded-xl"
            >
              {[projct2, project3, OurWorksditals].map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Project ${i + 1}`}
                    className="rounded-xl w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

        
        
          </div> */}

          <div className="max-w-6xl mx-auto px-4 py-12 relative mt-16">
            <div className="absolute -top-8 right-0 flex gap-2 z-10">
              <button
                ref={prevRef}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white flex items-center justify-center transition"
              >
                ‹
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 rounded-full bg-gray-200 hover:bg-green-600 hover:text-white flex items-center justify-center transition"
              >
                ›
              </button>
            </div>

            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={2}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
              }}
              className="rounded-xl"
            >
              {[projct2, project3, project3].map((img, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={img}
                    alt={`Project ${i + 1}`}
                    className="rounded-xl w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="mb-44">
          <OurWorksMopilapplication />
        </div>
      </>
    );
}