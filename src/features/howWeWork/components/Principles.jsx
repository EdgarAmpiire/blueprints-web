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
                <div className="bg-[#F5F5F5] py-5 px-5 w-7/12 rounded-l-lg">
                  <div className="mb-5">
                    <h3 className="text-[#040052] text-sm font-light">BSG’s Guiding Principle 1:</h3>
                    <h1 className="text-[#040052]  font-semibold ">People, Process and Technology</h1>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="text-sm text-[#040052] font-light">
                      Having the right motivated, diversified and purpose-driven
                      people in place working within with a clear understanding
                      of the vision, purpose and NorthStar, sound direction and
                      leadership, tools, and unambiguous outcomes, is essential
                      for the People, Process and Technology trifecta to deliver
                      results. Measurable results that consistently improves the
                      bottom line
                    </p>
                    <p className="text-sm text-[#040052] font-light">
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
                <div className="bg-[#ECEBFF] py-5 px-5 w-5/12 rounded-r-lg flex items-center justify-center">
                    <img src={thumb} alt="" />
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex ">
              <div className="bg-[#ECEBFF] py-5 px-5 w-5/12 rounded-r-lg flex items-center justify-center">
                    <img src={thumb} alt="" />
                </div>
                <div className="bg-[#F5F5F5] py-5 px-5 w-7/12 rounded-l-lg">
                  <div className="mb-5">
                    <h3 className="text-[#040052] text-sm font-light">BSG’s Guiding Principle 2:</h3>
                    <h1 className="text-[#040052]  font-semibold ">Create Meaningful and Collaborative Partnerships
</h1>
                  </div>
                  <div className="flex flex-col gap-5">
                    <p className="text-sm text-[#040052] font-light">
                    Our engagements begin with establishing trust and setting the tone for a productive and impactful partnership centered around our client’s goals and objectives. This is primarily done by intently listening to our client’s needs, challenges, the impact that they are working to make in their business and industry, and by effectively communicating our process, ways of working and meeting up to the expectations that we set driven by personal and professional standards.
                    </p>
                    <p className="text-sm text-[#040052] font-light">
                    The collective strength of experience and ideas, combined with our belief in shared accountability is what ultimately drives success—for ourselves and our clients. We invest our time and energy in building valuable partnerships that have positive impacts well beyond our engagement agreement. We take pride in investing time and energy in our projects, partnerships, collaborations and the lasting impact of our work
                    </p>
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
