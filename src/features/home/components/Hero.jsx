import React from "react";
import thumb from "../../../assets/thumb.png";

export const Hero = () => {
  return (
    <div>
      <div className="flex w-full mt-12 ">
        <div className="w-8/12">
            <div>

          <h1>
            Delivering Solutions Powered by People, Process, and Technology
          </h1>
          <p>
            We partners with businesses and product teams to conceptualize,
            design, build and position their digital products and services to
            scale and succeed in existing or new markets in the digital economy.
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
