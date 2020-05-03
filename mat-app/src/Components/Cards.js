import { Button, Card } from 'react-bootstrap';
import React, { Component } from 'react';



export default function Cards(props) {
  const {title,link} = props;
  
  const mystyle = {
    textDecoration: "none"
  };

  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="outline-primary" type="button"><a href={link} style={mystyle} target="_blank">Recorded Session</a></Button>{' '}
        <Button variant="outline-secondary"><a href style={mystyle} target="_blank">Presentation</a></Button>
      </Card.Body>
    </Card>
  );
}