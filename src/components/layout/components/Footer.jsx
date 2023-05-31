import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin, BsDashLg } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-black mt-20">
      <div className="lg:w-10/12 md:w-10/12 w-11/12 min-w-xs  max-w-6xl">
        <div className=" bg-black py-10 md:px-5 lg:px-5 px-0 w-full ">
          <h1 className="text-white text-xl">HEY....WAIT!</h1>

          <div className="flex w-full lg:items-center md:items-center justify-between mt-4  lg:flex-row md:flex-row flex-col">
            <div className="lg:w-5/12 md:w-5/12">
              <p className="text-white">Subscribe to our newsletters </p>
            </div>
            <div className="lg:w-7/12 lg:mt-0 md:w-7/12 md:mt-0 mt-5">
              <form>
                <div className="flex">
                  <div className="relative w-full">
                    <input
                      type="search"
                      id="search-dropdown"
                      className="block p-2.5 w-full z-20 text-sm text-white bg-[#E5E5E533] opacity-100   border border-[#E5E5E533] focus:outline-none "
                      placeholder="Your email address"
                      required
                    />
                    <button
                      type="submit"
                      className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-[#0055BA]  border border-[#0055BA]  focus:outline-none ">
                      SUBSCRIBE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:mt-24 md:mt-24 mt-12">
            <h1 className="text-white text-xl">READY TO GET STARTED</h1>
            <div className="flex w-full lg:items-center md:items-center justify-between mt-4 lg:flex-row md:flex-row flex-col">
              <div className="lg:w-6/12 ">
                <p className="text-white">Visit us at our office:</p>
                <p className="text-white mt-8">Blueprint Strategy Group, Inc</p>
                <p className="text-white">30 N Gould Street, Suite 4000</p>
                <p className="text-white">Sheridan, WY</p>
                <div className="flex justify-start mt-10 items-center gap-5 ">
                  <Link to={"/"} className="cursor-pointer">
                    <BsFacebook className="text-white text-xl cursor-pointer " />
                  </Link>
                  <Link to={"/"} className="cursor-pointer">
                    <BsTwitter className="text-white text-xl cursor-pointer " />
                  </Link>
                  <Link to={"/"} className="cursor-pointer">
                    <BsLinkedin className="text-white text-xl cursor-pointer " />
                  </Link>
                </div>
              </div>
              <div className="lg:w-3/12 lg:mt-0 mt-10 lg:pt-0 pt-5 lg:border-t-0 border-t-2 py-2 lg:px-10 gap-5 flex flex-col lg:border-l-2 lg:border-l-white ">
                <Link to={"/about-us"}>
                  <p className="text-white ">About Us</p>
                </Link>
                <Link to={"/how-we-work"}>
                  <p className="text-white">How We Work</p>
                </Link>
                <Link to={"/services"}>
                  <p className="text-white">Services</p>
                </Link>
              </div>

              <div className="lg:w-3/12 py-2 lg:px-10 gap-5 flex flex-col lg:border-l-2 lg:border-l-white border-b-2 border-b-white lg:border-b-0 lg:pb-0 pb-5">
                <div>
                  <Link to={"/about-us"}>
                    <p className="text-white ">Resources</p>
                  </Link>
                  <Link to={"/how-we-work"} className="flex items-center gap-2">
                    <BsDashLg className="text-white" />
                    <p className="text-gray-400">Blog</p>
                  </Link>
                  <Link to={"/how-we-work"} className="flex items-center gap-2">
                    <BsDashLg className="text-white" />

                    <p className="text-gray-400">News & Articles</p>
                  </Link>
                </div>
                <div>
                  <Link to={"/contact-us"}>
                    <p className="text-white">Contact Us</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 hidden lg:flex items-center justify-center  w-full gap-10 ">
            <div className="">
              <h1 className="text-white">
                 © 2023 The Blueprint Strategy Group - All Rights Reserved
              </h1>
            </div>
            <div className="border-l-2 border-l-white px-5">
              <h1 className="text-white">Privacy Policy</h1>
            </div>
            <div className="border-l-2 border-l-white px-5">
              <h1 className="text-white">Terms & Conditions</h1>
            </div>
          </div>

          <div className="mt-16 lg:hidden flex flex-col items-center justify-center  w-full gap-10 ">
            
            <div className="flex ">
              <div className=" px-5">
                <h1 className="text-white">Privacy Policy</h1>
              </div>
              <div className="border-l-2 border-l-white px-5">
                <h1 className="text-white">Terms & Conditions</h1>
              </div>
            </div>

            <div className="">
              <h1 className="text-white text-center">
                 © 2023 The Blueprint Strategy Group - All Rights Reserved
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
