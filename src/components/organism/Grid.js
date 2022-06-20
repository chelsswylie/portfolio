import React from "react";
import HeaderContainer from "../molecule/Header/Header";
import ExperienceContainer from "../molecule/Experience/Experience";
import EducationContainer from "../molecule/Education/Education";
import PortfolioContainer from "../molecule/Portfolio/Portfolio";
import Container from "@mui/material/Container";

import { ContainerItem } from "./Grid.styles";

// grid is going to need to be able to accept props
export default function GridContainer() {
  return (
    <Container maxWidth="md">
      <ContainerItem>
        <HeaderContainer />
      </ContainerItem>

      <ContainerItem>
        <ExperienceContainer />
      </ContainerItem>

      <ContainerItem>
        <EducationContainer />
      </ContainerItem>

      <ContainerItem>
        <PortfolioContainer />
      </ContainerItem>
    </Container>
  );
}
