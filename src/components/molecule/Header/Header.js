import React, { useState } from "react";
import { HeaderStyle, Title, ContentDescription } from "./Header.styles";
import LetsConnect from "../../atom/Holler/Holler";

export default function HeaderContainer() {
  return (
    <>
      <HeaderStyle>
        <Title>Chelsea Wylie</Title>
        <ContentDescription>Software Engineer | Musician </ContentDescription>

        <LetsConnect />
      </HeaderStyle>
    </>
  );
}
