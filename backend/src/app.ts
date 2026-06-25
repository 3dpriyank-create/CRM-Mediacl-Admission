import './interfaces/http';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { applySecurity } from './middleware/security';
import { requestContext } from './middleware/requestContext';
import { sanitize } from './middleware/sanitize';
import { errorHandler, notFound } from './middleware/errorHandler';
import { authRouter } from './routes/auth.routes';
import { leadRouter } from './routes/lead.routes';
import { collegeRouter } from './routes/college.routes';
import { moduleRouter } from './routes/module.routes';
import { openApiSpec } from './docs/openapi';
export function createApp(){const app=express();app.set('trust proxy',1);applySecurity(app);app.use(express.json({limit:'2mb'}));app.use(express.urlencoded({extended:true}));app.use(requestContext);app.use(sanitize);app.get('/health',(req,res)=>res.json({status:'ok',service:'doctor-admission-api',requestId:req.requestId}));app.use('/docs',swaggerUi.serve,swaggerUi.setup(openApiSpec));app.use('/api/v1/auth',authRouter);app.use('/api/v1/leads',leadRouter);app.use('/api/v1/colleges',collegeRouter);app.use('/api/v1',moduleRouter);app.use(notFound);app.use(errorHandler);return app;}
