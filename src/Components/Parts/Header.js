import React from "react";
import styled from "styled-components";

//images
import Search from "../../assets/search.png";

function Header() {
  return (
    <Container>
      <div className="search">
        <img src={Search} alt="search" onClick={() => document.getElementById("search").focus()} />
        <input type="text" name="search" id="search" placeholder="Search on lending..." />
      </div>
      <Navigation>
        <div className="item">Course Selection</div>
        <div className="item">Career Guidence</div>
        <div className="item">Financial plan</div>
        <div className="item">Risk analysis</div>
      </Navigation>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 30px;
  box-shadow: 0 2px 10px 0 var(--light-gray);

  .search {
    display: flex;
    align-items: center;
    column-gap: 10px;
    background-color: var(--light-gray);
    padding-inline: 20px;
    border-radius: 12px;

    img {
      width: 20px;
    }

    input {
      width: 300px;
      height: 40px;
      background-color: transparent;
      border: none;
      outline: none;
      color: var(--text-clr);
      font-size: 0.9rem;

      &::placeholder {
        font-weight: 500;
        font-family: var(--font-normal);
        color: var(--text-clr);
        font-size: 0.8rem;
      }
    }
  }
`;

const Navigation = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  .item {
    width: 200px;
    font-size: 0.8rem;
    font-weight: var(--font-w-h);
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
