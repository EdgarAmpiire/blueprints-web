import { useEffect } from "react";
import thumb from "../../../assets/thumb.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

export const Hero = () => {
  useEffect(() => {
    Aos.init({duration: 1500});
  }, []);

  return (
    <div className="">
      <div className="flex items-center justify-center">
        <div className="lg:max-w-7xl max-w-4xl">
          <div className="flex lg:mt-12 mt-5 justify-center items-center ">
            <div className="  lg:w-10/12 w-11/12 flex flex-col md:flex-row ">
              <div className="lg:w-8/12 md:w-8/12 w-12/12   ">
                <div className="lg:w-10/12 w-12/12">
                  <h1
                    data-aos="fade-up"
                    className="lg:text-4xl text-3xl font-semibold tracking-wide lg:w-9/12 md:w-10/12 w-12/12 leading-tight text-black">
                    Delivering Solutions Powered by{" "}
                    <span className="text-[#0055BA]"> People, Process,</span>{" "}
                    and <span className="text-[#0055BA]"> Technology</span>
                  </h1>

                  <p data-aos="slide-up" className="mt-5 text-gray-500 text-lg">
                    We partners with businesses and product teams to
                    conceptualize, design, build and position their digital
                    products and services to scale and succeed in existing or
                    new markets in the digital economy.
                  </p>
                  <Link
                    data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="1500"

                    to="/contact"
                    className="flex lg:items-start lg:justify-start md:items-start md:justify-start items-center justify-center">
                    <div className=" bg-[#E5E5E5] py-3 px-4 rounded-md flex items-center lg:mt-5 mt-12 ml-0 w-fit gap-2 text-white hover:text-white hover:gap-4 ease-in duration-150  ">
                      <p className="pl-2 pr-2 text-base text-black ">
                        Book an initial session now
                      </p>
                      <span className="">
                        <BsArrowRight className="text-2xl text-black  " />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div  
                    data-aos="fade-left"
              
              className="lg:w-4/12 md:w-4/12 w-12/12 flex items-center justify-center lg:mt-0 md:mt-0 mt-10">
                <img src={thumb} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
