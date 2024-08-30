import React, { useEffect, useRef } from "react";
import "./Home.css";
import video from "./../assets/Video/Home video.mp4";
import analyzeImg from "./../assets/Imgs/Home analyze.jpg";
import { TypeAnimation } from "react-type-animation";
import Contact from "../Contact/Contact";
import Services from "../NavServices/services";
import About from "../About/About";
import { HashLink as Link } from 'react-router-hash-link';


export default function Home() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            videoElement.pause();
          } else {
            videoElement.play();
          }
        });
      },
      {
        threshold: 0.25,
      }
    );
    if (videoElement) {
      observer.observe(videoElement);
    }
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <>
      {/* video */}
      <div className="video-background " id="home">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="background-video  "
        >
          <source src={video} type="video/mp4 " />
        </video>

        <div className="overlay"> </div>
        <div className="content flex flex-col items-start mt-0 md:ms-10 md:mt-20 p-4 ">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-5xl pt-32 md:pt-30 text-start  poppins-semibold">
            Empowering Global Agents and <br /> Virtual Assistants with
            Precision- <br />
            Driven Opportunities
          </h1>
          <h2 className="text-start pt-4 text-[#80caf1] text-lg sm:text-xl md:text-2xl lg:text-2xl poppins-semibold ">
            From Expert Cold Calling to Comprehensive Virtual Assistance —
            <br />
            We Deliver the Talent to Elevate Your Business
          </h2>
          <div className="flex mt-6">
            <Link
              to="#form-fill"
              type="button"
              className="text-white bg-transparent text-lg  hover:bg-gray-500 border   font-medium 
                rounded-lg  px-5 py-2.5 md:px-6 md:py-4  inline-flex items-center transition-colors duration-300"
            >
              Get started
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="relative p-5 w-full h-auto bg-white rounded-tl-[30px] rounded-tr-[30px] mt-[-30px] z-20">
        <div className="w-[90%] px-12 py-20 grid grid-cols-2 gap-4 mx-auto ">
          <div className="max-w-full  w-[75%] mx-auto ">
            <h2 className="poppins-semibold main-text-color text-[48px] leading-[1.1]">
              Welcome to <br /> NewEra Company
            </h2>
            <h3 className="poppins-extralight leading-9 main-text-color text-[38px] py-2">
              Your Pathway to Bussiness Success
            </h3>
            <p className="poppins-extralight pt-8 text-[18px] leading-[1.4em] w-[80%]">
              At NewEra, we connect talented freelancers with business owners
              across the globe. We’re currently hiring for freelance positions
              in various key sectors, including real estate, appointment
              setting, construction, home improvement, pest control, and virtual
              assistance. Collaborate directly with business owners and make a
              global impact through our diverse campaigns.
            </p>
          </div>

          <div className="max-w-full w-[80%] mx-auto  main-bg p-12 pb-16 rounded-[45px] ">
            <h2 className="poppins-semibold text-white text-[48px] leading-[1.1]">
              Why Choose <br /> NewEra ?
            </h2>
            <div className="ms-1 mt-8 ps-6  border-s-4 border-[#4682B4]">
              <p className="poppins-extralight text-white text-[15px] leading-[26px]">
                <span className="font-semibold"> Global Reach:</span> Partner
                with clients and agents worldwide, delivering exceptional
                results across borders.
              </p>
              <p className="poppins-extralight text-white text-[15px] leading-[26px] pt-5">
                <span className="font-semibold"> Diverse Expertise:</span> From
                real estate to virtual assistance, our experienced professionals
                excel in every sector we serve.
              </p>
              <p className="poppins-extralight text-white text-[15px] leading-[26px] pt-5">
                <span className="font-semibold"> Targeted Campaigns:</span>{" "}
                Whether it’s appointment setting or home improvement, our
                strategic approach ensures your success.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative p-5 pb-40 md:pt-24 md:pb-36 w-full h-auto bg-white rounded-tl-[30px] rounded-tr-[30px] mt-[-30px] z-20">
        <div className=" w-full lg:w-[90%] px-4 md:px-10 lg:px-12 py-10 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto ">
          <div className="max-w-full w-[90%] md:w-[80%] lg:w-[75%] mx-auto">
            <h2 className="poppins-semibold main-text-color text-[32px] md:text-[36px] lg:text-[48px] leading-[1.1]">
              Welcome to <br /> NewEra Company
            </h2>
            <h3 className="poppins-extralight leading-9 main-text-color text-[28px] md:text-[32px] lg:text-[38px] py-2">
              Your Pathway to Business Success
            </h3>
            <p className="poppins-extralight pt-8 text-[16px] md:text-[17px] lg:text-[18px] leading-[1.4em] w-full md:w-[90%] lg:w-[80%]">
              At NewEra, we connect talented freelancers with business owners
              across the globe. We’re currently hiring for freelance positions
              in various key sectors, including real estate, appointment
              setting, construction, home improvement, pest control, and virtual
              assistance. Collaborate directly with business owners and make a
              global impact through our diverse campaigns.
            </p>
          </div>

          <div className="max-w-full w-[90%] md:w-[85%] lg:w-[80%] mx-auto main-bg p-8 md:p-10 lg:p-12 pb-12 md:pb-16 lg:pb-20 rounded-[30px] md:rounded-[35px] lg:rounded-[45px]">
            <h2 className="poppins-semibold text-white text-[32px] md:text-[36px] lg:text-[48px] leading-[1.1]">
              Why Choose <br /> NewEra?
            </h2>
            <div className="ms-1 mt-8 ps-4 md:ps-5 lg:ps-6 border-s-4 border-[#4682B4]">
              <p className="poppins-extralight text-white text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] md:leading-[25px] lg:leading-[26px]">
                <span className="font-semibold">Global Reach:</span> Partner
                with clients and agents worldwide, delivering exceptional
                results across borders.
              </p>
              <p className="poppins-extralight text-white text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] md:leading-[25px] lg:leading-[26px] pt-4 md:pt-4 lg:pt-5">
                <span className="font-semibold">Diverse Expertise:</span> From
                real estate to virtual assistance, our experienced professionals
                excel in every sector we serve.
              </p>
              <p className="poppins-extralight text-white text-[14px] md:text-[15px] lg:text-[16px] leading-[24px] md:leading-[25px] lg:leading-[26px] pt-4 md:pt-4 lg:pt-5">
                <span className="font-semibold">Targeted Campaigns:</span>{" "}
                Whether it’s appointment setting or home improvement, our
                strategic approach ensures your success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* third */}
      <div className="relative  w-full main-bg-h  z-20 ">
        <div className=" w-full lg:w-[90%] px-4 md:px-10 lg:px-12  grid grid-cols-1 lg:grid-cols-2 gap-2 mx-auto ">
          <div className="w-full  mx-auto snap-y h-[500px] flex items-center justify-center ">
            <img
              src={analyzeImg}
              alt="homeAnalyzeImg"
              className="w-full snap-center pt-8 md:pt-0"
            />
          </div>

          <div className=" max-w-full snap-y h-[500px]  flex flex-col items-center justify-center  mx-auto main-bg p-8 md:p-10 lg:p-12 pb-12 md:pb-14 lg:pb-16 rounded-[30px] md:rounded-[35px] lg:rounded-[45px]">
            <h2 className="poppins-semibold text-white text-[32px] md:text-[36px] lg:text-[36px] snap-center">
              Enhance Operational Efficiency with Data-Driven Insights
            </h2>
            <p className="poppins-extralight text-white pt-4 text-[16px] md:text-[17px] lg:text-[18px] leading-[1.4em] w-full ">
              Leverage advanced analytics to streamline your operations and
              boost productivity. Our solutions offer valuable insights to
              refine strategies, improve team performance, and achieve your
              business goals.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white pt-24 mt-[-100px]">
        <div className=" inset-0 bg-home-s min-h-screen  justify-center items-center ">
          <div className="flex flex-col pt-[21%]  ">
            <p className="text-white poppins-extralight py-24 sm:py-12 md:py-8 lg:py-4 text-[18px] md:text-[30px] lg:text-[32px] text-center px-4 md:px-8 lg:px-16">
              Your success is our priority. <br /> We provide exceptional
              service and support tailored to your needs, <br /> ensuring you
              get the results you want with personalized attention and
              expertise.
            </p>
            <div className="justify-center items-center text-center mx-8 lg:mt-6  ">
              <TypeAnimation
                sequence={[
                  "We provide innovative solutions for your business",
                  1200,
                  "We provide expert support to elevate your brand",
                  1200,
                  "We provide strategic insights for sustained growth",
                  1200,
                  "We provide personalized services tailored to you",
                  1200,
                ]}
                wrapper="span"
                speed={50}
                className="poppins-semibold text-white text-center  text-[28px] md:text-[36px] lg:text-[46px] mb-4"
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="py-20 bg-white">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
          dolores, obcaecati cum corporis sunt perferendis facilis atque
          deserunt ipsam harum?
        </p>
      </div> */}


      <Services />
      <About />
      <Contact/>
    </>
  );
}
