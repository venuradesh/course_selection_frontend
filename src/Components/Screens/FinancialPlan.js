import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//images
import FinancialImage from "../../assets/financial-image.jpg";

//data
import details from "../Data/scholarshipDetails";
import Scholarship from "../Parts/ScholarshipCard";

function FinancialPlan() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="back" onClick={() => navigate("/career")}>
        {"< Back"}
      </div>
      <div className="container">
        <div className="card-content">
          <div className="card-heading">Scholarship Details</div>
          <div className="card-container">
            {details.map((item) => (
              <Scholarship header={item.name} desc={item.desc} link={item.link} />
            ))}
          </div>
        </div>
        <div className="image">
          <img src={FinancialImage} alt="financial plan" />
        </div>
      </div>
    </Container>
  );
}

export default FinancialPlan;

const Container = styled.div`
  display: flex;
  row-gap: 30px;
  justify-content: space-between;
  width: 100%;
  height: 90%;
  padding-inline: 50px;
  padding-top: 50px;
  padding-right: 100px;
  position: relative;
  z-index: 0;

  .back {
    position: absolute;
    top: 20px;
    font-size: 1.2rem;
    color: var(--blue-btn-alt);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: var(--font-w-h);
    z-index: 1;

    &:hover {
      color: var(--blue-btn);
    }
  }

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;

    .card-content {
      flex: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .card-heading {
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--text-clr-dark);
        text-align: center;
        margin-bottom: 30px;
      }

      .card-container {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        column-gap: 20px;
        row-gap: 20px;
      }
    }

    .image {
      flex: 1;
      width: max-content;
      position: relative;
      top: 50px;
      left: 100px;

      img {
        width: 600px;
      }
    }
  }
`;
