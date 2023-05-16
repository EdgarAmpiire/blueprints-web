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
          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center">
              <img src={thumb} alt="" />
            </div>
            <div className="flex flex-col items-center">
              <div>
                <h1>Business and Product Strategy</h1>
                <h3>Investing in a plan for Growth, Revenue, and Profits</h3>
              </div>
              <div>
                <p>
                  Leverage BSG’s business and product strategy team to kickstart
                  product thinking at your organization.
                </p>
                <p>Services:</p>
                <ul class="list-disc">
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
