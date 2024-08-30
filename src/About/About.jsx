import React from "react";
import Contact from "../Contact/Contact";
import FormFill from "../FormFill/FormFill";

export default function About() {
  return (
    <>
      <div className="main-bg flex flex-wrap w-full text-white justify-center py-20 md:py-24 lg:py-36 p-6 sm:p-10 mx-auto" id="about">
        <div className="basis-full md:basis-1/4 py-20 md:mt-28 poppins-semibold text-center md:text-left text-white text-[32px] md:text-[30px] lg:text-[42px] xl:text-[56px]">
          Why <br /> Choose NewEra Envolved Agents
        </div>
        <div className="basis-full md:basis-2/4 mt-8 md:mt-0">
          <h3 className="poppins-semibold text-[#BDD3E5] text-[20px] md:text-[28px] lg:text-[34px] mt-4 text-center">
            We are a business in a box.
          </h3>
          <div className="mt-4 px-0 md:px-10">
            <h4 className="poppins-semibold text-white text-[18px] md:text-[24px] lg:text-[26px]">
              Elevate Your Business with Top Talent
            </h4>
            <p className="text-wrap poppins-extralight text-[14px] md:text-[16px] lg:text-[18px] leading-5 pt-2">
              At NewEra Envolved Agents, we are on a mission to connect with
              exceptional talent from around the world. As a leader, we are
              proud to offer opportunities for skilled professionals globally.
              Whether you're looking for a new career challenge or seeking to
              work with a dynamic team, we welcome you to be a part of our
              international network.
            </p>
          </div>
          <div className="mt-6 px-0 md:px-10">
            <h4 className="poppins-semibold text-white text-[18px] md:text-[24px] lg:text-[26px]">
              Virtual Assistants
            </h4>
            <p className="text-wrap poppins-extralight text-[14px] md:text-[16px] lg:text-[18px] leading-5 pt-2">
              Our virtual assistants provide crucial support from any location,
              ensuring seamless operations and enhanced productivity for
              businesses worldwide. Join us to contribute your expertise
              remotely and make a global impact.
            </p>
          </div>
          <div className="mt-6 px-0 md:px-10">
            <h4 className="poppins-semibold text-white text-[18px] md:text-[24px] lg:text-[26px]">
              Freelancers
            </h4>
            <p className="text-wrap poppins-extralight text-[14px] md:text-[16px] lg:text-[18px] leading-5 pt-2">
              With a diverse pool of freelance opportunities, we invite talented
              individuals from every corner of the globe to collaborate on
              exciting projects. Bring your unique skills to the table and work
              with a team that values innovation and flexibility.
            </p>
          </div>
          <div className="mt-6 px-0 md:px-10">
            <h4 className="poppins-semibold text-white text-[18px] md:text-[24px] lg:text-[26px]">
              Cold Callers
            </h4>
            <p className="text-wrap poppins-extralight text-[14px] md:text-[16px] lg:text-[18px] leading-5 pt-2">
              Our cold callers are crucial in expanding our reach and driving
              growth. If you have a knack for persuasive communication and
              thrive in a global environment, we offer opportunities to connect
              with potential clients and drive success from anywhere in the
              world.
            </p>
          </div>
          <div className="mt-6 px-0 md:px-10">
            <h4 className="poppins-semibold text-white text-[18px] md:text-[24px] lg:text-[26px]">
              Customer Service Agents
            </h4>
            <p className="text-wrap poppins-extralight text-[14px] md:text-[16px] lg:text-[18px] leading-5 pt-2">
              Deliver outstanding customer service and support from your
              location of choice. Our global network of customer service agents
              ensures that businesses receive exceptional care and support,
              reflecting the highest standards of service excellence.
            </p>
          </div>
        </div>
      </div>
      <div id="form-fill">
        <FormFill />
      </div>
     
    </>
  );
}
