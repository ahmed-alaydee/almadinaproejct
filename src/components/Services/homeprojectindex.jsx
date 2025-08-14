import { Link } from "react-router-dom";
import BGfixed from "../Aboutpage/bgfixed";
import serviceThumb from "../images/serviceThumb3_1.webp";
import serviceThum from "../images/serviceThumb3_2.webp";
import serviceThumb5 from "../images/serviceThumb5_5.png";
import { useState } from "react";


export default function HomeProjectIndex() {

  const [showModal, setShowModal] = useState(false);

  const services = [
    { title: "Design & Development", path: "/designdevelopment" },
    { title: "Hosting", path: "/" },
    { title: "E-marketing", path: "/" },
    { title: "Graphic Designs", path: "/" },
    { title: "Motion Graphics", path: "/" },
    { title: "Systems And Software", path: "/" },
  ];

  return (
    <>
      <BGfixed title="Services " current="Services" />
      <div className="w-full bg-[white] py-10 px-4 md:px-10 mt-10 mb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <aside className="col-span-1 space-y-6">
            {/* <div className="bg-white shadow rounded-lg p-4">
              <h4 className="text-sm font-semibold mb-4">All Services</h4>
              <ul className="text-sm space-y-2">
                <li className="border p-2 rounded hover:bg-gray-50">
                  Database Security
                </li>
                <li className="border p-2 rounded hover:bg-gray-50">
                  IT Consultancy
                </li>
                <li className="border p-2 rounded hover:bg-purple-100 bg-purple-600 text-white">
                  App Development
                </li>
                <li className="border p-2 rounded hover:bg-gray-50">
                  UI/UX Design
                </li>
                <li className="border p-2 rounded hover:bg-gray-50">
                  Cyber Security
                </li>
              </ul>
            </div> */}
            <div className="p-6 bg-[#f5f7f6] rounded-xl shadow-md lg:col-span-1">
              <h2 className="text-2xl font-bold text-[#234e3b] mb-6">
                All Services
              </h2>
              <ul className="space-y-3">
                {services.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.path}
                      className="flex justify-between items-center px-4 py-3 rounded-lg transition-all duration-300 bg-[#fff] text-[#234e3b] hover:bg-[#234e3b] hover:text-white"
                    >
                      {item.title}
                      <span className="text-xl">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

   

            <div
              className="relative rounded-2xl overflow-hidden text-white text-center flex flex-col items-center justify-center p-8 h-80"
              style={{
                backgroundImage: `linear-gradient(to bottom right, rgba(12, 60, 45, 0.6), rgba(94, 141, 107, 0.6), rgba(214, 167, 61, 0.4)), url(${serviceThumb5})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Circular Icon */}
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg mb-4 border-[3px] border-white">
                <i className="fa-solid fa-phone text-xl text-[#4f46e5]"></i>
              </div>

              {/* Text Content */}
              <p className="text-lg font-semibold">Need Help? Call Here</p>
              <a
                href="tel:+0547079825"
                className="text-xl font-bold tracking-wider mt-1"
              >
                0547079825
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="col-span-1 lg:col-span-3 space-y-8">
            <div>
              <img
                src={serviceThumb}
                alt="Service"
                className="w-full rounded-lg object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-2">Database Security</h2>
              <p className="text-gray-700">
                This is your database security service details section. Add
                service description, benefits and other useful content here.
              </p>
            </div>

            {/* --------------------- */}
            <div className="bg-white rounded-xl p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Thumbnail with Play Button */}
                <div
                  className="relative rounded-xl overflow-hidden shadow-md cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  <img
                    src={serviceThum}
                    alt="Video thumbnail"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-[#0c3c2d] text-2xl shadow-lg">
                      <i className="fa-solid fa-play"></i>
                    </div>
                  </div>
                </div>

                {/* Right: Text content */}
                <div>
                  <h3 className="text-2xl font-bold text-[#150035] mb-3">
                    Benefits With Our Service
                  </h3>
                  <p className="text-gray-500 mb-5 leading-relaxed">
                    Fusce is eleifend porta arcu In hac habitasse the platea the
                    lorem
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3 text-[#150035]">
                      <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                      <span className="font-medium">
                        Branding And Design Identity
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[#150035]">
                      <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                      <span className="font-medium">
                        Web Site Marketing Solutions
                      </span>
                    </li>
                    <li className="flex items-start gap-3 text-[#150035]">
                      <i className="fa-regular fa-circle-check text-[#5e8d6b] mt-1"></i>
                      <span className="font-medium">
                        Unlimited Download Data
                      </span>
                    </li>
                  </ul>
                </div>
              </div>


              {/* Modal for Video */}
              {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
                  <div className="bg-white rounded-lg overflow-hidden max-w-4xl w-full relative">
                    <button
                      onClick={() => setShowModal(false)}
                      className="absolute top-3 right-4 text-white text-3xl z-50"
                    >
                      &times;
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/your_video_id"
                      title="Service Video"
                      className="w-full h-[300px] md:h-[500px]"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>


        
          
          </main>
        </div>
      </div>
    </>
  );
}
