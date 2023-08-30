import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import Card from '../Card';
import Typography from '../Typography';
import Button from '../Button';
import { formatNumber } from '@/functions/formatNumber';

export default function JobCard({ jobDetail, onEdit, onDelete }) {
  return (
    <Card className='py-4 px-6 min-w-[600px]'>
      <div className='flex gap-2'>
        <div>
          <Image
            src={jobDetail.companyLogo || './netflix.svg'}
            alt={jobDetail.companyName}
            height={48}
            width={48}
            className='rounded-1x h-12'
          />
        </div>
        <div className='flex flex-col flex-grow gap-6 '>
          <div>
            <Typography variant='h1'>{jobDetail.title}</Typography>
            <Typography>
              {jobDetail.companyName} - {jobDetail.industry}
            </Typography>
            <Typography className='text-placeholder text-base font-normal'>
              {jobDetail.location} ({jobDetail.remoteType})
            </Typography>
          </div>

          <div className='flex flex-col gap-2'>
            <Typography>Part-Time (9.00 am - 5.00 pm IST)</Typography>
            <Typography>
              Experience ({jobDetail.experience.min} -{' '}
              {jobDetail.experience.max} years)
            </Typography>
            <Typography>
              INR (₹) {formatNumber(jobDetail.salary.min)}-{' '}
              {formatNumber(jobDetail.salary.max)} / Month
            </Typography>
            <Typography>{jobDetail.totalEmployee} employees</Typography>
          </div>

          {jobDetail.applyType === 'quick' ? (
            <Button label={'Apply Now'} />
          ) : (
            <Button
              variant='secondary'
              label={'External Apply'}
            />
          )}
        </div>

        <div className='flex gap-2 self-start items-center'>
          <PencilSquareIcon
            className='h-6 w-6 cursor-pointer text-primary hover:opacity-70'
            onClick={onEdit}
          />
          <TrashIcon
            className='h-6 w-6  cursor-pointer text-placeholder hover:opacity-70'
            onClick={onDelete}
          />
        </div>
      </div>
    </Card>
  );
}

JobCard.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  jobDetail: PropTypes.shape({
    companyName: PropTypes.string.isRequired,
    companyLogo: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    remoteType: PropTypes.oneOf(['in-office', 'remote', 'hybrid']).isRequired,
    experience: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
    salary: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired,
    }).isRequired,
    totalEmployee: PropTypes.string.isRequired,
    applyType: PropTypes.oneOf(['quick', 'external']).isRequired,
  }),
};
