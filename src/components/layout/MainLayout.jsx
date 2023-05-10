import React from "react";
import { Navbar } from "./components/Navbar";

export const MainLayout = ({ page, children }) => {
  return (
    <div>
      <Navbar page={page} />
      {children}
    </div>
  );
};