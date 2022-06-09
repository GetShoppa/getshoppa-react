import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Form from './components/Form';
import Info from './components/Info';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
      <ToastContainer />
      <Navbar/>
      <Hero/>
      <MainContent/>
      <Info/>
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
