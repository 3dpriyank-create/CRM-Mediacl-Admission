import type { Request } from 'express';
import { auditRepository } from '../repositories/audit.repository';
export class AuditService{async log(req:Request|undefined,action:string,entity:string,entityId?:string,metadata?:unknown){await auditRepository.create({actorId:req?.auth?.uid,action,entity,entityId,metadata,ip:req?.ip,userAgent:req?.header('user-agent')});}}
export const auditService=new AuditService();
