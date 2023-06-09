import React from "react";
import vision from "../../../assets/vision.png";
import culture from "../../../assets/culture.png";
import team from "../../../assets/team.png";

export const Glance = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="lg:max-w-7xl max-w-4xl">
        <div className="mt-14 flex items-center flex-col w-full  ">
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="flex items-center justify-center">
            <h1 className="text-[#040052] font-semibold lg:text-3xl text-xl">
              At a glance
            </h1>
          </div>
          <div
           className="flex justify-between items-center lg:flex-row md:flex-row flex-col lg:w-10/12 w-11/12  lg:gap-10 md:gap-10 gap-3 mt-10 border-b-2 pb-10">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              className="flex items-center justify-center flex-col lg:w-4/12  md:w-4/12 w-10/12">
              <div className=" py-2 px-2 rounded-full flex items-center justify-center h-[5.5rem] w-[5.5rem] ">
                <img src={vision} alt="" className="w-fit" />
              </div>
              <div className="mt-2 flex flex-col items-center justify-center ">
                <p className="text-[#040052] font-semibold uppercase">
                  Our Vision
                </p>
                <p className="text-xs text-center mt-3 lg:w-12/12 md:w-12/12 w-10/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
              className="flex items-center justify-center flex-col lg:w-4/12  md:w-4/12 w-10/12">
              <div className=" py-5 px-5 rounded-full flex items-center justify-center h-[5.5rem] w-[5.5rem] ">
                <img src={culture} alt="" className="w-fit" />
              </div>
              <div className="mt-2 flex flex-col items-center justify-center ">
                <p className="text-[#040052] font-semibold uppercase">
                  Our Culture
                </p>
                <p className="text-xs text-center mt-3 lg:w-12/12 md:w-12/12 w-10/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="flex items-center justify-center flex-col lg:w-4/12  md:w-4/12 w-10/12">
              <div className=" py-5 px-5 rounded-full flex items-center justify-center h-[5.5rem] w-[5.5rem] ">
                <img src={team} alt="" className="w-fit" />
              </div>
              <div className="mt-2 flex flex-col items-center justify-center ">
                <p className="text-[#040052] font-semibold uppercase">
                  Our Team
                </p>
                <p className="text-xs text-center mt-3 lg:w-12/12 md:w-12/12 w-10/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        className="mt-10 flex justify-center">
          <div className="lg:px-20 md:px-20 px-5 py-10 bg-[#BAD0E44D] rounded-md lg:w-10/12 w-11/12">
            <p className="lg:text-center md:text-center lg:leading-normal md:leading-normal leading-loose  lg:font-light md:font-light">
              “We leverage Agile processes and methodologies for product
              development, and work with businesses to maximize their core
              competencies and uncover their market’s unmet needs to create
              innovative, value-driven, disruptive and differentiated offerings
              and experiences around their business models through strategic
              planning and execution.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
