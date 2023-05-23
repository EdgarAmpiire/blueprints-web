import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const MainLayout = ({ page, children }) => {
  return (
    <div className=" ">
      <div className=" ">
        <Navbar page={page} />
        {children}
        <Footer />
      </div>
    </div>
  );
};
