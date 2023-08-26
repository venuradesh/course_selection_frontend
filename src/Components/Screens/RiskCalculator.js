import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//images
import RiskAnalysis from "../../assets/risk-analysis.jpg";

function RiskCalculator() {
  const navigate = useNavigate();
  const [risk, setRisk] = useState("");
  const [riskOutput, setRiskOutput] = useState(false);

  const RiskCalulate = () => {
    setRiskOutput(true);
    setRisk("High");
  };

  return (
    <Container>
      <div className="back" onClick={() => navigate("/career")}>
        {"< Back"}
      </div>
      <div className="cal-container">
        <div className="risk-heading">Risk Calculator</div>
        <div className="form-content">
          <div className="loan">
            <label htmlFor="loan-amount">Loan Amount (Rs.)</label>
            <input type="number" name="loan-amount" />
          </div>
          <div className="salary">
            <label htmlFor="salary-amount">Salary Amount (Rs.)</label>
            <input type="number" name="salary-amount" />
          </div>
          <div className="btn-container" onClick={() => RiskCalulate()}>
            Calulate Risk
          </div>
          {riskOutput ? <div className="output">Risk: {risk}</div> : <React.Fragment></React.Fragment>}
        </div>
      </div>
      <div className="risk-cover">
        <img src={RiskAnalysis} alt="risk-analysis" />
      </div>
    </Container>
  );
}

export default RiskCalculator;

const Container = styled.div`
  display: flex;
  row-gap: 30px;
  justify-content: space-between;
  width: 100%;
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

  .risk-cover {
    flex: 1;

    img {
      width: 600px;
    }
  }

  .cal-container {
    flex: 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .risk-heading {
      font-size: 2rem;
      font-weight: 600;
      color: var(--text-clr-dark);
      text-transform: uppercase;
      margin-bottom: 30px;
    }

    .form-content {
      width: 60%;

      .loan,
      .salary {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        justify-content: space-between;
        margin-bottom: 20px;

        label {
          font-size: 1rem;
        }

        input {
          width: 50%;
          height: 50px;
          background: none;
          border: none;
          box-shadow: 0 0 5px 2px var(--medium-gray);
          outline: none;
          border-radius: 8px;
          padding-inline: 10px;
        }
      }

      .btn-container {
        width: 100%;
        height: 50px;
        border-radius: 8px;
        background-color: var(--blue-btn);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-top: 40px;

        &:hover {
          background-color: var(--blue-btn-alt);
        }
      }

      .output {
        margin-top: 50px;
        font-size: 2rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;
