import React, {useState, useEffect} from "react";
import axios from 'axios';

import Media from './components/Image/Media';
import Info from './components/Info/Info';
// import styled from 'styled-components';

import styled from '@emotion/styled';

//same code for Emotion and styled components
const Application= styled.div` 
    max-width: 100%;
    width: 100%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: relative;

    .cover{
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        max-height: 100vh;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: -1;
    }

    iframe{
        z-index: 2;
    }

    h1{
        color: #eee;
        margin: 0 0 3% 0;
        text-shadow: 1px 1px #666;
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
    padding: 0 0 2% 0
}

.dateTitle{
    color: #999;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 0.5% 1%;
    margin-right: 5px;
    border-radius: 5px;
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

    //get a random day/month/year
    let minDay= 1;
    let maxDay= 28;
    function randDayNum(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) +1) + min;
    }//end func

        let minMonth= 1;
        let maxMonth= 12;
        function randMonthNum(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min +1)) + min;
        }//end func

        let minYear= 2000;
        let maxYear= 2019;
        function randYearNum(min, max){
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min +1)) + min;
        }//end func
        
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
    useEffect(() => {
        console.log('res url: ', imgUrl);
        const varDateStr= `${randYearNum(minYear, maxYear)}-${randMonthNum(minMonth, maxMonth)}-${randDayNum(minDay, maxDay)}`;
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=v8su2RncIsyRc8ZbQbgNobp0ndXwjixQPURTlhTc&date=${varDateStr}`)
        .then(newRes => {
            //change bg image to a random image from api
            document.body.style.backgroundImage= `url(${newRes.data.url})`;
            document.body.style.backgroundSize= 'cover';
        })
        .catch(err => {
            console.log('background image fetcher error:', err);
        })
    }, [curDate])

    function change(e) {
        setCurDate(e.target.value);
    }//end func

    let isVid= false;
    if( imgUrl.slice(-4) === '.jpg' ){
        console.log('jpg');
        isVid= false;
    }else{
        console.log('not a jpg');
        isVid= true;
    }
    
    if (!title) {
        return <h3>Loading ...</h3>
    } else {
        return (
            <Application>
                <div className= 'cover'></div>
                <h1>Nasa: Astronomy Picture of the Day.</h1>
                <form className='dateCont'>
                    <span className='dateTitle'>Change Date: </span>
                    <input title='Pick a Date to View Another Image' onChange={(e) => { change(e) }} type='date' id='dat' defaultValue={curDate} />
                    <div className='errorCont'>{errMessage}</div>
                </form>

                <div className="mainContent">
                    <Media isVid= {isVid} date={curDate} imgUrl={imgUrl} hdUrl={hdUrl} copy={copy} />
                    
                    
                    
                    <Info title={title} expl={expl} />
                </div>
                
            </Application>
        );
        
    }//end if
}//end func

export default App;
