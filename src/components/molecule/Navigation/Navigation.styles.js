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
  color: green;
  &:hover {
    background-color: #d8f9ff;
  }
  &:active {
    background-color: #d3d3d3;
  }
`;
