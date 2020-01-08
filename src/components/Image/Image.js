import React from 'react';
import "./Image.css";


function Image(props){


    
    return(
        <div className= 'imageCont'>
            <a title= 'Click to View HD Image' href= {props.hdUrl} target= '_blank'>
            <span>Copyright &copy; {props.date} {props.copy}</span>
            <img alt= 'Nasa' src= {props.imgUrl} />
            </a>
        
        </div>
    );

}//end func

export default Image;