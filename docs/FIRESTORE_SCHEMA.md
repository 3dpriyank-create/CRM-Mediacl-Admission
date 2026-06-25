# Doctor Admission Firestore Schema

## Identity and Access
- `Users`: `uid`, `displayName`, `email`, `phone`, `role`, `active`, `studentId`, `parentId`, `fcmToken`, `createdAt`, `updatedAt`, `lastLoginAt`.
- `Sessions`: `uid`, `refreshTokenHash`, `device`, `ip`, `revoked`, `expiresAt`, `lastSeenAt`, `createdAt`, `updatedAt`.

## CRM and Admissions
- `Students`: personal details, academic details, NEET details, parent references, admission status, payment status, remarks, history, communication summaries.
- `Parents`: parent profile, student references, contact preferences, relationship, consent flags.
- `Leads`: `studentName`, `mobile`, `whatsapp`, `email`, `city`, `state`, `category`, `neetScore`, `airRank`, `stateRank`, `interestedCourse`, `leadSource`, `leadStatus`, `leadPriority`, `assignedTo`, `tags`, `notes`, `budget`, `searchKeywords`, `createdAt`, `updatedAt`.
- `LeadActivities`: immutable lead timeline entries with `leadId`, `message`, `actorId`, `metadata`, `createdAt`.
- `Tasks`: assigned work, lead/student reference, due date, priority, recurring rule, calendar event ID, completion state.
- `FollowUps`: lead/student reference, channel, due date, reason, status, reminder metadata.

## College Data
- `Colleges`: college name, type, state, courses, fees, quotas, categories, embedded seat matrix snapshots, embedded cutoff snapshots.
- `Courses`: course metadata, duration, level, eligibility, specialization.
- `Cutoffs`: college, course, year, round, category, quota, opening rank, closing rank.
- `CounsellingRounds`: authority, course, state, round number, dates, status.
- `SeatMatrix`: college, course, quota, category, total seats, available seats, year, round.

## Finance, Documents, Communication
- `Payments`: student, provider, amount, GST, total, package, provider payload, status, metadata, refund details.
- `Invoices`: payment snapshot, invoice number, GST fields, receipt URL, generatedAt.
- `Documents`: student, document type, storage path, content type, verification status, OCR-ready payload, uploadedBy, uploadedAt.
- `Notifications`: user, title, body, channels, push response, read state, createdAt.
- `Templates`: email/WhatsApp/SMS templates with variables and approval state.
- `WhatsAppLogs`: Cloud API request/response, delivery status, webhook payloads.
- `EmailLogs`: SMTP request metadata, provider message ID, delivery events.

## Governance
- `Reports`: report type, filters, metrics, generatedBy, generatedAt.
- `AuditLogs`: actor, action, entity, entity ID, metadata, IP, user agent, timestamp.
- `Settings`: tenant-level system, payment, notification, and admission settings.
