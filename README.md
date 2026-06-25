# Doctor Admission CRM

Production-ready responsive CRM for a medical admission counseling company managing NEET UG and NEET PG leads, admissions, documents, payments, colleges, counseling, reports, and PWA mobile workflows.

## Features
- React + TypeScript + Tailwind CSS SaaS dashboard.
- Firebase Auth and Firestore service layer.
- Role model: Super Admin, Counselor, Sales Executive, Student, Parent.
- Lead CRUD functions, assignment-ready data model, follow-up reminders, WhatsApp deep links, notes, timeline-ready structure.
- Student profile, college database, AI-style college predictor, counseling, payments, reports, admin, email, documents, notifications, and mobile modules.
- PWA manifest and service worker for installable mobile experience.
- Dark mode and mobile-first responsive navigation.

## Setup
1. Install dependencies: `npm install`.
2. Create `.env.local` with Firebase web config:
   ```bash
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   ```
3. Run locally: `npm run dev`.
4. Build: `npm run build`.

## Firebase Deployment
1. Create a Firebase project and enable Google Authentication.
2. Create Firestore in production mode.
3. Deploy rules: `firebase deploy --only firestore:rules`.
4. Deploy web app: `npm run build && firebase deploy --only hosting`.

## Collections
See `docs/FIRESTORE_SCHEMA.md` for the complete schema and `firestore.rules` for RBAC security rules.

## Backend API
The production backend lives in `backend/` and is deployed as Firebase Cloud Functions Gen2. It exposes `/api/v1` for the React frontend and `/docs` for Swagger UI.

### Backend commands
```bash
cd backend
cp .env.example .env
npm install
npm run build
npm run serve
```

### Backend deployment
```bash
firebase deploy --only functions,firestore:rules,firestore:indexes,storage
```
