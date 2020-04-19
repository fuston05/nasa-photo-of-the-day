import React from 'react';

//styles
import './DatePicker.scss';

export const DatePicker = ({today, date, setSelectedDate}) => {

  return (
    <div className= 'dateCont'>
      <input 
        onChange= {setSelectedDate}
        type= 'date'
        value= {date}
        min= '2000-01-01'
        max= {today}
      />      
    </div>
  )
}
