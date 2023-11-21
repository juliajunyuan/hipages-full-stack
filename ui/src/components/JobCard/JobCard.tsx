import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import JobContact from '../JobContact/JobContact';
import JobAction from '../JobAction/JobAction';
import JobUser from "../JobUser/JobUser";
import JobDetail from '../JobDetail/JobDetail';
import JobDescription from '../JobDescription/JobDescription';
import { IJob } from '../../models';



const JobCard = ({
  job,
  onAcceptHandler,
  onDeclineHandler,
  isPendingTab,
}: {
  job: IJob;
  onAcceptHandler?: (job: IJob) => void;
  onDeclineHandler?: (job: IJob) => void;
  isPendingTab?: boolean;
}) => {
  return (
    <>
      <Card className='m-3'>
        <ListGroup>
          <ListGroup.Item>
          <JobUser name={job.contact_name} timestamp={job.created_at} />
          </ListGroup.Item>
          <ListGroup.Item>
          <JobDetail
              id={job.id}
              location={job.suburbName}
              postcode={job.postcode}
              jobType={job.categoryName}
              price={!isPendingTab ? job.price : undefined}
            />
          </ListGroup.Item>
          <ListGroup.Item>
          {!isPendingTab && <JobContact telephone={job.contact_phone} email={job.contact_email} />}
            <JobDescription text={job.description}></JobDescription>
          </ListGroup.Item>
          {isPendingTab && onAcceptHandler && onDeclineHandler &&
            <ListGroup.Item>
              <JobAction
                price={job.price}
                onAccept={() => onAcceptHandler(job)}
                onDecline={() => onDeclineHandler(job)}
              />
            </ListGroup.Item>
          }
        </ListGroup>
      </Card>
    </>
  );
};

export default JobCard;
