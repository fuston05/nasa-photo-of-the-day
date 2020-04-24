import React, { useState, useEffect } from 'react';

//components
import { Media } from './components/Media';
import { Text } from './components/Text';
import { Header } from './components/Header';
import Loader from './components/Loader/Loader';

//utils
import { fetchImage } from './utils/fetchImage';

//styles
import './sass/app.scss';

function App() {
  const moment= require('moment');
  const momentDate= moment().format('YYYY-MM-DD');

  const [imageObj, setImageObj] = useState({});
  const [today]= useState(momentDate);
  const [date, setDate]= useState(momentDate);
  const [isLoading, setIsLoading]= useState(false);

  //functions
  const setSelectedDate = e => {
    setDate(e.target.value.toString());
  }//end changeDate

  const randomNum= (min, max) => {
    min= Math.ceil(min);
    max= Math.floor(max);
    return Math.floor(Math.random() * ( max - min + 1 )) + min;
  }//end randomNum
  
  const setRandomDate = () => {
    //break down current year, month, and day
    const curYear= today.slice(0,4);
    const curMonth= today.slice(5, 7);
    const curDay= today.slice(-2);

    //make a random year INT
    let year= randomNum(2000, date.slice(0,4));

    //limit month if year is current year
    //random month INT
    let month= randomNum(1, 12);
    if(year === curYear){
      month= randomNum(1, curMonth);
    }//end if year
    
    //limit day if year and month is current
    //random day INT
    let day= randomNum(1, 28);
    if(year === curYear && month === curMonth ){
      day= randomNum(1, curDay);
    }//end if year and month

    //convert all values to a string & padStart for proper api format
    const randomDate= `${year.toString()}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    console.log('randomDate: ', randomDate);

    setDate(randomDate);
  }//end setRandomDate
  
  //get a new image from the api any time date changes
  useEffect(() => {
    setIsLoading(true);
    fetchImage(date)
      .then(res => {
        setImageObj(res);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('err: ', err);
      })

  }, [date])

  return (
    <div className="App">
      <Header
        today= {today}
        date= {date}
        setDate= {setDate}
        setSelectedDate={setSelectedDate}
        setRandomDate={setRandomDate}
      />

        {isLoading ? <Loader /> :(
        <div className='contentCont'>
          <Text imageObj={imageObj} />
          <Media imageObj={imageObj} />
        </div>)}

    </div> // end APP
  );
}

export default App;
