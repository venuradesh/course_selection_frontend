import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Scholarship({ header, link }) {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="heading">{header}</div>
      <div className="btn-container" onClick={() => navigate(link)}>
        Show Details
      </div>
    </Container>
  );
}

export default Scholarship;

const Container = styled.div`
  background-color: white;
  box-shadow: 0 0 3px 1px var(--medium-gray);
  width: 300px;
  height: 130px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  .heading {
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10px;
  }

  .btn-container {
    font-size: 0.8rem;
    background-color: var(--blue-btn);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: var(--blue-btn-alt);
    }
  }
`;
