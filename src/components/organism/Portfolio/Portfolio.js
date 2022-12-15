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
            As a team of two husband and wife duos, we designed and developed an
            open-source fullstack project using Java, Springboot, Angular, and
            PostgreSQL to address the problem statement provided by the company
            Detroit Denim.
          </JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>
            <a href="https://github.com/chelsswylie/dfth2020">
              Link to source code
            </a>
          </ContentDescription>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <CompanyName>The Culture X-Change</CompanyName>
          {/* <JobTitle>LEARN | SHARE | BUILD</JobTitle> */}
          <JobDates>
            As our final capstone project, I joined 2 classmates to build an
            application to help spread knowledge about some global cultures
          </JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>
            <a href="https://github.com/chelsswylie/FINALPROJECT-CultureXchange">
              Link to source code
            </a>{" "}
            <br />
            <a href="https://the-culture-exchange.web.app/home">
              Link to project
            </a>
          </ContentDescription>
        </GridItem>
      </GridContainer>
    </ExpContainer>
  );
}
