import React from "react";
import { MainLayout } from "../../../components/layout/MainLayout";
import { Hero } from "../components/Hero";
import { HomeServices } from "../components/HomeServices";
import { Clients } from "../components/Clients";
import { HomeBlog } from "../components/HomeBlog";
import { Banner } from "../components/Banner";

export const Home = () => {
  return (
    <div>
      <MainLayout page="home">
        <div className="flex items-center justify-center">

        <div className="lg:max-w-7xl max-w-3xl">
          <Hero />
          <HomeServices />
          <Banner />
          <Clients />
          <HomeBlog />
        </div>
        </div>
      </MainLayout>
    </div>
  );
};
