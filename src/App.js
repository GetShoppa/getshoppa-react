import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login.jsx';
import SignUp from './pages/Login/SignUp.jsx';
import CreateStore from './pages/Login/CreateStore.jsx';
import AddProduct from './pages/Login/AddProduct.jsx';
import AddImage from './pages/Login/AddImage.jsx';
import AddProductCtd from './pages/Login/AddProductCtd.jsx';
import LandingPage from './pages/LandingPage/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Product from './pages/Dashboard/Product.jsx';
import Order from './pages/Dashboard/Order.jsx';
import ShowPage from './pages/Login/ShowPage.jsx';
import ShowPageTwo from './pages/Login/ShowPageTwo.jsx';
import ShowPageThree from './pages/Login/ShowPageThree.jsx';
import ShowPageFour from './pages/Login/ShowPageFour.jsx';


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
        <Route exact path='/add-products' element={<AddProductCtd/>} />
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/product' element={<Product/>}/>
        <Route exact path='/order' element={<Order/>}/>
        <Route exact path='/show-page' element={<ShowPage/>}/>
        <Route exact path='./show-page-two' element={<ShowPageTwo/>}/>
        <Route exact path='/show-page-three' element={<ShowPageThree/>}/>
        <Route exact path='./show-page-four' element={<ShowPageFour/>}/>
      </Routes>
    </div>  
  );
}

export default App;
