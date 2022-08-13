import React from "react";
import {
  // CompanyName,
  // JobTitle,
  // JobDates,
  ContentDescription,
  ExpContainer,
} from "./Experience.styles";

import Angular from "../../../assets/Angular.png";
import CSS from "../../../assets/CSS.jpg";
import git from "../../../assets/git.png";
import github from "../../../assets/github.png";
import javascript from "../../../assets/JS.png";
import react from "../../../assets/react.png";
import typescript from "../../../assets/typescript.png";

export default function ExperienceContainer() {
  return (
    <ExpContainer>
      <div className="grid-item">
        <span>
          <div>Nexient</div>
          <div>Software Engineer</div>
          <div>November 2020 - present</div>
        </span>

        <ContentDescription>
          <ul>
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
          </ul>
        </ContentDescription>
      </div>
      <div className="grid-item">
        <span>
          <div>Grand Circus</div>
          <div>Instructor and Teaching Assistant</div>
          <div>October 2020 - May 2022</div>
        </span>

        <ContentDescription>
          <ul>
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
          </ul>
        </ContentDescription>
      </div>

      <div className="grid-item">
        <span>
          <div>Informa Intelligence</div>
          <div>Sales Operations Coordinator</div>
          <div>Client Success Manager</div>
          <div>June 2017 - November 2020</div>
        </span>

        <ContentDescription>
          <ul>
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
          </ul>
        </ContentDescription>
      </div>

      <div className="grid-item">
        <span>
          <div>Dearborn School of Music</div>
          <div>Private Music Instructor</div>
          <div>February 2018 - March 2020</div>
        </span>

        <ContentDescription>
          <ul>
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
          </ul>
        </ContentDescription>
      </div>
    </ExpContainer>
  );
}
