import React from 'react';

//styles
import './Text.scss';

export const Text = ({ imageObj }) => {
  return (
    <div className='textCont'>
      <h3 data-testid= 'textTitle'>{imageObj.title}</h3>
      <p data-testid= 'textExplanation'>{imageObj.explanation}</p>
    </div>
  )
}//end Text
