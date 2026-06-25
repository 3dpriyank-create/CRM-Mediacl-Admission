import type { Role } from '../models/domain';
export const roleRank:Record<Role,number>={'Student':1,'Parent':1,'Sales Executive':2,'Counselor':3,'Accounts':3,'Admin':4,'Super Admin':5};
export const canManageUsers=(role:Role)=>roleRank[role]>=4;
export const staffRoles:Role[]=['Super Admin','Admin','Counselor','Sales Executive','Accounts'];
