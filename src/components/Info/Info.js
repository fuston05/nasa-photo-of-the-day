import React from 'react';
// import styled from 'styled-components';
import InfoCont from './infoStyles';
import { Container, Row, Col } from 'reactstrap';
import './styles.css';



function Info(props) {

  return (
    <Container className= 'themed-container'>
      <Row>
        <Col><h2>{props.title}</h2></Col>
      </Row>
      <Row>
        <Col><p>{props.expl}</p></Col>;
      </Row>
    </Container>

    // <InfoCont>
    //   <h2>{props.title}</h2>
    //   <p>{props.expl}</p>
    // </InfoCont>
  );
}//end func

export default Info