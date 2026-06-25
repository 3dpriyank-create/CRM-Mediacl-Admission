import { z } from 'zod';
import { role } from './common.validators';
export const firebaseLoginSchema=z.object({idToken:z.string().min(20),device:z.string().optional()});
export const refreshSchema=z.object({refreshToken:z.string().min(20)});
export const resetSchema=z.object({email:z.string().email()});
export const createUserSchema=z.object({email:z.string().email(),password:z.string().min(8).optional(),displayName:z.string().min(2),phone:z.string().optional(),role});
