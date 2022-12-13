import React, { useState } from "react";
import {
  GreenLine,
  HeaderStyle,
  Title,
  ContentDescription,
} from "./Header.styles";
import LetsConnect from "../../atom/Holler/Holler";

export default function HeaderContainer() {
  return (
    <>
      <HeaderStyle>
        <Title>Hi, I'm Chelsea Wylie</Title>
        <ContentDescription>Software Engineer | Musician </ContentDescription>
        <GreenLine />
        <LetsConnect />
      </HeaderStyle>
    </>
  );
}
