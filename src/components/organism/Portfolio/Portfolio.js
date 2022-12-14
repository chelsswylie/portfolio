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

          <JobDates>
            <a href="https://github.com/chelsswylie/dfth2020">
              Link to source code
            </a>
          </JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>Text here</ContentDescription>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <CompanyName>The Culture X-Change</CompanyName>
          <JobTitle>
            <a href="https://the-culture-exchange.web.app/home">
              Link to project
            </a>
          </JobTitle>
          <JobDates>
            <a href="https://github.com/chelsswylie/FINALPROJECT-CultureXchange">
              Link to source code
            </a>
          </JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>Text here</ContentDescription>
        </GridItem>
      </GridContainer>
    </ExpContainer>
  );
}
