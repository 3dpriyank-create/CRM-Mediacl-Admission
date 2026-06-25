import request from 'supertest';
import { createApp } from '../src/app';
describe('Doctor Admission API',()=>{it('returns health status',async()=>{const res=await request(createApp()).get('/health');expect(res.status).toBe(200);expect(res.body.status).toBe('ok');});it('serves swagger docs',async()=>{const res=await request(createApp()).get('/docs/');expect([200,301,302]).toContain(res.status);});});
