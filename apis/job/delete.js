import request from '../axios';

export const deleteJob = (jobId) =>
  request({ url: `/jobs/${jobId}`, method: 'DELETE' });
