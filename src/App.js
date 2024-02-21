import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homeintro from './Components/Homeintro';
import Projects from './Components/Projects';
import Qualification from './Components/Qualification';
import Scrollup from './Components/Scrollup';
import Skills from './Components/Skills';
import './bootstrap.min.css'

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Homeintro/>
        <About/>
        <Skills/>
        <Qualification/>
        <Projects/>
        <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
      
    </>
  );
}

export default App;