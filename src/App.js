import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/Login/SignUp.jsx';
import CreateStore from './pages/Login/CreateStore.jsx';
import AddProduct from './pages/Login/AddProduct.jsx';
import AddImage from './pages/Login/AddImage.jsx';
import AddProductCtd from './pages/Login/AddProductCtd';
import LandingPage from './pages/LandingPage/LandingPage'


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
      <Routes>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<SignUp/>} />
        <Route exact path='/create-store' element={<CreateStore/>} />
        <Route exact path='/add-product' element={<AddProduct/>} />
        <Route exact path='/add-image' element={<AddImage/>} />
        <Route exact path='/add-product-2' element={<AddProductCtd/>} />
      </Routes>
    </div>
  );
}

export default App;
