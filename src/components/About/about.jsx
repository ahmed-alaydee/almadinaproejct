
import Button, { ButtonContact } from "../buttonstatic";
import React, { useState } from "react";
import aboutThumb from "../images/aboutThumb1_1.webp";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaHandshake, FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import videoThumb from "../images/projectThumb1_1.webp"; 
import aboutProfile1 from "../images/aboutProfile1_1.webp"; 
import aboutIcon1 from "../images/aboutIcon1_2.webp"; 
import aboutIcon2 from "../images/aboutIcon1_3.webp"; 
import ReactPlayer from "react-player";

import  imageabout from  "../images/projects/aboutThumb3_3.png"
import  imageabout2 from  "../images/projects/aboutThumb3_1.webp"
import  imageabout3 from  "../images/projects/aboutThumb3_2.webp"

import { ArrowRight } from "lucide-react";




export default function AboutSection() {
  const floatControl = useAnimation();
  const bounceControl = useAnimation();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    floatControl.start({
      x: [0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });

    bounceControl.start({
      y: [0, 20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [floatControl, bounceControl]);

  return (
    // section old 
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-10 relative">
      {/* Left Side: Image & Floating Box */}
      <div className="relative w-full max-w-md mx-auto">
        <img
          src={aboutThumb}
          alt="Team"
          className="rounded-lg shadow-xl w-full h-auto sm:w-[403px] sm:h-[458px]"
        />

        {/* Floating Box Inside Image */}
        <motion.div
          animate={floatControl}
          className="absolute top-4 left-2 sm:-left-7 w-[180px] sm:w-[203px] bg-white shadow-lg rounded-xl px-4 py-5 flex items-center border-l-2 border-blue-500"
        >
          <div className="text-[#5e8d6b] mr-4">
            <FaHandshake size={36} />
          </div>
          <div className="leading-tight">
            <h4 className="text-[24px] sm:text-[30px] font-bold text-[#1f0a3f] mb-0 leading-snug">
              6,561+
            </h4>
            <p className="text-sm text-gray-500 -mt-[2px]">Satisfied Clients</p>
          </div>
        </motion.div>

        {/* Video Thumbnail Overlay */}
        <div
          className="absolute right-0  top-52 sm:left-60 sm:bottom-[-15rem] w-[220px] sm:w-[262px] h-[180px] sm:h-[221px] rounded-xl overflow-hidden shadow-md"
          style={{ borderTop: "5px solid #fff", borderLeft: "5px solid #fff" }}
        >
          <img
            src={videoThumb}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />

          <button
            onClick={() => setShowVideo(true)}
            className="absolute inset-0 flex items-center justify-center group"
          >
            <span className="absolute w-16 h-16 rounded-full bg-white/20 animate-ping"></span>
            <span className="relative z-10 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <FaPlay className="text-white text-xl" />
            </span>
          </button>

          {showVideo && (
            <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">
              <div
                className="relative w-full max-w-3xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowVideo(false)}
                  className="absolute top-2 right-2 text-white text-3xl z-[99999]"
                >
                  <IoMdClose />
                </button>

                <div className="rounded-lg overflow-hidden">
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=akr7M3Up7xM"
                    width="100%"
                    height="100%"
                    controls
                    playing
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Middle Vertical Line Animation */}
      <motion.div
        animate={bounceControl}
        className="hidden lg:block absolute left-[45%] top-16 h-48 w-5 rounded-full 
         bg-gradient-to-t from-[#0c3c2d] via-[#d6a73d] to-[#5e8d6b]"
      />

      {/* Right Side Content */}
      <div className="mt-0 sm:mt-0 lg:-mt-10">
        <p className="text-[#5e8d6b] font-bold uppercase tracking-wide mb-2">
          What We Do
        </p>
        <h2 className="text-1xl sm:text-4xl font-bold text-[#1f0a3f] leading-tight mb-4">
          We Are Increasing Business Success With Technology
        </h2>
        <p className="text-gray-500 mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at layout the point.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="flex gap-3">
            <img
              src={aboutIcon1}
              alt=""
              className="bg-white rounded-full w-10 h-10 mt-1"
            />
            <div>
              <h4 className="text-lg font-semibold text-[#1f0a3f] mb-1">
                Problem Solving
              </h4>
              <p className="text-gray-400 text-sm">
                Aliquam erat volutpat Nullam imperdiet
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <img
              src={aboutIcon2}
              alt=""
              className="bg-white rounded-full w-10 h-10 mt-1"
            />
            <div>
              <h4 className="text-lg font-semibold text-[#1f0a3f] mb-1">
                Mission & Vision
              </h4>
              <p className="text-gray-400 text-sm">
                Ut vehiculadictumst. Maecenas ante.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-24 flex-wrap">
          <ButtonContact />
          <div className="flex items-center gap-3 -mt-20 md:mt-0 sm:mt-0">
            <img
              src={aboutProfile1}
              alt="Founder"
              className="w-12 h-12 rounded-full"
            />
            <div >
              <h5 className="font-semibold text-[#1f0a3f]">Ronald Richards</h5>
              <p className="text-gray-400 text-sm">Co, Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  
  );
}









export  function BusinessSuccessSectionhomepage() {
  const floatControl = useAnimation();
  const bounceControl = useAnimation();
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    floatControl.start({
      x: [0, 10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });

    bounceControl.start({
      y: [0, 20, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    });
  }, [floatControl, bounceControl]);

  return (
    // <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto py-20 px-4 sm:px-6 md:px-10 relative">
    //   {/* Left Side: Image & Floating Box */}
    //   <div className="relative w-full max-w-md mx-auto">
    //     <img
    //       src={aboutThumb}
    //       alt="Team"
    //       className="rounded-lg shadow-xl w-full h-auto sm:w-[403px] sm:h-[458px]"
    //     />

    //     {/* Floating Box Inside Image */}
    //     <motion.div
    //       animate={floatControl}
    //       className="absolute top-4 left-2 sm:-left-7 w-[180px] sm:w-[203px] bg-white shadow-lg rounded-xl px-4 py-5 flex items-center border-l-2 border-blue-500"
    //     >
    //       <div className="text-[#5e8d6b] mr-4">
    //         <FaHandshake size={36} />
    //       </div>
    //       <div className="leading-tight">
    //         <h4 className="text-[24px] sm:text-[30px] font-bold text-[#1f0a3f] mb-0 leading-snug">
    //           6,561+
    //         </h4>
    //         <p className="text-sm text-gray-500 -mt-[2px]">Satisfied Clients</p>
    //       </div>
    //     </motion.div>

    //     {/* Video Thumbnail Overlay */}
    //     <div
    //       className="absolute right-0  top-52 sm:left-60 sm:bottom-[-15rem] w-[220px] sm:w-[262px] h-[180px] sm:h-[221px] rounded-xl overflow-hidden shadow-md"
    //       style={{ borderTop: "5px solid #fff", borderLeft: "5px solid #fff" }}
    //     >
    //       <img
    //         src={videoThumb}
    //         alt="Video Thumbnail"
    //         className="w-full h-full object-cover"
    //       />

    //       <button
    //         onClick={() => setShowVideo(true)}
    //         className="absolute inset-0 flex items-center justify-center group"
    //       >
    //         <span className="absolute w-16 h-16 rounded-full bg-white/20 animate-ping"></span>
    //         <span className="relative z-10 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
    //           <FaPlay className="text-white text-xl" />
    //         </span>
    //       </button>

    //       {showVideo && (
    //         <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center p-4">
    //           <div
    //             className="relative w-full max-w-3xl"
    //             onClick={(e) => e.stopPropagation()}
    //           >
    //             <button
    //               onClick={() => setShowVideo(false)}
    //               className="absolute top-2 right-2 text-white text-3xl z-[99999]"
    //             >
    //               <IoMdClose />
    //             </button>

    //             <div className="rounded-lg overflow-hidden">
    //               <ReactPlayer
    //                 url="https://www.youtube.com/watch?v=akr7M3Up7xM"
    //                 width="100%"
    //                 height="100%"
    //                 controls
    //                 playing
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>

    //   {/* Middle Vertical Line Animation */}
    //   <motion.div
    //     animate={bounceControl}
    //     className="hidden lg:block absolute left-[45%] top-16 h-48 w-5 rounded-full 
    //      bg-gradient-to-t from-[#0c3c2d] via-[#d6a73d] to-[#5e8d6b]"
    //   />

    //   {/* Right Side Content */}
    //   <div className="mt-0 sm:mt-0 lg:-mt-10">
    //     <p className="text-[#5e8d6b] font-bold uppercase tracking-wide mb-2">
    //       What We Do
    //     </p>
    //     <h2 className="text-1xl sm:text-4xl font-bold text-[#1f0a3f] leading-tight mb-4">
    //       We Are Increasing Business Success With Technology
    //     </h2>
    //     <p className="text-gray-500 mb-6">
    //       It is a long established fact that a reader will be distracted by the
    //       readable content of a page when looking at layout the point.
    //     </p>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
    //       <div className="flex gap-3">
    //         <img
    //           src={aboutIcon1}
    //           alt=""
    //           className="bg-white rounded-full w-10 h-10 mt-1"
    //         />
    //         <div>
    //           <h4 className="text-lg font-semibold text-[#1f0a3f] mb-1">
    //             Problem Solving
    //           </h4>
    //           <p className="text-gray-400 text-sm">
    //             Aliquam erat volutpat Nullam imperdiet
    //           </p>
    //         </div>
    //       </div>

    //       <div className="flex gap-3">
    //         <img
    //           src={aboutIcon2}
    //           alt=""
    //           className="bg-white rounded-full w-10 h-10 mt-1"
    //         />
    //         <div>
    //           <h4 className="text-lg font-semibold text-[#1f0a3f] mb-1">
    //             Mission & Vision
    //           </h4>
    //           <p className="text-gray-400 text-sm">
    //             Ut vehiculadictumst. Maecenas ante.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="flex items-center gap-24 flex-wrap">
    //       <ButtonContact />
    //       <div className="flex items-center gap-3 mt-4 sm:mt-0">
    //         <img
    //           src={aboutProfile1}
    //           alt="Founder"
    //           className="w-12 h-12 rounded-full"
    //         />
    //         <div>
    //           <h5 className="font-semibold text-[#1f0a3f]">Ronald Richards</h5>
    //           <p className="text-gray-400 text-sm">Co, Founder</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

      <section className="w-full min-h-screen bg-white flex items-center justify-center px-6 py-16 md:mb-10 md:-mt-48 ">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Image and Floating Icons */}
        <div className="relative w-full flex justify-center">
          <img
            src={imageabout2}
            alt="App Presentation"
            className="z-10 w-full max-w-sm md:max-w-md"
          />

          {/* Floating Icons */}
          <motion.img
            src={imageabout}
            alt="Floating Icon 1"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute top-10 -right-10 w-[300px] h-[200px] z-50"
          />

          <motion.img
            src={imageabout3}
            alt="Floating Icon 2"
            initial={{ x: -20 }}
            animate={{ x: 20 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -bottom-6 left-12 w-[256px] h-[147px] z-50"
          />
        </div>

        {/* Right Content */}
        <div className="text-center md:text-left">
          <p className="text-sm text-indigo-600 font-semibold uppercase tracking-wide mb-3">
            About Our App
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Generate Stunning Applications With Powerful Workflows
          </h1>
          <p className="text-gray-500 mb-6 max-w-lg">
            It is a long established fact that a reader will be distracted the readable
            content of a page when looking at layout the point.
          </p>
          <p className="text-indigo-600 font-bold mb-8">
            Let’s Get In Touch And Have Discussion!
          </p>

          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-50 p-3 rounded-full">
                <img src={imageabout2} alt="Brand Icon" className="w-6" />
              </div>
              <span className="text-gray-800 font-medium">Brand Design Identity</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-indigo-50 p-3 rounded-full">
                <img src={imageabout3} alt="Analytics Icon" className="w-6" />
              </div>
              <span className="text-gray-800 font-medium">App Analytics Services</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
  
