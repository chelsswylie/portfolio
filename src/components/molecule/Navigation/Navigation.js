import React from "react";
import { NavLink } from "react-router-dom";
import {
  CallToAction,
  UnorderedList,
  NavBar,
  ListItem,
  ContactInfo,
} from "./Navigation.styles";
import Resume from "../../../assets/ChelseaWylieResume.pdf";
import emailIcon from "../../../assets/emailicon.png";
import linkedinIcon from "../../../assets/linkedinIcon.png";

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
        <CallToAction>
          Let's connect!
          <ContactInfo>
            <img
              class="img1"
              src={emailIcon}
              style={{ height: 15, width: 15 }}
            />
            : <a href="shelikestocode@gmail.com">shelikestocode@gmail.com</a>
            <br />
            <img
              class="img2"
              src={linkedinIcon}
              style={{ height: 15, width: 15 }}
            />
            : <a href="https://www.linkedin.com/in/chelsswylie/">LinkedIn</a>
          </ContactInfo>
        </CallToAction>
      </UnorderedList>
    </NavBar>
  );
}
