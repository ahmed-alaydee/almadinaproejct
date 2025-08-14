
import image from "../images/blogimage.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "./blog.css"; 
import { Link } from "react-router-dom";
import BGfixed from "../Aboutpage/bgfixed";

const blogs = [
  {
    id: 1,
    image: image,
    category: "Technology",
    title: "Tackling the Changes of Retail Industry",
    desc: "What makes a design work is not just its beauty but its ability to solve problems.",
    day: "20",
    month: "JUNE",
    author: "Admin",
  },
  {
    id: 2,
    image: image,

    category: "Admin",
    title: "difference between programming and design",
    desc: "Many users of the Internet do not distinguish between programming and website design.",
    day: "20",
    month: "JUNE",
    author: "Admin",
  },
  {
    id: 3,
    image: image,

    category: "Admin",
    title: "E-marketing",
    desc: "E-marketing is a branch of marketing, also called digital marketing.",
    day: "20",
    month: "JUNE",
    author: "Admin",
  },
  {
    id: 3,
    image: image,

    category: "Admin",
    title: "E-marketing",
    desc: "E-marketing is a branch of marketing, also called digital marketing.",
    day: "20",
    month: "JUNE",
    author: "Admin",
  },

];

export default function BlogSliderditals() {


  return (
    <>
      <BGfixed title="BLOGS " current="BLOGS" />;

      <section className="py-16 bg-gradient-to-b from-white to-gray-50 mb-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Blog Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden group transition-all duration-300 h-[420px] flex flex-col justify-between"
              >
                {/* <div className="relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-52 object-cover rounded-t-xl border border-gray-200"
                  />

                  <div className="absolute -bottom-4 left-4 z-10">
                    <div className="bg-[#5e8d6b] text-white text-center px-3 py-1 rounded-lg shadow">
                      <p className="text-[10px] -mt-1">{blog.month}</p>
                    </div>
                  </div>
                </div> */}
                <div className="relative overflow-hidden">
  <img
    src={blog.image}
    alt={blog.title}
    className="w-full h-52 object-cover rounded-t-xl border border-gray-200"
  />

  {/* تأثير اللمعة */}
  <div className="img-shine group-hover:left-[100%] group-hover:opacity-100" />

  <div className="absolute -bottom-4 left-4 z-10">
    <div className="bg-[#5e8d6b] text-white text-center px-3 py-1 rounded-lg shadow">
      <p className="text-[10px] -mt-1">{blog.month}</p>
    </div>
  </div>
</div>


                <div className="pt-6 px-5 pb-5">
                  <div className="flex items-center gap-4 text-gray-500 text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <i className="fa-regular fa-user"></i> By {blog.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fa-solid fa-tag"></i> {blog.category}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug group-hover:text-[#5e8d6b] transition">
                    {blog.title}
                  </h3>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {blog.desc}
                  </p>

                  <Link
                    to="/blog"
                    className="text-sm font-semibold text-[#5e8d6b] transition-all"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="bg-[#f4f4f4] rounded-xl p-6 shadow-md">
              <div className="mb-4 relative">
                <h3 className="text-2xl font-bold text-[#0c3c2d] inline-block relative">
                  Search
                </h3>
                <div className="w-10 border-b-2 border-[#5e8d6b] mt-1" />
              </div>

              <div className="flex">
                <input
                  type="text"
                  placeholder="Search here"
                  className="flex-grow px-4 py-3 rounded-l-md bg-white text-[#0c3c2d] placeholder:text-gray-400 focus:outline-none"
                />
                <button className="bg-[#5e8d6b] px-5 rounded-r-md flex items-center justify-center text-white text-xl">
                  <i className="fa-solid fa-search" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-[#f4f4f4] rounded-xl p-6 shadow-md">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#0c3c2d] relative inline-block">
                  Categories
                  <div className="w-10 border-b-2 border-[#5e8d6b] mt-1" />
                </h3>
              </div>

              <ul className="space-y-3 text-sm font-medium">
                {[
                  { name: "Database Security", count: 8 },
                  { name: "IT Consultancy", count: 11 },
                  { name: "App Development", count: 12, active: true },
                  { name: "UI/UX Design", count: 18 },
                  { name: "Cyber Security", count: 7 },
                ].map((item, i) => (
                  <li
                    key={i}
                    className={`flex justify-between items-center px-4 py-3 rounded-lg cursor-pointer transition-all duration-200
                    ${
                      item.active
                        ? "bg-gradient-to-r from-[#5e8d6b] via-[#d6a73d] to-[#5e8d6b] text-white"
                        : "bg-white text-[#0c3c2d] hover:bg-gradient-to-r hover:from-[#5e8d6b] hover:via-[#d6a73d] hover:to-[#5e8d6b] hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    <span>({item.count})</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}







