import { useState } from 'react'
import NavBar from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import About from './About';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
    </>
  )
}

export default App
