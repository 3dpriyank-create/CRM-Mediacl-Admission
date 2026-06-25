import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getFirestore, serverTimestamp, updateDoc } from 'firebase/firestore';
import type { Lead } from './types';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logout = () => signOut(auth);
export const createLead = (lead: Omit<Lead, 'id' | 'createdAt'>) => addDoc(collection(db, 'Leads'), { ...lead, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
export const updateLead = (id: string, lead: Partial<Lead>) => updateDoc(doc(db, 'Leads', id), { ...lead, updatedAt: serverTimestamp() });
export const deleteLead = (id: string) => deleteDoc(doc(db, 'Leads', id));
