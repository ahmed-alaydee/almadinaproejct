import BGfixed from "../Aboutpage/bgfixed";
import { Buttonemail } from "../buttonstatic";
import blogCardThumb from "../images/blogCardThumb3_1.png";
import project_3 from "../images/project_3.webp";
import { FaUser, FaRegComments, FaTags } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


export default function BlogPage(){
    return (
      <>
        <BGfixed title="BLOGS " current="BLOGS" />

        <div className="bg-gray-50 py-10 px-4 mb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <img src={blogCardThumb} alt="Blog Main" className="rounded-xl" />
              <div className="flex items-center gap-6 text-sm text-[#5e8d6b] font-medium border-b pb-4">
                <div className="flex items-center gap-2">
                  <FaUser />
                  <span>By Admin</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaRegComments />
                  <span>2 Comments</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTags />
                  <span>IT Services</span>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Many users of the Internet, computers and websites so far do not
                distinguish between website programming and website design.
                Programming websites in short is writing instructions and data
                in specialized languages on computer programs to obtain the
                shape of a website and hosting this output on a server for its
                appearance on the Internet and its use for purposes. The many
                well-known, from defining the identity of a company or it
              </p>

              <div className="bg-[#f7f7f7] p-10 rounded relative text-[#444] italic text-base leading-relaxed">
                <div className="border-l-4 border-[#5e8d6b] pl-4">
                  Pellentesque sollicitudin congue dolor non aliquam. Morbi
                  volutpat, nisi vel ultricies urnacondimentum, sapien neque
                  lobortis tortor, quis efficitur mi ipsum eu metus. Praesent
                  eleifend orci sit amet est vehicula.
                </div>
                <FaQuoteRight className="absolute bottom-4 right-6 text-[#5e8d6b] text-3xl" />
              </div>

              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                Vestibulum auctor ornare leo, non suscipit magna interdum eu.
                Curabitur pellentesque nibh nibh, at maximus ante fermentum sit
                amet. Pellentesque commodo lacus at sodales sodales. Quisque
                sagittis orci ut diam condimentum, vel euismod erat placerat. In
                iaculis arcu eros.
              </p> */}
{/* 
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={project_3}
                  alt="Team Working"
                  className="w-full md:w-1/2 rounded-xl object-cover"
                />
                <img
                  src={project_3}
                  alt="Office Environment"
                  className="w-full md:w-1/2 rounded-xl object-cover"
                />
              </div> */}

              {/* <p className="text-gray-700 leading-relaxed">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore et dolore of magna aliqua. Ut enim ad minim veniam,
                made of owl the quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea dolor commodo consequat. Duis aute irure and
                dolor in reprehenderit.Consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore of magna aliqua.
                Ut enim ad minim veniam, made of owl the quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo
                consequat. Duis aute irure and dolor in reprehenderit.
              </p> */}

              {/* <div className="flex flex-wrap justify-between items-center border-t border-b py-4 mt-4">
                <div className="flex items-center gap-2 flex-wrap text-sm text-[#1f0a3f]">

                  <span className="font-bold">Tags:</span>
                  {["News", "Business", "Marketing"].map((tag) => (
                    <span
                      key={tag}
                      className="border border-gray-300 px-3 py-1 rounded-md text-[#1f0a3f] hover:bg-gray-100 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-sm text-[#1f0a3f] mt-4 md:mt-0">
                  <span className="font-bold">Share:</span>
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-linkedin-in"></i>
                  <i className="fab fa-youtube"></i>
                </div>
              </div> */}


              {/* <div className="pt-10 border-t border-gray-200">
                <h2 className="text-xl font-bold mb-8 text-[#1f0a3f]">
                  02 Comments
                </h2>

                <div className="space-y-8">
                  {[1, 2].map((i) => (
                    <div
                      key={i}
                      className="flex items-start justify-between gap-4 border-b pb-6"
                    >
                      <img
                        src={
                          i === 1
                            ? "https://randomuser.me/api/portraits/women/65.jpg"
                            : "https://randomuser.me/api/portraits/men/32.jpg"
                        }
                        alt="Avatar"
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      <div className="flex-1">
                        <div className="flex justify-between items-center flex-wrap gap-2">
                          <div>
                            <h4 className="text-lg font-semibold text-[#1f0a3f]">
                              {i === 1 ? "Albert Flores" : "Alex Flores"}
                            </h4>
                            <p className="text-sm text-gray-500">
                              March 20, 2024 at 2:37 pm
                            </p>
                          </div>

                          <button className="px-4 py-1 text-white bg-gradient-to-r from-[#5e8d6b] to-[#b8e405] rounded-full text-sm font-medium">
                            Reply
                          </button>
                        </div>

                        <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                          Neque porro est qui dolorem ipsum quia quaed inventore
                          veritatis et quasi architecto var sed efficitur turpis
                          gilla sed sit amet finibus eros. Lorem Ipsum is simply
                          dummy
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <div className="relative mb-8">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-[#1f0a3f]">
                      Leave a comments
                    </h3>
                  </div>

                  <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border border-gray-300 p-4 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#9b51e0]"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="border border-gray-300 p-4 rounded-md w-full text-sm focus:outline-none focus:ring-2 focus:ring-[#9b51e0]"
                    />
                    <textarea
                      placeholder="Write Message"
                      className="md:col-span-2 border border-gray-300 p-4 rounded-md h-40 text-sm focus:outline-none focus:ring-2 focus:ring-[#9b51e0]"
                    ></textarea>

                    <Buttonemail />
                  </form>
                </div>
              </div> */}
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
                {/* العنوان */}
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

              {/* Recent Posts */}
              <div className="bg-[#f4f4f4] rounded-xl p-6 shadow-md">
                {/* العنوان */}
                <div className="mb-5">
                  <h3 className="text-xl font-bold text-[#0c3c2d] relative inline-block">
                    Recent Post
                    <div className="w-10 border-b-2 border-[#5e8d6b] mt-1" />
                  </h3>
                </div>

                {/* البوستات */}
                <div className="space-y-5">
                  {[
                    {
                      img: project_3,
                      date: "18 Dec, 2024",
                      title:
                        "Keep Your Business Safe & Endure High Availability",
                    },
                    {
                      img: project_3,
                      date: "18 Dec, 2024",
                      title: "Tracking the Changes of Retail Industry",
                    },
                    {
                      img: project_3,
                      date: "18 Dec, 2024",
                      title: "What’s Holding Back the IT Solution",
                    },
                  ].map((post, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 border-b pb-4 last:border-none"
                    >
                      {/* الصورة */}
                      <img
                        src={post.img}
                        alt="post"
                        className="w-[60px] h-[60px] object-cover rounded-md"
                      />
                      {/* المحتوى */}
                      <div>
                        <p className="text-xs text-[#5e8d6b] flex items-center gap-1">
                          <i className="fa-solid fa-calendar-days"></i>{" "}
                          {post.date}
                        </p>
                        <p className="font-semibold text-sm text-[#0c3c2d] mt-1 leading-tight">
                          {post.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              {/* <div className="bg-[#f4f4f4] rounded-xl p-6 relative">
                <h3 className="text-xl font-bold text-[#1f0f2d] mb-3 relative pl-2">
                  Tags
                  <div className="w-24 h-[2px] bg-[#5d5ff6] mt-1"></div>
                </h3>

                <div className="flex flex-wrap gap-3 text-sm mt-4">
                  {[
                    "Security",
                    "Business",
                    "Digital",
                    "Technology",
                    "Change",
                    "Video",
                    "UI/UX Design",
                    "Startup",
                    "Services",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white rounded-md border text-[#1f0f2d] hover:bg-gray-100 cursor-pointer transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div> */}

            </aside>
          </div>
        </div>
      </>
    );
}