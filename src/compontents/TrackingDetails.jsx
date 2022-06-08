import React from 'react';
import '../App.css';
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import AuthContext from './useContext';
import { Setpar } from './setpar';
import { useTranslation } from "react-i18next";
import translationEn from './englishdata.js'





function Input() {

    const { handelApi, handelinpt, todo } = useContext(AuthContext);
    const [t, i18n] = useTranslation()
 


    const { CurrentStatus, TransitEvents } = todo



    const moment = require('moment');






    return (

        <>
            {/* informations tracing */}
            <div class="container clstrack">
                <div class="row ">

                    <div class="d-flex justify-content-between col-12" >

                        <span className='spanTrack'> {todo.TrackingNumber ? <h5>Shipment No.{todo.TrackingNumber}</h5> : ''}</span>

                        {todo.CreateDate ? <span className='spanTrack'>   {moment(todo.CreateDate).format('lll')}</span> : ''}
                        <span>{todo.TrackingNumber ? t('arabic.CurrentStatus.nameseller') : ''}</span>
                        {!CurrentStatus ? '' : <span className='spanTrack' style={CurrentStatus.state === 'DELIVERED' ? { color: 'green' } : { color: 'red' }}><strong>{CurrentStatus.state}</strong></span>}


                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                    </div>
                    {/* div setpar  */}

                    <div className='col-12'>
                        {/* i tty hidde           */}
                        {todo ? <Setpar state={!CurrentStatus ? '' : CurrentStatus.state} /> : ''}
                        {/* <h5>Track another shipment</h5>
                        <input onKeyDown={handelApi} onChange={handelinpt} /><button onClick={handelApi}> <IoSearch /></button> */}
                        {/* <Inputs onclick={handelApi}  onkey={handelApi} onnchange={e => setId(e.target.value)}/> */}
                    </div>







                </div>
            </div>
            <pre>









            </pre>
            <div class="container clsborder">
                <div class="row ">
                    <div className='col-8 tabels'>
                        <h2><strong>{t('TrackingDetails')}</strong></h2>
                        <table class="table table-striped ">
                            <thead>
                                <tr>
                                    <th scope="col">{t('details')}</th>

                                    <th scope="col">{t('datee')}</th>
                                    <th scope="col">{t('time')}</th>
                                    <th scope="col">{t('hub')}</th>

                                </tr>
                            </thead>
                            <tbody>
                                {TransitEvents
                                    ? TransitEvents.map((events) => [
                                        <tr>

                                            <td>{events.state}</td>
                                            <td>{moment(events.timestamp).format('L')}</td>

                                            <td>{moment(events.timestamp).format('LTS')}</td>
                                            <td>{events.hub}</td>

                                        </tr>

                                    ])
                                    : <h3>Enter your tracking Num.</h3>}




                            </tbody>
                        </table>
                    </div>
                    <div className='col-4'>
                        <h5>Delivery address</h5>
                        {/* <h1>{todo.TrackingNumber}</h1> */}


                        <h4>Is there a problem with your shipment</h4>
                        <button className='btn btn-danger'>Report a problem</button>

                    </div>
                </div>

            </div>


        </>
    );
}

export default Input;
