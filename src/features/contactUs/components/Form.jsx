import React from "react";
import {
  MdOutlineEmail,
  MdOutlineLocationOn,
  MdOutlineLocalPhone,
} from "react-icons/md";

export const Form = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-24 lg:w-10/12 w-11/12">
        <div>
          <h1 className="text-[#040052] uppercase font-bold text-2xl">
            Get in touch
          </h1>
        </div>

        <div className="w-full">
          <div className="w-full flex mt-10 justify-center">
            <div className="w-5/12">
              <div className="px-1 py-2 gap-5 flex flex-col">
                <div>
                  <div className="flex gap-2">
                    <div className="flex py-3 px-3 bg-[#0055BA] rounded-full w-fit">
                      <MdOutlineEmail className="text-white" />
                    </div>
                    <div className="text-sm">
                      <p className="text-[#040052] font-semibold">
                        Send us an email
                      </p>
                      <p className="text-[#040052]">
                        info@theblueprintstrategy.com
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-2">
                    <div className="flex py-3 px-3 bg-[#0055BA] rounded-full w-fit h-fit">
                      <MdOutlineLocationOn className="text-white" />
                    </div>
                    <div className="text-sm">
                      <p className="text-[#040052] font-semibold">Visit us</p>
                      <p className="text-[#040052]">
                        Blueprint Strategy Group, Inc
                      </p>
                      <p className="text-[#040052]">
                        30 N Gould Street, Suite 4000
                      </p>
                      <p className="text-[#040052]">Sheridan, WY</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex gap-2">
                    <div className="flex py-3 px-3 bg-[#0055BA] rounded-full w-fit">
                      <MdOutlineLocalPhone className="text-white" />
                    </div>
                    <div className="text-sm">
                      <p className="text-[#040052] font-semibold">Call us</p>
                      <p className="text-[#040052]">0414 767 212</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-7/12">
              <div>
                <h1 className="text-sm text-[#040052]">Name (required)</h1>
              </div>
              <form>
                <div className="flex justify-between mt-4 gap-5">
                  <div className="flex flex-col gap-2 w-6/12">
                    <label className="text-sm text-[#040052]">First Name</label>
                    <input
                      type="text"
                      placeholder=""
                      className="border px-2 py-2 text-sm bg-[#F5F5F5] border-gray-300 text-gray-600 focus:outline-none"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-6/12">
                    <label className="text-sm text-[#040052]">Last Name</label>
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
  );
};
