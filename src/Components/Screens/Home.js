import React from "react";
import styled from "styled-components";

//images
import HomeCover from "../../assets/home-cover.jpg";

//data about courses
import { courses } from "../Data/courses";
import CourseCard from "../Parts/CourseCard";

function Home() {
  return (
    <Container>
      <div className="cover">
        <div className="background"></div>
        <Cover></Cover>
      </div>
      <div className="filtering">
        <select defaultValue={"budget"}>
          <option value="budget" hidden>
            <div className="filter-options">Budget Range</div>
          </option>
        </select>
        <select defaultValue={"duration"}>
          <option value="duration" hidden>
            <div className="filter-options">Degree Duration Selection</div>
          </option>
        </select>
        <select defaultValue={"al-result"}>
          <option value={"al-result"} hidden>
            <div className="filter-options">A/L Passes</div>
          </option>
        </select>
        <select defaultValue={"al-stream"}>
          <option value={"al-stream"} hidden>
            <div className="filter-options">A/L Stream Dropdown</div>
          </option>
        </select>
        <select defaultValue={"interest"}>
          <option value={"interest"} hidden>
            <div className="filter-options">Interest Area Dropdown</div>
          </option>
          <option value={""} hidden>
            <div className="filter-options"></div>
          </option>
        </select>
      </div>
      <div className="courses">
        {courses.map((course, key) => (
          <CourseCard key={key} header={course.name} specialization={course.specilization} details={course} />
        ))}
      </div>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  padding-top: 10px;
  padding-inline: 30px;

  .cover {
    width: 100%;
    height: 250px;
    z-index: 100;
    position: relative;

    .background {
      width: 100%;
      height: 100%;
      background-image: linear-gradient(to bottom, white, transparent);
      position: absolute;
    }
  }

  .filtering {
    margin-top: 20px;
    display: flex;
    width: 100%;
    height: 40px;
    column-gap: 20px;

    select {
      flex: 1;
      padding-inline: 20px;
      background-color: white;
      border: none;
      box-shadow: 0 0 2px 0 var(--medium-gray);
      font-size: 0.8rem;
    }
  }

  .courses {
    padding-top: 30px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    row-gap: 30px;
    align-items: center;
    column-gap: 30px;
    margin-bottom: 30px;
  }
`;

const Cover = styled.div`
  width: 100%;
  height: 250px;
  background-image: url(${HomeCover});
  object-fit: cover;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -100px;
`;
