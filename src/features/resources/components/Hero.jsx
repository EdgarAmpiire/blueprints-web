import React from "react";
import thumb from "../../../assets/thumb.png";

export const Hero = () => {
  return (
    <div>
      <div className="mt-16">
        <div className="w-full">
          <div className="w-4/12 flex justify-between">
            <button className="bg-[#0055BA] text-white px-10 py-2 rounded-full">
              Blog
            </button>
            <button className="bg-[#0055BA33] text-[#040052] px-10 py-2 rounded-full">
              Press
            </button>
          </div>

          <div className="flex gap-8 mt-10">
            <div className="w-4/12 h-56 bg-[#F3F3F3] flex items-center justify-center rounded-xl">
              <img src={thumb} alt="" className="w-3/12" />
            </div>
            <div className="w-8/12 flex flex-col justify-between py-2 ">
              <div className="w-10/12">
                <h6 className="text-[#04005266] text-sm">18 May 2023, 5 mins read</h6>
                <h3 className="text-[#040052] mt-2 text-lg">
                  Lorem ipsum dolor sit amet, labore consectetur adipiscing
                  elit, sed do
                </h3>
                <p className="text-[#04005266] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
              <div>
                <button className="bg-[#0055BA33] text-[#040052] px-10 py-2 rounded-full">
                  Press
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
