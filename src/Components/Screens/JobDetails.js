import React from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

//images
import JobCover from "../../assets/job-details-cover.jpg";

//data
import array from "../Data/Jobs";
import jobSalaries from "../Data/JobSalaries";

function JobDetails() {
  const navigate = useNavigate();
  const id = useParams().id;
  const jobDetails = array.filter((item) => item.id === id)[0];

  return (
    <Container>
      <div className="back" onClick={() => navigate("/career")}>
        {"< Back"}
      </div>
      <div className="content">
        <div className="heading">{jobDetails.header}</div>
        <div className="desc">{jobDetails.desc}</div>
        <div className="salaries-container">
          <div className="salary salary-heading">
            <div className="jobName">Job Name</div>
            <div className="salary-range">Salary Range</div>
          </div>
          {jobSalaries.map((job, index) => (
            <div className="salary" key={index}>
              <div className="jobName">{job.name}</div>
              <div className="salary-range">{job.price}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="image">
        <img src={JobCover} alt="job-cover" />
      </div>
    </Container>
  );
}

export default JobDetails;

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

  .image {
    width: max-content;
    height: max-content;
    padding-top: 50px;

    img {
      width: 500px;
    }
  }

  .content {
    width: 600px;
    height: 100%;
    position: relative;

    .heading {
      font-size: 1.5rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--text-clr-dark);
      margin-bottom: 20px;
    }

    .desc {
      line-height: 30px;
      opacity: 0.8;
    }

    .salaries-container {
      display: flex;
      flex-direction: column;
      margin-top: 50px;

      .salary {
        display: flex;
        align-items: center;
        margin-bottom: 10px;

        .jobName {
          flex: 1;
        }

        .salary-range {
          flex: 1;
        }

        &.salary-heading {
          margin-bottom: 15px;

          .jobName {
            font-weight: 600;
            font-size: 1rem;
            flex: 1;
          }

          .salary-range {
            font-weight: 600;
            font-size: 1rem;
            flex: 1;
          }
        }
      }
    }
  }
`;
