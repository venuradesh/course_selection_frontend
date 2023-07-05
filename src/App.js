import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//components
import Home from "./Components/Screens/Home";
import Header from "./Components/Parts/Header";

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
  }
`;
