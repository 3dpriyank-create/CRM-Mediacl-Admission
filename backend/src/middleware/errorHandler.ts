import type { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { logger } from '../config/logger';
export class ApiError extends Error{constructor(public status:number,message:string,public details?:unknown){super(message)}}
export function notFound(req:Request,res:Response){res.status(404).json({error:'Not Found',path:req.path,requestId:req.requestId});}
export function errorHandler(err:unknown,req:Request,res:Response,next:NextFunction){void next; if(err instanceof ZodError)return res.status(422).json({error:'Validation failed',details:err.flatten(),requestId:req.requestId}); if(err instanceof ApiError)return res.status(err.status).json({error:err.message,details:err.details,requestId:req.requestId}); logger.error('Unhandled API error',{err,requestId:req.requestId}); return res.status(500).json({error:'Internal Server Error',requestId:req.requestId});}
