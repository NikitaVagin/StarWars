import React from 'react';
import {Redirect} from 'react-router-dom'

const LoginPage = ({isLoginIn, onLogin}) =>{
    if(isLoginIn){
        return <Redirect to='/'/>
    }
     return(
         <div>
             <p>Login to see secret page!</p>
             <button className='btn btn-primary'
             onClick={onLogin}>
                 Login
             </button>
         </div>
     )
}
export default LoginPage