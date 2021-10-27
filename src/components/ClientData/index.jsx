import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ClientData = ({ data }) => {
  const { firstName, lastName, jobTitle, avatar, cellphone } = data;
  let fname = firstName.toLowerCase();
  let lname = lastName.toLowerCase();

  return (
    <Col>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={avatar} />
        <Card.Body>
          <Card.Title>{firstName} {lastName}</Card.Title>
          <Card.Text>
          {jobTitle}
          <br></br>
          {cellphone}
          </Card.Text><br></br>
          <Button variant="primary" href={`callto:${cellphone}`}>Appeler</Button><br></br><br></br>
          <Button variant="primary" href={`mailto:${lname}.${fname}@gmail.com`}>Envoyer un message</Button>
        </Card.Body>
      </Card>
      <div style={{marginTop: "30px"}}></div>
      </Col>
  );
};

export default ClientData;
