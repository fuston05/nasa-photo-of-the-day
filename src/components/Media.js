import React from 'react';

//styles
import './Media.scss';

export const Media = ({imageObj}) => {
  
  return (
    <div className='mediaCont'>
      <img 
        alt= 'nasa_image'
        src= {imageObj.url}
      />
    </div>
  )
}//end Media
