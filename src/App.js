import './App.css';
import React from 'react';
import Navbar from './compontents/navbar';
import Input from './compontents/TrackingDetails';
import Footer from './compontents/footer';
import { Route, Routes } from "react-router-dom";
import Convert from './compontents/ts'



function App() {
 
  return (
    <>
 <Navbar/>
   <Input />
    <Footer />
      
  
    </>
  );
}

export default App;
