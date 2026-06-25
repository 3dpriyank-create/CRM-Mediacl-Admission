import { onSchedule } from 'firebase-functions/v2/scheduler';
import { reportService } from '../reports/report.service';
export const generateDailyReports=onSchedule('0 18 * * *',async()=>{await reportService.generate('Daily',{date:new Date().toISOString().slice(0,10)});});
