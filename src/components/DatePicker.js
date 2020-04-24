import React from 'react';

//styles
import './DatePicker.scss';

export const DatePicker = ({today, date, setSelectedDate}) => {

  return (
    <div className= 'dateCont'>
      <input 
        required pattern="\d{4}-\d{2}-\d{2}"
        onChange= {setSelectedDate}
        type= 'date'
        value= {date}
        min= '2000-01-01'
        max= {today}
      />      
    </div>
  )
}
