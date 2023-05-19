import React from "react";
// import defaultLogo from "../../../assets/founders-logo.png";
import { Link } from "react-router-dom";


  export const Navbar = ({ page }) => {
  
  
    return (
      <nav className="relative flex flex-wrap items-center justify-between px-0 py-0 ">
        <div className="container px-0 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-0 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
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
            className="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
            
            <li className="nav-item">
                <Link
                  to="/"
                  className={
                    page === "home"
                      ? "nav-link p-0 underline underline-offset-8 decoration-2 decoration-black"
                      : "nav-link p-0"
                  }
                >
                  <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300">
                    Home
                  </p>
                </Link>
              </li> <li className="nav-item">
                <Link
                  to="/about-us"
                  className={
                    page === "about-us"
                      ? "nav-link p-0 underline underline-offset-8 decoration-2 decoration-black"
                      : "nav-link p-0"
                  }
                >
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
                  }
                >
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
                  }
                >
                  <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300">
                    Services
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/resource"
                  className={
                    page === "resource"
                      ? "nav-link p-0 underline underline-offset-8 decoration-2 decoration-black"
                      : "nav-link p-0"
                  }
                >
                  <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300">
                    Resource
                  </p>
                </Link>
              </li>
            </ul>
          </div>

          <div
            className="lg:flex flex-grow items-center"
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none ml-auto">
            
              <li className="nav-item">
                <Link
                  to="/contact-us"
                  className={
                    page === "contact-us"
                      ? "nav-link  bg-[#0055BA] px-4 py-1.5 text-white rounded-md  text-base 2xl:text-base "
                      : "nav-link  bg-[#0055BA] px-4 py-1.5 text-white rounded-md text-base 2xl:text-base"
                  }
                >
                  {/* <p className="cursor-pointer text-base 2xl:text-base px-3 py-2 rounded-md  transition ease-in-out delay-50 duration-300"> */}
                    Contact Us
                  {/* </p> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b-2 w-full mt-6 border-b-[#0000001A]">
          
        </div>
      </nav>
    );
    
};