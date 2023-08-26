import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BarChart, Bar, XAxis, YAxis, Text } from "recharts";

//images
import JobCover from "../../assets/job-cover.jpg";

//components
import CourseCard from "../Parts/CourseCard";
import JobCard from "../Parts/JobCard";

//data
import array from "../Data/Jobs";

function JobOpportunities() {
  const naviagte = useNavigate();
  const data = [
    { name: "Software Engineer Intern", uv: 400, pv: 2400, amt: 2400 },
    { name: "Software Engineering-Intern", uv: 300, pv: 2400, amt: 2400 },
    { name: "Associate Software Engineering", uv: 200, pv: 2400, amt: 2400 },
  ];

  const CustomXAxisTick = ({ x, y, payload, width }) => {
    if (payload?.value) {
      return (
        <Text width={width} x={x} y={y} textAnchor="middle" verticalAnchor="start">
          {payload.value}
        </Text>
      );
    }
    return null;
  };

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
          <BarChart width={400} height={200} data={data}>
            <XAxis data={data} tick={<CustomXAxisTick />} />
            <YAxis />
            <Bar dataKey="uv" barSize={30} fill="#8884d8" />
          </BarChart>
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

      /* .recharts-surface {
        height: 100%;
      }

      .recharts-wrapper {
        height: 100%;

        .xAxis {
          .recharts-text {
            transform: translateY(100px) rotateZ(90);
            z-index: 100;
          }
        }
      } */
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
