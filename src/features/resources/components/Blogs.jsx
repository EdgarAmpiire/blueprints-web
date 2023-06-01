import React from 'react'
import thumb from "../../../assets/thumb.png";


export const Blogs = () => {
  return (
    <div>
        <div className="lg:flex-row md:flex-row flex-col gap-8 lg:mt-10 md:mt-10 w-full lg:flex-none lg:items-start lg:justify-start md:flex-none md:items-start md:justify-start items-center justify-center flex">
            <div className="lg:w-4/12 md:w-4/12 w-11/12 h-56 bg-[#F3F3F3] flex items-center justify-center rounded-xl">
              <img src={thumb} alt="" className="w-3/12" />
            </div>
            <div className="lg:w-8/12 md:w-8/12 w-11/12 flex flex-col justify-between py-2 lg:flex-none lg:items-start lg:justify-start md:flex-none md:items-start md:justify-start items-center ">
              <div className="lg:w-10/12">
                <h6 className="text-[#04005266] text-sm">
                  18 May 2023, 5 mins read
                </h6>
                <h3 className="text-[#040052] mt-2 text-lg">
                  Lorem ipsum dolor sit amet, labore consectetur adipiscing
                  elit, sed do
                </h3>
                <p className="text-[#04005266] mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et.
                </p>
              </div>
              <div className='lg:flex md:flex hidden'>
                <button className="bg-[#0055BA33] text-[#040052] px-10 py-2 rounded-full ">
                  Read
                </button>
              </div>
            </div>
          </div>
          <div className='lg:hidden md:hidden flex px-8 mt-5'>
                <button className="bg-[#0055BA33] text-[#040052] px-10 py-2 rounded-full ">
                  Read
                </button>
              </div>
          <div className="border-b mt-7"></div>
    </div>
  )
}
