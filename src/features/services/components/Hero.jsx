import React from "react";
import startUp from "../../../assets/startup.png";
import midSized from "../../../assets/midsize.png";
import largeEnt from "../../../assets/large.png";

export const Hero = () => {
  return (
    <div>
      <div className="mt-14 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-semibold text-[#040052]">
          Let’s build a wining blueprint
        </h1>
        <p className="w-10/12 text-center mt-8 font-light">
           We are much more than consultants - as digital allies,  we guide you
          in preparing for present and future opportunities by bridging strategy
          to execution, planning and taking action that accelerates growth and
          delivers success on all levels
        </p>
      </div>

      <div className="flex flex-col items-center mt-16 w-full">
        <div>
          <h1 className="text-[#040052] font-semibold text-xl">We Help With</h1>
        </div>
        <div className="flex justify-between w-6/12 gap-10 mt-10">
          <div>

          <div className="bg-[#5A50FE] py-4 px-4 rounded-full flex items-center justify-center">
            <img src={startUp} alt="" className="h-9/12 w-9/12" />
          </div>
          <p>Start-ups</p>

          </div>
          <div>

          <div className="bg-[#5A50FE] py-4 px-4 rounded-full flex items-center justify-center">
            <img src={midSized} alt="" className="h-9/12 w-9/12" />
          </div>
            <p>Mid Sized Enterprises</p>

          </div>
          <div>

          <div className="bg-[#5A50FE] py-4 px-4 rounded-full flex items-center justify-center">
            <img src={largeEnt} alt="" className="h-9/12 w-9/12" />
          </div>
            <p>Large Corporations</p>
          </div>
        </div>
      </div>
    </div>
  );
};
