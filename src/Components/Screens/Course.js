import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

//components
import CourseCard from "../Parts/CourseCard";

function Course() {
  const location = useLocation();
  const naviagte = useNavigate();
  console.log(location.state);

  return (
    <Container>
      <div className="back" onClick={() => naviagte("/")}>
        {"< Back"}
      </div>
      <div className="content-cover">
        <div className="course-details">
          <div className="course-heading">{location.state.name}</div>
          <div className="course-spec">{location.state.specilization}</div>
          <div className="desc">{location.state.desc}</div>
        </div>
        <div className="course-cover">
          <img src={location.state.cover} alt="course-cover" />
        </div>
      </div>
      <div className="card-container">
        <div className="item">
          <div className="heading">Course Selection</div>
          <div className="btn">View</div>
        </div>
        <div className="item">
          <div className="heading">Career Guidance</div>
          <div className="btn">View</div>
        </div>
        <div className="item">
          <div className="heading">Financial Plan</div>
          <div className="btn">View</div>
        </div>
        <div className="item">
          <div className="heading">Risk Anlysis</div>
          <div className="btn">View</div>
        </div>
      </div>
    </Container>
  );
}

export default Course;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
  padding-inline: 50px;
  padding-top: 70px;
  position: relative;

  .back {
    position: absolute;
    top: 30px;
    font-size: 1.2rem;
    color: var(--blue-btn-alt);
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: var(--font-w-h);

    &:hover {
      color: var(--blue-btn);
    }
  }

  .content-cover {
    width: 100%;
    display: flex;
    column-gap: 100px;

    .course-details {
      width: 60%;

      .course-heading {
        margin-top: 20px;
      }

      .course-heading,
      .course-spec {
        font-size: 2.2rem;
        font-weight: var(--font-w-h);
      }

      .course-spec {
        font-size: 1.5rem;
      }

      .desc {
        margin-top: 30px;
        line-height: 2rem;
      }
    }

    .course-cover {
      width: 35%;

      img {
        width: 100%;
        height: 400px;
      }
    }
  }

  .card-container {
    display: flex;
    column-gap: 30px;
    position: relative;
    top: -50px;

    .item {
      width: 200px;
      height: 150px;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 0 3px 0 var(--medium-gray);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;

      .heading {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: var(--font-w-h);
      }

      .btn {
        font-size: 0.8rem;
        color: white;
        border-radius: 6px;
        padding: 5px 20px;
        background-color: var(--blue-btn-alt);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: var(--blue-btn);
        }
      }
    }
  }
`;
