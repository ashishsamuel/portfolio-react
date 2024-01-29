import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Homeintro from './Components/Homeintro';
import Projects from './Components/Projects';
import Qualification from './Components/Qualification';
import Skills from './Components/Skills';
import './bootstrap.min.css'

function App() {
  return (
    <>
      <Header/>
      <Homeintro/>
      <About/>
      <Skills/>
      <Qualification/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;