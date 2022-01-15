import './App.css';
import Header from './components/Header';
import Home from './components/Home-page';
import Services from './components/Services-page';
import Team from './components/Team-page';
import Skills from './components/Skills-page';
import Portfolio from './components/Portfolio-page';
import Testimonials from './components/Testimonials-page';
import Contact from './components/Contact-page';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Team />
      <Skills />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
