import React from 'react';
import './CurDate.css';

function CurDate(props) {

    return (
        <form className='dateCont'>
            <input type='date' defaultValue= {props.curDate} />
        </form>
    );


}//end func

export default CurDate;