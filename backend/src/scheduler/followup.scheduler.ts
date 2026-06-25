import { onSchedule } from 'firebase-functions/v2/scheduler';
import { db, FieldValue } from '../firebase/admin';
import { Collections } from '../models/collections';
export const markMissedFollowUps=onSchedule('every 30 minutes',async()=>{const now=new Date().toISOString();const snap=await db.collection(Collections.FollowUps).where('status','==','Pending').where('dueAt','<',now).limit(500).get();const batch=db.batch();snap.docs.forEach(d=>batch.update(d.ref,{status:'Missed',updatedAt:FieldValue.serverTimestamp()}));await batch.commit();});
