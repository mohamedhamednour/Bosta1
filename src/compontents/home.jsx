import React from 'react';
import '../App.css';
import axios from "axios";

import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import AuthContext from './useContext';
import { Setpar } from './setpar';
import { useTranslation } from "react-i18next";
import translationEn from './englishdata.js'
import ReactAudioPlayer from 'react-audio-player';





function Home() {
    const [profilee, setProfile] = React.useState([]);


    // const { handelApi, handelinpt, todo } = useContext(AuthContext);
    const [t, i18n] = useTranslation()

    const handeData = async () => {
        const { data } = await axios.get(
            `https://mp3quran.net/api/radio/radio_en.json`
        );

        console.log(data);
        setProfile(data);
    };





    //call back end by useEffact 
    React.useEffect(() => {
        handeData()
    }, [])

    const { Radios } = profilee



    return (

        <>

            <center>Home</center>
            <div className="container">
                <div className="row">
                    {Radios ? Radios.map((it) => [
                        <div key={it.id} class="card" style={{ width: '18rem' }}>
                            <div class="card-body">
                                <p class="card-text">{it.Name}</p>
                                <ReactAudioPlayer
                                className='audio'
                                    src={it.URL}
                                    muted
                                    volume
                                    controls
                                />

                            </div>
                        </div>
                    ]) : ''}

                </div>
            </div>

        </>
    );
}

export default Home;
