import React, { Component } from 'react';
import './App.css';
import { Col, Container } from 'react-bootstrap';
import JobListPage from './pages/JobListPage';
import Row from 'react-bootstrap/Row';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Container fluid className='mt-3'>
          <Row>
            <Col>
              <JobListPage />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
