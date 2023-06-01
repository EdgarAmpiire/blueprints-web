import React from "react";
import {BsArrowRight} from "react-icons/bs"
import { Link } from "react-router-dom";

export const Hero = () => { 
  return (
    <div className="">
      <div
        className="w-full bg-cover bg-center object-cover lg:flex md:flex hidden"
        style={{ height: "28rem", backgroundImage: `url(/images/bg.png)` }}>
        <div className="flex flex-col items-center justify-between h-full w-full py-10 bg-[#000000D9] backdrop-brightness-200 ">
          <div className="text-center flex flex-col items-center  ">
            <h1 className="text-white text-3xl font-semibold uppercase ">
              We Are
            </h1>
            <h2 className="text-white text-xl font-semibold uppercase mt-10 ">
              WE ARE BLUEPRINT STRATEGY GROUP, INC
            </h2>

            <p className="text-white mt-10 lg:w-8/12 w-6/12 font-light">
               We are  a digital consulting firm that partners with businesses
              to conceptualize, design, build and position their digital
              products and services
            </p>
          </div>
          <Link to="/contact-us" className="">
              <div className=" bg-[#E5E5E5] py-3 px-4 rounded-md flex items-center mt-5 ml-0 w-fit gap-2 text-white hover:text-white hover:gap-4 ease-in duration-150   ">
                <p className="pl-2 pr-2 text-sm text-black ">
                Want to know how we work
                </p>
                <span className="">
                  <BsArrowRight className="text-2xl text-black  " />
                </span>
              </div>
            </Link>
        </div>
      </div>

      <div
        className="w-full bg-cover bg-center object-cover lg:hidden md:hidden flex"
        style={{ height: "70vh", backgroundImage: `url(/images/bg.png)` }}>
        <div className="flex flex-col items-center justify-center h-full w-full py-10 bg-[#000000D9] backdrop-brightness-200 ">
          <div className="text-center flex flex-col items-center  ">
            <h1 className="text-white text-3xl font-semibold uppercase my-5">
              We Are
            </h1>
            <h2 className="text-white text-xl font-semibold uppercase my-5 ">
              WE ARE BLUEPRINT STRATEGY GROUP, INC
            </h2>

            <p className="text-white my-10 lg:w-8/12 w-11/12 font-light">
               We are  a digital consulting firm that partners with businesses
              to conceptualize, design, build and position their digital
              products and services
            </p>
          </div>
          <Link to="/contact-us" className="">
              <div className=" bg-[#E5E5E5] py-3 px-4 rounded-md flex items-center my-14 ml-0 w-fit gap-2 text-white hover:text-white hover:gap-4 ease-in duration-150   ">
                <p className="pl-2 pr-2 text-sm text-black ">
                Want to know how we work
                </p>
                <span className="">
                  <BsArrowRight className="text-2xl text-black  " />
                </span>
              </div>
            </Link>
        </div>
      </div>
    </div>
  );
};
