import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";

import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Products from './components/products/Products';
import Singleproduct from './components/products/Singleproduct';
import Login from './components/login/Login';
import Checkout from './components/checkout/Checkout';
import Footer from './components/footer/Footer';


function App() {

  const [ data, setData ] = useState([]);

  useEffect(() => {
    axios.get('https://k4backend.osuka.dev/products').then(({ data }) => {
      setData(data)
    })
  }, []);

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/products' element={<Products data={data}/>}></Route>
          <Route path='/products/:id' element={<Singleproduct />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
