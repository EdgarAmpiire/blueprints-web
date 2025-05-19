import React from "react";
import strategy from "../../../assets/strategyIcon.png";
import portfolio from "../../../assets/portfolioIcon.png";
import management from "../../../assets/managementIcon.png";
import marketing from "../../../assets/marketingIcon.png";
// import { Strategy } from "./Strategy";

export const HomeServices = () => {
  // const [isActive, setisActive] = React.useState("strategy");

  // const changeComponent = (item) => {
  //   setisActive(item);
  // };
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="lg:max-w-7xl max-w-4xl">
          <div className="mt-0">
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="w-full flex justify-center ">
              <div className="px-6 py-1 bg-primary"></div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="w-full flex flex-col justify-center items-center mt-4 ">
              <h1 className="text-3xl font-semibold ">We help you with</h1>
              <div className="mt-5 text-center flex items-center justify-center w-fit h-fit ">

              <p >Here’s a description of the main features of Davidson Consulting Firm Limited, <br /> incorporating mineral mining & exportation, freight and forwarding, insurance, <br />warehousing, and other key consulting services:</p>
              </div>
            </div>

            {/* <div className="bg-[#F5F5F5] py-5 px-3 rounded-lg mt-5">
          <div className="py-3">
            <div className=" border-gray-300">
              <div className="flex justify-around w-full ">
                <button
                  className={
                    isActive === "strategy"
                      ? "mx-1 bg-black text-white rounded-full py-2 text-sm px-3"
                      : "mx-1 bg-[#E5E5E5] rounded-full py-2 text-sm text-black px-3"
                  }
                  onClick={() => changeComponent("strategy")}
                >
                  Business & Product Strategy
                </button>
                <button
                  className={
                    isActive === "management"
                      ? "mx-1 bg-black text-white rounded-full py-2 text-sm px-3"
                      : "mx-1 bg-[#E5E5E5] rounded-full py-2 text-sm text-black px-3"
                  }
                  onClick={() => changeComponent("management")}
                >
                  Product Portfolio Management
                </button>
                <button
                  className={
                    isActive === "operation"
                      ? "mx-1 bg-black text-white rounded-full py-2 text-sm px-3"
                      : "mx-1 bg-[#E5E5E5] rounded-full py-2 text-sm text-black px-3"
                  }
                  onClick={() => changeComponent("operation")}
                >
                  Product Development and Management Operation
                </button>
                <button
                  className={
                    isActive === "marketing"
                      ? "mx-1 bg-black text-white rounded-full py-2 text-sm px-3"
                      : "mx-1 bg-[#E5E5E5] rounded-full py-2 text-sm text-black px-3"
                  }
                  onClick={() => changeComponent("marketing")}
                >
                  Digital Marketing
                </button>
              </div>
            </div>
            <div className="mt-5">
              {isActive === "strategy" && <Strategy />}
              {isActive === "management" && "tab2"}
              {isActive === "operation" && "tab3"}
              {isActive === "marketing" && "tab4"}
            </div>
          </div> 
        </div> */}

            <div className="flex justify-center items-center mt-5">
              <div className=" lg:w-12/12 w-11/12 py-5  rounded-lg mt-5 gap-10 lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 flex flex-col ">
                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                className="w-12/12 flex justify-center items-center">
                  <div className="rounded-3xl bg-[#050422] py-8 px-5 h-56 max-h-56 min-h-56 ">
                    <div>
                      <img src={strategy} alt="" />
                    </div>
                    <div>
                      <h1 className="text-white mt-5 font-semibold">
                      Business Strategy and Advisory
                      </h1>
                      <p className="text-white mt-5 font-light text-sm mb-5">
                      We help businesses develop robust strategies for growth, sustainability, and competitive advantage.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="w-12/12 flex justify-center items-center">
                  <div className="rounded-3xl bg-[#F3F3F3] py-8 px-5 h-56 max-h-56 min-h-56 ">
                    <div>
                      <img src={portfolio} alt="" />
                    </div>
                    <div>
                      <h1 className="text-black mt-5 font-semibold">
                      Financial Consulting
                      </h1>
                      <p className="text-black mt-5 font-light text-sm mb-5">
                      Our experts offer financial planning, investment guidance, Project or Business Funding and risk management strategies.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
                className="w-12/12  flex justify-center items-center ">
                  <div className="rounded-3xl bg-[#F3F3F3] py-7 px-5 h-56 max-h-56 min-h-56 ">
                    <div>
                      <img src={management} alt="" />
                    </div>
                    <div>
                      <h1 className="text-black mt-3 font-semibold w-10/12">
                      Market Research and Analysis
                      </h1>
                      <p className="text-black mt-2 font-light text-sm mb-5 w-10/12">
                      We provide data-driven insights to help businesses understand market trends and consumer behavior.
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="w-12/12 flex justify-center items-center">
            <div className="rounded-3xl bg-[#F3F3F3] py-8 px-5  ">
              <div>
                <img src={management} alt="" />
              </div>
              <div>
                <h1 className="text-black mt-5 font-semibold w-8/12">
                Product Development and Management Operation 
                </h1>
                <p className="text-black mt-5 font-light text-sm mb-5">
                Commercializing new or existing products that meet market needs
                </p>
              </div>
            </div>
          </div> */}

                <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-easing="ease-in-sine"
                data-aos-duration="1000"
                className="w-12/12 flex justify-center items-center">
                  <div className="rounded-3xl bg-[#050422] py-8 px-5 h-56 max-h-56 min-h-56 ">
                    <div>
                      <img src={marketing} alt="" />
                    </div>
                    <div>
                      <h1 className="text-white mt-5 font-semibold">
                      Solar Energy
                      </h1>
                      <p className="text-white mt-5 font-light text-sm mb-5">
                      We support renewable energy epc projects, from feasibility studies to implementation on behalf of the developer to recommended engineers and contractors.
                      </p>
                    </div>
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
