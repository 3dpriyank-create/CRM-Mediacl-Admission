import { BaseRepository } from './base.repository';
import { Collections } from '../models/collections';
import type { Lead } from '../models/domain';
import { db } from '../firebase/admin';
export const leadRepository=new BaseRepository<Lead>(Collections.Leads);
export async function searchLeads(q:string,limit=25){const snap=await db.collection(Collections.Leads).where('searchKeywords','array-contains',q.toLowerCase()).limit(limit).get();return snap.docs.map(d=>d.data() as Lead);}
