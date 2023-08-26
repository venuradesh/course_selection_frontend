import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

//images
import LoanImage from "../../assets/loan.jpg";
import Close from "../../assets/close.png";

function Loan() {
  const navigate = useNavigate();
  const [LoanStatus, setLoanStatus] = useState("");
  const [applyLoanClicked, setApplyLoanClicked] = useState(false);
  const [err, setErr] = useState("");

  const ApplyClicked = () => {
    setLoanStatus("Approved");
    setApplyLoanClicked(true);
  };

  return (
    <Container>
      <div className="back" onClick={() => navigate(-1)}>
        {"< Back"}
      </div>
      <div className="form-container">
        <div className="heading">Apply to a loan</div>
        <div className="form">
          <div className="item name">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className="item income">
            <label htmlFor="income">Income (Rs.)</label>
            <input type="number" name="income" />
          </div>
          <div className="item nic">
            <label htmlFor="nic">NIC</label>
            <input type="text" name="nic" />
          </div>
          <div className="item dob">
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" />
          </div>
          <div className="item amount">
            <label htmlFor="amount">Amount (Rs.)</label>
            <input type="number" name="amount" />
          </div>
          {err ? <div className="error">*{err}</div> : <React.Fragment></React.Fragment>}
          <div className="btn-container" onClick={() => ApplyClicked()}>
            <div className="apply">Apply to the Loan</div>
          </div>
        </div>
      </div>
      <div className="cover-container">
        <img src={LoanImage} alt="loan" />
      </div>
      {applyLoanClicked ? (
        <div className="approve-container">
          <div className="content">
            <div className="close" onClick={() => setApplyLoanClicked(false)}>
              <img src={Close} alt="close" />
            </div>
            <div className="text">Loan {LoanStatus}</div>
          </div>
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </Container>
  );
}

export default Loan;

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

  .form-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .heading {
      font-size: 2rem;
      text-transform: uppercase;
      font-weight: 600;
      color: var(--text-clr-dark);
      margin-bottom: 30px;
    }

    .form {
      width: 100%;
      height: max-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 20px;

      .item {
        width: 70%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
          width: 300px;
          height: 40px;
          outline: none;
          border: none;
          border-bottom: 1px solid var(--text-clr-dark);
        }
      }

      .error {
        position: relative;
        top: 20px;
        color: var(--btn-danger);
      }

      .btn-container {
        margin-top: 30px;
        width: 70%;

        .apply {
          width: 100%;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 12px;
          background-color: var(--blue-btn);
          cursor: pointer;

          &:hover {
            background-color: var(--blue-btn-alt);
          }
        }
      }
    }
  }

  .cover-container {
    flex: 1;
    width: max-content;
    position: relative;
    top: 50px;
    left: 100px;

    img {
      width: 600px;
    }
  }

  .approve-container {
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .content {
      width: 300px;
      height: 100px;
      background-color: white;
      box-shadow: 0 0 5px 2px var(--medium-gray);
      border-radius: 8px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      .close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;

        img {
          width: 20px;
        }
      }
    }
  }
`;
