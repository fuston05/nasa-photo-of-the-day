import React from 'react';
import {
  Copy,
  Iframe,
  Image,
  MediaCont
} from './mediaStyles';

function Media(props) {
  if (props.isVid) {
    return (

      <MediaCont>
        <Iframe title='Video Player' width="420" height="315"
          src={props.imgUrl}>
        </Iframe>
      </MediaCont>
    );
  } else {
    return (
      <MediaCont>
        <a title='Click to View HD Image' href={props.hdUrl} target='_blank' rel='noopener noreferrer'>
          <Copy className='copy'>Copyright &copy; {props.date} {props.copy}</Copy>
          <Image alt='Nasa' src={props.imgUrl} />
        </a>
      </MediaCont>
    );
  }//end if
}//end func

export default Media;