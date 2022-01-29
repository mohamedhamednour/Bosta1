import React from 'react';
import '../App.css';

import {
    Stepper,
    Step,
    useStepper,
    StepNumber,
    StepTitle,
    StepStatus,
    StepDescription,
} from "react-progress-stepper";
import { useContext } from "react";
import AuthContext from './img/useContext';

export function Setpar(props) {
    const { step, incrementStep, decrementStep } = useStepper(0, 4); 
    const { handelApi ,handelinpt,todo } = useContext(AuthContext);
    const { CurrentStatus, TransitEvents } = todo
    const {state} = props

    const ncrementStep =  () => {
        if (state === 'DELIVERED') {
            incrementStep()
            incrementStep()
            incrementStep()
            incrementStep()

        }
        if (state === 'DELIVERED_TO_SENDER') {
          incrementStep()
          incrementStep()
        

      }
      };
  

    React.useEffect((p) => {
        ncrementStep()
       
        
      }, [todo]); // Only re-run the effect if count changes
      
    const moment = require('moment');

  

       return (
        <>
           <Stepper step={step}>
        <Step>
          
          
        </Step>
        <Step>
          
        </Step>
        <Step>
          
        </Step>
        <Step>
        <StepDescription>{state}</StepDescription>

        </Step>
      </Stepper>
          
        

      
        </>
      )
    }



