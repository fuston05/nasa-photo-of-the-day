import styled from 'styled-components';

const MainCont= styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 800px){
    flex-direction: column; 
  }
`;

const ErrCont= styled.div`
  padding-top: 1%;
  width: 100%;
  text-align: center;
  color: red;
  font-size: 1rem;
`;

const DateContInput= styled.input`
  padding: 3px;
  font-size: 1.1rem;

  &:hover{
    cursor: pointer;
  }
`;

const RandomButton= styled.button`
  color: #ddd;
  background-color: blue;
  padding: 3px 5px;
  margin: 0 0 0 2%;
  border-radius: 5px;
  font-size: 1.1rem;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
    color: #eee;
  }
`;

const Heading1= styled.h1`
  color: #eee;
  margin: 0 0 3% 0;
  font-size: 2rem;
  text-shadow: 1px 1px #666;

  @media only screen and (max-width: 550px){
    text-align-center;
    margin: 4% 0;
  }
`;

const Form= styled.form`
  width: 100%;
  text-align: center;
  margin-bottom: 2%;
  position: relative;
  padding: 0 0 2% 0;

  @media only screen and (max-width: 550px){
    display: flex;
    flex-direction: column;
  }
`;

const DateTitle= styled.span`
  color: #999;
  font-size: 1.1rem;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  margin-right: 5px;
  border-radius: 5px;
`;

const DevInfoCont= styled.div`
  color: #999;
  background-color: black;
  height: 0px;
  padding: 0px;
  width: 0%;
  border-radius: 5px;
  position: absolute;
  left: 10px;
  top: 40px;
  z-index: 2;
  opacity: 0.9;

  p{
    font-size: 1.2rem;
    opacity: 0;

    @media only screen and (max-width: 800px){
      font-size: 1.3rem;
    }
  }
`;

const BgMask= styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: -1;
`;

const DevButton= styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 0.8rem;
  padding: 0 5px;
  border-radius: 3px;

  &:hover{
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Application = styled.div` 
  max-width: 100%;
  width: 100%;
  padding: 2% 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  input[type= 'date']{
    border-radius: 5px;
    outline: none;
    border: none;
    ::-webkit-datetime-edit { padding: 0px; }
    ::-webkit-datetime-edit-fields-wrapper {  }
    ::-webkit-datetime-edit-text { color: red; padding: 0 0; }
    ::-webkit-datetime-edit-month-field { color: green; }
    ::-webkit-datetime-edit-day-field { color: green; }
    ::-webkit-datetime-edit-year-field { color: green; }
    ::-webkit-inner-spin-button { display: none; }
    ::-webkit-clear-button {display: none;}
    ::-webkit-calendar-picker-indicator { 
      background: dodgerBlue; 
      padding: 5px; 
      margin-left: 10px; 
      border-radius: 50%;
    }
    @media only screen and (max-width: 550px){
      width: 50%;
      margin: 2% auto;
    }
  }

  iframe{
    z-index: 2;
  }
`;

export { 
  Application, 
  DevButton, 
  BgMask,
  DevInfoCont,
  DateTitle,
  Form,
  Heading1,
  RandomButton,
  DateContInput,
  ErrCont,
  MainCont  
};