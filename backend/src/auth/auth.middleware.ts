import type { NextFunction, Request, Response } from 'express';
import { verifyAccessToken } from './jwt';
import { auth } from '../firebase/admin';
import { userRepository } from '../repositories/user.repository';
import { ApiError } from '../middleware/errorHandler';
export async function authenticate(req:Request,res:Response,next:NextFunction){try{const header=req.header('authorization');if(!header?.startsWith('Bearer '))throw new ApiError(401,'Missing bearer token');const token=header.slice(7);try{const p=verifyAccessToken(token);req.auth={uid:p.uid,email:p.email,role:p.role,sessionId:p.sessionId};return next();}catch{const decoded=await auth.verifyIdToken(token);const profile=await userRepository.get(decoded.uid);if(!profile)throw new ApiError(401,'User profile not found');req.auth={uid:decoded.uid,email:decoded.email,role:profile.role,profile};return next();}}catch(e){next(e)}}
export const requireRoles=(...roles:string[])=>(req:Request,res:Response,next:NextFunction)=>{if(!req.auth) return next(new ApiError(401,'Authentication required')); if(!roles.includes(req.auth.role))return next(new ApiError(403,'Insufficient permissions')); next();};
