import { BaseRepository } from '../repositories/base.repository';
import { auditService } from './audit.service';
import type { Request } from 'express';
export class CrudService<T extends {id?:string}>{constructor(public name:string,private repo:BaseRepository<T>){}
 create(req:Request,data:Omit<T,'id'>){return this.repo.create(data).then(r=>{void auditService.log(req,'CREATE',this.name,r.id);return r;});}
 list(limit:number,offset:number){return this.repo.list(limit,offset);}
 get(id:string){return this.repo.get(id);}
 update(req:Request,id:string,data:Partial<T>){return this.repo.update(id,data).then(r=>{void auditService.log(req,'UPDATE',this.name,id,data);return r;});}
 async delete(req:Request,id:string){await this.repo.delete(id);void auditService.log(req,'DELETE',this.name,id);}}
