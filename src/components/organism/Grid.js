import React from "react";
import HeaderContainer from "../molecule/Header";
import ExperienceContainer from "../molecule/Experience";
import EducationContainer from "../molecule/Education";
import PortfolioContainer from "../molecule/Portfolio";
import { GridItem } from "./Grid.styles";

// grid is going to need to be able to accept props
export default function GridContainer() {
  return (
    <div className="grid-container">
      <GridItem>
        <HeaderContainer />
      </GridItem>
      <GridItem>
        <ExperienceContainer />
      </GridItem>
      <GridItem>
        <EducationContainer />
      </GridItem>
      <GridItem>
        <PortfolioContainer />
      </GridItem>
    </div>
  );
}
