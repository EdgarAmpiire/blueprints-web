import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";
import { Glance } from "../components/Glance";

export const AboutUs = () => {
  return (
    <div>
      <MainLayout page="about-us">
        <Hero />
        <Glance />
      </MainLayout>
    </div>
  );
};
