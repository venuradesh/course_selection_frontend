import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

//images
import FinancialImage from "../../assets/financial-image.jpg";

//data
import details from "../Data/scholarshipDetails";

function ScholarshipDetails() {
  const navigate = useNavigate();
  const id = useParams().id;
  const scholarship = details.filter((item) => item.link === id)[0];

  return (
    <Container>
      <div className="back" onClick={() => navigate(-1)}>
        {"< Back"}
      </div>
      <div className="container">
        <div className="card-content">
          <div className="card-heading">{scholarship.name}</div>
          <div className="desc">{scholarship.desc}</div>
          <div className="price">
            Price:<span> {scholarship.price}</span>
          </div>
          <div className="btn-container">
            <div className="btn-apply">Apply</div>
            <div className="loan-apply" onClick={() => navigate("/loanapply")}>
              Get a Loan
            </div>
          </div>
        </div>
        <div className="image">
          <img src={FinancialImage} alt="financial plan" />
        </div>
      </div>
    </Container>
  );
}

export default ScholarshipDetails;

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

      .card-heading {
        margin-top: 50px;
        font-size: 2rem;
        font-weight: 600;
        text-transform: uppercase;
        color: var(--text-clr-dark);
        margin-bottom: 30px;
      }

      .price {
        margin-top: 20px;
        font-size: 1.2rem;

        span {
          margin-left: 10px;
          font-weight: 600;
        }
      }

      .desc {
        width: 80%;
        opacity: 0.8;
        color: var(--text-clr-dark);
      }

      .btn-container {
        display: flex;
        flex-direction: column;
        height: 300px;
        justify-content: space-between;

        .btn-apply {
          width: max-content;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 12px;
          padding-inline: 40px;
          margin-top: 30px;
          background-color: var(--blue-btn);
          cursor: pointer;

          &:hover {
            background-color: var(--blue-btn-alt);
          }
        }

        .loan-apply {
          width: 80%;
          height: 50px;
          background-color: var(--blue-btn);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          border-radius: 12px;
          cursor: pointer;

          &:hover {
            background-color: var(--blue-btn-alt);
          }
        }
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
