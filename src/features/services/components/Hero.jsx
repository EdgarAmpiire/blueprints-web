import React from "react";
import startUp from "../../../assets/startup.png";
import midSized from "../../../assets/midsize.png";
import largeEnt from "../../../assets/large.png";

export const Hero = () => {
  return (
    <div>
      <div className="">
        <div
          class="w-full bg-cover bg-center object-cover lg:flex md:flex hidden"
          style={{ height: "28rem", backgroundImage: `url(/images/bg.png)` }}>
          <div class="flex flex-col items-center justify-between h-full w-full py-10 bg-[#000000D9] backdrop-brightness-200">
            <div className="mt-14 flex flex-col items-center justify-center w-full">
              <h1 className="text-4xl lg:w-7/12 w-9/12 font-semibold text-center text-white">
                Let’s build a wining blueprint
              </h1>
              <p className="lg:w-8/12 w-9/12 text-center mt-14 font-light text-white ">
                 We are much more than consultants - as digital allies,  we
                guide you in preparing for present and future opportunities by
                bridging strategy to execution, planning and taking action that
                accelerates growth and delivers success on all levels
              </p>
            </div>
          </div>
        </div>

        <div
          class="w-full bg-cover bg-center object-cover lg:hidden md:hidden flex"
          style={{ height: "70vh", backgroundImage: `url(/images/bg.png)` }}>
          <div class="flex flex-col items-center justify-between h-full w-full py-10 bg-[#000000D9] backdrop-brightness-200">
            <div className="mt-14 flex flex-col items-center justify-center w-full">
              <h1 className="text-4xl lg:w-7/12 w-11/12 font-semibold text-center text-white">
                Let’s build a wining blueprint
              </h1>
              <p className="lg:w-8/12 w-11/12 leading-loose text-center mt-14 font-light text-white ">
                 We are much more than consultants - as digital allies,  we
                guide you in preparing for present and future opportunities by
                bridging strategy to execution, planning and taking action that
                accelerates growth and delivers success on all levels
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-16 w-full">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000">
          <h1 className="text-[#040052] font-semibold lg:text-3xl text-xl">
            We Help With
          </h1>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col justify-between lg:items-start md:items-start items-center lg:w-7/12 w-10/12 gap-10 mt-14">
          <div className="flex items-center justify-center flex-col lg:w-4/12 md:w-4/12 w-8/12">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={startUp} alt="" className="w-fit" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="800"
              className="mt-2">
              <p>Start-ups</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col lg:w-4/12 md:w-4/12 w-8/12">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
              className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={midSized} alt="" className="w-fit" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="900"
              className="mt-2">
              <p>Mid Sized Enterprises</p>
            </div>
          </div>

          <div className="flex items-center justify-center flex-col lg:w-4/12 md:w-4/12 w-8/12">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="bg-[#5A50FE] py-5 px-5 rounded-full flex items-center justify-center h-[4.5rem] w-[4.5rem] ">
              <img src={largeEnt} alt="" className="w-fit" />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="mt-2">
              <p>Large Corporations</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-14 flex justify-center">
        <div className="bg-[#0055BA] py-10 lg:px-10 md:px-10  w-full flex justify-center">
          <p 
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="text-center text-white lg:w-10/12 md:w-10/12 w-11/12 lg:leading-normal md:leading-normal leading-loose">
            Our focus is on digital strategies that are driven by data and
            analytics centering on digital discovery, journeys and experience,
            and digital identities to immerse your customers and consumers into
            a seamless digital to real-world experience. We work with you to
            enable the power of digital technologies in your business.
          </p>
        </div>
      </div>
    </div>
  );
};
