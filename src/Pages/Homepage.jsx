import React from "react";
import "./CSS/Homepage.css";
import { Location } from "../Components/Location/Location";
import { Heading } from "../Components/Heading/Heading";
import { Categories } from "../Components/Categories/Categories";
import { FAQ } from "../Components/FAQ/FAQ";
import { ActionBanner } from "../Components/ActionBanner/ActionBanner";
import { SpeicalThank } from "../Components/SpeicalThank/SpeicalThank";

export const Homepage = ({ currentTheme, setTheme }) => {
  return (
    <div className="homepage">
      <Heading currentTheme={currentTheme} setTheme={setTheme}/>
      <Categories />
      <ActionBanner />
      <Location />
      <SpeicalThank />
      <FAQ />
    </div>
  );
};
