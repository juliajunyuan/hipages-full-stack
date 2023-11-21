import React from "react";
import { Row, Col } from "react-bootstrap";
import { format } from 'date-fns';
import "./JobUser.css";

interface IUser {
    name: string;
    timestamp: number
}
const JobUser = ({ name, timestamp }: IUser) => {
    const formattedTime = format(new Date(timestamp), "MMMM d yyyy @ h:MM a")
    return (
        <Row xs='auto'>
        <Col>
        <div className="circle">
          <p className="text">{name.substring(0, 1)}</p>
        </div>
        </Col>
        <Col className="m-1">
        <Row className="user-name">{name}</Row>
        <Row className="date-string">{formattedTime}</Row>
      </Col>
        </Row>
    );
}

export default JobUser;