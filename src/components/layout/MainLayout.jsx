import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export const MainLayout = ({ page, children }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="mx-20 lg:mx-32 max-w-5xl mb-24 ">
        <Navbar page={page} />
        {children}
      </div>
      <Footer />
    </div>
  );
};
