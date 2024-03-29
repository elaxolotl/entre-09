import NavBar from './Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './Hero';
import About from './About';
import './App.css'
import Contact from './Contact';
import Clients from './Clients';
import Footer from './Footer';
import Services from './Services';
import Trainings from './Trainings';
import Assistance from './Assistance';
import Consulting from './Consulting';
import Tarifs from './Tarifs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function HeroAbout() {
  return (
    <div id='hero-about'>
      <Hero />
      <About />
      <Services />
    </div>
  )
}

function HomePage() {
  return (  
    <>
      <HeroAbout />
      <Contact />
      <Clients />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/training" element={<Trainings/>}/>
        <Route exact path="/assistance" element={<Assistance/>}/>
        <Route exact path="/consulting" element={<Consulting/>}/>
        <Route exact path="/tarifs" element={<Tarifs/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
