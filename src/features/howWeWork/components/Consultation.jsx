import React from "react";
import thumb from "../../../assets/thumb.png";

export const Consultation = () => {
  return (
    <div>
      <div className="mt-16 flex justify-center items-center">
        <div className="w-10/12 bg-[#ECEBFF] rounded-md flex flex-col items-center justify-center py-5 px-10">
          <div className="bg-[#0055BA] py-3 px-10 rounded-full ">
            <h1 className="text-white">Blueprint Consulting 7 Step System</h1>
          </div>
          <div className="mt-10">
            <p className="text-[#040052] text-center">
              Our 7-step framework is a fundamental method to structure a
              consulting project that begins with establishing a partnership and
              relationship through evaluating and acting on the results of the
              output of our work. The implementation of solutions is iterative
              and remains transparent for our clients to be informed and updated
              at each stage of the process
            </p>
          </div>
          <div className="mt-10">
            <div className="w-6/12">
              <img src={thumb} alt="" />
            </div>
            <div className="w-6/12">
              <img src={thumb} alt="" />
            </div>
            <div className="w-6/12">
              <img src={thumb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
