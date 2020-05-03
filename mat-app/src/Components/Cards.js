import { Button, Card } from 'react-bootstrap';
import React, { Component } from 'react';

export default function Cards(props) {
  const {title} = props;

  return (
    <Card>
      <Card.Header as="h5">{title}</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>{' '}
        <Button variant="outline-secondary">Secondary</Button>
      </Card.Body>
    </Card>
  );
}