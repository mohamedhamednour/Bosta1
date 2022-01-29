import React from 'react';
import '../App.css';
import { IoSearch } from "react-icons/io5";


function Inputs(perpos) {
    
const {onkey,onnchange,onclick} = perpos
 
    return (

        <>
            {/* informations tracing */}
          
                    {/* div input  */}

                    <div className='col-12 col-xl-6'>
                        <input onKeyDown={onkey} onChange={onnchange} /><button onClick={onclick}> <IoSearch/></button>

                    </div>







               


        </>
    );
}

export default Inputs;
