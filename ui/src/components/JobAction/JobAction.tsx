import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import './JobAction.css';

const JobAction = ({
  price,
  onAccept,
  onDecline,
}: {
  price: number;
  onAccept: () => void;
  onDecline: () => void;
}) => {
  return (
    <Row xs='auto' className='m-1'>
      <Col>
        <Button
          size='sm'
          onClick={onAccept}
          className='custom-primary-button shadow'
        >
          Accept
        </Button>
      </Col>
      <Col>
        <Button
          size='sm'
          onClick={onDecline}
          className='custom-secondary-button shadow'
        >
          Decline
        </Button>
      </Col>
      <Col className='p-2'>
        <span style={{ fontWeight: 'bold' }}>${Number(price).toFixed(2)}</span>{' '}
        Lead Invitation
      </Col>
    </Row>
  );
};

export default JobAction;
