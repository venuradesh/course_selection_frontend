import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Home from "./Components/Screens/Home";
import Header from "./Components/Parts/Header";
import Course from "./Components/Screens/Course";
import Courses from "./Components/Screens/Courses";
import CourseQuestions from "./Components/Screens/CourseQuestions";
import JobOpportunities from "./Components/Screens/JobOpportunities";
import JobDetails from "./Components/Screens/JobDetails";
import RiskCalculator from "./Components/Screens/RiskCalculator";
import FinancialPlan from "./Components/Screens/FinancialPlan";
import ScholarshipDetails from "./Components/Screens/ScholarshipDetails";
import Loan from "./Components/Screens/Loan";

function App() {
  return (
    <Container>
      <Router>
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/course" element={<Course />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route exact path="/career" element={<JobOpportunities />} />
            <Route exact path="/career/:id" element={<JobDetails />} />
            <Route exact path="/coursequestions" element={<CourseQuestions />} />
            <Route exact path="/riskanalysis" element={<RiskCalculator />} />
            <Route exact path="/financial" element={<FinancialPlan />} />
            <Route exact path="/financial/:id" element={<ScholarshipDetails />} />
            <Route exact path="/loanapply" element={<Loan />} />
          </Routes>
        </div>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 0;

  .header {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 60px;
  }

  .content {
    position: relative;
    width: 100%;
    height: calc(100% - 60px);
    top: 60px;
    z-index: -100;
  }
`;
