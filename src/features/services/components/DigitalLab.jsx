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

        <div className="bg-[#F5E5FF] rounded-xl py-10 px-10 mt-15">
          <div className="grid grid-cols-2 w-full">
            
            <div className="flex flex-col items-start ">
              <div>
                <h1 className="text-[#040052] text-lg font-semibold">Digital Marketing</h1>
                <h3 className="mt-5 text-[#040052]">Connect and Convert</h3>
              </div>
              <div className="mt-5 w-8/12">
                <p className="text-[#6B6A6A] text-sm">
                A digital marketing strategy is a set of planned, strategic and tactical actions to acquire and retain the attention of your addressable market
                </p>
                <p className="mt-5 text-[#6B6A6A] text-sm ">Services:</p>
                <ul class="list-disc mt-5 text-[#6B6A6A] text-sm ml-8">
                  <li>Digital Marketing Strategy Builder </li>
                  <li>Digital Marketing Assesment Tools </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <img src={thumb} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
