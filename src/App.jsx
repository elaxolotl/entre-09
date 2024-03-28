import { useState } from 'react'
import NavBar from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import About from './About';
import './App.css'
import Contact from './Contact';
import Clients from './Clients';
import Footer from './Footer';
import Services from './Services';


function HeroAbout(){
  return(
    <div id='hero-about'>
      <Hero/>
      <About/>
      <Services/>
    </div>
  )
}

function App() {
  return (
    <>
      <NavBar />
      <HeroAbout/>
      <Contact/>
      <Clients />
      <Footer />
    </>

  )
}

export default App
