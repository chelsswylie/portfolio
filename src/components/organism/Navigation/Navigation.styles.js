import styled from "styled-components";

export const NavBar = styled.div`
  // display: flex;
  // justify-content: flex-start;
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
  justify-content: space-around;
  height: 5vh;
  width: 100%;
  // position: fixed;
  overflow: auto;
`;

export const ListItem = styled.li`
  display: inline;
  padding: 5px;
  color: green;
  &:hover {
    background-color: #d8f9ff;
  }
  &:active {
    background-color: #d3d3d3;
  }
`;
