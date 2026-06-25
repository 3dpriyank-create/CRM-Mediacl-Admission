import { auth } from '../firebase/admin';
import { userRepository } from '../repositories/user.repository';
import { sessionRepository } from '../repositories/session.repository';
import { randomToken, sha256 } from '../utils/crypto';
import { signAccessToken, signRefreshToken, verifyRefreshToken } from './jwt';
import { ApiError } from '../middleware/errorHandler';
import type { Role } from '../models/domain';
export class AuthService{
 async loginWithFirebase(idToken:string,device?:string,ip?:string){const decoded=await auth.verifyIdToken(idToken);let profile=await userRepository.get(decoded.uid);if(!profile){profile={uid:decoded.uid,email:decoded.email||'',displayName:decoded.name||decoded.email||'User',role:'Student',active:true};await userRepository.update(decoded.uid,profile);} if(!profile.active)throw new ApiError(403,'User account disabled');const session=await sessionRepository.create({uid:decoded.uid,refreshTokenHash:sha256(randomToken()),device,ip,revoked:false,expiresAt:Date.now()+30*24*60*60*1000});const payload={uid:decoded.uid,email:decoded.email,role:profile.role as Role,sessionId:session.id!};return{accessToken:signAccessToken(payload),refreshToken:signRefreshToken(payload),user:profile};}
 async refresh(token:string){const payload=verifyRefreshToken(token);const session=await sessionRepository.get(payload.sessionId);if(!session||session.revoked)throw new ApiError(401,'Invalid session');return{accessToken:signAccessToken(payload)};}
 async logout(sessionId:string){await sessionRepository.update(sessionId,{revoked:true});}
 async resetPassword(email:string){return auth.generatePasswordResetLink(email);}
 async createUser(input:{email:string;password?:string;displayName:string;phone?:string;role:Role}){const fb=await auth.createUser({email:input.email,password:input.password,displayName:input.displayName,phoneNumber:input.phone});await auth.setCustomUserClaims(fb.uid,{role:input.role});await userRepository.update(fb.uid,{uid:fb.uid,email:input.email,displayName:input.displayName,phone:input.phone,role:input.role,active:true});return userRepository.get(fb.uid);}}
export const authService=new AuthService();
