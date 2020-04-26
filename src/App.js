import React, { useState, useEffect } from 'react';

//components
import { Media } from './components/Media';
import { Text } from './components/Text';
import { Header } from './components/Header';
import Loader from './components/Loader/Loader';

//utils
import { fetchImage } from './utils/fetchImage';
import {setRandomDate} from './utils/setRandomDate';

//styles
import './sass/app.scss';

function App() {
  const moment = require('moment');
  const momentDate = moment().format('YYYY-MM-DD');

  const [imageObj, setImageObj] = useState({});
  const [today] = useState(momentDate);
  const [date, setDate] = useState(momentDate);
  const [isLoading, setIsLoading] = useState(false);

  //functions
  const setSelectedDate = e => {
    setDate(e.target.value.toString());
  }//end changeDate

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
        today={today}
        date={date}
        setDate={setDate}
        setSelectedDate={setSelectedDate}
        setRandomDate={setRandomDate}
      />

      {isLoading ? <Loader /> : (
        <div className='contentCont'>
          <Text imageObj={imageObj} />
          <Media imageObj={imageObj} />
        </div>)}

    </div> // end APP
  );
}

export default App;
