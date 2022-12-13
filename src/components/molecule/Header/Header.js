import React, { useState } from "react";
import {
  GreenLine,
  HeaderStyle,
  Title,
  ContentDescription,
} from "./Header.styles";

export default function HeaderContainer() {
  return (
    <>
      <HeaderStyle>
        <Title>Hi, I'm Chelsea Wylie</Title>
        <ContentDescription>Software Engineer | Musician </ContentDescription>
        <GreenLine />
      </HeaderStyle>
    </>
  );
}
