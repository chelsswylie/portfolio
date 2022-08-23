import styled from "styled-components";

export const CompanyName = styled.h4`
  width: 100%;
  text-align: left;
`;
export const JobTitle = styled.h5`
  width: 100%;
  text-align: left;
  font-weight: 200;
`;

export const JobDates = styled.span`
  width: 100%;
  text-align: left;
  font-weight: 200;
`;

export const ContentDescription = styled.div`
  width: 100%;
  text-align: center;
`;

export const ExpContainer = styled.div`
  height: 100vh;
`;

export const UL = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100%;
`;

export const LI = styled.li`
   {
    display: block;
    list-style: none;
  }
`;

export const Button = styled.button`
  button.prev,
  button.next {
    display: flex;
    font-size: 32px;
    align-items: center;
    justify-content: center;
    color: #fff;
    background-color: #333;
    border-radius: 50%;
    width: 44px;
    height: 44px;
  }
  ,
  button.prev {
    position: absolute;
    left: 0;
    top: 80px;
  }
  button.next {
    position: absolute;
    right: 0;
    top: 80px;
  }
`;
