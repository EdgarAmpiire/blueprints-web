import React from "react";
import { Navbar } from "./components/Navbar";

export const MainLayout = ({ page, children }) => {
  return (
    <div className="flex items-center justify-center ">

    <div className="mx-20 lg:mx-32 max-w-5xl mb-24 ">
      <Navbar page={page} />
      {children}
    </div>
    </div>
  );
};