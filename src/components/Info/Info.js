import React from 'react';
import styled from 'styled-components';

const InfoCont= styled.div`
    font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
    max-width: 100%;
    width: 50%;

    @media only screen and (max-width: 600px){
            width: 100%;
    }

    p{
        font-size: 1.3rem;
    }
`;

function Info(props) {

    return (
        <InfoCont>
            <h2>{props.title}</h2>
            <p>{props.expl}</p>
        </InfoCont>
    );
}//end func

export default Info