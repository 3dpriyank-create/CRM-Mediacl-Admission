import { onRequest } from 'firebase-functions/v2/https';
import { createApp } from './app';
export { markMissedFollowUps } from './scheduler/followup.scheduler';
export { generateDailyReports } from './jobs/daily-reports.job';
export const api=onRequest({region:'us-central1',timeoutSeconds:120,memory:'1GiB',cors:false},createApp());
