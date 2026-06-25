# Doctor Admission Firestore Schema

## Collections
- `Users`: `uid`, `displayName`, `email`, `phone`, `role`, `status`, `createdAt`, `lastLoginAt`.
- `Students`: personal, academic, NEET, parent, communication, document, payment, and counseling summary fields.
- `Leads`: `studentName`, `mobile`, `whatsapp`, `email`, `city`, `state`, `category`, `neetScore`, `airRank`, `stateRank`, `interestedCourse`, `leadSource`, `leadStatus`, `assignedTo`, `notes`, `followUpAt`, `budget`, `createdAt`, `updatedAt`.
- `Counselors`: counselor profile, assigned states, capacity, performance metrics.
- `Colleges`: college name, state, course, management/government/NRI fees, seats, cutoff data, website, contact details.
- `CounselingSessions`: student, counselor, schedule, video link, queries, notes, report, status.
- `Documents`: student, document type, storage path, verification status, uploadedBy, uploadedAt.
- `Payments`: student, package, amount, GST, payment date, mode, transaction ID, invoice URL, receipt URL, status.
- `Tasks`: lead/student, owner, due date, priority, channel, template, completed state.
- `Notifications`: user, title, body, channel, read state, createdAt.
- `Reports`: type, filters, metrics, generatedBy, generatedAt.
