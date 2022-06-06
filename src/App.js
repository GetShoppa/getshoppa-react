import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Form from './components/Form';
// import Join from './components/Join'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MainContent/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
