import React from "react";
import {MainLayout} from "../../../components/layout/MainLayout"
import { Hero } from "../components/Hero";
import { DigitalLab } from "../components/DigitalLab";

export const Services = () => {
  return (
    <div>
    <MainLayout page="servicess">
       <div>
        <Hero />
        <DigitalLab />
       </div>
      </MainLayout>
    </div>
  );
};
