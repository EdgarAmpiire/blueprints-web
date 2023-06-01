import React from "react";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineLocalPhone,
} from "react-icons/md";

export const Form = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="lg:mt-24 md:mt-24 mt-5 lg:w-7/12 w-11/12 flex flex-col ">
          <div>
            <h1 className="text-[#040052] uppercase font-bold text-2xl">
              Get in touch
            </h1>
          </div>

          <div className="w-full">
            <div className="flex flex-col justify-center">
              <div className="lg:max-w-7xl max-w-4xl">
                <div className="w-full flex lg:flex-row flex-col mt-10 justify-center">
                  <div className="lg:w-5/12 ">
                    <div className="px-1 py-2 gap-5 flex lg:flex-col lg:items-start md:flex-row flex-col items-center ">
                      {/* Item One  */}
                      <div className="md:w-4/12 lg:w-full w-full lg:bg-white md:bg-white bg-[#BAD0E44D] rounded-md py-4">
                        <div className="flex flex-col lg:flex-row lg:gap-2 gap-5 w-full justify-center items-center lg:justify-start lg:items-start">
                          <div className="lg:w-1.5/12">
                            <div className="flex py-4 px-4 lg:p-3 bg-[#0055BA] rounded-full w-fit">
                              <MdOutlineEmail className="text-white text-3xl lg:text-xl" />
                            </div>
                          </div>

                          <div className="text-sm lg:w-10/12 text-center lg:text-left">
                            <p className="text-[#040052] font-semibold text-base lg:text-md">
                              Send us an email
                            </p>
                            <p className="text-[#040052] font-light lg:font-normal mt-2 lg:mt-0">
                              info@theblueprintstrategy.com
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Item Two  */}

                      <div className="md:w-4/12 lg:w-full w-full">
                        <div className="flex lg:gap-2 gap-5 flex-col lg:flex-row w-full justify-center items-center lg:justify-start lg:items-start">
                          <div className="lg:w-1.5/12">
                            <div className="flex py-4 px-4 lg:p-3 bg-[#0055BA] rounded-full w-fit h-fit">
                              <MdOutlineLocationOn className="text-white text-3xl lg:text-xl" />
                            </div>
                          </div>
                          <div className="text-sm lg:w-10/12 text-center lg:text-left">
                            <p className="text-[#040052] font-semibold text-base lg:text-md">
                              Visit us
                            </p>
                            <p className="text-[#040052] font-light lg:font-normal mt-2 lg:mt-0">
                              Blueprint Strategy Group, Inc
                            </p>
                            <p className="text-[#040052] font-light lg:font-normal">
                              30 N Gould Street, Suite 4000
                            </p>
                            <p className="text-[#040052] font-light lg:font-normal">
                              Sheridan, WY
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Item Three  */}

                      <div className="md:w-4/12 lg:w-full w-full lg:bg-white md:bg-white bg-[#BAD0E44D] rounded-md py-4">
                        <div className="flex lg:gap-2 gap-5 flex-col lg:flex-row w-full justify-center items-center lg:justify-start lg:items-start">
                          <div className="lg:w-1.5/12">
                            <div className="flex py-4 px-4 lg:p-3 bg-[#0055BA] rounded-full w-fit h-fit">
                              <MdOutlineLocalPhone className="text-white text-3xl lg:text-xl" />
                            </div>
                          </div>
                          <div className="text-sm lg:w-10/12 text-center lg:text-left">
                            <p className="text-[#040052] font-semibold text-base lg:text-md">
                              Call us
                            </p>
                            <p className="text-[#040052] font-light lg:font-normal mt-2 lg:mt-0">
                              0414 767 212
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-7/12 mt-24 lg:mt-0">
                    <div>
                      <h1 className="text-sm text-[#040052]">
                        Name (required)
                      </h1>
                    </div>
                    <form>
                      <div className="flex justify-between mt-4 gap-5">
                        <div className="flex flex-col gap-2 w-6/12">
                          <label className="text-sm text-[#040052]">
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="border px-2 py-2 text-sm bg-[#F5F5F5] border-gray-300 text-gray-600 focus:outline-none"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-2 w-6/12">
                          <label className="text-sm text-[#040052]">
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="border px-2 py-2 text-sm bg-[#F5F5F5] border-gray-300 text-gray-600 focus:outline-none"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex mt-4">
                        <div className="flex flex-col gap-2 w-full ">
                          <label className="text-sm text-[#040052]">
                            Email (required)
                          </label>
                          <input
                            type="email"
                            placeholder=""
                            className="border px-2 py-2 text-sm bg-[#F5F5F5] border-gray-300 text-gray-600 focus:outline-none w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex mt-4">
                        <div className="flex flex-col gap-2 w-full ">
                          <label className="text-sm text-[#040052]">
                            Subject (required)
                          </label>
                          <input
                            type="text"
                            placeholder=""
                            className="border px-2 py-2 text-sm bg-[#F5F5F5] border-gray-300 text-gray-600 focus:outline-none w-full"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex mt-4">
                        <div className="flex flex-col gap-2 w-full ">
                          <label className="text-sm text-[#040052]">
                            Message (required)
                          </label>
                          <textarea
                            type="email"
                            placeholder=""
                            className="border px-2 py-2 text-sm bg-[#F5F5F5] border-gray-300 text-gray-600 focus:outline-none w-full"
                            rows="7"
                            required
                          />
                        </div>
                      </div>

                      <div className="mt-5">
                        <button
                          type="submit"
                          className="uppercase text-white py-2 px-6 bg-[#0055BA] ">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
