import React from "react";
import sofa from "../assets/crop-sofa.png";
function Hero() {
  return (
    <div className="w-full flex  items-center justify-center">
      <div className="">
        <h1 className="text-[64px]">
          Rocket Single
          <br />
          Seater
        </h1>
        <p className="text-[24px]">Shop Now</p>
      </div>
      <div>
        <img src={sofa} alt="wwwwwwwwwwww" />
      </div>
    </div>
  );
}

export default Hero;
