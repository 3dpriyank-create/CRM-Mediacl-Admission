import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import type { Express } from 'express';
import { corsOrigins } from '../config/env';
export function applySecurity(app:Express){app.use(helmet({crossOriginResourcePolicy:{policy:'cross-origin'}}));app.use(cors({origin:corsOrigins,credentials:true}));app.use(rateLimit({windowMs:15*60*1000,limit:600,standardHeaders:true,legacyHeaders:false}));}
