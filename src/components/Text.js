import React from 'react';

//styles
import './Text.scss';

export const Text = ({imageObj}) => {
  return (
    <div className= 'textCont'>
      <h3>{imageObj.title}</h3>
      <p>{imageObj.explanation}</p>
    </div>
  )
}//end Text
