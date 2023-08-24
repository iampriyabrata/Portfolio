import React from "react";
import Nav from "../components/Nav";
import AchivementsCard from "../components/AchivementsCard";
import HeroIntroduction from "../components/HeroIntroduction";

const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <HeroIntroduction></HeroIntroduction>
      <AchivementsCard></AchivementsCard>
    </div>
  );
};

export default Home;
