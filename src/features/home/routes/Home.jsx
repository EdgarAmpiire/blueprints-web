import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";
import { HomeServices } from "../components/HomeServices";

export const Home = () => {
  return (
    <div>
      <MainLayout page="home">
       <Hero />
       <HomeServices />
      </MainLayout>
    </div>
  );
};
