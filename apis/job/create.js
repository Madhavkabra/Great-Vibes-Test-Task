import request from '../axios';

export const createJob = (body) =>
  request({ body, url: '/jobs', method: 'POST' });
