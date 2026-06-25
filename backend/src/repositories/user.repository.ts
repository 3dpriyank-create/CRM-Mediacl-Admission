import { BaseRepository } from './base.repository';
import { Collections } from '../models/collections';
import type { UserProfile } from '../models/domain';
export const userRepository=new BaseRepository<UserProfile>(Collections.Users);
