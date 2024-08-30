import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-[#FAFAFA] py-28 h-auto grid grid-cols-1 md:grid-cols-2 ">
        <section className="flex flex-col w-full   p-12 py-24">
          <h2 className="main-text-color poppins-semibold lg:text-[42px]">
            Contact Us
          </h2>

          <p className="poppins-extralight text-black  text-wrap text-[18px] me-12 ">
            At NewEra, we’re always here to assist you. Whether you have
            questions, need support, or are looking to discuss potential
            collaborations, our team is ready to help. Please reach out to us,
            and we'll make sure to get back to you promptly.
          </p>
        </section>
        <section className="flex flex-col w-full rounded-s-[38px] main-bg py-12 ps-28">
          <div className="flex flex-col">
            <div className="poppins-semibold text-white text-[19px] mt-2 ms-12">
              <i class="fa-solid fa-location-dot text-[#84ccf5] me-2"></i>
              Address
            </div>
            <p className="poppins-extralight text-white text-[18px] mt-2 ms-12">4780 Calle Quetzal Camarillo, CA 93012</p>
         </div>
          <div className="flex flex-col">
            <div className="poppins-semibold text-white text-[19px] mt-6 ms-12">
              <i class="fa-solid fa-envelope text-[#84ccf5] me-2"></i>
              Email
            </div>
            <p className="poppins-extralight text-white text-[18px] mt-2 ms-12">NewEraEvolvedAgents@dw.io</p>
         </div>
          <div className="flex flex-col">
            <div className="poppins-semibold text-white text-[19px] mt-6 ms-12">
              <i class="fa-solid fa-location-dot text-[#84ccf5] me-2"></i>
              Phone
            </div>
            <p className="poppins-extralight text-white text-[18px] mt-2 ms-12">+1 (555) 123-4567</p>
         </div>
        </section>
      </section>
    </>
  );
}
