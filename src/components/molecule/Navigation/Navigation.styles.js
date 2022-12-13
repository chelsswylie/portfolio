import styled from "styled-components";

export const NavBar = styled.div`
  justify-content: center;
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
  justify-content: space-around;
  height: 100vh;
  width: auto;
  position: fixed;
  overflow: auto;
`;

export const ListItem = styled.li`
  display: block;
  padding: 5px;
  &:hover {
    color: teal;
  }
  &:active {
    color: purple;
  }
`;

export const CallToAction = styled.div`
  margin-top: 20%;
`;

export const ContactInfo = styled.div`
  margin-top: 15%;
`;
