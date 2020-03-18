import styled from 'styled-components';

const MediaCont = styled.div`
  max-width: 100%;
  width: 35%;
  position: relative;
  box-shadow: 2px 2px 5px #000;
  text-align: center;

  @media only screen and (max-width: 800px){
    width: 100%;
    margin-bottom: 8%;
  }

  a{
    z-index: 2;
    opacity: 1;

    &:hover{
      cursor: pointer; 
      opacity: 0.8;
    }
  }
`;

const Image= styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
`;

const Iframe= styled.iframe`
  max-width: 100%;
  margin: 0 auto;
`;

const Copy= styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  padding: 1% 1.4%;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 5xp;
  font-size: 0.8rem;
`;

export {
  Copy,
  Iframe,
  Image,
  MediaCont
};