import React from "react";
import vision from "../../../assets/vision.png"
import culture from "../../../assets/culture.png"
import team from "../../../assets/team.png"

export const Glance = () => {
  return (
  <div>
    <div className="mt-14 flex items-center flex-col">
        <div className="flex items-center justify-center">
            <h1 className="text-[#040052] font-semibold text-xl">At a glance</h1>
        </div>
        <div className="flex justify-between items-center w-7/12  gap-10 mt-10">
          <div className="flex items-center justify-center flex-col w-4/12">
            <div className=" py-2 px-2 rounded-full flex items-center justify-center h-[5.5rem] w-[5.5rem] ">
              <img src={vision} alt="" className="w-fit" />
            </div>
            <div className="mt-2 flex flex-col items-center justify-center ">
              <p className="text-[#040052] font-semibold uppercase">Our Vision</p>
              <p className="text-xs text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col w-4/12">
            <div className=" py-5 px-5 rounded-full flex items-center justify-center h-[5.5rem] w-[5.5rem] ">
              <img src={culture} alt="" className="w-fit" />
            </div>
            <div className="mt-2 flex flex-col items-center justify-center ">
              <p className="text-[#040052] font-semibold uppercase">Our Culture</p>
              <p className="text-xs text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

            </div>
          </div>

          <div className="flex items-center justify-center flex-col w-4/12">
            <div className=" py-5 px-5 rounded-full flex items-center justify-center h-[5.5rem] w-[5.5rem] ">
              <img src={team} alt="" className="w-fit" />
            </div>
            <div className="mt-2 flex flex-col items-center justify-center ">
              <p className="text-[#040052] font-semibold uppercase">Our Team</p>
              <p className="text-xs text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

            </div>
          </div>
        </div>
    </div>
  </div>
    )
};
