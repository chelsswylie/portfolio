import styled from "styled-components";

export const CompanyName = styled.h4`
  text-align: left;
`;

export const JobTitle = styled.div`
  width: 50%;
  text-align: left;
  font-weight: 400;
`;

export const JobDates = styled.h5`
  width: 50%;
  text-align: left;
  font-weight: 200;
`;

export const ContentDescription = styled.h5`
  text-align: right;
  font-weight: 500;
`;

export const ExpContainer = styled.div`
  height: 80vh;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 5px;
  padding: 5px;
`;

export const GridItem = styled.span`
  text-align: center;
`;
