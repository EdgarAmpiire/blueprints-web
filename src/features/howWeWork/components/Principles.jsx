import React from "react";
import thumb from "../../../assets/thumb.png"

export const Principles = () => {
  return (
    <div>
      <div className="mt-16">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-[#0055BA1A] py-2 px-8 rounded-full ">
            <h1 className="text-[#0055BA] font-semibold">
              Our Guiding Principles
            </h1>
          </div>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="w-10/12">
            <div>
              <h1 className="text-[#040052] text-lg font-semibold ">
                How we guide our decisions
              </h1>
            </div>

            <div className="mt-5">
              <div className="flex ">
                <div className="bg-[#F5F5F5] py-5 px-5 w-7/12">
                  <div>
                    <h3>BSG’s Guiding Principle 1:</h3>
                    <h1>People, Process and Technology</h1>
                  </div>
                  <div>
                    <p>
                      Having the right motivated, diversified and purpose-driven
                      people in place working within with a clear understanding
                      of the vision, purpose and NorthStar, sound direction and
                      leadership, tools, and unambiguous outcomes, is essential
                      for the People, Process and Technology trifecta to deliver
                      results. Measurable results that consistently improves the
                      bottom line
                    </p>
                    <p>
                      Our group of Consultants work under high ethical standards
                      and are guided by personal and professional integrity as
                      we strive to deliver on the work that we have agreed to
                      deliver upon. Our clients and partners are our focus, with
                      results and exceeding expectations being our everyday
                      passion and objective. We actively prioritize executing on
                      visions, strategies and tasks that we undertake with
                      success being our most important metric
                    </p>
                  </div>
                </div>
                <div className="bg-[#ECEBFF] py-5 px-5 w-5/12">
                    <img src={thumb} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
