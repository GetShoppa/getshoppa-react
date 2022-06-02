import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
// import Join from './components/Join'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <MainContent/>
      <Footer/>
      {/* <Join/> */}
    </div>
  );
}

export default App;
