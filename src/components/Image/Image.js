import React from 'react';
// import styled from 'styled-components';
import styled from '@emotion/styled';

const ImageCont= styled.div`
    max-width: 100%;
    width: 35%;
    position: relative;

    @media only screen and (max-width: 600px){
            width: 100%;
            margin-top: 8%;
    }

    img{
        max-width: 100%;
        width: 100%;
        height: auto;
    }

    .copy{
        position: absolute;
        bottom: 5px;
        left: 5px;
        color: white;
        padding: 1%;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 5xp;
        font-size: 0.5rem;

        @media only screen and (max-width: 600px){
            font-size: 1rem;
        }
    }

    .errorCont{
        color: red;
        padding: 2px;
    }
`;

function Image(props) {

    return (
        <ImageCont>
            <a title='Click to View HD Image' href={props.hdUrl} target='_blank' rel='noopener noreferrer'>
                <span className='copy'>Copyright &copy; {props.date} {props.copy}</span>
                <img alt='Nasa' src={props.imgUrl} />
            </a>
        </ImageCont>
    );
}//end func

export default Image;