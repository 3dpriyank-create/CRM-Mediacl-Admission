import { BaseRepository } from './base.repository';
import { Collections } from '../models/collections';
export interface AuditLog{id?:string;actorId?:string;action:string;entity:string;entityId?:string;metadata?:unknown;ip?:string;userAgent?:string;}
export const auditRepository=new BaseRepository<AuditLog>(Collections.AuditLogs);
