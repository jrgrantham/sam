import React from "react";
import styled from "styled-components";

export default function AboutMe() {
  return (
    <Container className="App">
      <div className="list">
        <h2>My hobbies</h2>
        <h5>remote control cars</h5>
        <h5>biking</h5>
        <h5>swimming</h5>
        <h5>camping</h5>
      </div>
      <div className="list">
        <h2>Things I like</h2>
        <h5>bonfires</h5>
        <h5>holidays</h5>
        <h5>seeing my dad</h5>
        <h5>Hull fair</h5>
      </div>
      <p></p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
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

  .list {
    border: 8px solid #282c34;
    border-radius: 20px;
    margin-bottom: 50px;
    width: 90%;
    max-width: 350px;
  }
`;
