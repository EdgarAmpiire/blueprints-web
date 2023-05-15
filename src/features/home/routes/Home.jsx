import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";
import { HomeServices } from "../components/HomeServices";
import { Clients } from "../components/Clients";
import { HomeBlog } from "../components/HomeBlog";

export const Home = () => {
  return (
    <div>
      <MainLayout page="home">
        <div>
          <Hero />
          <HomeServices />
          <Clients />
          <HomeBlog />
        </div>
      </MainLayout>
    </div>
  );
};
