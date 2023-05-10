import React from "react";
// import defaultLogo from "../../../assets/founders-logo.png";
import { Link } from "react-router-dom";


  export const Navbar = ({ page }) => {
  
  
    return (
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-baseColor mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              <Link className="flex items-center p-2 w-40 text-[#0055BA]" to="/">
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
                  to="/home"
                  className={
                    page === "home"
                      ? "nav-link font-semibold p-0 underline underline-offset-8 decoration-2 text-white decoration-black"
                      : "nav-link p-0"
                  }
                >
                  <p className="cursor-pointer text-lg 2xl:text-lg px-3 py-2 rounded-md hover:text-white transition ease-in-out delay-50 duration-300">
                    Home
                  </p>
                </Link>
              </li> <li className="nav-item">
                <Link
                  to="/about-us"
                  className={
                    page === "about-us"
                      ? "nav-link font-semibold p-0 underline underline-offset-8 decoration-2 text-white decoration-black"
                      : "nav-link p-0"
                  }
                >
                  <p className="cursor-pointer text-lg 2xl:text-lg px-3 py-2 rounded-md hover:text-white transition ease-in-out delay-50 duration-300">
                    About Us
                  </p>
                </Link>
              </li> 
               
              <li className="nav-item">
                <Link
                  to="/how-we-work"
                  className={
                    page === "how-we-work"
                      ? "nav-link font-semibold p-0 underline underline-offset-8 decoration-2 text-white decoration-black"
                      : "nav-link p-0"
                  }
                >
                  <p className="cursor-pointer text-lg 2xl:text-lg px-3 py-2 rounded-md hover:text-white transition ease-in-out delay-50 duration-300">
                   How We Work
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/services"
                  className={
                    page === "services"
                      ? "nav-link font-semibold p-0 underline underline-offset-8 decoration-2 text-white decoration-black"
                      : "nav-link p-0"
                  }
                >
                  <p className="cursor-pointer text-lg 2xl:text-lg px-3 py-2 rounded-md hover:text-white transition ease-in-out delay-50 duration-300">
                    Services
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
                      ? "nav-link  bg-[#0055BA] px-5 py-3 text-white rounded-md text-base  "
                      : "nav-link  bg-[#0055BA] px-5 py-3 text-white rounded-md text-base "
                  }
                >
                  {/* <p className="cursor-pointer text-lg 2xl:text-lg px-3 py-2 rounded-md hover:text-white transition ease-in-out delay-50 duration-300"> */}
                    Contact Us
                  {/* </p> */}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
    
};