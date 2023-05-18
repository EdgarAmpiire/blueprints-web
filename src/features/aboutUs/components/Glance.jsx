import React from "react";
import vision from "../../../assets/vision.png"
import culture from "../../../assets/culture.png"
import team from "../../../assets/team.png"

export const Glance = () => {
  return (
  <div>
    <div className="mt-14">
        <div className="flex items-center justify-center">
            <h1 className="text-[#040052] font-semibold text-xl">At a glance</h1>
        </div>
        <div className="flex justify-between w-7/12 gap-10 mt-10">
          <div className="flex items-center justify-center flex-col w-4/12">
            <div className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={vision} alt="" className="w-fit" />
            </div>
            <div className="mt-2">
              <p>Start-ups</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col w-4/12">
            <div className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={culture} alt="" className="w-fit" />
            </div>
            <div className="mt-2">
              <p>Mid Sized Enterprises</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col w-4/12">
            <div className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={team} alt="" className="w-fit" />
            </div>
            <div className="mt-2">
              <p>Large Corporations</p>
            </div>
          </div>
        </div>
    </div>
  </div>
    )
};
