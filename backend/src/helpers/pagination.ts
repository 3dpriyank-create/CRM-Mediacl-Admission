import type { Request } from 'express';
export function getPagination(req:Request){const limit=Math.min(Number(req.query.limit||25),100);const page=Math.max(Number(req.query.page||1),1);return{limit,page,offset:(page-1)*limit};}
