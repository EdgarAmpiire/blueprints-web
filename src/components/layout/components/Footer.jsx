import React from "react";
import { BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";

export const Footer = () => {
  return (
    <div className="">
      <div className="mt-20 bg-black py-10 px-5 w-full">
        <h1 className="text-white text-xl">HEY....WAIT!</h1>

        <div className="flex w-full items-center justify-between mt-4">
          <div className="w-5/12">
            <p className="text-white">Subscribe to our newsletters </p>
          </div>
          <div className="w-7/12">
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

        <div className="mt-24">
          <h1 className="text-white text-xl">READY TO GET STARTED</h1>
          <div className="flex w-full items-center justify-between mt-4">
            <div className="w-5/12 border-r-2 border-r-white ">
              <p className="text-white">Visit us at our office:</p>
              <p className="text-white mt-8">Blueprint Strategy Group, Inc</p>
              <p className="text-white">30 N Gould Street, Suite 4000</p>
              <p className="text-white">Sheridan, WY</p>
            </div>
            <div className="w-7/12 py-2 px-5 gap-5 flex flex-col">
              <p className="text-white ">Privacy Policy</p>
              <p className="text-white">Terms & Conditions</p>

            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between  w-full ">
            <div className="w-3/12"></div>
            <div className="w-7/12">

            <h1 className="text-white">2023 © The Blueprint Strategy Group - All Rights Reserved</h1>
            </div>
            <div className="flex justify-between items-center w-2/12">
<BsFacebook className="text-white text-xl cursor-pointer " />
<BsTwitter className="text-white text-xl cursor-pointer " />
<BsLinkedin  className="text-white text-xl cursor-pointer "/>
            </div>
        </div>
      </div>
    </div>
  );
};
