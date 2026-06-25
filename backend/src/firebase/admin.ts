import admin from 'firebase-admin';
import { env } from '../config/env';
if(!admin.apps.length){admin.initializeApp({storageBucket:env.FIREBASE_STORAGE_BUCKET});}
export const firebaseAdmin=admin;
export const db=admin.firestore();
export const auth=admin.auth();
export const messaging=admin.messaging();
export const bucket=admin.storage().bucket();
export const FieldValue=admin.firestore.FieldValue;
export const Timestamp=admin.firestore.Timestamp;
