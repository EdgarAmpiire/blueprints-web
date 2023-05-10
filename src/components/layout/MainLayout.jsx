import React from "react";
import { Navbar } from "./components/Navbar";

export const MainLayout = ({ page, children }) => {
  return (
    <div className="mx-20">
      <Navbar page={page} />
      {children}
    </div>
  );
};