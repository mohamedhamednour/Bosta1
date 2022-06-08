import './App.css';
import React from 'react';
import Navbar from './compontents/navbar';
<<<<<<< HEAD
import Home from './compontents/home';
import Footer from './compontents/footer';
import Signup from './compontents/sing/signup';
import Signin from './compontents/sing/sign-in';


import { Route, Routes } from "react-router-dom";

=======
import Input from './compontents/TrackingDetails';
import Footer from './compontents/footer';
import { Route, Routes } from "react-router-dom";
import Convert from './compontents/ts'
>>>>>>> 5e0aa182bc9fa61417d3f5fd53c353da6ec5989c



function App() {
 
  return (
    <>
 <Navbar/>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="sign_up" element={<Signup />} />
 <Route path="sign_in" element={<Signin />} />


 </Routes>

    <Footer />
      
  
    </>
  );
}

export default App;
