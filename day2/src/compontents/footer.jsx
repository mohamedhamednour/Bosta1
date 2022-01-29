
import '../App.css';
import React from 'react';
import { AiFillFacebook,AiFillTwitterSquare } from "react-icons/ai";



function Footer() {
 
  return (
    <>
 
 <footer >
    <div class="container_fluid">
      <div class="row ">
      <div class="col-12 col-sm-6  lastfooter1">
      <h3>bosta</h3>
      <p>help@bosta.co</p>
      <span className='iconface'><AiFillFacebook/> <AiFillTwitterSquare/></span>
    </div>
    <div class="col-12 col-sm-6 lastfooter1">
      <h3 style={{color:'red'}}>Shipments</h3>
      <p>Our Pricing</p>
      <span>Tracking Shipment</span>
    </div>
<p id='lastfooter2' className='col'>Copyright ©2019 bosta.co</p>            
          </div>
        
        </div>

  </footer>
      
 
    </>
  );
}

export default Footer;







