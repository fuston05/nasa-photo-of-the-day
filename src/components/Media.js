import React from 'react';

//styles
import './Media.scss';

export const Media = ({imageObj}) => {
  const source= imageObj.url;

  return (
    <div className='mediaCont'>
      {/* image or video file? */}
      
      {
      imageObj && imageObj.media_type === 'video' ? 
      // if its a vid show iframe
      <iframe 
        title= 'nasa media'
        src= {source}
        allowFullScreen= {true}
      ></iframe> :
      //if it's an image show image
      <img 
        alt= 'nasa_image'
        src= {imageObj.url}
      /> 
      }
    </div> 
    
  )
}//end Media
