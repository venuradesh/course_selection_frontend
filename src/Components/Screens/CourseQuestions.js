import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function CourseQuestions() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="back" onClick={() => navigate("/")}>
        {"< Back"}
      </div>
      <div className="courses">
        <div className="item">Budget Range</div>
        <div className="item">Degree Duration Selection</div>
        <div className="item">A/L Passes</div>
        <div className="item">A/L Stream Dropdown</div>
        <div className="item">Location</div>
        <div className="item">Interest Area Dropdown</div>
      </div>
    </Container>
  );
}

export default CourseQuestions;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  padding-bottom: 20px;
  position: relative;
  padding-inline: 30px;

  .back {
    position: absolute;
    top: 20px;
    font-size: 1.2rem;
    color: var(--blue-btn-alt);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: var(--font-w-h);

    &:hover {
      color: var(--blue-btn);
    }
  }

  .courses {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 70%;
    column-gap: 20px;
    row-gap: 20px;
    padding-left: 50px;

    .item {
      flex: 1;
      background-color: #cbe5fe;
      border: 1px solid var(--text-clr);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
    }
  }
`;
