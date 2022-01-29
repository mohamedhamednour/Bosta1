import React from 'react';
import '../App.css';
import { IoSearch } from "react-icons/io5";
import { useContext } from "react";
import AuthContext from './img/useContext';



function Input() {

    const { handelApi ,handelinpt,todo } = useContext(AuthContext);


    const { CurrentStatus, TransitEvents } = todo
    //  method api call if call by input ente else call by button 
    // const handelApi = (event) => {
    //     if (event.key === 'Enter') {
    //         fetch(`https://tracking.bosta.co/shipments/track/${id}`)
    //             .then(results => results.json())
    //             .then(data => {
    //                 setTodo(data);
    //                 console.log(data)

    //             });
    //     } else {
    //         fetch(`https://tracking.bosta.co/shipments/track/${id}`)
    //             .then(results => results.json())
    //             .then(data => {
    //                 setTodo(data);
    //                 console.log(data)

    //             });


    //     }

    // }



    return (

        <>
            {/* informations tracing */}
            <div class="container clsborder">
                <div class="row ">

                    <div className='col-12 col-xl-9'>
                        <h4> Shipment No. {todo.TrackingNumber}</h4>
                        <h4>{todo.CreateDate}</h4>
                        {!CurrentStatus ? '' : <h1 style={CurrentStatus.state === 'DELIVERED' ? { color: 'green' } : { color: 'red' }}>{CurrentStatus.state}</h1>}
                        <br />
                        <br />
                        <br />

                    </div>
                    {/* div input  */}

                    <div className='col-12 col-xl-3'>
                        <h5>Track another shipment</h5>
                        <input onKeyDown={handelApi} onChange={handelinpt} /><button onClick={handelApi}> <IoSearch /></button>
                        {/* <Inputs onclick={handelApi}  onkey={handelApi} onnchange={e => setId(e.target.value)}/> */}
                    </div>







                </div>
            </div>
            <pre>









            </pre>
            <div class="container clsborder">
                <div class="row ">
            <div className='col-8 tabels'>
                <h1>Tracking Details</h1>
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
                                    <td>{events.timestamp}</td>

                                    <td>{events.timestamp}</td>
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
