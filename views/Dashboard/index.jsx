'use client';

import { deleteJob } from '@/apis/job/delete';
import { getJobs } from '@/apis/job/get';
import Button from '@/components/Button';
import ConfirmationDialog from '@/components/ConfirmationDialog';
import JobCard from '@/components/JobCard';
import JobFormDialog from '@/components/JobFormDialog';
import Loader from '@/components/Loader';
import Typography from '@/components/Typography';
import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [openJobFormDialog, setOpenJobFormDialog] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [jobIndex, setJobIndex] = useState(null);
  const [isEditJob, setIsEditJob] = useState(false);
  const [openDeleteConfirmationDialog, setOpenDeleteConfirmationDialog] =
    useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchJobs = async () => {
    setIsLoading(true);

    try {
      const jobsRes = await getJobs();
      setJobs(jobsRes);
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  const handleClickOnCreateJobButton = () => {
    setOpenJobFormDialog(true);
  };

  const handleJobFormClose = () => {
    setJobIndex(null);
    setIsEditJob(false);
    setOpenJobFormDialog(false);
  };

  const handleSaveJob = (formData) => {
    if (isEditJob) {
      const jobsData = [...jobs];
      jobsData.splice(jobIndex, 1, formData);

      setJobs(jobsData);
    } else {
      setJobs([...jobs, formData]);
    }

    handleJobFormClose();
  };

  const handleEditJob = (jobIndex) => {
    setJobIndex(jobIndex);
    setIsEditJob(true);
    setOpenJobFormDialog(true);
  };

  const handleDeleteJob = (jobIndex) => {
    setJobIndex(jobIndex);
    setOpenDeleteConfirmationDialog(true);
  };

  const resetDeleteJobStates = () => {
    setJobIndex(null);
    setOpenDeleteConfirmationDialog(false);
  };

  const handleConfirmDeleteJob = async () => {
    try {
      await deleteJob(jobs[jobIndex]?.id);
      const jobsData = [...jobs];
      jobsData.splice(jobIndex, 1);

      setJobs(jobsData);
    } catch (error) {
      console.error(error);
    }

    resetDeleteJobStates();
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
        {isLoading ? (
          <div className='flex justify-center items-center h-64'>
            <Loader />
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-x-[83px] gap-y-[79px] pt-[30px] pb-[49px]'>
            {jobs.map((job, jobIndex) => (
              <JobCard
                key={job?.id}
                jobDetail={job}
                onEdit={() => handleEditJob(jobIndex)}
                onDelete={() => handleDeleteJob(jobIndex)}
              />
            ))}
          </div>
        )}
      </div>

      <JobFormDialog
        open={openJobFormDialog}
        onClose={handleJobFormClose}
        onSave={handleSaveJob}
        isEdit={isEditJob}
        jobDetail={jobs[jobIndex] || {}}
      />

      <ConfirmationDialog
        open={openDeleteConfirmationDialog}
        onClose={resetDeleteJobStates}
        onCancel={resetDeleteJobStates}
        onConfirm={handleConfirmDeleteJob}
      >
        <Typography>
          Do you want to delete {jobs?.[jobIndex]?.title} job?
        </Typography>
      </ConfirmationDialog>
    </div>
  );
}
