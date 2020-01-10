import React, { useState, useEffect } from "react";
import axios from 'axios';

import Image from './components/Image/Image';
import Info from './components/Info/Info';
import styled from 'styled-components';

const Application= styled.div`

    max-width: 100%;
    width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h1{
        margin: 0 0 3% 0;
    }

.App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
    pointer-events: none;
}

.App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
}

.App-link {
    color: #61dafb;
}

.dateCont{
    width: 100%;
    text-align: center;
    margin-bottom: 2%;
    position: relative;
    padding: 0 0 2% 0;
}

.dateCont input{
    padding: 3px;
    font-size: 1.2rem;
}

.dateCont input:hover{
    cursor: pointer;
}

.errorCont{
    padding-top: 1%;
    width: 100%;
    text-align: center;
    color: red;
}

.mainContent{
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-evenly;
    align-items: flex-start;

    @media only screen and (max-width: 600px){
        flex-direction: column-reverse;    
    }
}


`;

function App() {
    const [imgUrl, setImgUrl] = useState('');
    const [hdUrl, setHdUrl] = useState('');
    const [copy, setCopy] = useState('');
    const [curDate, setCurDate] = useState('');
    const [expl, setExpl] = useState('');
    const [title, setTitle] = useState('');
    const [errMessage, setErrMessage] = useState('');
    
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=v8su2RncIsyRc8ZbQbgNobp0ndXwjixQPURTlhTc&date=${curDate}`)
            .then(res => {
                setImgUrl(res.data.url);
                setHdUrl(res.data.hdurl);
                setCopy(res.data.copy);
                setCurDate(res.data.date);
                setExpl(res.data.explanation);
                setTitle(res.data.title);
                setErrMessage('');
            })
            .catch(err => {
                // console.log('API Error: ', err);
                setErrMessage('Cannot view "future" images. Time machine pending...');
            })
            

    }, [curDate]);

    function change(e) {
        setCurDate(e.target.value);
    }//end func

    if (!title) {
        return <h3>Loading ...</h3>
    } else {
        return (
            <Application>
                <h1>Nasa: Astronomy Picture of the Day.</h1>
                <form className='dateCont'>
                    <span className='dateTitle'>Change Date: </span>
                    <input title='Pick a Date to View Another Image' onChange={(e) => { change(e) }} type='date' id='dat' defaultValue={curDate} />
                    <div className='errorCont'>{errMessage}</div>
                </form>

                <div className="mainContent">
                    <Image date={curDate} imgUrl={imgUrl} hdUrl={hdUrl} copy={copy} />
                    <Info title={title} expl={expl} />
                </div>

            </Application>
        );
    }//end if
}//end func

export default App;
