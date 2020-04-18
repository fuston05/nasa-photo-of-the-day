import React from 'react';

//styles
import './Media.scss';

export const Media = ({imageObj}) => {
  
  return (
    <div className='mediaCont'>
      <img 
        src= {imageObj.url}
      />
    </div>
  )
}//end Media
