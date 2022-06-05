import React from "react";
import ContentContainer from '../atom/Content'
import ExperienceContainer from '../atom/Experience'
import EducationContainer from '../atom/Education'
import PortfolioContainer from '../atom/Portfolio'

// grid is going to need to be able to accept props
export default function GridContainer() {
    return (
    <div className="grid-container">
  <div className="grid-item">
      <ContentContainer />
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