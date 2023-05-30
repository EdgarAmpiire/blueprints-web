import React from "react";
import startUp from "../../../assets/startup.png";
import midSized from "../../../assets/midsize.png";
import largeEnt from "../../../assets/large.png";

export const Hero = () => {
  return (
    <div>

<div className="">
      <div
        class="w-full bg-cover bg-center object-cover"
        style={{ height: "28rem", backgroundImage: `url(/images/bg.png)` }}>
        <div class="flex flex-col items-center justify-between h-full w-full py-10 bg-[#000000D9] backdrop-brightness-200">
         
        <div className="mt-14 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl lg:w-7/12 w-9/12 font-semibold text-center text-white">
          Let’s build a wining blueprint
        </h1>
        <p className="lg:w-7/12 w-9/12 text-center mt-14 font-light text-white ">
           We are much more than consultants - as digital allies,  we guide you
          in preparing for present and future opportunities by bridging strategy
          to execution, planning and taking action that accelerates growth and
          delivers success on all levels
        </p>
      </div>
        </div>
      </div>
    </div>

      

      <div className="flex flex-col items-center mt-16 w-full">
        <div>
          <h1 className="text-[#040052] font-semibold lg:text-3xl text-xl">We Help With</h1>
        </div>
        <div className="flex justify-between lg:w-7/12 w-9/12 gap-10 mt-14">
          <div className="flex items-center justify-center flex-col w-4/12">
            <div className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={startUp} alt="" className="w-fit" />
            </div>
            <div className="mt-2">
              <p>Start-ups</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col w-4/12">
            <div className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={midSized} alt="" className="w-fit" />
            </div>
            <div className="mt-2">
              <p>Mid Sized Enterprises</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col w-4/12">
            <div className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={largeEnt} alt="" className="w-fit" />
            </div>
            <div className="mt-2">
              <p>Large Corporations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-14 flex justify-center">
        <div className="bg-[#0055BA] py-10 px-10 w-full flex justify-center">
          <p className="text-center text-white w-10/12 ">
            Our focus is on digital strategies that are driven by data and
            analytics centering on digital discovery, journeys and experience,
            and digital identities to immerse your customers and consumers into
            a seamless digital to real-world experience. We work with you to
            enable the power of digital technologies in your business.
          </p>
        </div>
      </div>
    </div>
  );
};
