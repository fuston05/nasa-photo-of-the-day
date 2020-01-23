import styled from 'styled-components';

const InfoCont = styled.div`
font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
max-width: 100%;
width: 55%;

  @media only screen and (max-width: 800px){
    width: 100%;
  }

h2{
    color: #333;
    padding: 1%;
    margin-top: -1%;
    background-color: rgba(200, 200, 255, 0.6);
    border-radius: 5px;
}

p{
    font-size: 1.3rem;
    color: #ccc;
    padding: 2%;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 5px;
}
`;

export default InfoCont;