declare module 'express' {
  export interface Request { body: any; path: string; query: any; params: any; headers: any; ip?: string; auth?: any; requestId?: string; file?: any; header(name: string): string | undefined; }
  export interface Response { status(code: number): Response; json(body?: any): Response; send(body?: any): Response; sendStatus(code: number): Response; setHeader(name: string, value: any): void; header(name: string, value: any): Response; }
  export type NextFunction = (err?: any) => void;
  export interface Router { use(...args: any[]): any; get(...args: any[]): any; post(...args: any[]): any; put(...args: any[]): any; delete(...args: any[]): any; }
  export interface Express extends Router { set(...args: any[]): any; listen(...args: any[]): any; }
  export type RequestHandler = (req: Request, res: Response, next: NextFunction) => any;
  export function Router(): Router;
  function express(): Express;
  namespace express { function json(...args: any[]): any; function urlencoded(...args: any[]): any; }
  export default express;
}
declare module 'cors' { const cors: any; export default cors; }
declare module 'helmet' { const helmet: any; export default helmet; }
declare module 'express-rate-limit' { const rateLimit: any; export default rateLimit; }
declare module 'swagger-ui-express' { export const serve: any; export function setup(spec: any): any; }
declare module 'multer' { const multer: any; export default multer; }
declare module 'nodemailer' { const nodemailer: any; export default nodemailer; }
declare module 'jsonwebtoken' { const jwt: any; export default jwt; }
declare module 'winston' { const winston: any; export default winston; }
declare module 'xss' { const xss: any; export default xss; }
declare module 'razorpay' { const Razorpay: any; export default Razorpay; }
declare module 'stripe' { const Stripe: any; export default Stripe; }
declare module 'dotenv' { const dotenv: { config(): void }; export default dotenv; }
declare module 'zod' { export type ZodSchema = any; export class ZodError extends Error { flatten(): any; } export const z: any; }
declare module 'firebase-functions/v2/https' { export function onRequest(options: any, app: any): any; }
declare module 'firebase-functions/v2/scheduler' { export function onSchedule(schedule: any, handler: any): any; }
declare module 'firebase-admin' { const admin: any; export default admin; }
declare namespace Express { namespace Multer { interface File { originalname: string; mimetype: string; buffer: any; } } }
declare namespace FirebaseFirestore { type FieldValue = any; type WhereFilterOp = any; type Query = any; type DocumentData = Record<string, any>; }
declare const process: any;
declare const console: any;
declare function fetch(input: any, init?: any): Promise<any>;
declare module 'crypto' { export function randomBytes(size: number): { toString(encoding: string): string }; export function createHash(algorithm: string): { update(value: string): { digest(encoding: string): string } }; export function randomUUID(): string; }
