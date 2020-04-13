import React from 'react';
import styled from 'styled-components'
import './App.css';
import sam from './images/humberBridge.JPG'

export default function App() {
  return (
    <Welcome className="App">
      <h2>Hello, my name is Sam</h2>
      <h5>I live in Aberdeen.</h5>
      <div className='image'>
        <img src={sam} alt='sam' />
      </div>
      <div>
      <a href='https://jamesgrantham.me/'>visit my dad</a>
      <a href='https://bengrantham.netlify.com/'>visit my brother, Ben</a>
      </div>
      <div className='list'>
        <h2>My hobbies</h2>
        <h5>remote control cars</h5>
        <h5>biking</h5>
        <h5>swimming</h5>
        <h5>camping</h5>
      </div>
      <div className='list'>
        <h2>Things I like</h2>
        <h5>bonfires</h5>
        <h5>holidays</h5>
        <h5>sweets</h5>
        <h5>Hull fair</h5>
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
  }

  h5 {
    margin-bottom: 40px;
    text-align: center;

  }

  a {
    display: inline-block;
    color: orange;
    font-weight: bold;
    border-radius: 10px;
    background-color: blue;
    padding: 10px;
    margin: 70px 10px 0 10px;
    width: 220px;
    text-align: center;
    transition: all 0.3s;

    &:hover {
      background-color: purple;
      transform: scale(1.1);
    }
  }

  .list {
    border: 8px solid blue;
    border-radius: 20px;
    margin-top: 50px;
    width: 350px;
  }
  
  .image {
    display: flex;
    max-width: 60%;
    max-height: 60%;
    // border: 30px solid red;
    border-radius: 50px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
`