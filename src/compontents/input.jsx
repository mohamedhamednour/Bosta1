import React from 'react';
import '../App.css';
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import AuthContext from './img/useContext';
import moment from "moment";
import {Setpar }from './setpar';



function Input() {

    const { handelApi ,handelinpt,todo } = useContext(AuthContext);


    const { CurrentStatus, TransitEvents } = todo



    const moment = require('moment');

   




    return (

        <>
            {/* informations tracing */}
            <div class="container clstrack">
                <div class="row ">

                    <div class="d-flex justify-content-between col-12" >
                    
                    <span className='spanTrack'> Shipment No. {todo.TrackingNumber}</span>

                      {todo.CreateDate ? <span className='spanTrack'>   {moment(todo.CreateDate).format('lll')}</span>: ''}  
                      <span>name  seller</span>
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
                {todo ?<Setpar state={!CurrentStatus ? '' : CurrentStatus.state}/>: ''}
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
                <h2><strong>Tracking Details</strong></h2>
                <table class="table table-striped ">
                    <thead>
                        <tr>
                            <th scope="col">hub</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Activity</th>
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
                <h1>{todo.TrackingNumber}</h1>


                <h4>Is there a problem with your shipment</h4>
                <button className='btn btn-danger'>Report a problem</button>

            </div>
            </div>

            </div>


        </>
    );
}

export default Input;
