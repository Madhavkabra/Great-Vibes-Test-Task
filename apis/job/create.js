import request from '../axios';

export const createJob = (data) =>
  request({ data, url: '/jobs', method: 'POST' });

export const updateJob = (jobId, data) =>
  request({ data, url: `/jobs/${jobId}`, method: 'PUT' });
