import React, { useState, useEffect } from "react";
import axios from 'axios';
import {gsap} from 'gsap';

import Media from './components/Image/Media';
import Info from './components/Info/Info';
// import styled from 'styled-components';

import styled from '@emotion/styled';

//same code for Emotion and styled components
const Application = styled.div` 
   max-width: 100%;
   width: 100%;
   padding: 2% 2% 0 2%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   position: relative;

   button.devInfo{
     position: absolute;
     top: 10px;
     left: 10px;

     &:hover{
       cursor: pointer;
       opacity: 0.8;
     }
   }

   .devInfoText{
    color: white;
    background-color: black;
    height: 0px;
    padding: 0px;
    width: 40%;
    border-radius: 5px;
    position: absolute;
    left: 10px;
    top: 30px;
    z-index: 2;
    opacity: 0.9;

    p{
      opacity: 0;
    }
   }

  input[type= 'date']{
    border-radius: 5px;
    outline: none;
    border: none;
    ::-webkit-datetime-edit { padding: 5px; }
    ::-webkit-datetime-edit-fields-wrapper {  }
    ::-webkit-datetime-edit-text { color: red; padding: 0 0.3em; }
    ::-webkit-datetime-edit-month-field { color: green; }
    ::-webkit-datetime-edit-day-field { color: green; }
    ::-webkit-datetime-edit-year-field { color: green; }
    ::-webkit-inner-spin-button { display: none; }
    ::-webkit-clear-button {display: none;}
    ::-webkit-calendar-picker-indicator { 
      background: dodgerBlue; 
      padding: 8px; 
      margin-left: 10px; 
      border-radius: 50%;
    }
  }

   .cover{
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      max-height: 100vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.7);
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

.randomButton{
   color: #ddd;
   background-color: blue;
   padding: 0.5% 1%;
   margin: 0 0 0 2%;
   border-radius: 5px;
   font-size: 1rem;

   &:hover{
      cursor: pointer;
      opacity: 0.8;
      color: #eee;
   }
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
  let newDate = new Date(); //get current Date
  let yr = newDate.getFullYear().toString();
  let mon = (newDate.getMonth() + 1).toString().padStart(2, '0');
  let day = newDate.getDate().toString();
  let formattedDate = `${yr}-${mon.padStart(2, '0')}-${day.padStart(2, '0')}`;

  let text= document.querySelector('.devInfoText');

  const [imgUrl, setImgUrl] = useState('');
  const [hdUrl, setHdUrl] = useState('');
  const [copy, setCopy] = useState('');
  const [curDate, setCurDate] = useState(formattedDate.toString());
  const [expl, setExpl] = useState('');
  const [title, setTitle] = useState('');
  const [errMessage, setErrMessage] = useState('');

  //get a random day/month/year
  function getRandomDate() {
    //vars for getting random date
    const minYear = 2000;
    const maxYear = 2019;
    const minMonth = 1;
    const maxMonth = 12;
    const minDay = 1;
    const maxDay = 28;

    let month = Math.floor(Math.random() * (maxMonth - minMonth + 1)) + minMonth;
    let year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
    let day = Math.floor(Math.random() * (maxDay - minDay + 1)) + minDay;

    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }//end getRandomDate

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=v8su2RncIsyRc8ZbQbgNobp0ndXwjixQPURTlhTc&date=${curDate}`)
      .then(resu => {
        setImgUrl(resu.data.url);
        setHdUrl(resu.data.hdurl);
        setCopy(resu.data.copy);
        setCurDate(resu.data.date);
        setExpl(resu.data.explanation);
        setTitle(resu.data.title);
        setErrMessage('');
        document.querySelector('.datePicker').removeAttribute('disabled');
        document.querySelector('.randomButton').removeAttribute('disabled');

      })
      .catch(err => {
        console.log('API Error: ', err.response.status);
        setErrMessage('There may not be a photo for this day, try again.');
      })
  }, [curDate])

  useEffect(() => { //set initial state of BG image..
    window.onload =
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=v8su2RncIsyRc8ZbQbgNobp0ndXwjixQPURTlhTc&date=${getRandomDate()}`)
        .then(newRes => { //set random BG image on load
          //change bg image to a random image from api
          document.body.style.backgroundImage = `url(${newRes.data.url})`;
          document.body.style.backgroundSize = 'cover';
        })
        .catch(err => {
          console.log('background image fetcher error:', err);
        });
  }, []);

  function changeDate(e) {
    document.querySelector('.randomButton').setAttribute('disabled', true);
    setCurDate(getRandomDate());
  }

  function change(e) {
    //disabel button to avoid spamming which causes a loop effect
    e.target.setAttribute('disabled', true);
    setCurDate(e.target.value);
  }//end func

  function fadeIn(){
    gsap.to('.devInfoText p', {opacity: '1', duration: 1, ease: 'power2.in'});
  }
  function fadeOut(){
    gsap.to('.devInfoText', {padding: '0px', duration: 0.5, ease: 'power1.in'});
  }

  function displayDevInfo(e){
    let element= window.getComputedStyle(text);
    if( element.height == '0px' ){
      gsap.to('.devInfoText', {padding: '15px', duration: 0.5, ease: 'power2.out'});
      gsap.to('.devInfoText', {height: '280px', duration: 0.8, ease: 'power2.out', onComplete: fadeIn()});

    }else{
      gsap.to('.devInfoText', {height: '0', duration: 0.8, ease: 'power1.in', onComplete: fadeOut()});
      gsap.to('.devInfoText p', {opacity: '0', duration: 0.7, ease: 'power2.out'});
    }
  }

  //check if img or vid
  let isVid = false;
  if (imgUrl.slice(-4) === '.jpg' ||
    imgUrl.slice(-4) === '.gif' ||
    imgUrl.slice(-4) === '.png') {
    isVid = false;
  } else {
    isVid = true;
  }

  return (
    <Application>
      <button onClick= { displayDevInfo } className= 'devInfo'>Dev Info</button>
      <div className= 'devInfoText'>
        <p>
          This site is built using React JS using Styled-Components. It fetches the images from the <a rel="noopener noreferrer" href= 'https://api.nasa.gov/' target= '_blank'>NASA APOD API</a> using the Axios library. The background image is randomly chosen from the API when the page loads or is refreshed. You can select a date using the HTML5 date picker to trigger the API call and update the image and infomation. You can also click the 'random date and image' button to generate a random date and therfore fetch a random image. Further, the image displayed is also a link to the larger HD version of itself. Animations were done using the <a rel="noopener noreferrer" href= 'greensock.com' target= '_blank'>GreenSock</a> animation library.
        </p>
      </div>
      <div className='cover'></div>
      <h1>Nasa: Astronomy Picture of the Day.</h1>
      <form className='dateCont'>
        <span className='dateTitle'>Change Date: </span>

        <input className='datePicker' value={curDate} title='Pick a Date to View Another Image' onChange={(e) => { change(e) }} type='date' id='dat' />

        <span>
          <button className='randomButton' onClick={(e) => { changeDate(e) }}>Random Date & Image</button>
        </span>
        <div className='errorCont'>{errMessage}</div>
      </form>

      <div className="mainContent">
        <Media isVid={isVid} date={curDate} imgUrl={imgUrl} hdUrl={hdUrl} copy={copy} />
        <Info title={title} expl={expl} />
      </div>

    </Application>
  );


}//end func

export default App;
