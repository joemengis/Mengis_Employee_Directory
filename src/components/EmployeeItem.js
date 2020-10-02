import React from 'react';
import { Card } from 'react-bootstrap';

const EmployeeItem = ({ name, email, country, photo, gender, age }) => {
  return (
    <Card className="employee">
      <Card.Img variant="top" src={photo} className="employee__image" alt={name} />
      <Card.Body>
        <Card.Title className="employee__name">{name}</Card.Title>
        <Card.Text className="employee__details">
          <span>
            <strong>Email:</strong> {email}
          </span>
          <span>
            <strong>Country:</strong> {country}
          </span>
          <span>
            <strong>Gender:</strong> {gender}
          </span>
          <span>
            <strong>Age:</strong> {age}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EmployeeItem;