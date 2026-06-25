export type Role = 'superAdmin' | 'counselor' | 'salesExecutive' | 'student' | 'parent';
export type LeadStatus = 'New' | 'Contacted' | 'Interested' | 'Counseling Scheduled' | 'Document Received' | 'College Discussion' | 'Payment Pending' | 'Admission Confirmed' | 'Lost';
export type Category = 'UR' | 'OBC' | 'SC' | 'ST' | 'EWS';
export type Course = 'NEET UG' | 'NEET PG' | 'MBBS' | 'BDS' | 'MD/MS' | 'DNB';
export interface Lead { id:string; studentName:string; mobile:string; whatsapp:string; email:string; city:string; state:string; category:Category; neetScore:number; airRank:number; stateRank:number; interestedCourse:Course; leadSource:string; leadStatus:LeadStatus; assignedTo:string; notes:string[]; followUpAt:string; createdAt:string; budget:number; }
export interface College { id:string; collegeName:string; state:string; course:Course; managementQuotaFees:number; governmentFees:number; nriFees:number; totalSeats:number; cutoffRank:number; website:string; contactDetails:string; }
export interface Payment { id:string; studentName:string; package:string; amount:number; gst:number; paymentDate:string; paymentMode:string; transactionId:string; status:'Paid'|'Pending'|'Failed'; }
export interface Task { id:string; title:string; owner:string; dueAt:string; priority:'High'|'Medium'|'Low'; leadId:string; completed:boolean; }
export interface CounselingSession { id:string; studentName:string; counselor:string; scheduledAt:string; meetingLink:string; status:'Scheduled'|'Completed'|'Missed'; notes:string; }
