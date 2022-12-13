import React from "react";
import { FooterContainer, ContactInfo } from "./Footer.styles";
import emailIcon from "../../../assets/emailicon.png";
import linkedinIcon from "../../../assets/linkedinIcon.png";

export default function Footer() {
  return (
    <FooterContainer>
      <ContactInfo>Let's connect!</ContactInfo>
      <ContactInfo>
        <img class="img1" src={emailIcon} style={{ height: 15, width: 15 }} />
        <a href="shelikestocode@gmail.com">shelikestocode@gmail.com</a>
      </ContactInfo>
      <ContactInfo>
        <img
          class="img2"
          src={linkedinIcon}
          style={{ height: 15, width: 15 }}
        />
        <a href="https://www.linkedin.com/in/chelsswylie/">LinkedIn</a>
      </ContactInfo>
    </FooterContainer>
  );
}
