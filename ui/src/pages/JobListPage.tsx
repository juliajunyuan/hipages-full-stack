import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Tab, Tabs } from 'react-bootstrap';
import JobCard from '../components/JobCard/JobCard';
import './JobListPage.css';
import { fetchJobs, fetchCategories, fetchSuburbs } from '../utils/dataUtils';
import { ICategory, IJob, ISuburb, IformatedJob } from '../models';

const JobListPage = () => {
  const [jobs, setJobs] = useState<IformatedJob[]>([]);

  useEffect(() => {
    Promise.all([fetchJobs, fetchCategories, fetchSuburbs]).then((response) => {
      const {
        data: {
          data: { jobs: rawJobs },
        },
      } = response[0];
      const {
        data: {
          data: { categories: allCategories },
        },
      } = response[1];
      const {
        data: {
          data: { suburbs: allSuburbs },
        },
      } = response[2];
      const formatedJobs = (rawJobs as IJob[]).map((rawJob) => {
        const jobSuburb = (allSuburbs as ISuburb[]).find(
          (suburb) => suburb.id === rawJob.suburb_id
        );
        const { name: suburbName, postcode } = jobSuburb as ISuburb;
        const jobCat = (allCategories as ICategory[]).find(
          (category) => category.id === rawJob.category_id
        );
        const { name: jobCategory } = jobCat as ICategory;
        const {
          status,
          id,
          contact_name,
          price,
          contact_email,
          contact_phone,
          created_at,
          categoryName,
          description,
        } = rawJob;
        return {
          status,
          id,
          contact_name,
          price,
          contact_email,
          contact_phone,
          suburbName,
          created_at,
          categoryName,
          description,
          postcode,
          jobCategory,
        };
      });
      setJobs(formatedJobs);
    });
  }, []);
  const onAcceptHandler = (id: string) => {
    const jobToUpdate = jobs.find((job) => job.id === id);
    axios
      .post('http://localhost:8080/api/v1/jobs', {
        ...jobToUpdate,
        status: 'accepted',
      })
      .then((response) => {
        setJobs(response.data.data.allJobs);
      });
  };

  const onDeclineHandler = (id: string) => {
    const jobToUpdate = jobs.find((job) => job.id === id);
    axios
      .post('http://localhost:8080/api/v1/jobs', {
        ...jobToUpdate,
        status: 'declined',
      })
      .then((response) => {
        setJobs(response.data.data.allJobs);
      });
  };

  const newJobs = jobs.filter((job) => job.status === 'new');
  const acceptedJobs = jobs.filter((job) => job.status === 'accepted');

  return (
    <>
      <Tabs defaultActiveKey='invited' fill>
        <Tab eventKey='invited' title='Invited'>
          {newJobs.map((job) => (
            <JobCard
              job={job}
              key={job.id}
              onAcceptHandler={onAcceptHandler}
              onDeclineHandler={onDeclineHandler}
              jobStatus={job.status}
            />
          ))}
        </Tab>
        <Tab eventKey='accepted' title='Accepted'>
          {acceptedJobs.map((job) => (
            <JobCard job={job} key={job.id} />
          ))}
        </Tab>
      </Tabs>
    </>
  );
};

export default JobListPage;
