import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";
import { Consultation } from "../components/Consultation";

export const HowWeWork = () => {
  return (
    <div>
      <MainLayout page="how-we-work">
        <Hero />
        <Consultation />
      </MainLayout>
    </div>
  );
};
