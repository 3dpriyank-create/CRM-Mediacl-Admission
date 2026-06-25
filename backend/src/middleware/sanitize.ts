import type { NextFunction, Request, Response } from 'express';
import xss from 'xss';
function clean(v:unknown):unknown{if(typeof v==='string')return xss(v.trim());if(Array.isArray(v))return v.map(clean);if(v&&typeof v==='object')return Object.fromEntries(Object.entries(v).map(([k,val])=>[k,clean(val)]));return v;}
export function sanitize(req:Request,res:Response,next:NextFunction){req.body=clean(req.body);req.query=clean(req.query) as typeof req.query;next();}
