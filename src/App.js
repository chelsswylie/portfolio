// import logo from "./logo.svg";
// import "./App.css";
// // import GridContainer from "./components/organism/Grid";
// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<HeaderContainer />} />
//           <Route exact path="/Experience" element={<ExperienceContainer />} />
//           <Route exact path="/Education" element={<EducationContainer />} />
//           <Route exact path="/Portfolio" element={<PortfolioContainer />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./components/molecule/Header/Header";
import ExperienceContainer from "./components/molecule/Experience/Experience";
import EducationContainer from "./components/molecule/Education/Education";
import PortfolioContainer from "./components/molecule/Portfolio/Portfolio";
import Navigation from "./components/molecule/Navigation/Navigation";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HeaderContainer />} />
        <Route path="Experience" element={<ExperienceContainer />} />
        <Route path="Education" element={<EducationContainer />} />
      </Routes>
    </div>
  );
}

export default App;
