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

  h5 {
    margin-bottom: 40px;
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