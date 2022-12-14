import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/organism/Header/Header";
import ExperienceContainer from "./components/organism/Experience/Experience";
import EducationContainer from "./components/organism/Education/Education";
import PortfolioContainer from "./components/organism/Portfolio/Portfolio";
import Navigation from "./components/organism/Navigation/Navigation";
import Footer from "./components/organism/Footer/Footer";

import React from "react";
import { MainContainer } from "./App.styles";

function App() {
  return (
    <div className="App" id="AppMain">
      <Navigation />
      <MainContainer>
        <Routes>
          <Route path="/" element={<HeaderContainer />} />
          <Route path="Experience" element={<ExperienceContainer />} />
          <Route path="Education" element={<EducationContainer />} />
          <Route path="Portfolio" element={<PortfolioContainer />} />
        </Routes>
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
