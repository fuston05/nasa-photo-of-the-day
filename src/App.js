import React, { useState, useEffect } from "react";
import axios from 'axios';
import { gsap } from 'gsap';

import Media from './components/Image/Media';
import Info from './components/Info/Info';

import {
  Application,
  DevButton,
  BgMask,
  DevInfoCont,
  DateTitle,
  Form,
  Heading1,
  RandomButton,
  DateContInput,
  ErrCont,
  MainCont
} from './appStyles';

function App() {
  //get current Date to set initial date and image states on load
  let newDate = new Date();
  let yr = newDate.getFullYear().toString();
  let mon = (newDate.getMonth() + 1).toString().padStart(2, '0');
  let day = newDate.getDate().toString();
  //format for api use, needs 2 digit month and day always
  let formattedDate = `${yr}-${mon.padStart(2, '0')}-${day.padStart(2, '0')}`;

  //grab element for later JS use
  let text = document.querySelector('.devInfoText');

  //state
  const [imgUrl, setImgUrl] = useState('');
  const [hdUrl, setHdUrl] = useState('');
  const [copy, setCopy] = useState('');
  const [curDate, setCurDate] = useState(formattedDate.toString());
  const [expl, setExpl] = useState('');
  const [title, setTitle] = useState('');
  const [errMessage, setErrMessage] = useState('');

  // ***************** functions *********************
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

    //format returned date for api use
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  }//end getRandomDate

  function changeDate(e) {
    //disable button until complete to prevent spamming which causes a loop effect
    document.querySelector('.randomButton').setAttribute('disabled', true);
    //change date will fire the useEffect and change image
    setCurDate(getRandomDate());
  }

  function change(e) {
    //disable button to avoid spamming which causes a loop effect
    e.target.setAttribute('disabled', true);
    setCurDate(e.target.value);
  }//end func

  function fadeIn() {
    // when opening the devButton fades text in
    gsap.to('.devInfoText p', { opacity: '1', duration: 1, ease: 'power2.in' });
  }
  function fadeOut() {
    // when closing the devButton takes padding away so dev button will be hidden all the way
    gsap.to('.devInfoText', { padding: '0px', duration: 0.5, ease: 'power1.in' });
    gsap.to('.devInfoText', { width: '0px', duration: 1, ease: 'power1.in' });
  }

  function displayDevInfo(e) { //opens the devInfo panel
    let element = window.getComputedStyle(text);
    if (element.height == '0px') { //if devInfo is not already open, open it
      gsap.to('.devInfoText', { padding: '15px', duration: 0.5, ease: 'power2.out' });
      gsap.to('.devInfoText', { height: '100%', duration: 0.8, ease: 'power2.out', onComplete: fadeIn() });
      gsap.to('.devInfoText', { width: '40%', duration: 0.6, ease: 'power1.out' });

    } else { //if devInfo panel is already open, close it
      gsap.to('.devInfoText', { height: '0', duration: 0.8, ease: 'power1.in', onComplete: fadeOut() });
      gsap.to('.devInfoText p', { opacity: '0', duration: 0.7, ease: 'power2.out' });
    }
  }

  // ********************************

  useEffect(() => { //runs when date is changed/sets initial image for today
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=v8su2RncIsyRc8ZbQbgNobp0ndXwjixQPURTlhTc&date=${curDate}`)
      .then(resu => {
        //set all state vars
        setImgUrl(resu.data.url);
        setHdUrl(resu.data.hdurl);
        setCopy(resu.data.copy);
        setCurDate(resu.data.date);
        setExpl(resu.data.explanation);
        setTitle(resu.data.title);
        setErrMessage('');
        //re-enable buttons/inputs
        document.querySelector('.datePicker').removeAttribute('disabled');
        document.querySelector('.randomButton').removeAttribute('disabled');

      })
      .catch(err => {
        console.log('API Error: ', err.response.status);
        setErrMessage('There may not be a photo for this day, try again.');
      })
  }, [curDate])

  useEffect(() => { //set initial state of random BG image on load or refresh
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

  //check if img or vid is returned
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
      {/* button for Dev info. for portfolio use */}
      <DevButton onClick={displayDevInfo} className='devInfo'>Dev Info</DevButton>
      <DevInfoCont className='devInfoText'>
        <p>
          This site is built using React JS. Styles are done using Styled-Components. This application fetches the images from the <a rel="noopener noreferrer" href='https://api.nasa.gov/' target='_blank'>NASA APOD API</a> using the Axios library. The background image is randomly chosen from the API when the page loads or is refreshed. You can select a date using the HTML5 date picker to trigger the API call and update the image and information. You can also click the 'Random Date and Image' button to generate a random date and therefore fetch a random image. Further, the image displayed is also a link to the larger HD version of itself. Animations were done using the <a rel="noopener noreferrer" href='greensock.com' target='_blank'>GreenSock</a> animation library.
        </p>
      </DevInfoCont>
      {/* BgMask is a black translucent overlay of entire bg image so text is still readable */}
      <BgMask className='cover'></BgMask>
      <Heading1>Nasa: Astronomy Picture of the Day.</Heading1>
      <Form className='dateCont'>
        <DateTitle className='dateTitle'>Change Date: </DateTitle>

        <DateContInput className='datePicker' value={curDate} title='Pick a Date to View Another Image' onChange={(e) => { change(e) }} type='date' id='dat' />

        <span>
          <RandomButton className='randomButton' onClick={(e) => { changeDate(e) }}>Random Date & Image</RandomButton>
        </span>
        {/* for displaying any api errors */}
        <ErrCont className='errorCont'>{errMessage}</ErrCont>
      </Form>

      <MainCont className="mainContent">
        <Media isVid={isVid} date={curDate} imgUrl={imgUrl} hdUrl={hdUrl} copy={copy} />
        <Info title={title} expl={expl} />
      </MainCont>
    </Application>
  );
}//end func

export default App;
