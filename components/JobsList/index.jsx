import React from 'react';
import JobCard from '../JobCard';

export default function JobsList() {
  return (
    <div className='grid grid-cols-2 gap-x-[83px] gap-y-[79px] pt-[30px] pb-[49px]'>
      {[1, 2, 3].map((job) => (
        <JobCard
          key={job}
          jobDetail={{
            applyType: '',
            companyLogo: '',
            companyName: '',
            experience: {
              max: 0,
              min: 0,
            },
            industry: '',
            location: '',
            remoteType: '',
            salary: {
              max: 0,
              min: 0,
            },
            title: '',
            totalEmployee: '',
          }}
        />
      ))}
    </div>
  );
}
