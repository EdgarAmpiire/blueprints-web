import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const MainLayout = ({ page, children }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="mx-20 lg:mx-32 max-w-5xl ">
        <Navbar page={page} />
        {children}
      <Footer />
      </div>
      {/* <div className="flex"> */}

      {/* </div> */}
    </div>
  );
};
