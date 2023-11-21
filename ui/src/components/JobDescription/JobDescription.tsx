import React from 'react';
import './JobDescription.css';

function JobDescription({ text }: { text: string }) {
  return <p className='description'>{text}</p>;
}

export default JobDescription;
