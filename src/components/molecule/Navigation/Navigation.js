import React from "react";
import { NavLink } from "react-router-dom";
// import HeaderContainer from "./components/molecule/Header/Header";
// import ExperienceContainer from "./components/molecule/Experience/Experience";
// import EducationContainer from "./components/molecule/Education/Education";
// import PortfolioContainer from "./components/molecule/Portfolio/Portfolio";
import { UnorderedList, NavBar, ListItem } from "./Navigation.styles";

export default function Navigation() {
  return (
    <NavBar>
      <UnorderedList>
        <ListItem>
          <NavLink exact to="/">
            Home
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink exact to="/Experience">
            Experience
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink exact to="/Education">
            Education
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink exact to="/Portfolio">
            Portfolio
          </NavLink>
        </ListItem>
      </UnorderedList>
    </NavBar>
  );
}
