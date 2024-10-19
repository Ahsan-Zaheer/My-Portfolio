import { useEffect } from 'react'
import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/home/About'
import Skills from './components/home/Skills'
import Services from './components/home/Services'
import Qualification from './components/home/Qualification'
import Contact from './components/home/Contact'
import Footer from './components/home/Footer'
import AOS from 'aos';
import Portfolio from './components/home/Portfolio'

function App() {

  useEffect(() => {
    AOS.init({
      once: true, 
      mirror: false,
      duration: 800,  
    easing: 'ease-in-sine',
    });  
  }, []);
  

  return (
    <div className='wrapper'>
    <Header />
    <Home />
    <About />
    <Skills/>
    <Services />
    <Qualification />
    <Portfolio />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
