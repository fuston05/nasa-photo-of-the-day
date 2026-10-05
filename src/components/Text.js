import React from 'react';
import './Text.scss';

export const Text = ({ imageObj }) => {
  const parser = new DOMParser();
  const parsedExplanation = parser.parseFromString(imageObj.explanation, "text/html").body.textContent;
  return (
    <div className='textCont'>
      <p data-testid= 'textDate'>{imageObj.date}</p>
      <h3 data-testid= 'textTitle'>{imageObj.title}</h3>
      <br />
      <p data-testid= 'textExplanation'>{parsedExplanation}</p>
    </div>
  )
}//end Text
