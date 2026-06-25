import type { NextFunction, Request, Response } from 'express';
import type { ZodSchema } from 'zod';
export const validate=(schema:{body?:ZodSchema;query?:ZodSchema;params?:ZodSchema})=>(req:Request,res:Response,next:NextFunction)=>{if(schema.body)req.body=schema.body.parse(req.body);if(schema.query)req.query=schema.query.parse(req.query) as typeof req.query;if(schema.params)req.params=schema.params.parse(req.params) as typeof req.params;next();};
