import React from "react";
// import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
// import avatar from "../../../assets/avatarIcon.png";

export const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center mt-20 ">
      <div className="my-10 lg:w-10/12 md:w-12/12 w-12/12">
        <div className="bg-[#0055B] bg-opacity-50 flex items-center justify-center w-full ">
          <div className="lg:mx-14 md:mx-8 mx-0 flex lg:flex-row md:flex-row flex-col-reverse mt-5 lg:w-9/12 md:w-9/12 w-11/12">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="flex flex-col items-start justify-center lg:w-8/12 md:w-8/12 lg:mt-0 md:mt-0 mt-10"
            >
              <h1 className="font-semibold text-2xl text-white lg:w-10/12 md:w-12/12 text-center">
                You Always Get the Best Guidance
              </h1>
              {/* <h1 className="mt-8 text-white font-extralight text-center">CO-FOUNDER, MICHAEL ROSALES</h1> */}
            </div>
            <div className="lg:w-4/12 md:w-4/12 flex items-center lg:justify-end md:justify-end justify-center lg:mt-0 md:mt-0 ">
              <Link
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="flex lg:items-start lg:justify-start md:items-start md:justify-start items-center justify-center"
              >
                {/* <img src={avatar} alt="" className="text-sm bg-center bg-cover" /> */}

                <div className=" bg-[#0055BA] bg-opacity-60 hover:bg-opacity-80 py-3 px-4 rounded-md flex items-center lg:mt-0 mt-1 ml-0 w-fit gap-2 text-red-500 hover:text-white hover:gap-4 ease-in-out duration-150  ">
                  <p className="pl-2 pr-2 text-bold text-xl text-white ">
                    Request Consultation
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
