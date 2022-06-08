import React from 'react';
import '../App.css';
import '../tailwend.css';
import { Link  } from "react-router-dom"


import axios from "axios";

// import { IoSearch } from "react-icons/io5";
// import { useContext } from "react";
// import AuthContext from './useContext';
// import { Setpar } from './setpar';
// import { useTranslation } from "react-i18next";
// import translationEn from './englishdata.js'
// import ReactAudioPlayer from 'react-audio-player';





function Home() {
    const [profilee, setProfile] = React.useState([]);



    return (

        <>

            <center className='text-red-600/100 text-2xl'>trust  منصة غير هادفة للربح هدفها تنمية الذات </center>
            <div class="grid grid-cols-3 p-10">
                <div><Link to='quran'>Quran</Link></div>
                <div><Link to='books'>Books</Link></div>
                <div><Link to='quran'>Videos</Link></div>


            </div>
        </>
    );
}

export default Home;
