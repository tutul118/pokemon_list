import React from 'react';
import Get from './Get';

export default function Pokemon() {
    return(
        <div className= "main">
        <h1 className="main-heading">POKEMON API</h1>
        <h4 className="main-heading1">This application uses axios</h4>
        
        <div className="main-request">
                <h3>GET REQUEST</h3>
                <Get/>
        </div>


        </div>
    )

};
  