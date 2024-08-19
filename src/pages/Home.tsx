import { FeaturedProperties } from "components/HomePage/FeaturedProperties";
import { FrequentlyQuestions } from "components/HomePage/FrequentlyQuestions";
import { MainContent } from "components/HomePage/MainContent";
import { MainContentCards } from "components/HomePage/MainContentCards";
import { Reviews } from "components/HomePage/Reviews";
import React from "react";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <MainContent />
      <MainContentCards />
      <FeaturedProperties />
      <Reviews />
      <FrequentlyQuestions />
    </React.Fragment>
  );
};
