import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import JobCard from '../components/JobCard/JobCard';
import axios, { AxiosResponse } from 'axios';
import { IJob } from '../models';

const JobListPage = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);

  const fetchAllJobs = 
  useEffect(() => {
    axios.get<IJob[]>('http://localhost:8080/api/v1/jobs')
    });
  }, []);

  const onAcceptHandler = async (id: string) => {
    console.log('decline', id);
  };

  const onDeclineHandler = (id: string) => {
    console.log('decline', id);
  };
  const invitedJobs = jobs;
  return (
    <>
      <Tabs defaultActiveKey='invited' fill>
        <Tab eventKey='invited' title='Invited'>
          {invitedJobs.map((job) => (
            <JobCard
              job={job}
              key={job.id}
              onAcceptHandler={onAcceptHandler}
              onDeclineHandler={onDeclineHandler}
            />
          ))}
        </Tab>
        <Tab eventKey='accepted' title='Accepted' />
        {invitedJobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </Tabs>
    </>
  );
};

export default JobListPage;
