import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";

export const Home = () => {
  return (
    <div>
      <MainLayout page="home">
       <Hero />
      </MainLayout>
    </div>
  );
};
