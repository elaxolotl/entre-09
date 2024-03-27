import { useState } from 'react'
import NavBar from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import About from './About';
import './App.css'

function HeroAbout(){
  return(
    <div id='hero-about'>
      <Hero/>
      <About/>
    </div>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <HeroAbout/>
    </>
  )
}

export default App
