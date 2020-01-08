import React from 'react';
import './Info.css';

function Info(props){

    return(

        <div className= 'infoCont'>
            <h2>{props.title}</h2> 
            <p>{props.expl}</p>
        </div>
    );

}//end func

export default Info