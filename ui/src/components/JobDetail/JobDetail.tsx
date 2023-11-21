import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { GrLocation } from 'react-icons/gr';
import { BiBriefcase } from 'react-icons/bi';

const JobDetail = ({
  id,
  location,
  postcode,
  jobType,
  price,
}: {
  id: string;
  location: string;
  postcode: string;
  jobType: string;
  price: number | undefined;
}) => {
  return (
    <Row xs='auto'>
      <Col>
        <GrLocation /> {location} {postcode}
      </Col>
      <Col>
        <BiBriefcase /> {jobType}
      </Col>
      <Col>Job ID: {id}</Col>
      {price && <Col>${price.toFixed(2)} Lead Invitation</Col>}
    </Row>
  );
};

export default JobDetail;
