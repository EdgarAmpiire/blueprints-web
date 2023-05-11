import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";
import { HomeServices } from "../components/HomeServices";
import { Clients } from "../components/Clients";

export const Home = () => {
  return (
    <div>
      <MainLayout page="home">
       <Hero />
       <HomeServices />
       <Clients />
      </MainLayout>
    </div>
  );
};
