import React, { useState } from "react";
import {
  Spacer,
  HeaderStyle,
  Title,
  ContentDescription,
} from "./Header.styles";

import TechStack from "../../atom/TechStack/TechStack";

export default function HeaderContainer() {
  return (
    <>
      <HeaderStyle>
        <Title>Hi, I'm Chelsea Wylie</Title>
        <ContentDescription>Software Engineer | Musician </ContentDescription>
        <Spacer />
        <TechStack />
      </HeaderStyle>
    </>
  );
}
