import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

function Course() {
  const location = useLocation();

  return <Container>{location.state.name}</Container>;
}

export default Course;

const Container = styled.div``;
