import React from "react";
import thumb from "../../../assets/thumb.png";
import {BsArrowRight} from "react-icons/bs"
import {Link} from "react-router-dom"

export const Hero = () => {
  return (
    <div>
      <div className="flex w-full mt-12 ">
        <div className="w-8/12">
          <div className="w-10/12">
            <h1 className="text-4xl font-semibold tracking-wide w-10/12 leading-tight text-black">
              Delivering Solutions Powered by <span className="text-[#0055BA]"> People, Process,</span> and <span className="text-[#0055BA]"> Technology</span> 
            </h1>
            <p className="mt-5 text-gray-500 text-lg">
              We partners with businesses and product teams to conceptualize,
              design, build and position their digital products and services to
              scale and succeed in existing or new markets in the digital
              economy.
            </p>
            <Link to="/contact" className="" >
            <div className=" bg-[#0055BA] py-3 px-4 rounded-md flex items-center mt-5 ml-0 w-fit gap-2 text-white hover:text-white hover:gap-4 ease-in duration-150   ">
              <p className="pl-2 pr-2 text-base text-white font-medium">
              Book an initial session now
              </p>
              <span className="">
                <BsArrowRight className="text-2xl   " />
              </span>
            </div>
          </Link>
          </div>
        </div>
        <div className="w-4/12">
          <img src={thumb} alt="" />
        </div>
      </div>
    </div>
  );
};
