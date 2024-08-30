import React from "react";
import video from "../assets/Video/services v2.mp4";
import earth from "../assets/Imgs/earth2.jpg";
import csr from "../assets/Imgs/CSR.webp";
import cc from "../assets/Imgs/CC.jpg";
import VA from "../assets/Imgs/virtual assistant.jpg";
import Fr from "../assets/Imgs/freelancer.jpg";
import { HashLink as Link } from 'react-router-hash-link';

export default function Services() {
  const gridContainerVar = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <>
      <p id="services" className="text-2xl sm:text-3xl md:text-4xl text-center main-text-color py-20 poppins-semibold relative rounded-tl-[30px] rounded-tr-[30px] mt-[-30px] ">
        Join Our Global Team!
      </p>
      <div className="video-background">
        <video autoPlay muted loop playsInline className="background-video">
          <source src={video} type="video/mp4" />
        </video>

        <div className="overlay"></div>
        <div className="content flex flex-col items-start mt-0 md:ms-10 md:mt-32">
          <h1 className="text-white text-center text-2xl sm:text-4xl md:text-5xl lg:text-5xl pt-32 md:pt-30 poppins-semibold">
            Join us and be part of a dynamic network where your talent drives success.
          </h1>
          <h2 className="text-center pt-8 mx-auto text-[#80caf1] text-lg sm:text-xl md:text-2xl lg:text-2xl poppins-semibold">
            At NewEra, we connect skilled professionals with opportunities that
            match their expertise. Whether you're a virtual assistant, customer
            service agent, or cold caller, <br /> we offer roles that value
            precision and excellence
          </h2>
        </div>
      </div>

      <div className="py-12 md:py-14 justify-center grid grid-cols-1 sm:grid-cols-2 main-bg ">
        <div className="poppins-semibold  text-white p-8  ps-12 sm:p-12 md:p-20 sm:pt-20 text-[28px] ">
          <h2>
            We are hiring talented agents from all over the world to help us
            expand our reach and make an impact.
          </h2>
          <h3 className="poppins-extralight text-[#f4f7f8] md:text-[22px] md:pt-4">
            Explore various roles that suit your skills and aspirations. We look
            forward to seeing you on board!
          </h3>
        </div>
        <div className=" text-center w-full ">
          <img
            src={earth}
            alt="earth"
            className="w-full md:h-[400px] h-auto  mx-auto sm:mt-16  rounded-s-xl"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center mx-auto px-4 py-24 w-full ">
        {/* csr */}
        <div className="max-w-sm md:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto sm:mb-0 sm:gap-6">
          <div >
            <img className="rounded-t-lg" src={csr} alt="Customer Service" />
          </div>
          <div className="p-5">
            <div >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                We Are Hiring: <br /> Customer Service Agents
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Rate:</strong> $5-$9 per hour
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Languages Required:</strong> English, Spanish, Italian
            </p>
            <Link
              to="#form-fill"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white main-bg rounded-lg hover:bg-[#033b63df] transition-colors duration-300 "
            >
              Apply Now
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
        {/* cc */}
        <div className="max-w-sm md:max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto ">
          <div>
            <img className="rounded-t-lg" src={cc} alt="Customer Service" />
          </div>
          <div className="p-5">
            <div >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                We Are Hiring: <br /> Cold Callers
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Rate:</strong> $5-$9 per hour
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Languages Required:</strong> English, Spanish, Italian
            </p>
            <Link
              to="#form-fill"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white main-bg rounded-lg hover:bg-[#033b63df] transition-colors duration-300 "
            >
              Apply Now
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
        {/* Virtual assistant */}
        <div className="max-w-sm md:max-w-md mt-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto sm:mb-0 sm:gap-6">
          <div >
            <img className="rounded-t-lg" src={VA} alt="Customer Service" />
          </div>
          <div className="p-5">
            <div >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                We Are Hiring: <br /> Virtual Assistant
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Rate:</strong> $5-$9 per hour
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Languages Required:</strong> English, Spanish, Italian
            </p>
            <Link
              to="#form-fill"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white main-bg rounded-lg hover:bg-[#033b63df] transition-colors duration-300 "
            >
              Apply Now
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
        {/* Freelancer */}
        <div className="max-w-sm md:max-w-md mt-12 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto sm:mb-0 sm:gap-6">
          <div >
            <img className="rounded-t-lg" src={Fr} alt="Customer Service" />
          </div>
          <div className="p-5">
            <div >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                We Are Hiring: <br /> Freelancers
              </h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Rate:</strong> $5-$9 per hour
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <strong>Languages Required:</strong> English, Spanish, Italian
            </p>
            <Link
              to="#form-fill"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white main-bg rounded-lg hover:bg-[#033b63df] transition-colors duration-300 "
            >
              Apply Now
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
    </>
  );
}
