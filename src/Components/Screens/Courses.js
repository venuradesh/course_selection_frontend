import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Courses() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="back" onClick={() => navigate("/")}>
        {"< Back"}
      </div>
      <div className="courses">
        <div className="item">Course</div>
        <div className="item">Course</div>
        <div className="item">Course</div>
        <div className="item">Course</div>
        <div className="item">Course</div>
      </div>
    </Container>
  );
}

export default Courses;

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
    width: 100%;
    height: 100%;
    column-gap: 20px;

    .item {
      flex: 1;
      height: 100%;
      background-color: #cbe5fe;
      border: 1px solid var(--text-clr);
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
