import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import SobreMi from './components/SobreMi.jsx';
import Proyectos from './components/Proyectos.jsx';
import Contacto from './components/Contacto.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Hero />
        <SobreMi />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
