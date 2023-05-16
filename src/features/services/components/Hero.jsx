import React from "react";
import startUp from "../../../assets/startup.png"
import midSized from "../../../assets/midsize.png"
import largeEnt from "../../../assets/large.png"

export const Hero = () => {
  return (
    <div>
      <div className="mt-14 flex flex-col items-center justify-center w-full">
    <h1 className="text-4xl font-semibold text-[#040052]">Let’s build a wining blueprint</h1>
        <p className="w-10/12 text-center mt-8 font-light">
           We are much more than consultants - as digital allies,  we guide you
          in preparing for present and future opportunities by bridging strategy
          to execution, planning and taking action that accelerates growth and
          delivers success on all levels
        </p>
      </div>
    </div>
  );
};
