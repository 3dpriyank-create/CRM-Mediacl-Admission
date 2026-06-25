import { messaging, db, FieldValue } from '../firebase/admin';
import { Collections } from '../models/collections';
export class NotificationService{async send(input:{userId:string;title:string;body:string;token?:string;channels:string[]}){let pushResponse:unknown=null;if(input.token||input.channels.includes('push')){const token=input.token||(await db.collection(Collections.Users).doc(input.userId).get()).get('fcmToken');if(token)pushResponse=await messaging.send({token,notification:{title:input.title,body:input.body}});}const ref=await db.collection(Collections.Notifications).add({...input,pushResponse,read:false,createdAt:FieldValue.serverTimestamp()});return{id:ref.id,pushResponse};}}
export const notificationService=new NotificationService();
