import React from "react";
import thumb from "../../../assets/thumb.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
          <div className="lg:max-w-7xl max-w-4xl">
      <div className="flex  mt-12 md:justify-center md:items-center ">
        <div className="  lg:w-10/12 w-11/12 flex flex-col md:flex-row ">
          <div className="w-8/12   ">
            <div className="lg:w-10/12 w-12/12">
              <h1 className="lg:text-4xl text-3xl font-semibold tracking-wide lg:w-9/12 w-10/12 leading-tight text-black">
                Delivering Solutions Powered by{" "}
                <span className="text-[#0055BA]"> People, Process,</span> and{" "}
                <span className="text-[#0055BA]"> Technology</span>
              </h1>
              <p className="mt-5 text-gray-500 text-lg">
                We partners with businesses and product teams to conceptualize,
                design, build and position their digital products and services
                to scale and succeed in existing or new markets in the digital
                economy.
              </p>
              <Link to="/contact" className="">
                <div className=" bg-[#E5E5E5] py-3 px-4 rounded-md flex items-center lg:mt-5 mt-12 ml-0 w-fit gap-2 text-white hover:text-white hover:gap-4 ease-in duration-150   ">
                  <p className="pl-2 pr-2 text-base text-black ">
                    Book an initial session now
                  </p>
                  <span className="">
                    <BsArrowRight className="text-2xl text-black  " />
                  </span>
                </div>
              </Link>
            </div>
          </div>
          <div className="w-4/12 flex items-center justify-center">
            <img src={thumb} alt="" />
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
};
