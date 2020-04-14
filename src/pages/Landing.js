import React from "react";
import styled from "styled-components";
import sam from "../images/humberBridge.JPG";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Welcome className="App">
      <h2>Hello, my name is Sam</h2>
      <h5>I live in Aberdeen.</h5>
      <div className="image">
        <img src={sam} alt="sam" />
      </div>
      <div className='links'>
        <a href="https://jamesgrantham.me/">visit my dad's site</a>
        <a href="https://bengrantham.netlify.com/">visit Ben's site</a>
        <Link to='aboutme'>about me</Link>
      </div>
    </Welcome>
  );
}

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    text-align: center;
    margin: 20px;
    color: #282c34;
  }

  h5 {
    margin-bottom: 40px;
    text-align: center;
    color: #282c34;
  }

  a {
    display: inline-block;
    color: orange;
    font-weight: bold;
    border-radius: 10px;
    background-color: #282c34;
    padding: 10px;
    margin: 70px 10px 50px 10px;
    width: 220px;
    text-align: center;
    transition: all 1s;

    @media (max-width: 800px) {
      margin: 10px;
    }

    &:hover {
      background-color: blue;
      transform: scale(1.1);
    }
  }

  .list {
    border: 8px solid #282c34;
    border-radius: 20px;
    margin-bottom: 50px;
    width: 90%;
    max-width: 350px;
  }

  .links {
    display: flex;

    @media (max-width: 800px) {
      flex-direction: column;
      margin: 50px 0;
    }
  }

  .image {
    display: flex;
    max-width: 600px;
    max-height: 60%;
    margin: 0 40px;
    // border: 30px solid red;
    border-radius: 50px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
