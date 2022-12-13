import React from "react";
import {
  CompanyName,
  ContentDescription,
  ExpContainer,
  GridContainer,
  GridItem,
  JobTitle,
  JobDates,
} from "./Portfolio.styles";

export default function PortfolioContainer() {
  return (
    <ExpContainer>
      <GridContainer>
        <GridItem>
          <CompanyName>
            Detroit Fashion and Tech Hackathon, 2nd Place
          </CompanyName>
          <JobTitle>Link to Project</JobTitle>
          <JobDates>Link to Source Code</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>Text here</ContentDescription>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <CompanyName>The Culture X-Change</CompanyName>
          <JobTitle>Link to Project</JobTitle>
          <JobDates>Link to Source Code</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>Text here</ContentDescription>
        </GridItem>
      </GridContainer>
    </ExpContainer>
  );
}
