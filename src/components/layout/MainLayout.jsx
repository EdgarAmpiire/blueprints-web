import React from "react";
// import { NavBar } from "./components/NavBar";

export const MainLayout = ({ page, children }) => {
  return (
    <div>
      <NavBar page={page} />
      {children}
    </div>
  );
};