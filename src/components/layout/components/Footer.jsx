import React from "react";

export const Footer = () => {
  return (
    <div className="">
      <div className="mt-20 bg-black py-6 px-5 w-full">
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
            <div className="w-5/12">
              <p className="text-white">Visit us at our office:</p>
            </div>
            <div className="w-7/12">
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
