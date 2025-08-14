import { useState } from "react";
import { Link } from "react-router-dom";
import kakakass from "../images/kakakass.jpg";

export default function OurWorksditals() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    "all",
    "Technology",
    "Medical",
    "Tourist",
    "E-commerce",
    "Corporate",
  ];

  const projects = [
    { id: 1, title: "متجر السحابه", category: "Technology" },
    { id: 2, title: "تطبيق طبي", category: "Medical" },
    { id: 3, title: "شركة سياحية", category: "Tourist" },
    { id: 4, title: "تطبيق تسوق", category: "E-commerce" },
    { id: 5, title: "عيادة", category: "Medical" },
    { id: 6, title: "مطعم", category: "Corporate" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="bg-gradient-to-b from-[#f9f9f9] to-[#f0f4f2] py-20 px-4">
      <div className="mx-auto mb-12 max-w-7xl text-center">
        <h2 className="text-4xl font-bold text-[#234e3b]">OUR WORKS</h2>
        <p className="mt-2 text-gray-600">
          Some of our latest creative projects
        </p>
      </div>

      {/* فلترة الأزرار */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter
                ? "bg-[#5e8d6b] text-white"
                : "bg-white/20 text-[#234e3b] border border-[#cbd5e1]"
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* كروت المشاريع */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative flex flex-col overflow-hidden rounded-3xl shadow-lg h-[370px] bg-white"
          >
            <img
              src={kakakass}
              alt={project.title}
              className="object-cover w-full h-full z-0"
            />

            {/* البوكس الأسود */}
            <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center p-4 bg-black rounded-2xl shadow-md backdrop-blur-md">
              <div>
                <span className="text-sm font-medium text-[#5e8d6b]">
                  {project.category}
                </span>
                <h4 className="text-lg font-bold text-white mt-1">
                  {project.title}
                </h4>
              </div>
              <Link
                to="/detailsprojectwork"
                className="w-10 h-10 rounded-full bg-[#5e8d6b] text-white flex items-center justify-center hover:bg-[#d6a73d] transition"
              >
                <i className="text-sm fa-solid fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
