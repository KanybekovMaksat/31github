import React from 'react'
import "./index.css";

import Aside from './components/Aside';
import Content from './components/Content';
import Spotlight from './components/Spotlight';

const App = () => {

  
  return (
    <>
    <div id="page">
            <Aside/>
            <Content/>
    </div>
    <Spotlight/>
    </>
  )
}

export default App