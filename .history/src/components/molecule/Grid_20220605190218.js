import React from "react";
import ContentContainer from './Content'
import ExperienceContainer from './Experience'
import EducationContainer from './Education'
import PortfolioContainer from './Portfolio'

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