import React from "react";
import avatar from "../../../assets/avatarIcon.png"

export const Banner = () => {
  return(
      <div className="my-10">
        <div className="bg-[#0055BA] flex w-full ">
            <div className="mx-14 flex mt-5">

            <div className="flex items-center justify-center w-6/12">
                <h1>“ Let’s make the world a better place as a result of the problems that we solve, one sprint at a time. “</h1>
            </div>
            <div className="w-6/12 flex items-center justify-end ">
                <div className="w-18 h-18">

                <img src={avatar} alt="" className="text-sm" />
                </div>
            </div>
            </div>
        </div>
      </div>
  ) 
};
