import React from "react";
import Angular from "../../assets/Angular.png";
import AWS from "../../assets/AWS.png";
import CSS from "../../assets/CSS.jpg";
import GIT from "../../assets/git.png";
import GITHUB from "../../assets/github.png";
import JS from "../../assets/JS.png";
import REACT from "../../assets/react.png";
import typescript from "../../assets/typescript.png";

export default function ExperienceContainer() {
  return (
    <>
      <div className="experience-container" style={{ height: "100vh" }}>
        {/* <div className="grid-item"> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Nexient Software Developer II, November 2021 - Present Software
          Developer I, November 2020 - November 2021
        </div>
        <div>
          <img
            src={Angular}
            alt="Angular"
            style={{ height: "5%", width: "5%" }}
          />
          <img src={AWS} alt="AWS" style={{ height: "5%", width: "5%" }} />
          <img src={CSS} alt="CSS" style={{ height: "5%", width: "5%" }} />
          <img src={GIT} alt="GIT" style={{ height: "5%", width: "5%" }} />
          <img
            src={GITHUB}
            alt="GITHUB"
            style={{ height: "5%", width: "5%" }}
          />
          <img src={JS} alt="JS" style={{ height: "5%", width: "5%" }} />
          <img src={REACT} alt="REACT" style={{ height: "5%", width: "5%" }} />
          <img
            src={typescript}
            alt="TYPESCRIPT"
            style={{ height: "5%", width: "5%" }}
          />
        </div>
        {/* </div> */}
      </div>
      <div className="grid-item">
        <div>Grand Circus</div>
      </div>
      <div className="grid-item">
        <div>Informa</div>
      </div>
      <div className="grid-item">
        <div>Dearborn School of Music</div>
      </div>
    </>
  );
}
