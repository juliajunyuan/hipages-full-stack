import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { format } from 'date-fns';
import './JobUser.css';

const JobUser = ({ name, timestamp }: { name: string; timestamp: number }) => {
  const formattedTime = format(new Date(timestamp), 'MMMM d yyyy @ h:MM a');
  // new Date(timestamp, "mmmm d yyyy @ h:MM tt")
  return (
    <Row xs='auto'>
      <Col>
        <div className='circle'>
          <p className='text'>{name.substring(0, 1)}</p>
        </div>
      </Col>
      <Col className='m-1'>
        <Row className='user-name'>{name}</Row>
        <Row className='date-string'>{formattedTime}</Row>
      </Col>
    </Row>
  );
};

export default JobUser;
