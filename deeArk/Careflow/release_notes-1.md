# RELEASE\_NOTES (1)

**Version:** v1.0.0\
**Base URL:** https://careflow-api-4.onrender.com/careflow\
**Release Type:** Initial Production Release\
**Date:** June 2026

**Full Changelog:** https://github.com/deeArk/Careflow/commits/v1.0

***

## Overview

The CareFlow API is a role-based healthcare management system designed to manage patients, clinical workflows, appointments, billing, and reporting.

It is built as a modular REST API optimized for scalability, security, and frontend integration.

***

## Authentication

### Login

**Endpoint:** `POST /auth/login`

**Request:**

```json
{
  "username": "admin",
  "password": "Admin123!"
}
```

**Response:**

```json
{
  "success": true,
  "token": "JWT_TOKEN"
}
```

***

## Authorization

All protected routes require:

```http
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

***

## Roles

* Admin — Full system access and reporting
* Doctor — Clinical consultations and patient management
* Nurse — Patient care and queue handling
* Receptionist — Registration and appointments
* Cashier — Billing and payments

***

## Patient Module

* `POST /patients` — Create patient
* `GET /patients` — Get all patients
* `GET /patients/:id` — Get patient by ID
* `GET /patients/search?term=` — Search patients
* `PATCH /patients/:id` — Update patient

***

## Queue Module

* `POST /queue` — Add patient to queue
* `GET /queue/today` — Get today’s queue
* `PATCH /queue/:id/status` — Update queue status

***

## Appointment Module

* `POST /appointments` — Create appointment
* `GET /appointments/week` — Get weekly appointments

**Query Parameters:**

* `startDate=YYYY-MM-DD`
* `endDate=YYYY-MM-DD`

***

## Consultation Module

* `POST /consultations` — Create consultation
* `GET /consultations/patient/:id` — Get patient history

***

## Service Module

* `POST /services` — Create service
* `GET /services` — Get all services
* `PATCH /services/:id` — Update service
* `DELETE /services/:id` — Delete service

***

## Invoice Module

* `POST /invoices` — Create invoice
* `GET /invoices/pending` — Get pending invoices

***

## Payment Module

```json
{
  "invoice": "INVOICE_ID",
  "amount": 5000,
  "method": "cash"
}
```

***

## Reports Module (Admin Only)

* `GET /reports/daily` — Daily report
* `GET /reports/weekly` — Weekly report
* `GET /reports/revenue` — Revenue report

***

## Security Rules

* JWT authentication required for all endpoints except login
* All requests must include Authorization header
* Content-Type must be application/json
* Invalid or expired tokens return 401 Unauthorized

***

## Base URL

https://careflow-api-4.onrender.com/careflow

***

## Integration Notes

* Store JWT after login
* Attach token to all protected requests
* Ensure consistent error handling on frontend

***

## Release Summary

* Authentication system implemented
* Patient module completed
* Queue and appointment system active
* Consultation tracking enabled
* Billing system functional
* Reporting module available

***

## Planned Features

* Email/SMS notifications
* Audit logging system
* Advanced analytics dashboard
* Multi-hospital support
* Document upload for patient records
