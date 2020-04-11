import React from 'react';
import styled from 'styled-components'
import './App.css';
import sam from './images/humberBridge.JPG'

export default function App() {
  return (
    <Welcome className="App">
      <h1>Hello, my name is Sam</h1>
      <div className='image'>
        <img src={sam} alt='ben' />
      </div>
    </Welcome>
  );
}

const Welcome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .image {
    width: 80vw;
    height: 80vh;
    // border: 1px solid red;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    // border: 1px solid red;
  }
`