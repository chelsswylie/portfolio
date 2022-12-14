import React from "react";
import { GridContainer, GridItem } from "./TechStack.styles";

import angular from "../../../assets/Angular.png";
import CSS from "../../../assets/CSS.jpg";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import javascript from "../../../assets/JS.png";
import react from "../../../assets/react.png";
import typescript from "../../../assets/typescript.jpg";
import jenkins from "../../../assets/Jenkins.png";
import nodejs from "../../../assets/node.png";
import figma from "../../../assets/figma.png";
import styledcomponent from "../../../assets/styled-components.png";
import jira from "../../../assets/Jira-Symbol.png";

export default function TechStack() {
  return (
    <div>
      <GridContainer>
        <GridItem>
          <img
            src={javascript}
            alt="javascript"
            style={{ height: 65, width: 65 }}
          />
        </GridItem>
        <GridItem>
          <img src={angular} alt="angular" style={{ height: 65, width: 65 }} />
        </GridItem>
        <GridItem>
          <img src={react} alt="react" style={{ height: 65, width: 65 }} />
        </GridItem>

        <GridItem>
          <img src={nodejs} alt="nodejs" style={{ height: 65, width: 65 }} />
        </GridItem>
        <GridItem>
          <img src={github} alt="github" style={{ height: 65, width: 65 }} />
        </GridItem>
        <GridItem>
          <img src={git} alt="git" style={{ height: 65, width: 65 }} />
        </GridItem>
        <GridItem>
          <img
            src={typescript}
            alt="typescript"
            style={{ height: 65, width: 65 }}
          />
        </GridItem>
        <GridItem>
          <img src={CSS} alt="CSS" style={{ height: 65, width: 65 }} />
        </GridItem>
        <GridItem>
          <img
            src={styledcomponent}
            alt="styledcomponent"
            style={{ height: 100, width: 100 }}
          />
        </GridItem>

        <GridItem>
          <img src={figma} alt="figma" style={{ height: 65, width: 65 }} />
        </GridItem>
        <GridItem>
          <img src={jenkins} alt="jenkins" style={{ height: 65, width: 65 }} />
        </GridItem>
        <GridItem>
          <img src={jira} alt="jira" style={{ height: 65, width: 65 }} />
        </GridItem>
      </GridContainer>
    </div>
  );
}
