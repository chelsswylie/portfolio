import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/molecule/Header/Header";
import ExperienceContainer from "./components/molecule/Experience/Experience";
import EducationContainer from "./components/molecule/Education/Education";
import PortfolioContainer from "./components/molecule/Portfolio/Portfolio";
import Navigation from "./components/molecule/Navigation/Navigation";
import React from "react";
import { MainContainer } from "./App.styles";

function App() {
  return (
    <div className="App" id="AppMain">
      <MainContainer>
        <Navigation />
        <Routes>
          <Route path="/" element={<HeaderContainer />} />
          <Route path="Experience" element={<ExperienceContainer />} />
          <Route path="Education" element={<EducationContainer />} />
          <Route path="Portfolio" element={<PortfolioContainer />} />
        </Routes>
      </MainContainer>
    </div>
  );
}

export default App;
