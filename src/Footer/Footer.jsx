import React from "react";
import Logo from "../assets/Imgs/footer avatar.png";
export default function Footer() {
  return (
    <div className="text-2xl py-3">
      <div className="poppins-extralight  flex mx-auto text-[#033B63] justify-center items-center text-center ">
        <p className="pe-2 font-semibold">NewEra</p>
        <img src={Logo} alt="Logo" className="w-16 " />
        <p className="ps-2 font-semibold">Envolved Agents</p>
      </div>
    </div>
  );
}
