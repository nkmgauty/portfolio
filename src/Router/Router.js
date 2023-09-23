import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Contact from '../Components/contact/Contact'
import Home from '../Components/Home/Home'
import Blog from '../Components/Blog/Blog'
import About from '../Components/About/About'
const Router = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Router