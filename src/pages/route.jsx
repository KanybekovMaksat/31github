import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Project from './Project'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/project' element={<Project/>}/>
    </Routes>
  )
}

export default Router