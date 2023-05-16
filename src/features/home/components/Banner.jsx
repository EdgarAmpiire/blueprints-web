import React from "react";
import avatar from "../../../assets/avatarIcon.png";

export const Banner = () => {
  return (
    <div className="my-10 w-full">
      <div className="bg-[#0055BA] flex items-center justify-center w-full ">
        <div className="mx-14 flex mt-5 w-9/12">
          <div className="flex flex-col items-center justify-center w-8/12">
            <h1 className="font-semibold text-white w-10/12">
              “ Let’s make the world a better place as a result of the problems
              that we solve, one sprint at a time. “
            </h1>
            <h1 className="mt-8 text-white font-extralight">CO-FOUNDER, MICHAEL ROSALES</h1>
          </div>
          <div className="w-4/12 flex items-center justify-end ">
            <div className="w-18 h-18">
              <img src={avatar} alt="" className="text-sm bg-center bg-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
