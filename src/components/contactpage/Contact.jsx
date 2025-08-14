import BGfixed from "../Aboutpage/bgfixed";
import { Buttonemail } from "../buttonstatic";
import "./contact.css";
import imagecontacVideo from "../images/contact.webp";
import { useState } from "react";

export default function ContactPage() {

  const [showVideo, setShowVideo] = useState(false);
  return (
    <>
      <BGfixed title="Contact" current="Contact" />
      <section className="w-full py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left Card */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <div className="bg-gradient-to-b from-[#5e8d6b] to-[#0c3c2d] text-white p-8 space-y-6">
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-white flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-phone-volume text-white text-xl"></i>
                </div>

                {/* Text */}
                <div className="space-y-1">
                  <p className="text-sm text-white/70">Call Us 7/24</p>
                  <h4 className="text-lg font-bold text-white">
                    +208–555–0112
                  </h4>
                </div>
              </div>

              <hr className="border-white/30" />

              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-white flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-envelope text-white text-xl"></i>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-white/70">Make a Quote</p>
                  <h4 className="text-lg font-bold">Infotech@gmail.com</h4>
                </div>
              </div>

              <hr className="border-white/30" />

              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-white flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-location-dot text-white text-xl"></i>
                </div>

                <div className="space-y-1">
                  <p className="text-sm text-white/70">Location</p>
                  <h4 className="text-lg font-bold">4517 Washington ave.</h4>
                </div>
              </div>
            </div>

            <div>
              {/* الصورة + زر التشغيل */}
              <div className="relative">
                <img
                  src={imagecontacVideo}
                  alt="Support"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
                <button
                  className="absolute inset-0 flex items-center justify-center"
                  onClick={() => setShowVideo(true)}
                >
                  <div className="w-14 h-14 bg-white/60 backdrop-blur-md rounded-full flex items-center justify-center text-[#0c3c2d] text-xl shadow-lg">
                    <i className="fa-solid fa-play"></i>
                  </div>
                </button>
              </div>

              {/* Modal الفيديو */}
              {showVideo && (
                <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
                  <div className="relative bg-black rounded-lg overflow-hidden max-w-4xl w-full">
                    <button
                      onClick={() => setShowVideo(false)}
                      className="absolute top-3 right-4 text-white text-3xl z-50"
                    >
                      &times;
                    </button>
                    <iframe
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                      title="Support Video"
                      className="w-full h-[300px] md:h-[500px]"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Form */}
          <div>
            <p className="text-sm font-medium text-[#5e8d6b] mb-2">
              CONTACT US
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c3c2d] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-600 mb-8">
              Nullam varius, erat quis iaculis dictum, eros urna varius eros, ut
              blandit felis odio in turpis. Quisque rhoncus, eros in auctor
              ultrices.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e8d6b]"
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e8d6b]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message">Write Message*</label>
                <textarea
                  rows="10"
                  id="message"
                  placeholder="Write Message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5e8d6b]"
                ></textarea>
              </div>

              <Buttonemail />
            </form>
          </div>
        </div>
      </section>

      {/* start Ifarme  */}
      <section className="relative w-full h-[500px]">
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12650.708241073226!2d31.187899!3d30.005257000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458478d0a3f6b47%3A0xb1bb2032ad5ca42b!2z2KfZhNmF2K_ZitmG2Kkg2KfZhNmF2YbZiNix2Kkg2YTZhNit2YTZiNmEINin2YTYqtmC2YbZitipINmI2YbYuNmFINin2YTZhdi52YTZiNmF2KfYqg!5e1!3m2!1sen!2seg!4v1750897680217!5m2!1sen!2seg"
          title="Google Map"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          style={{ border: 0 }}
          className="absolute inset-0 z-0"
        ></iframe>
      </section>
    </>
  );
}


