import React from 'react'
// Components
import Brand from './components/brand/Brand'
import Cta from './components/cta/Cta'
import Navbar from './components/navbar/Navbar'

// Containers
import Header from './containers/header/Header'
import Features from './containers/features/Features'
import WhatGPT3 from './containers/whatGPT3/WhatGPT3'
import Possibility from './containers/possibility/Possibility'
import Footer from './containers/footer/Footer'
import Blog from './containers/blog/Blog'


import './App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App