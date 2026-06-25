import nodemailer from 'nodemailer';
import { env } from '../config/env';
import { db, FieldValue } from '../firebase/admin';
import { Collections } from '../models/collections';
export class EmailService{private transport=nodemailer.createTransport({host:env.SMTP_HOST,port:env.SMTP_PORT,secure:env.SMTP_SECURE,auth:env.SMTP_USER?{user:env.SMTP_USER,pass:env.SMTP_PASS}:undefined});
 render(template:string,data:Record<string,unknown>){const templates:Record<string,string>={welcome:'<h1>Welcome {{name}}</h1><p>Doctor Admission is ready to guide your admission journey.</p>',admissionOffer:'<h1>Admission Offer</h1><p>{{college}} is available for {{course}}.</p>',reminder:'<p>Reminder: {{message}}</p>',paymentReminder:'<p>Your pending payment is ₹{{amount}}.</p>'};return (templates[template]||template).replace(/{{(\w+)}}/g,(_,k)=>String(data[k]??''));}
 async send(to:string,template:string,data:Record<string,unknown>){const html=this.render(template,data);const info=await this.transport.sendMail({from:env.SMTP_FROM,to,subject:String(data.subject||'Doctor Admission'),html});await db.collection(Collections.EmailLogs).add({to,template,data,providerMessageId:info.messageId,createdAt:FieldValue.serverTimestamp()});return info;}}
export const emailService=new EmailService();
