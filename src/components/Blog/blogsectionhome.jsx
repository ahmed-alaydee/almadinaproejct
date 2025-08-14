// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import image from "../images/blogimage.jpg";

// import "swiper/css";
// import "swiper/css/navigation";
// import "./blog.css"; // لو محتاج تعديلات خارج Tailwind
// import { Link } from "react-router-dom";

// const blogs = [
//   {
//     id: 1,
//     image: image,
//     category: "DSADS",
//     title: "التصميم الجرافيكي بين الاختيار والثقة",
//     desc: "ما يجعل التصميم يعمل ليس فقط أنه يبدو جميلًا بل يحل المشكلات.",
//   },
//   {
//     id: 2,
//     image: image,

//     category: "Admin",
//     title: "difference between programming and design",
//     desc: "Many users of the Internet do not distinguish between programming and website design.",
//   },
//   {
//     id: 3,
//     image: image,

//     category: "Admin",
//     title: "E-marketing",
//     desc: "E-marketing is a branch of marketing, also called digital marketing.",
//   },
//   {
//     id: 3,
//     image: image,

//     category: "Admin",
//     title: "E-marketing",
//     desc: "E-marketing is a branch of marketing, also called digital marketing.",
//   },
//   {
//     id: 3,
//     image: image,

//     category: "Admin",
//     title: "E-marketing",
//     desc: "E-marketing is a branch of marketing, also called digital marketing.",
//   },
// ];

// export default function BlogSlidersection() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <section className="py-16 bg-gradient-to-b from-white to-gray-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-800">Last Blogs</h2>
//           <div className="flex gap-2">
//             <button
//               ref={prevRef}
//               className="bg-gray-200 hover:bg-green-600 hover:text-white p-2 rounded-full shadow transition-all duration-300"
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               ref={nextRef}
//               className="bg-gray-200 hover:bg-green-600 hover:text-white p-2 rounded-full shadow transition-all duration-300"
//             >
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>

//         <Swiper
//           modules={[Navigation, Autoplay]}
//           autoplay={{ delay: 3500, disableOnInteraction: false }}
//           loop={true}
//           spaceBetween={20}
//           grabCursor={true}
//           breakpoints={{
//             0: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           onInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//             swiper.navigation.init();
//             swiper.navigation.update();
//           }}
//         >
//           {blogs.map((blog) => (
//             <SwiperSlide key={blog.id}>
//               <div className="relative group overflow-hidden rounded-xl shadow bg-white transition-all duration-300">
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//                 <div className="p-5">
//                   <p className="text-xs uppercase text-green-700 font-semibold mb-1">
//                     {blog.category}
//                   </p>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-800 transition-all">
//                     {blog.title}
//                   </h3>
//                   <p className="text-sm text-gray-600">{blog.desc}</p>
//                 </div>
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-all duration-500">
//                   <Link
//                     to="/"
//                     className="bg-green-600 text-white px-4 py-2 rounded hover:bg-white hover:text-green-600 transition"
//                   >
//                     Read More
//                   </Link>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }




import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight, FaUser, FaTag } from "react-icons/fa";
import image from "../images/blogimage.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "./blog.css";
import { Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    image,
    category: "Technology",
    date: "20",
    month: "JUNE",
    title: "Tackling the Changes of Retail Industry",
    desc: "By Admin",
    tag: "Technology",
  },
  {
    id: 2,
    image,
    category: "Solutions",
    date: "28",
    month: "MARCH",
    title: "Keep Your Business Safe & Ensure High Availability.",
    desc: "By Admin",
    tag: "Solutions",
  },
  {
    id: 3,
    image,
    category: "UI/UX Design",
    date: "16",
    month: "JUNE",
    title: "Which Yoga Hybrid Is Right For You?",
    desc: "By Admin",
    tag: "UI/UX Design",
  },
  {
    id: 4,
    image,
    category: "E-Marketing",
    date: "02",
    month: "MAY",
    title: "Marketing Strategy for Growing Online Sales",
    desc: "By Admin",
    tag: "Marketing",
  },
  {
    id: 5,
    image,
    category: "E-Marketing",
    date: "02",
    month: "MAY",
    title: "Marketing Strategy for Growing Online Sales",
    desc: "By Admin",
    tag: "Marketing",
  },
];

export default function BlogSlidersection() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f4f7ff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#5e8d6b] font-medium uppercase tracking-wide text-sm">
            <span className="inline-block w-2 h-2 bg-[#5e8d6b] rounded-full mr-2" />
            News & Article
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1f0a3f] mt-2">
            Read our latest insights
          </h2>
        </div>

        {/* الأسهم */}
        <div className="flex justify-end mb-6 gap-3">
          <button
            ref={prevRef}
            className="bg-[#e5e5e5] hover:bg-[#5e8d6b] hover:text-white p-2 rounded-full shadow"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="bg-[#e5e5e5] hover:bg-[#5e8d6b] hover:text-white p-2 rounded-full shadow"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* سلايدر */}
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className=" bg-white shadow-md overflow-hidden transition hover:shadow-lg " style={{ 
                height:"350px"
               }}>
                {/* <div className="relative">

                  <div className="imaggg">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="  object-cover"
                      style={{ 
                        width:"250px",
                        height:"160px",
                        margin:"auto",
                        marginTop:"10px",
                        borderRadius:"10px"
                        ,
                       }}
                    />
                  </div> */}
                  <div className="group relative">
  <div className="imaggg relative">
    <img
      src={blog.image}
      alt={blog.title}
      className="object-cover"
      style={{
        width: "250px",
        height: "160px",
        margin: "auto",
        marginTop: "10px",
        borderRadius: "10px",
      }}
    />
    <div className="img-shine group-hover:left-[100%] group-hover:opacity-100" />
  </div>



                  <div className="absolute bottom-2 left-2 bg-[#5e8d6b] text-white text-sm font-semibold rounded-xl px-3 py-1 text-center shadow">
                    {blog.date}
                    <div className="text-xs font-normal">{blog.month}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-3 mt-2">
                    <span className="flex items-center gap-1">
                      <FaUser className=" text-gray-600" />
                      {blog.desc}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaTag className="text-green-700" />
                      {blog.tag}
                    </span>
                  </div>
                  <h3 className="text-md font-bold  group-hover:text-green-800 mb-3 l" style={{ lineHeight:"30px" }}>
                    {blog.title}
                  </h3>
                  <Link
                    to="/blog"
                    className="text-sm text-gray-600 hover:text-green-600 transition"
                  >
                    Read More →
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
