import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import JobDetail from '../JobDetail/JobDetail';
import JobAction from '../JobAction/JobAction';
import JobContact from '../JobContact/JobContact';
import JobDescription from '../JobDescription/JobDescription';
import JobUser from '../JobUser/JobUser';
import { IJob } from '../../models';

const JobCard = ({
  job,
  onAcceptHandler,
  onDeclineHandler,
  jobStatus,
}: {
  job: {
    contact_name: string;
    created_at: number;
    id: string;
    suburbName: string;
    postcode: string;
    categoryName: string;
    price: number;
    contact_email: string;
    contact_phone: string;
    description: string;
  };
  onAcceptHandler?: (id: string) => void;
  onDeclineHandler?: (id: string) => void;
  jobStatus?: string;
}) => {
  return (
    <>
      <Card className='m-3'>
        <ListGroup style={{ textAlign: 'left' }}>
          <ListGroup.Item>
            <JobUser name={job.contact_name} timestamp={job.created_at} />
          </ListGroup.Item>
          <ListGroup.Item>
            <JobDetail
              id={job.id}
              location={job.suburbName}
              postcode={job.postcode}
              jobType={job.categoryName}
              price={jobStatus === 'new' ? job.price : undefined}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            {jobStatus === 'accepted' && (
              <JobContact
                telephone={job.contact_phone}
                email={job.contact_email}
              />
            )}
            <JobDescription text={job.description} />
          </ListGroup.Item>
          {jobStatus === 'new' && onAcceptHandler && onDeclineHandler && (
            <ListGroup.Item>
              <JobAction
                price={job.price}
                onAccept={() => onAcceptHandler(job.id)}
                onDecline={() => onDeclineHandler(job.id)}
              />
            </ListGroup.Item>
          )}
        </ListGroup>
      </Card>
    </>
  );
};

export default JobCard;
