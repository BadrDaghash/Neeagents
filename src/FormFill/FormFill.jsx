import React, { useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

export default function FormFill() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_izz1ueb", "template_48mdd8k", form.current, {
        publicKey: "muESnDu_Q4W3VP94a",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message sent successfully!", {
            style: {
              border: "1px solid #033b63",
              padding: "12px 4py",
              color: "#033b63",
            },
            iconTheme: {
              primary: "#033b63",
              secondary: "#fff",
            },
          });
          form.current.reset();
        },
        (error) => {
          toast.error("Failed to send message", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="p-5 pb-40 md:pt-24 md:pb-36 w-full z-20">
      <div className="w-full lg:w-[90%] px-4 md:px-10 lg:px-12 py-10 flex flex-col lg:flex-row gap-20 mx-auto">
        <div className="flex-1 max-w-full w-full md:w-[90%] mx-auto main-bg py-8 px-8 md:px-14 lg:p-28 rounded-[30px] md:rounded-[35px] lg:rounded-[45px]">
          <h2 className="poppins-semibold text-white text-[28px] md:text-[38px] lg:text-[40px] leading-[1.1] md:pt-4">
            Connect with Us
          </h2>
          <div className="ms-1 mt-3 lg:mt-8 py-4 lg:py-0">
            <p className="poppins-extralight text-white text-[16px] md:text-[20px] lg:pe-4 lg:text-[20px] leading-[24px] md:leading-[25px] lg:leading-[26px]">
              Ready to start your journey with NewEra? Please fill out our
              contact form and we'll get back to you shortly.
            </p>

            <p className="poppins-extralight text-white text-[14px] md:text-[20px] lg:text-[20px] leading-[24px] md:leading-[25px] lg:leading-[26px] pt-4 md:pt-4 lg:pt-5">
              Have questions? Contact us
            </p>
            <Link
              to="https://tailwindcss.com/docs/font-weight"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-center pt-2 md:pt-4 lg:pt-6 hover:text-black"
            >
              <i className="fa-solid fa-phone-volume text-[#84ccf5] text-lg md:text-xl lg:text-xl"></i>
              <p className="text-white poppins-semibold text-base md:text-lg lg:text-xl ps-2 lg:ps-5 hover:text-[#84ccf5] transition-colors duration-300">
                +52 33 4346 4559
              </p>
            </Link>
            <Link
              to="https://tailwindcss.com/docs/font-weight"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-center md:pt-2 lg:pt-3 hover:text-black"
            >
              <i className="fa-solid fa-envelope text-[#84ccf5] text-lg md:text-xl lg:text-xl"></i>
              <p className="text-white poppins-semibold text-base md:text-lg lg:text-xl ps-2 lg:ps-5 hover:text-[#84ccf5] transition-colors duration-300">
                Joseflores@gmail.com
              </p>
            </Link>
          </div>
        </div>

        <div className="flex-1 mx-auto px-6 pt-6 sm:px-12 sm:pt-8 border-solid border-[1px] border-black rounded-[30px] md:rounded-[35px] lg:rounded-[45px]">
          <h2 className="poppins-semibold text-white text-[28px] md:text-[38px] lg:text-[40px] leading-[1.1] main-text-color mb-5">
            Contact Form
          </h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-lg mx-auto p-4"
          >
            <div className="grid gap-4 mb-4 md:grid-cols-2">
              {/* First name */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="block w-full px-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder="John"
                  name="user_name"
                  required
                />
              </div>
              {/* Last name */}
              <div>
                <label
                  htmlFor="last_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="block w-full px-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder="Doe"
                  name="last_name"
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full px-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder="john.doe@company.com"
                  name="user_email"
                  required
                />
              </div>
              {/* Phone number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="block w-full px-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                  placeholder="123-45-678"
                  name="user_phone"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="position"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Select an option
              </label>
              <select
                id="position"
                name="user_position"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#033b63] focus:border-[#033b63] block w-full p-2.5  "
              >
                <option selected>Cold Caller</option>
                <option value="CSR">Customer Service</option>
                <option value="FR">FreeLancer</option>
                <option value="VA">Virtual Assistant</option>
              </select>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Message
              </label>
              <textarea
                id="message"
                className="block resize-none w-full px-3 py-2 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder="Enter your message"
                name="user_message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white main-bg rounded-lg w-full hover:bg-[#033b63df] transition-colors duration-300 font-medium text-sm px-6 py-3 text-center"
            >
              Submit
            </button>
            <Toaster />

            
          </form>
        </div>
      </div>
      
    </div>

    
  );
}
