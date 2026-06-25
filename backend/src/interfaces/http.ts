import type { Role, UserProfile } from '../models/domain';
export interface AuthContext{uid:string;email?:string;role:Role;sessionId?:string;profile?:UserProfile;}
declare global{namespace Express{interface Request{auth?:AuthContext;requestId?:string;}}}
