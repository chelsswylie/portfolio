import React from "react";
import {
  CompanyName,
  JobDates,
  JobTitle,
  ContentDescription,
  ExpContainer,
  GridContainer,
  GridItem,
  UnorderedList,
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
        <ContentDescription>
          Completed a 6 month front-end development course focusing on
          development in the following:
          <UnorderedList>
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>Angular</li>
            <li>NodeJS</li>
            <li>Git/GitHub</li>
            <li>NodeJS</li>
            <li>TypeScript</li>
            <li>REST APIs</li>
            <li>SQL</li>
          </UnorderedList>
        </ContentDescription>
      </GridContainer>
      <GridContainer>
        <GridItem>
          <CompanyName>Central Michigan University</CompanyName>
          <JobTitle>BA Music Performance</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>Degree Received: June 2015</JobDates>
        </GridItem>
        <ContentDescription>
          <UnorderedList>
            <li>
              Studied Flute Performance under Dr. Joanna White between 2010 and
              2015
            </li>
            <li>
              Core studies included: Music Theory, Music History, Ear Training,
              and Piano
            </li>
            <li>
              Advanced studies included: Counterpoint, Composition, Piano{" "}
            </li>
          </UnorderedList>
        </ContentDescription>
      </GridContainer>
    </ExpContainer>
  );
}
