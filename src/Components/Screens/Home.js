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
