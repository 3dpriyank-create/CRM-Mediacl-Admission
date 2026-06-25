import { BaseRepository } from './base.repository';
import { Collections } from '../models/collections';
import type { College } from '../models/domain';
export const collegeRepository=new BaseRepository<College>(Collections.Colleges);
