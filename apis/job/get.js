import request from '../axios';

export const getJobs = () => request({ url: '/jobs', method: 'GET' });
