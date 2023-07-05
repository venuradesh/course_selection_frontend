import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function CourseCard({ header, specialization, details }) {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="course-content">
        <div className="heading">{header}</div>
        <div className="spec">{specialization}</div>
      </div>
      <div className="btn-container">
        <div className="btn" onClick={() => navigate("/course", { state: details })}>
          View
        </div>
      </div>
    </Container>
  );
}

export default CourseCard;

const Container = styled.div`
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: 0 0 5px 0 var(--medium-gray);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8rem;

  .course-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    row-gap: 10px;

    .heading {
      font-size: 0.9rem;
      font-weight: var(--font-w-h);
    }
  }

  .btn-container {
    width: 100%;
    display: flex;
    justify-content: center;

    .btn {
      padding: 5px 25px;
      background-color: var(--blue-btn-alt);
      color: white;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: var(--blue-btn);
      }
    }
  }
`;
