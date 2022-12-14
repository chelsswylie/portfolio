import React from "react";
import {
  CompanyName,
  JobDates,
  JobTitle,
  ContentDescription,
  ExpContainer,
  GridContainer,
  GridItem,
} from "./Education.styles";

export default function EducationContainer() {
  return (
    <ExpContainer>
      <GridContainer>
        <GridItem>
          <CompanyName>Grand Circus</CompanyName>
          <JobTitle>Front-End Software Development Bootcamp</JobTitle>
        </GridItem>

        <GridItem>
          <JobDates>Certificate Received: June 2020</JobDates>
        </GridItem>
        <ContentDescription>Text here</ContentDescription>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <CompanyName>Central Michigan University</CompanyName>
          <JobTitle>BA Music Performance</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>Degree Received: June 2015</JobDates>
        </GridItem>
        <ContentDescription>Text here</ContentDescription>
      </GridContainer>
    </ExpContainer>
  );
}
