import React from "react";
import {
  SchoolName,
  AchievementReceived,
  SchoolDates,
  EduContainer,
  GridItem,
} from "./Education.styles";

export default function GridContainer() {
  return (
    <EduContainer>
      <GridItem>
        <SchoolName>Grand Circus</SchoolName>
        <AchievementReceived>
          Front End Web Development Bootcamp Graduate
        </AchievementReceived>
        <SchoolDates>Certificate Received: June, 2020</SchoolDates>
      </GridItem>
      <GridItem>
        <SchoolName>Central Michigan</SchoolName>
        <AchievementReceived>BA Music Performance</AchievementReceived>
        <SchoolDates>Degree Received: June, 2015</SchoolDates>
      </GridItem>
    </EduContainer>
  );
}
