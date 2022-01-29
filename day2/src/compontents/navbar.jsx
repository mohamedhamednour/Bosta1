import React from "react";
import '../App.css';
import image from './img/bosta.png'
import { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import AuthContext from './img/useContext';



const Navbar = (perpos) => {

  const { handelApi ,handelinpt } = useContext(AuthContext);


  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img id="photonav" src={image}/>bosta.</a>
    <button  class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span style={{color:"red"}} class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
       
      </ul>
      <span class="navbar-text">

      <ul class="navbar-nav">
      <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Tracking Shipment
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <h3>Track your shipment</h3>
            <h6>Enter your tracking No.</h6>
            <input onKeyDown={handelApi} onChange={e => handelinpt} /><button onClick={handelApi}> <IoSearch/></button>
          </ul>
        </li>
      <li class="nav-item">
          <a class="nav-link " href="#">Pricing</a>
          </li>
          <li style={{color:'red'}} class="nav-item">
          <a style={{color:'red'}} class="nav-link" href="#">عريي</a>
        </li>
      </ul>
      </span>
    </div>
  </div>
</nav>   </>
  );
};

export default Navbar;