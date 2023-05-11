import React from "react";
import thumb from "../../../assets/thumb.png";

export const Hero = () => {
  return (
    <div>
      <div className="flex w-full mt-12 ">
        <div className="w-8/12">
          <div className="w-10/12">
            <h1 className="text-4xl font-semibold tracking-wide w-10/12">
              Delivering Solutions Powered by <span> People, Process,</span> and <span> Technology</span> 
            </h1>
            <p>
              We partners with businesses and product teams to conceptualize,
              design, build and position their digital products and services to
              scale and succeed in existing or new markets in the digital
              economy.
            </p>
          </div>
        </div>
        <div className="w-4/12">
          <img src={thumb} alt="" />
        </div>
      </div>
    </div>
  );
};
