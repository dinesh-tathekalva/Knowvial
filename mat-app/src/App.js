import React from 'react';
import './App.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Card from './Components/Cards'
import className from 'classnames';


function App() {
  return (
    <body>
      <div className="App">
        <Container style={{display: 'flex', marginTop: '4%'}}>
          <Row>
            <Col xs={12}>
              <h1>KNOWVIAL</h1>
            </Col>
          </Row>
        </Container>

        <h2>Topics</h2>

        <Container className="contain-top">
          <Row>
            <Col xs={6}>
              <Card title='Docker Containers'/>
            </Col>
            <Col xs={6}>
              <Card title='Introduction to Kafka'/>
            </Col>
          </Row>
        </Container>

        <Container className="contain">
          <Row>
            <Col xs={6}>
              <Card />
            </Col>
            <Col xs={6}>
              <Card />
            </Col>
          </Row>
        </Container>

        <Container className="contain">
          <Row>
            <Col xs={6}>
              <Card />
            </Col>
            <Col xs={6}>
              <Card />
            </Col>
          </Row>
        </Container>
      </div>
    </body>
  );
}

export default App;
