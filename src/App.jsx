// React components
import NavBar from './Nav/Nav';
import Hero from './HomePage/Hero';
import About from './HomePage/About';
import Contact from './HomePage/Contact';
import Clients from './HomePage/Clients';
import Footer from './Footer/Footer';
import Services from './HomePage/Services';
import Trainings from './TrainingsPage/Trainings';
import Assistance from './AssistancePage/Assistance';
import Consulting from './ConsultingPage/Consulting';
import Tarifs from './TarifsPage/Tarifs';
import AboutUs from './AboutPage/AboutUs';
// External libraries
import 'bootstrap/dist/css/bootstrap.min.css';
// React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// CSS files
import './App.css';
import './mediaQueries.css';


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
      <Footer />
    </>
  )
}

function TrainingPage() {
  return (
    <>
      <Trainings />
      <Contact />
    </>
  )
}

function AssistancePage() {
  return (
    <>
      <Assistance />
      <Contact />
    </>
  )
}

function ConsultingPage() {
  return (
    <>
      <Consulting />
      <Contact />
    </>
  )
}

function TarifsPage() {
  return (
    <>
      <Tarifs />
      <Contact />
      <hr style={{ color: 'white', width: '50px' }} />
      <Footer />
    </>
  )
}

function AboutPage() {
  return (
    <>
      <AboutUs />
      <Contact />
      <hr style={{ color: 'white', width: '50px' }} />
      <Footer />
    </>
  )
} 

function App() {
  return (
    <BrowserRouter >
      <NavBar />
      <div style={{height:'10vh'}}></div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/training" element={<TrainingPage />} />
        <Route exact path="/assistance" element={<AssistancePage />} />
        <Route exact path="/consulting" element={<ConsultingPage />} />
        <Route exact path="/tarifs" element={<TarifsPage />} />
        <Route exact path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
