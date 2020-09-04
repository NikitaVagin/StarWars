import React from 'react';
import './error-indicator.css'
import IconError from './icons8-звезда-смерти-30.png'

const ErrorIndicator = () =>{
    return(
        <div className='alert alert-dismissible alert-warning'>
            <img src={IconError} alt='error-icon'/>
            <span className='boom'><strong>BOOOM!</strong>  Something has gone terribly wrong  (but we arleady sent droids to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;