import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const MainLayout = ({ page, children }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className=" max-w-7xl md:max-w-5xl ">
        <Navbar page={page} />
        {children}
        <Footer />
      </div>
    </div>
  );
};
