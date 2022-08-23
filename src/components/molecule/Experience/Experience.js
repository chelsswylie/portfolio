import React from "react";
import {
  CompanyName,
  JobTitle,
  JobDates,
  ContentDescription,
  ExpContainer,
  UL,
  LI,
  Button,
} from "./Experience.styles";
import "./Experience.css";

import Angular from "../../../assets/Angular.png";
import CSS from "../../../assets/CSS.jpg";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import javascript from "../../../assets/JS.png";
import react from "../../../assets/react.png";
import typescript from "../../../assets/typescript.png";

export default function ExperienceContainer() {
  let liEls = document.querySelectorAll("ul li");
  let index = 0;
  window.show = function (increase) {
    index = index + increase;
    index = Math.min(Math.max(index, 0), liEls.length - 1);
    liEls[index].scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ExpContainer>
      <div className="grid-item">
        <span>
          <CompanyName>Nexient</CompanyName>
          <JobTitle>Software Engineer</JobTitle>
          <JobDates>November 2020 - present</JobDates>
        </span>

        <ContentDescription>
          <UL>
            <Button onclick="show(-1)">&lt;</Button>
            <LI>
              <img
                class="img1"
                src={Angular}
                style={{ height: 25, width: 25 }}
              />
            </LI>
            <LI>
              <img class="img2" src={CSS} style={{ height: 25, width: 25 }} />
            </LI>
            <LI>
              <img class="img3" src={git} style={{ height: 25, width: 25 }} />
            </LI>
            <LI>
              <img
                class="img4"
                src={github}
                style={{ height: 25, width: 25 }}
              />
            </LI>
            <LI>
              <img
                class="img5"
                src={javascript}
                style={{ height: 25, width: 25 }}
              />
            </LI>
            <LI>
              <img class="img6" src={react} style={{ height: 25, width: 25 }} />
            </LI>
            <LI>
              <img
                class="img7"
                src={typescript}
                style={{ height: 25, width: 25 }}
              />
            </LI>
            <Button onclick="show(+1)">&gt;</Button>
          </UL>
        </ContentDescription>
      </div>
      <div className="grid-item">
        <span>
          <CompanyName>Grand Circus</CompanyName>
          <JobTitle>Instructor and Teaching Assistant</JobTitle>
          <JobDates>October 2020 - May 2022</JobDates>
        </span>

        <ContentDescription>
          <ul>
            {/* <img class="img1" src={Angular} style={{ height: 25, width: 25 }} />
            <img class="img2" src={CSS} style={{ height: 25, width: 25 }} />
            <img class="img3" src={git} style={{ height: 25, width: 25 }} />
            <img class="img4" src={github} style={{ height: 25, width: 25 }} />
            <img
              class="img5"
              src={javascript}
              style={{ height: 25, width: 25 }}
            />
            <img class="img6" src={react} style={{ height: 25, width: 25 }} />
            <img
              class="img7"
              src={typescript}
              style={{ height: 25, width: 25 }}
            /> */}
          </ul>
        </ContentDescription>
      </div>

      <div className="grid-item">
        <span>
          <CompanyName>Informa Intelligence</CompanyName>
          <JobTitle>Sales Operations Coordinator</JobTitle>
          <JobTitle>Client Success Manager</JobTitle>
          <JobDates>June 2017 - November 2020</JobDates>
        </span>

        <ContentDescription>
          {/* <ul>
            <img class="img1" src={Angular} style={{ height: 25, width: 25 }} />
            <img class="img2" src={CSS} style={{ height: 25, width: 25 }} />
            <img class="img3" src={git} style={{ height: 25, width: 25 }} />
            <img class="img4" src={github} style={{ height: 25, width: 25 }} />
            <img
              class="img5"
              src={javascript}
              style={{ height: 25, width: 25 }}
            />
            <img class="img6" src={react} style={{ height: 25, width: 25 }} />
            <img
              class="img7"
              src={typescript}
              style={{ height: 25, width: 25 }}
            />
          </ul> */}
        </ContentDescription>
      </div>

      <div className="grid-item">
        <span>
          <CompanyName>Dearborn School of Music</CompanyName>
          <JobTitle>Private Music Instructor</JobTitle>
          <JobDates>February 2018 - March 2020</JobDates>
        </span>

        <ContentDescription>
          {/* <ul>
            <img class="img1" src={Angular} style={{ height: 25, width: 25 }} />
            <img class="img2" src={CSS} style={{ height: 25, width: 25 }} />
            <img class="img3" src={git} style={{ height: 25, width: 25 }} />
            <img class="img4" src={github} style={{ height: 25, width: 25 }} />
            <img
              class="img5"
              src={javascript}
              style={{ height: 25, width: 25 }}
            />
            <img class="img6" src={react} style={{ height: 25, width: 25 }} />
            <img
              class="img7"
              src={typescript}
              style={{ height: 25, width: 25 }}
            />
          </ul> */}
        </ContentDescription>
      </div>
    </ExpContainer>
  );
}
