import React from "react";
import {
  CompanyName,
  JobDetails,
  ContentDescription,
  ExpContainer,
  GridContainer,
  GridItem,
  JobDates,
  JobTitle,
} from "./Experience.styles";

import Angular from "../../../assets/Angular.png";
import CSS from "../../../assets/CSS.jpg";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import javascript from "../../../assets/JS.png";
import react from "../../../assets/react.png";
import typescript from "../../../assets/typescript.png";

export default function ExperienceContainer() {
  return (
    <ExpContainer>
      <GridContainer>
        <GridItem>
          <CompanyName>Nexient</CompanyName>
          <JobTitle>Software Engineer</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>November 2020 - present</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>Text here</ContentDescription>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem>
          <CompanyName>Grand Circus</CompanyName>
          <JobTitle>Instructor</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>October 2020 - May 2022</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>Text here</ContentDescription>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem>
          <CompanyName>Informa Intelligence</CompanyName>
          <JobTitle>Sales Operations Specialist</JobTitle>
          <JobTitle>Client Success Manager</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>June 2017 - November 2020</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>Text here</ContentDescription>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem>
          <CompanyName>Dearborn School of Music</CompanyName>
          <JobTitle>Private Music Instructor</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>February 2018 - March 2020</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>Text here</ContentDescription>
        </GridItem>
      </GridContainer>
    </ExpContainer>
  );
}
