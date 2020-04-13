import React from 'react';
import styled from 'styled-components'
import './App.css';
import sam from './images/humberBridge.JPG'

export default function App() {
  return (
    <Welcome className="App">
      <h2>Hello, my name is Sam</h2>
      <div className='image'>
        <img src={sam} alt='sam' />
      </div>
      <p>I live in Aberdeen.</p>
    </Welcome>
  );
}

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 20px;
  }

  p {
    margin-top: 40px;
  }
  
  .image {
    display: flex;
    max-width: 60%;
    max-height: 60%;
    border: 30px solid red;
    border-radius: 100px;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }
`