import React from "react";
import thumb from "../../../assets/thumb.png";

export const DigitalLab = () => {
  return (
    <div>
      <div className="mt-20 flex flex-col items-center">
        <div>
          <h1 className="text-[#040052] text-xl font-semibold">
            Our Digital Lab{" "}
          </h1>
        </div>

        <div className="bg-[#D8D6FF] rounded-xl py-10 px-10 mt-10">
          <div className="grid grid-cols-2 w-full">
            <div className="flex items-center justify-center ">
              <img src={thumb} alt="" />
            </div>
            <div className="flex flex-col items-start ">
              <div>
                <h1 className="text-[#040052] text-lg font-semibold">Business and Product Strategy</h1>
                <h3 className="mt-5 text-[#040052]">Investing in a plan for Growth, Revenue, and Profits</h3>
              </div>
              <div className="mt-5 w-8/12">
                <p className="text-[#6B6A6A] text-sm">
                  Leverage BSG’s business and product strategy team to kickstart
                  product thinking at your organization.
                </p>
                <p className="mt-5 text-[#6B6A6A] text-sm ">Services:</p>
                <ul class="list-disc mt-5 text-[#6B6A6A] text-sm ml-8">
                  <li>Small Business Digital Consulting </li>
                  <li>Business Strategy Builder </li>
                  <li>Product Strategy Builder </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
