import React from "react";
import thumb from "../../../assets/thumb.png";

export const Consultation = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="lg:max-w-7xl max-w-4xl">
          <div className="mt-16 flex justify-center items-center">
            <div 
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="lg:w-10/12 w-11/12 bg-[#ECEBFF] rounded-lg flex flex-col items-center justify-center py-10 lg:px-10 md:px-10 px-5">
              <div 
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="bg-[#0055BA] py-3 lg:px-10 md:px-10 px-5 rounded-full ">
                <h1 className="text-white lg:text-base md:text-base text-sm">
                  Blueprint Consulting 7 Step System
                </h1>
              </div>
              <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="mt-10">
                <p className="text-[#040052] text-center lg:leading-normal md:leading-normal leading-loose lg:text-base md:text-base text-sm">
                  Our 7-step framework is a fundamental method to structure a
                  consulting project that begins with establishing a partnership
                  and relationship through evaluating and acting on the results
                  of the output of our work. The implementation of solutions is
                  iterative and remains transparent for our clients to be
                  informed and updated at each stage of the process
                </p>
              </div>
              <div className="mt-10 flex lg:flex-row md:flex-row flex-col lg:w-6/12 md:w-6/12 w-10/12 items-center ">
                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                className="lg:w-6/12 md:w-6/12 w-8/12 flex items-center justify-center">
                  <img src={thumb} alt="" className="lg:w-6/12 md:w-6/12 w-8/12" />
                </div>
                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="900"
                className="lg:w-6/12 md:w-6/12 w-8/12 flex items-center justify-center">
                  <img src={thumb} alt="" className="lg:w-6/12 md:w-6/12 w-8/12" />
                </div>
                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="lg:w-6/12 md:w-6/12 w-8/12 flex items-center justify-center">
                  <img src={thumb} alt="" className="lg:w-6/12 md:w-6/12 w-8/12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
