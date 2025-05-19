import { useEffect } from "react";
// import thumb from "../../../assets/thumb.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import homevideo from "../../../assets/introvideo.mp4";

export const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="flex justify-stretch items-start">
      <div className="5xl:max-w-[95vh] 2xl:items-stretch 2xl:justify-stretch">
        {/* <div className="h-screen -z-10 top-0 left-0 w-full bg-[#010101] bg-opacity-70"> */}

        <video
          src={homevideo}
          loop
          autoPlay
          muted
          className="object-cover absolute lg:h-[100vh] h-[100vh] xs:w-screen sm:w-screen lg:w-screen -z-10 top-0 left-0 bg-opacity bg-black"
        ></video>
      </div>
      <div className="">
        <div className="object-cover relative h-screen w-screen flex items-start lg:pl-0 2xl:pl-0 justify-start lg:pt-0 xs:pt-0 sm:pt-0 pb-0 ">
          <div className="w-full h-screen bg-gradient-to-r from-white to-gray-10">
            {
              <div className="">
                <div className="flex items-center justify-center">
                  {/* <div className="lg:max-w-7xl max-w-4xl">
          <div className="flex lg:mt-12 mt-5 justify-center items-center ">
            <div className="  lg:w-10/12 w-11/12 flex flex-col md:flex-row "> */}
                  {/* <div className="lg:w-8/12 md:w-8/12 w-12/12   "> */}
                  <div className=" grid grid-flow-col grid-rows-3 gap-4">
                    <div className="w-screen h-screen py-40 pl-28 row-span-2">
                      <h1
                        data-aos="fade-up"
                        className="lg:text-5xl text-3xl font-semibold tracking-wide lg:w-9/12 md:w-10/12 w-12/12 leading-tight text-black"
                      >
                        We are the <br />
                        <span className="text-[#0055BA] lg:text-7xl text-3xl ">
                          Best Kenyan <br />
                        </span>{" "}
                        <span className="text-[#0055BA] lg:text-7xl text-3xl ">
                          {" "}
                          Consultancy <br /> Firm
                        </span>
                      </h1>
                      <Link
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="1500"
                      to="/services"
                      className="flex lg:items-start lg:justify-start md:items-start md:justify-start items-center justify-center"
                    >
                      <div className=" bg-[#0055BA] bg-opacity-60 hover:bg-opacity-80 py-3 px-4 rounded-md flex items-center lg:mt-5 mt-12 ml-0 w-fit gap-2 text-red-500 hover:text-white hover:gap-4 ease-in-out duration-150  ">
                        <p className="pl-2 pr-2 text-bold text-2xl text-white ">
                          Our Services
                        </p>
                        <span className="">
                          <BsArrowRight className="text-3xl text-white  " />
                        </span>
                      </div>
                    </Link>
                    </div>
                    <div className="row-span-1"></div>

                    {/* <p data-aos="slide-up" className="mt-5 text-gray-500 text-lg">
                      We partners with businesses and product teams to
                      conceptualize, design, build and position their digital
                      products and services to scale and succeed in existing or
                      new markets in the digital economy.
                    </p> */}
                    
                  </div>
                </div>

                {/* <div
                  data-aos="fade-left"
                  className="lg:w-4/12 md:w-4/12 w-12/12 flex items-center justify-center lg:mt-0 md:mt-0 mt-10"
                >
                  <img src={thumb} alt="" />
                </div> */}
                {/* </div> */}
                {/* </div>
          </div>
        </div> */}
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
