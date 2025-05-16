import React, { Fragment } from "react";
// import defaultLogo from "../../../assets/founders-logo.png";
import { Link } from "react-router-dom";
import {  Menu, Transition } from "@headlessui/react";
import { FiMenu } from "react-icons/fi";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = ({ page }) => {
  return (
    <div className="w-full">
      {/* <div className="w-full flex flex-col justify-center"> */}

      <nav className="relative  flex flex-wrap items-center justify-center w-12/12 pt-5 ">
        <div className="container lg:px-0 md:px-0 px-4 flex  items-center justify-between w-12/12 lg:max-w-6xl max-w-3xl  ">
          <div className="w-2/12 relative flex justify-between ">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-0 py-2 whitespace-nowrap uppercase text-white"
              href="/">
              <Link className="flex items-center text-[#0055BA]" to="/">
                {/* <img
                  src={defaultLogo}
                  className="w-12/12"
                  alt="logo"
                  loading="lazy"
                /> */}
                Blueprint Strategy
              </Link>
            </a>
          </div>

          <div
            className="lg:flex flex-grow items-center justify-center md:w-8/12 hidden"
            id="example-navbar-warning">
            <ul className="flex flex-col md:flex-row list-none ml-auto md:ml-0 md:w-fit ">
              <li className="nav-item">
                <Link
                  to="/"
                  className={
                    page === "home"
                      ? "nav-link p-0 underline underline-offset-8 decoration-2 decoration-black"
                      : "nav-link p-0"
                  }>
                  <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300">
                    Home
                  </p>
                </Link>
              </li>{" "}
              <li className="nav-item">
                <Link
                  to="/about-us"
                  className={
                    page === "about-us"
                      ? "nav-link p-0 underline underline-offset-8 decoration-2 decoration-black"
                      : "nav-link p-0"
                  }>
                  <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300">
                    About Us
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/how-we-work"
                  className={
                    page === "how-we-work"
                      ? "nav-link p-0 underline underline-offset-8 decoration-2 decoration-black"
                      : "nav-link p-0"
                  }>
                  <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300">
                    How We Work
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className={
                    page === "services"
                      ? "nav-link p-0 underline underline-offset-8 decoration-2 decoration-black"
                      : "nav-link p-0"
                  }>
                  <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300">
                    Services
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resources"
                  className={
                    page === "resources"
                      ? "nav-link p-0 underline underline-offset-8 decoration-2 decoration-black"
                      : "nav-link p-0"
                  }>
                  <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300">
                    Resources
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="lg:flex flex-grow items-center justify-end w-2/12 hidden"
            id="example-navbar-warning">
            <ul className="flex flex-col md:flex-row list-none ml-auto md:ml-0 ">
              <li className="nav-item">
                <Link
                  to="/contact-us"
                  className={
                    page === "contact-us"
                      ? "nav-link  bg-[#0055BA] px-4 py-1.5 text-white rounded-md  text-base 2xl:text-base "
                      : "nav-link  bg-[#0055BA] px-4 py-1.5 text-white rounded-md text-base 2xl:text-base"
                  }>
                  {/* <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300"> */}
                  Contact Us
                  {/* </p> */}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex lg:hidden cursor-pointer dropdown relative">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center  bg-white px-0 py-2 text-sm font-medium ">
                  <FiMenu className="text-2xl" aria-hidden="true" />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95">
                <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          // onClick={() => setOpen(true)}
                          to="/"
                          className={classNames(
                            page==="home",
                            active
                              ? "bg-blue-50 text-gray-900"
                              : "text-[#040052]",
                            "block px-4 py-2 "
                          )}>
                          Home
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                        // to="/about-us"
                          // onClick={() => setOpen2(true)}
                          className={classNames(
                            page==="about-us",
                            active
                              ? "bg-blue-50 text-gray-900"
                              : "text-[#040052]",
                            "block px-4 py-2 "
                          )}>
                          About Us
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                        // to="/how-we-work"
                          // onClick={() => setOpen2(true)}
                          className={classNames(
                            page==="how-we-work",
                            active
                              ? "bg-blue-50 text-gray-900"
                              : "text-[#040052]",
                            "block px-4 py-2 "
                          )}>
                          How We Work
                        </Link>
                      )}
                    </Menu.Item>

                    <Menu.Item>
                      {({ active }) => (
                        <Link
                        // to="/services"
                          // onClick={() => setOpen2(true)}
                          className={classNames(
                            page==="services",
                            active
                              ? "bg-blue-50 text-gray-900"
                              : "text-[#040052]",
                            "block px-4 py-2 "
                          )}>
                          Services
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link 
                        // to="/resources"
                          // onClick={() => setOpen2(true)}
                          className={classNames(
                            page==="resources",
                            active
                              ? "bg-blue-50 text-gray-900"
                              : "text-[#040052]",
                            "block px-4 py-2 "
                          )}>
                          Resources
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link 
                        // to="/contact-us"
                          // onClick={() => setOpen2(true)}
                          className={classNames(
                            page==="contact-us",
                            active
                              ? "bg-blue-50 text-gray-900"
                              : "text-[#040052]",
                            "block px-4 py-2 "
                          )}>
                          Contact Us
                        </Link>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="border-b-2 w-full mt-6 border-b-[#0000001A]"></div>
      </nav>
    </div>
    // </div>
  );
};
