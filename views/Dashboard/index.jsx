'use client';

import Button from '@/components/Button';
import JobFormDialog from '@/components/JobFormDialog';
import JobsList from '@/components/JobsList';
import React, { useState } from 'react';

export default function Dashboard() {
  const [openJobFormDialog, setOpenJobFormDialog] = useState(false);

  const handleClickOnCreateJobButton = () => {
    setOpenJobFormDialog(true);
  };

  const handleJobFormClose = () => {
    setOpenJobFormDialog(false);
  };

  return (
    <div className='bg-light-silver min-h-screen'>
      <div className='px-[85px] py-8'>
        <Button
          label='Create Job'
          onClick={handleClickOnCreateJobButton}
        />
      </div>

      <div className='px-[85px]'>
        <JobsList />
      </div>

      <JobFormDialog
        open={openJobFormDialog}
        onClose={handleJobFormClose}
      />
    </div>
  );
}
