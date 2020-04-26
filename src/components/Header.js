import React from 'react';

//components
import { DatePicker } from '../components/DatePicker';

//styles
import './Header.scss';

export const Header = ({ today, date, setDate, setSelectedDate, setRandomDate }) => {

  return (
    <header className='header'>
      <h1>NASA Image of the Day</h1>
      <div className='headerRow'>
        <DatePicker
          today={today}
          date={date}
          setDate={setDate}
          setSelectedDate={setSelectedDate}
        />
        <div className='buttonCont'>
          <button
            onClick={() => {setRandomDate(today, date, setDate)}}>
            Random Date
            </button>
        </div> {/* end buttonCont*/}
      </div> {/*end headerRow */}
    </header>
  )
}
