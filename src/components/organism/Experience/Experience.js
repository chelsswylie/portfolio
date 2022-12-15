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

export default function ExperienceContainer() {
  return (
    <ExpContainer>
      <h1>Experience</h1>
      <GridContainer>
        <GridItem>
          <CompanyName>Nexient</CompanyName>
          <JobTitle>Software Engineer</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>November 2020 - present</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>
            Developed code in an Agile environment for several clients at
            Nexient, including: The Home Depot, Pacific Gas & Electric, and
            First Republic Bank
          </ContentDescription>
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
          <ContentDescription>
            Taught several classes at Grand Circus, including Intro to Coding
            and Intro to HTML and CSS.
          </ContentDescription>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem>
          <CompanyName>Informa Intelligence</CompanyName>
          <JobTitle>Sales Operations Specialist</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>March 2020 - November 2020</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>
            Helped to support sales initiatives within Informa, including but
            not limited to: Salesforce assistance, provisioning access, and
            working to ensure divisional processes are being adhered to when
            approving opportunities.
          </ContentDescription>
        </GridItem>
      </GridContainer>

      <GridContainer>
        <GridItem>
          <CompanyName>Informa Intelligence</CompanyName>
          <JobTitle>Client Success Manager</JobTitle>
        </GridItem>
        <GridItem>
          <JobDates>June 2017 - March 2020</JobDates>
        </GridItem>
        <GridItem>
          <ContentDescription>
            Helped to support Wards clients with purchased products and their
            data needs. Tasks ranged from providing data, supporting marketing
            needs, updating internal business processes, and regularly
            communicating with clients to ensure customer satisfaction.
          </ContentDescription>
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
          <ContentDescription>
            Worked part-time as a Music Educator, teaching beginner and
            intermediate students instruments including the flute, guitar, and
            ukulele. Topics covered during lessons include: music theory
            practice, how to read and count notes, basic instrument maintenance,
            and dexterity exercises.
          </ContentDescription>
        </GridItem>
      </GridContainer>
    </ExpContainer>
  );
}
