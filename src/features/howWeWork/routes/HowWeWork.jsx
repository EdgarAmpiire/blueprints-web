import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";
import { Consultation } from "../components/Consultation";
import { Principles } from "../components/Principles";

export const HowWeWork = () => {
  return (
    <div>
      <MainLayout page="how-we-work">
        <Hero />
        <Consultation />
        <Principles />
      </MainLayout>
    </div>
  );
};
