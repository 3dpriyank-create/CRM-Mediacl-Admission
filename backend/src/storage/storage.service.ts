import { randomUUID } from 'crypto';
import { bucket, db, FieldValue } from '../firebase/admin';
import { Collections } from '../models/collections';
export class StorageService{async upload(studentId:string,documentType:string,file:Express.Multer.File,uploadedBy?:string){const path=`students/${studentId}/documents/${randomUUID()}-${file.originalname}`;const blob=bucket.file(path);await blob.save(file.buffer,{contentType:file.mimetype,resumable:false,metadata:{metadata:{studentId,documentType,uploadedBy:uploadedBy||''}}});const doc=await db.collection(Collections.Documents).add({studentId,documentType,fileName:file.originalname,contentType:file.mimetype,path,verificationStatus:'Pending',uploadedBy,createdAt:FieldValue.serverTimestamp(),ocr:{status:'Ready',provider:null,result:null}});return{id:doc.id,path};}
 async signedUrl(path:string,expiresMinutes=15){const [url]=await bucket.file(path).getSignedUrl({action:'read',expires:Date.now()+expiresMinutes*60*1000});return url;}
 async verify(id:string,status:'Verified'|'Rejected',remarks?:string){await db.collection(Collections.Documents).doc(id).set({verificationStatus:status,verificationRemarks:remarks,verifiedAt:FieldValue.serverTimestamp()},{merge:true});return{id,status};}}
export const storageService=new StorageService();
