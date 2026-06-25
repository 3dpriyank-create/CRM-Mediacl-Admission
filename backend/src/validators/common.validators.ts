import { z } from 'zod';
export const idParam=z.object({id:z.string().min(1)});
export const listQuery=z.object({page:z.coerce.number().optional(),limit:z.coerce.number().optional(),q:z.string().optional(),status:z.string().optional(),state:z.string().optional(),assignedTo:z.string().optional(),from:z.string().optional(),to:z.string().optional()});
export const role=z.enum(['Super Admin','Admin','Counselor','Sales Executive','Accounts','Student','Parent']);
export const category=z.enum(['UR','OBC','SC','ST','EWS']);
