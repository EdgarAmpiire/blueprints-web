import React from "react";
import avatar from "../../../assets/avatarIcon.png";

export const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-[#0055BA] mt-5 ">

    <div className="my-10 lg:w-10/12 md:w-12/12 w-12/12">
      <div className="bg-[#0055BA] flex items-center justify-center w-full ">
        <div className="lg:mx-14 md:mx-8 mx-0 flex lg:flex-row md:flex-row flex-col-reverse mt-5 lg:w-9/12 md:w-9/12 w-11/12">
          <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="flex flex-col items-center justify-center lg:w-8/12 md:w-8/12 lg:mt-0 md:mt-0 mt-10">
            <h1 className="font-semibold text-white lg:w-10/12 md:w-12/12 text-center">
              “Let’s make the world a better place as a result of the problems
              that we solve, one sprint at a time. “
            </h1>
            <h1 className="mt-8 text-white font-extralight text-center">CO-FOUNDER, MICHAEL ROSALES</h1>
          </div>
          <div className="lg:w-4/12 md:w-4/12 flex items-center lg:justify-end md:justify-end justify-center lg:mt-0 md:mt-0 ">
            <div
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="w-18 h-18">
              <img src={avatar} alt="" className="text-sm bg-center bg-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};
