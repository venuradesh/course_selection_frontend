import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

//images
import JobCover from "../../assets/job-cover.jpg";

//components
import JobCard from "../Parts/JobCard";

//data
import array from "../Data/Jobs";

function JobOpportunities() {
  const naviagte = useNavigate();
  const links = [
    { name: "Software Engineering", link: "#" },
    { name: "Associate Software Engineering", link: "#" },
    { name: "Intern Software Engineering", link: "#" },
    { name: "Tech Lead", link: "#" },
    { name: "Project Management", link: "#" },
  ];

  return (
    <Container>
      <div className="back" onClick={() => naviagte("/")}>
        {"< Back"}
      </div>
      <div className="cover">
        <div className="background"></div>
        <Cover></Cover>
        <div className="heading">Job Opportunities</div>
      </div>
      <div className="content-container">
        <div className="jobs-container">
          {array.map((item) => (
            <JobCard header={item.header} link={item.id} />
          ))}
        </div>
        <div className="trending-jobs">
          {links.map((link) => (
            <div className="link" onClick={() => naviagte(link.link)}>
              Click here to learn about {link.name}
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default JobOpportunities;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  width: 100%;
  padding-inline: 50px;
  padding-top: 70px;
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

  .cover {
    width: 100%;
    height: 250px;
    z-index: -1;
    position: relative;
    top: -40px;

    .background {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, white, transparent);
      position: absolute;
    }

    .heading {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 2rem;
      font-weight: 600;
      text-transform: uppercase;
      color: var(--light-gray);
      text-shadow: 0 2px 3px var(--text-clr);
    }
  }

  .content-container {
    width: 100%;
    height: 300px;
    display: flex;
    position: relative;
    top: -50px;
    column-gap: 20px;

    .jobs-container {
      flex: 2;
      display: flex;
      column-gap: 20px;
      row-gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }

    .trending-jobs {
      flex: 1;
      height: 120%;
      display: flex;
      align-items: center;
      flex-direction: column;
      max-height: 400px;
      overflow-y: overlay;

      .link {
        margin-top: 10px;
        font-size: 0.8rem;
        color: var(--blue-btn);
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${JobCover});
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -100px;
`;
