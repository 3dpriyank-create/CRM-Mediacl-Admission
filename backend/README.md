# Doctor Admission Backend

Enterprise Node.js + Express + TypeScript backend deployed on Firebase Cloud Functions Gen2.

## Architecture
Clean Architecture folders are under `backend/src`: config, controllers, services, repositories, middleware, routes, validators, models, interfaces, utils, helpers, firebase, jobs, notifications, integrations, analytics, reports, permissions, auth, storage, payment, whatsapp, email, and scheduler.

## Local setup
1. `cd backend`
2. `cp .env.example .env`
3. Fill Firebase, SMTP, WhatsApp, Razorpay, Stripe, and JWT secrets.
4. `npm install`
5. `npm run build`
6. `npm run serve`

## API
- Health: `GET /health`
- Swagger: `GET /docs`
- Versioned API: `/api/v1`
- Auth: `/api/v1/auth/login`, `/api/v1/auth/google`, `/api/v1/auth/refresh`, `/api/v1/auth/password-reset`, `/api/v1/auth/users`
- Leads: `/api/v1/leads`, `/api/v1/leads/:id`, assignment, notes, tags, merge, bulk import/export, timeline
- Colleges: `/api/v1/colleges`, `/api/v1/colleges/predict`
- Students, parents, tasks, follow-ups, courses, cutoffs, counselling rounds, seat matrix, settings, templates
- Documents, payments, email, WhatsApp, notifications, reports

## Deployment
```bash
firebase deploy --only functions,firestore:rules,firestore:indexes,storage
```

## Security
The backend applies Helmet, CORS, rate limiting, request IDs, XSS sanitization, Zod validation, JWT/Firebase token validation, RBAC, audited writes, secure Firebase Storage rules, and least-privilege Firestore rules.
