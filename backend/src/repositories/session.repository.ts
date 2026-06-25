import { BaseRepository } from './base.repository';
import { Collections } from '../models/collections';
export interface Session{id?:string;uid:string;refreshTokenHash:string;device?:string;ip?:string;revoked:boolean;expiresAt:number;lastSeenAt?:unknown;}
export const sessionRepository=new BaseRepository<Session>(Collections.Sessions);
