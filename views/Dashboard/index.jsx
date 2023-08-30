'use client';

import { getJobs } from '@/apis/job/get';
import Button from '@/components/Button';
import JobCard from '@/components/JobCard';
import JobFormDialog from '@/components/JobFormDialog';
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [openJobFormDialog, setOpenJobFormDialog] = useState(false);
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const jobsRes = await getJobs();
      setJobs(jobsRes);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickOnCreateJobButton = () => {
    setOpenJobFormDialog(true);
  };

  const handleJobFormClose = () => {
    setOpenJobFormDialog(false);
  };

  const handleSaveJob = (formData) => {
    setJobs([...jobs, formData]);
    handleJobFormClose();
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className='bg-light-silver min-h-screen'>
      <div className='px-[85px] py-8'>
        <Button
          label='Create Job'
          onClick={handleClickOnCreateJobButton}
        />
      </div>

      <div className='px-[85px]'>
        <div className='grid grid-cols-2 gap-x-[83px] gap-y-[79px] pt-[30px] pb-[49px]'>
          {jobs.map((job) => (
            <JobCard
              key={job?.id}
              jobDetail={job}
            />
          ))}
        </div>
      </div>

      <JobFormDialog
        open={openJobFormDialog}
        onClose={handleJobFormClose}
        onSave={handleSaveJob}
      />
    </div>
  );
}
