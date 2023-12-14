import React from 'react'
import { BrowserRouter } from 'react-router-dom';

import "./index.css";

import Router from './pages/route';
import Spotlight from "./components/Spotlight";


const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <Spotlight />
    </BrowserRouter>
  )
}

export default App