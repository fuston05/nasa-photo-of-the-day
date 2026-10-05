import React from 'react';

//components
// import { DatePicker } from '../components/DatePicker';

//styles
import './Header.scss';

export const Header = ({ today, date, setDate, setSelectedDate, setRandomDate }) => {

  return (
    <header className='header'>
      <h1>NASA Image of the Day</h1>
      <div className='headerRow'>
        {/* new api is not respecting the date parameter, so the date picker and random date button are disabled for now. */}
        {/* <DatePicker
          today={today}
          date={date}
          setDate={setDate}
          setSelectedDate={setSelectedDate}
        /> */}
        {/* <div className='buttonCont'>
          <button
            onClick={() => {setRandomDate(today, date, setDate)}}>
            Random Date
            </button>
        </div> */}
      </div> 
    </header>
  )
}
