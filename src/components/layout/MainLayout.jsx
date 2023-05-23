import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const MainLayout = ({ page, children }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" max-w-4xl md:max-w-5xl lg:max-w-7xl ">
        <Navbar page={page} />
        {children}
        <Footer />
      </div>
    </div>
  );
};
