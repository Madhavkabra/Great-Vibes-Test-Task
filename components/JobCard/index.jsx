import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid';
import { formatNumber } from '@/functions/formatNumber';
import { APPLY_TYPE } from '@/constants/jobForm';
import { BUTTON_VARIANT } from '@/constants/button';
import Card from '../Card';
import Typography from '../Typography';
import Button from '../Button';

export default function JobCard({ jobDetail, onEdit, onDelete }) {
  return (
    <Card className='py-4 px-6 min-w-[420px]'>
      <div className='flex gap-2'>
        <div>
          <Image
            src={jobDetail?.companyLogo || './netflix.svg'}
            alt={jobDetail.companyName}
            height={48}
            width={48}
            className='rounded-1x min-h-[48px] min-w-[48px]'
          />
        </div>
        <div className='flex flex-col flex-grow gap-6 '>
          <div>
            <Typography
              variant='h1'
              className='line-clamp-2'
              fontSize='text-2xl'
            >
              {jobDetail.title}
            </Typography>

            <Typography className='line-clamp-2'>
              {jobDetail.companyName} - {jobDetail.industry}
            </Typography>

            <Typography
              color='text-placeholder'
              className='line-clamp-2'
            >
              {jobDetail?.location}{' '}
              {jobDetail?.remoteType ? `(${jobDetail.remoteType})` : ''}
            </Typography>
          </div>

          <div className='flex flex-col gap-2'>
            <Typography>Part-Time (9.00 am - 5.00 pm IST)</Typography>

            <Typography>
              {typeof jobDetail?.experience?.min === 'number' &&
                `Experience (${jobDetail.experience.min} - ${jobDetail.experience.max} years)`}
            </Typography>

            <Typography>
              {typeof jobDetail.salary?.min === 'number' &&
                `INR (₹) ${formatNumber(jobDetail.salary.min)} - ${formatNumber(
                  jobDetail.salary.max
                )} / Month`}
            </Typography>

            <Typography>
              {jobDetail?.totalEmployee &&
                `${jobDetail.totalEmployee} employees`}
            </Typography>
          </div>

          {jobDetail.applyType === APPLY_TYPE.QUICK ? (
            <Button label={'Apply Now'} />
          ) : (
            <Button
              variant={BUTTON_VARIANT.SECONDARY}
              label={'External Apply'}
            />
          )}
        </div>

        <div className='flex gap-2 self-start items-center'>
          <PencilSquareIcon
            className='h-6 w-6 cursor-pointer text-primary hover:opacity-70'
            onClick={onEdit}
            title='Edit'
          />
          <TrashIcon
            className='h-6 w-6  cursor-pointer text-placeholder hover:opacity-70'
            onClick={onDelete}
            title='Delete'
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
    companyLogo: PropTypes.string,
    title: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    location: PropTypes.string,
    remoteType: PropTypes.string,
    experience: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    salary: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    totalEmployee: PropTypes.string,
    applyType: PropTypes.oneOf([APPLY_TYPE.EXTERNAL, APPLY_TYPE.QUICK]),
  }).isRequired,
};
