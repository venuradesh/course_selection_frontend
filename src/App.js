import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Router>
        <div className="container">Container</div>
        <Routes></Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``;
