import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const MainLayout = ({ page, children }) => {
  return (
    <div className="flex items-center justify-center ">
      <div className="mx-20 lg:mx-0 md:mx-0  max-w-6xl lg:max-w-7xl ">
        <Navbar page={page} />
        {children}
        <Footer />
      </div>
    </div>
  );
};
