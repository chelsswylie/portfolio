import React from "react";
import HeaderContainer from '../molecule/Header'
import ExperienceContainer from '../molecule/Experience'
import EducationContainer from '../molecule/Education'
import PortfolioContainer from '../molecule/Portfolio'

// grid is going to need to be able to accept props
export default function GridContainer() {
    return (
    <div className="grid-container">
  <div className="grid-item">
      <HeaderContainer />
  </div>
  <div className="grid-item">
    <ExperienceContainer/>
  </div>
  <div className="grid-item">
    <EducationContainer />
  </div>
  <div className="grid-item">
    <PortfolioContainer />
  </div>
</div>
    )
}