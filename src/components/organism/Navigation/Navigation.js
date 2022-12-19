import React from "react";
import { NavLink } from "react-router-dom";
import {
  CallToAction,
  UnorderedList,
  NavBar,
  ListItem,
  ContactInfo,
} from "./Navigation.styles";
import Resume from "../../../assets/Chelsea_Wylie_Resume.pdf";

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
        <ListItem>
          <a href={Resume} download>
            Resume
          </a>
        </ListItem>
      </UnorderedList>
    </NavBar>
  );
}
