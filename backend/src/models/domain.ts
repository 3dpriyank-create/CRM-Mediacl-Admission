export type Role='Super Admin'|'Admin'|'Counselor'|'Sales Executive'|'Accounts'|'Student'|'Parent';
export type LeadStatus='New'|'Contacted'|'Interested'|'Counseling Scheduled'|'Document Received'|'College Discussion'|'Payment Pending'|'Admission Confirmed'|'Lost';
export type Priority='Low'|'Medium'|'High'|'Urgent';
export type Category='UR'|'OBC'|'SC'|'ST'|'EWS';
export interface UserProfile{id?:string;uid:string;email:string;displayName:string;phone?:string;role:Role;active:boolean;studentId?:string;parentId?:string;createdAt?:FirebaseFirestore.FieldValue;updatedAt?:FirebaseFirestore.FieldValue;}
export interface Lead{id:string;studentName:string;mobile:string;whatsapp?:string;email?:string;city?:string;state:string;category:Category;neetScore?:number;airRank?:number;stateRank?:number;interestedCourse:string;leadSource:string;leadStatus:LeadStatus;leadPriority:Priority;assignedTo?:string;tags:string[];notes:string[];budget?:number;createdAt?:unknown;updatedAt?:unknown;}
export interface College{id:string;collegeName:string;collegeType:'Government'|'Private'|'Deemed'|'AIIMS'|'JIPMER';state:string;courses:string[];fees:{course:string;government:number;management:number;nri:number;hostel:number}[];quota:string[];category:string[];seatMatrix:{course:string;totalSeats:number;availableSeats:number}[];cutoffs:{course:string;category:string;quota:string;rank:number;year:number}[];}
