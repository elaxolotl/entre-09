import { useState } from 'react'
import NavBar from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import About from './About';
import './App.css'
import Contact from './Contact';

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
      <Contact/>
    </>
  )
}

export default App
