import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";
import { Glance } from "../components/Glance";
import { Team } from "../components/Team";

export const AboutUs = () => {
  return (
    <div>
      <MainLayout page="about-us">
        <Hero />
        <div className="flex items-center justify-center">
      <div className="lg:max-w-7xl max-w-3xl"  >
        <Glance />
        <Team />
        </div>
        </div>
      </MainLayout>
    </div>
  );
};
