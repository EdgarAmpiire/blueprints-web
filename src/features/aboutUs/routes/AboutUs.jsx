import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";

export const AboutUs = () => {
  return (
    <div>
      <MainLayout page="about-us">
        <Hero />
      </MainLayout>
    </div>
  );
};
