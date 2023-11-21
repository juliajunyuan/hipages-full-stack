import React, { useState, useEffect } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import JobCard from '../components/JobCard/JobCard';
import axios, { AxiosResponse } from 'axios';
import { fetchAllData, fetchJobs } from '../utils/fetchUtils';

interface ICategory {
  id: Number;
  name: String;
  patent_category_id: Number;
}
interface ISuburb {
  id: Number;
  name: String;
  postcode: String;
}
interface IJob {
  id: string;
  contact_name: string;
  created_at: number;
  suburbName: string;
  postcode: string;
  categoryName: string;
  price: number;
  contact_email: string;
  contact_phone: string;
  description: string;
}

const jobsURL = 'http://localhost:8080/api/v1/jobs';
const suburbsURL = 'http://localhost:8080/api/v1/suburbs';
const categoriesURL = 'http://localhost:8080/api/v1/categories';

const JobListPage = () => {
  const [jobs, setJobs] = useState<IJob[]>([]);
  console.log("🚀 ~ file: JobsListPage.tsx:35 ~ JobListPage ~ jobs:", jobs)
  //const [suburbs, setSuburbs] = useState<ISuburb[]>([]);
  //const [categories, setCategories] = useState<object[]>([]);

  const fetchJobsData = async () => {
    const result = await fetch(jobsURL);
    result.json().then(json => {
      setJobs(json.data.jobs)
    })
  }

  const updateJobStatus =async (job:IJob) => {
    const result = await axios.post(jobsURL, job);
    console.log("🚀 ~ file: JobsListPage.tsx:49 ~ updateJobStatus ~ result:", result)
  }
  useEffect(() => {

    fetchJobsData();
    // fetchAllData.then(
    //   axios.spread((...allData) => {
    //     const {
    //       data: { jobs: alljobs },
    //     } = allData[0].data as AxiosResponse<{ jobs: IJob[] }>;
    //     console.log(
    //       '🚀 ~ file: JobsListPage.tsx:22 ~ axios.spread ~ alljobs:',
    //       alljobs
    //     );
    //     const {
    //       data: { allSuburbs},
    //     } = allData[1].data as AxiosResponse<{ allSuburbs: ISuburb[] }>;
    //     console.log(
    //       '🚀 ~ file: JobsListPage.tsx:24 ~ axios.spread ~ allSuburbs:',
    //       allSuburbs
    //     );
    //     const {
    //       data: { allCategores },
    //     } = allData[2].data as AxiosResponse<{ allCategores: ICategory[] }>;
    //     console.log(
    //       '🚀 ~ file: JobsListPage.tsx:26 ~ axios.spread ~ allCategores:',
    //       allCategores
    //     );
        //setCategories(allCategores);
        //setSuburbs(allSuburbs);
    //   })
    // );
  }, []);

  const onAcceptHandler = async (job: IJob) => {
    console.log('decline', job);
    await updateJobStatus(job);
  };

  const onDeclineHandler = (job: IJob) => {
    console.log('decline', job);
  };
  //const invitedJobs = jobs;
  return (
    <>
      <Tabs defaultActiveKey='invited' fill>
        <Tab eventKey='invited' title='Invited'>
          {jobs.map((job) => (
            <JobCard
              job={job}
              key={job.id}
              onAcceptHandler={onAcceptHandler}
              onDeclineHandler={onDeclineHandler}
            />
          ))}
        </Tab>
        <Tab eventKey='accepted' title='Accepted' />
        {jobs.map((job) => (
          <JobCard job={job} key={job.id} />
        ))}
      </Tabs>
    </>
  );
};

export default JobListPage;
