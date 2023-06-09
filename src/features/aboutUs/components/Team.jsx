import React from "react";
import user from "../../../assets/user.png";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";

export const Team = () => {
  const people = [
    {
      avatar: user,
      name: "E Michael Rosales.MBA, CSPO, CPIP, CSM",
      title: "Chief Digital Product Consultant, BSG Co-founder",
      bio: "Michael is an innovative, value-centric, outcome-driven and entrepreneurial business strategist, digital product leader, thinker, and problem solver with Digital DNA leveraging 15+ years of product and business strategy experience.",
      bio1: " A proven and passionate digital experience designer specializing in the ideation, development, launch an scaling of digital products for organizations in multiple industries utilizing various business models as well as building and implementing product management operational models to continuously capture and deliver value.",
      bio2: "Michael earned a Bachelor of Science in Organizational Management from the University of La Verne and a Master of Business Administration from the New York Institute of Technology. ",
    },
    {
      avatar: user,
      name: "Elliot Ruiz",
      title: "Chief Digital Project Officer, BSG Co-Founder​",
      bio: "Michael is an innovative, value-centric, outcome-driven and entrepreneurial business strategist, digital product leader, thinker, and problem solver with Digital DNA leveraging 15+ years of product and business strategy experience.",
      bio1: " A proven and passionate digital experience designer specializing in the ideation, development, launch an scaling of digital products for organizations in multiple industries utilizing various business models as well as building and implementing product management operational models to continuously capture and deliver value.",
      bio2: "Michael earned a Bachelor of Science in Organizational Management from the University of La Verne and a Master of Business Administration from the New York Institute of Technology. ",
    },
    {
      avatar: user,
      name: "David Araujo",
      title: "Chief Digital Operations Officer, BSG Co-founder",
      bio: "Michael is an innovative, value-centric, outcome-driven and entrepreneurial business strategist, digital product leader, thinker, and problem solver with Digital DNA leveraging 15+ years of product and business strategy experience.",
      bio1: " A proven and passionate digital experience designer specializing in the ideation, development, launch an scaling of digital products for organizations in multiple industries utilizing various business models as well as building and implementing product management operational models to continuously capture and deliver value.",
      bio2: "Michael earned a Bachelor of Science in Organizational Management from the University of La Verne and a Master of Business Administration from the New York Institute of Technology. ",
    },
    {
      avatar: user,
      name: "Austin Young",
      title: "Chief Financial Officer, BSG Co-founder",
      bio: "Michael is an innovative, value-centric, outcome-driven and entrepreneurial business strategist, digital product leader, thinker, and problem solver with Digital DNA leveraging 15+ years of product and business strategy experience.",
      bio1: " A proven and passionate digital experience designer specializing in the ideation, development, launch an scaling of digital products for organizations in multiple industries utilizing various business models as well as building and implementing product management operational models to continuously capture and deliver value.",
      bio2: "Michael earned a Bachelor of Science in Organizational Management from the University of La Verne and a Master of Business Administration from the New York Institute of Technology. ",
    },
    {
      avatar: user,
      name: "Edgar Asiimwe",
      title: "Associate Product Manager",
      bio: "Michael is an innovative, value-centric, outcome-driven and entrepreneurial business strategist, digital product leader, thinker, and problem solver with Digital DNA leveraging 15+ years of product and business strategy experience.",
      bio1: " A proven and passionate digital experience designer specializing in the ideation, development, launch an scaling of digital products for organizations in multiple industries utilizing various business models as well as building and implementing product management operational models to continuously capture and deliver value.",
      bio2: "Michael earned a Bachelor of Science in Organizational Management from the University of La Verne and a Master of Business Administration from the New York Institute of Technology. ",
    },
  ];

  return (
    <div>
      <div className="mt-24">
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          className="flex justify-center">
          <h1 className="font-semibold lg:text-3xl text-xl text-[#040052]">
            The Team that makes it happen
          </h1>
        </div>

        {people.map((p, index) => (
          <div key={index}>
            <div className="items-center justify-center lg:flex md:flex hidden">
              <div className="lg:max-w-7xl max-w-4xl">
                <div className=" mt-14 flex items-center justify-center ">
                  <div className="flex lg:w-10/12 w-11/12 gap-14">
                    <div
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="1000"
                      className="w-3/12 flex flex-col">
                      <div>
                        <img src={p.avatar} alt="" />
                      </div>
                      <div className="flex px-2 mt-3 w-8/12 items-center justify-between">
                        <Link to={"/"}>
                          <CiLinkedin className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                        <Link to={"/"}>
                          <CiTwitter className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                        <Link to={"/"}>
                          <AiOutlineMail className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                      </div>
                    </div>
                    <div className="w-9/12">
                      <div>
                        <h1
                          data-aos="fade-up"
                          data-aos-offset="200"
                          data-aos-easing="ease-in-sine"
                          data-aos-duration="1000"
                          className="text-[#040052] w-5/12 font-semibold">
                          {p.name}
                        </h1>
                        <p
                          data-aos="fade-up"
                          data-aos-offset="200"
                          data-aos-easing="ease-in-sine"
                          data-aos-duration="1000"
                          className="text-[#0055BA] text-sm w-5/12 font-light mt-3">
                          {p.title}
                        </p>
                      </div>
                      <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        className="mt-5 border-b border-gray-600 w-9/12"></div>
                      <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        className="mt-5 w-9/12">
                        <p className="font-light">{p.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className=" lg:w-10/12 w-11/12 bg-[#BAD0E41A] rounded-md">
                    <div className="px-10 pt-10">
                      <ol className="relative flex flex-col  text-gray-500 border-l border-gray-200 ">
                        <li className="mb-10 ml-6">
                          <span className="absolute flex items-center justify-center w-6 h-6 bg-green-200 rounded-full -left-3 ring-4 ring-[#BAD0E41A] ">
                            <BsCheckLg className="text-green-500" />
                          </span>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            className="text-sm">
                            {p.bio1}
                          </p>
                        </li>
                        <li className="mb-10 ml-6">
                          <span className="absolute flex items-center justify-center w-6 h-6 bg-green-200 rounded-full -left-3 ring-4 ring-[#BAD0E41A]">
                            <BsCheckLg className="text-green-500" />
                          </span>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            className="text-sm">
                            {p.bio2}
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:hidden md:hidden">
              <div className="lg:max-w-7xl max-w-4xl">
                <div className="mx-4 mt-14 flex-col items-center justify-center ">
                  <div className="flex lg:w-10/12 w-11/12 gap-3">
                    <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className="w-4/12 flex flex-col">
                      <div>
                        <img src={p.avatar} alt="" />
                      </div>
                      {/* <div className="flex px-0 mt-3 w-12/12 items-center justify-between">
                        <Link to={"/"}>
                          <CiLinkedin className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                        <Link to={"/"}>
                          <CiTwitter className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                        <Link to={"/"}>
                          <AiOutlineMail className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                      </div> */}
                    </div>
                    <div className="w-8/12">
                      <div>
                        <h1
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        className="text-[#040052] w-12/12 font-semibold">
                          {p.name}
                        </h1>
                        <p
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-easing="ease-in-sine"
                        data-aos-duration="1000"
                        className="text-[#0055BA] text-sm w-12/12 font-light mt-3">
                          {p.title}
                        </p>
                      </div>
                      <div 
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="1000"
                      className="mt-5 border-b border-gray-600 w-12/12"></div>
                      <div
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-easing="ease-in-sine"
                      data-aos-duration="1000"
                      className="flex px-0 mt-3 w-6/12 items-center justify-between">
                        <Link to={"/"}>
                          <CiLinkedin className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                        <Link to={"/"}>
                          <CiTwitter className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                        <Link to={"/"}>
                          <AiOutlineMail className="text-xl text-[#040052] cursor-pointer" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className="mt-5 w-12/12">
                    <p className="font-light">{p.bio}</p>
                  </div>
                </div>

                <div className="mt-10 flex justify-center">
                  <div
                    data-aos="fade-up"
                    data-aos-offset="200"
                    data-aos-easing="ease-in-sine"
                    data-aos-duration="1000"
                    className=" lg:w-10/12 w-11/12 bg-[#BAD0E41A] rounded-md">
                    <div className="px-10 pt-10">
                      <ol class="relative flex flex-col  text-gray-500 border-l border-gray-200 ">
                        <li class="mb-10 ml-6">
                          <span class="absolute flex items-center justify-center w-6 h-6 bg-green-200 rounded-full -left-3 ring-4 ring-[#BAD0E41A] ">
                            <BsCheckLg className="text-green-500" />
                          </span>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            class="text-sm">
                            {p.bio1}
                          </p>
                        </li>
                        <li class="mb-10 ml-6">
                          <span class="absolute flex items-center justify-center w-6 h-6 bg-green-200 rounded-full -left-3 ring-4 ring-[#BAD0E41A]">
                            <BsCheckLg className="text-green-500" />
                          </span>
                          <p
                            data-aos="fade-up"
                            data-aos-offset="200"
                            data-aos-easing="ease-in-sine"
                            data-aos-duration="1000"
                            class="text-sm">
                            {p.bio2}
                          </p>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
