import React from "react";
import "./App.css";
import Landing from './pages/Landing';
import AboutMe from "./pages/AboutMe";
import { Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Route exact path='/'>
        <Landing />
      </Route>
      <Route path='/aboutme'>
      <AboutMe />
      </Route>
    </div>
  );
}
