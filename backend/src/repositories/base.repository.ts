import { db, FieldValue } from '../firebase/admin';
export class BaseRepository<T extends {id?:string}>{constructor(private collection:string){}
 ref(){return db.collection(this.collection)}
 async create(data:Omit<T,'id'>){const doc=this.ref().doc();const payload={...data,id:doc.id,createdAt:FieldValue.serverTimestamp(),updatedAt:FieldValue.serverTimestamp()};await doc.set(payload);return payload as unknown as T;}
 async get(id:string){const snap=await this.ref().doc(id).get();return snap.exists?snap.data() as T:null;}
 async update(id:string,data:Partial<T>){await this.ref().doc(id).set({...data,updatedAt:FieldValue.serverTimestamp()},{merge:true});return this.get(id);}
 async delete(id:string){await this.ref().doc(id).delete();}
 async list(limit=25,offset=0){const snap=await this.ref().orderBy('createdAt','desc').offset(offset).limit(limit).get();return snap.docs.map(d=>d.data() as T);}
 async where(field:string,op:FirebaseFirestore.WhereFilterOp,value:unknown,limit=25){const snap=await this.ref().where(field,op,value).limit(limit).get();return snap.docs.map(d=>d.data() as T);}}
