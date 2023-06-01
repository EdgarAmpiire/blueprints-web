import React from "react";
import thumb from "../../../assets/thumb.png";

export const Consultation = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="lg:max-w-7xl max-w-4xl">
          <div className="mt-16 flex justify-center items-center">
            <div className="lg:w-10/12 w-11/12 bg-[#ECEBFF] rounded-lg flex flex-col items-center justify-center py-10 lg:px-10 md:px-10 px-5">
              <div className="bg-[#0055BA] py-3 lg:px-10 md:px-10 px-5 rounded-full ">
                <h1 className="text-white lg:text-base md:text-base text-sm">
                  Blueprint Consulting 7 Step System
                </h1>
              </div>
              <div className="mt-10">
                <p className="text-[#040052] text-center lg:leading-normal md:leading-normal leading-loose lg:text-base md:text-base text-sm">
                  Our 7-step framework is a fundamental method to structure a
                  consulting project that begins with establishing a partnership
                  and relationship through evaluating and acting on the results
                  of the output of our work. The implementation of solutions is
                  iterative and remains transparent for our clients to be
                  informed and updated at each stage of the process
                </p>
              </div>
              <div className="mt-10 flex w-6/12 ">
                <div className="w-6/12 flex items-center justify-center">
                  <img src={thumb} alt="" className="w-6/12" />
                </div>
                <div className="w-6/12 flex items-center justify-center">
                  <img src={thumb} alt="" className="w-6/12" />
                </div>
                <div className="w-6/12 flex items-center justify-center">
                  <img src={thumb} alt="" className="w-6/12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
