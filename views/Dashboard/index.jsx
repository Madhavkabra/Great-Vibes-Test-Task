'use client';

import { getJobs } from '@/apis/job/get';
import Button from '@/components/Button';
import JobCard from '@/components/JobCard';
import JobFormDialog from '@/components/JobFormDialog';
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [openJobFormDialog, setOpenJobFormDialog] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(null);
  const isEditJob = typeof jobIndex === 'number';

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
    if (isEditJob) {
      const jobsData = [...jobs];
      jobsData.splice(jobIndex, 1, formData);

      setJobIndex(null);
      setJobs(jobsData);
    } else {
      setJobs([...jobs, formData]);
    }

    handleJobFormClose();
  };

  const handleEditJob = (jobIndex) => {
    setJobIndex(jobIndex);
    setOpenJobFormDialog(true);
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
          {jobs.map((job, jobIndex) => (
            <JobCard
              key={job?.id}
              jobDetail={job}
              onEdit={() => handleEditJob(jobIndex)}
            />
          ))}
        </div>
      </div>

      <JobFormDialog
        open={openJobFormDialog}
        onClose={handleJobFormClose}
        onSave={handleSaveJob}
        isEdit={isEditJob}
        jobDetail={jobs[jobIndex] || {}}
      />
    </div>
  );
}
