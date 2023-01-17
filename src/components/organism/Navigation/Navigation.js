import React from "react";
import { NavLink } from "react-router-dom";
import {
  CallToAction,
  UnorderedList,
  NavBar,
  ListItem,
  ContactInfo,
} from "./Navigation.styles";

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
          <a
            href="https://portfolio-cw-2023.s3.amazonaws.com/ChelseaWylieResume.pdf"
            download
          >
            Resume
          </a>
        </ListItem>
      </UnorderedList>
    </NavBar>
  );
}
