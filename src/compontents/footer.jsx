
import '../App.css';
import React from 'react';
import { AiFillFacebook,AiFillTwitterSquare } from "react-icons/ai";
import { useTranslation, Trans } from "react-i18next";




function Footer() {
  const [t, i18n] = useTranslation()

 
  return (
    <>
 
 <footer id='nonconv2' >
    <div class="container_fluid buttoms">
      <div class="row ">
      <div class="col-12 col-sm-6  lastfooter1">
      <h3>{t('bosta')}</h3>
      <p>help@bosta.co</p>
      <span className='iconface'><AiFillFacebook/> <AiFillTwitterSquare/></span>
    </div>
    <div class="col-12 col-sm-6 lastfooter1">
      <h3 style={{color:'red'}}>{t('Shipments')}</h3>
      <p>{t('Pricing')}</p>
      <span>{t('trackyourshipment')}</span>
    </div>
<h5 id='lastfooter2' className='col'>Copyright ©2019 bosta.co</h5>            
          </div>
        
        </div>

  </footer>
      
 
    </>
  );
}

export default Footer;







