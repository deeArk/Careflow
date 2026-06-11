# CareFlow API

> A secure RESTful API for managing healthcare operations, including patient records, appointments, consultations, billing, payments, and reporting.

---

## Overview

CareFlow API is a healthcare management backend that enables healthcare facilities to streamline clinical and administrative workflows through a centralized platform.

The API provides secure access to patient management, queue operations, appointment scheduling, consultation records, invoicing, payments, and reporting services using JWT-based authentication and role-based authorization.

---

## Features

- Secure JWT Authentication
- Role-Based Access Control (RBAC)
- Patient Registration and Management
- Queue Management
- Appointment Scheduling
- Consultation Tracking
- Service Management
- Invoice Generation
- Payment Processing
- Administrative Reporting
- RESTful API Architecture

---

## Base URL

```text
https://careflow-api-4.onrender.com/careflow
```

All API endpoints are relative to the base URL.

---

## Authentication

The API uses JSON Web Tokens (JWT) for authentication.

### Login

Authenticate a user and retrieve an access token.

#### Endpoint

```http
POST /auth/login
```

#### Request Body

```json
{
  "username": "admin",
  "password": "Admin123!"
}
```

#### Response

```json
{
  "success": true,
  "token": "JWT_TOKEN_HERE"
}
```

---

## Authorization

All endpoints except the login endpoint require authentication.

Include the JWT token in the Authorization header:

```http
Authorization: Bearer <JWT_TOKEN>
```

### Required Headers

```http
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>
```

---

## User Roles

| Role | Description |
|--------|-------------|
| Admin | Full administrative access |
| Doctor | Clinical consultations and patient care |
| Nurse | Patient support and care management |
| Receptionist | Registration and appointment management |
| Cashier | Billing and payment processing |

---

# API Reference

## Patient Module

Manage patient records and information.

### Create Patient

```http
POST /patients
```

#### Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "phone": "08012345678",
  "gender": "Male",
  "dateOfBirth": "1995-05-10",
  "address": "Ibadan"
}
```

### Get All Patients

```http
GET /patients
```

### Get Patient by ID

```http
GET /patients/{id}
```

### Search Patients

```http
GET /patients/search?term=john
```

### Update Patient

```http
PATCH /patients/{id}
```

---

## Queue Module

Manage patient queues and waiting lists.

### Add Patient to Queue

```http
POST /queue
```

### Get Today's Queue

```http
GET /queue/today
```

### Update Queue Status

```http
PATCH /queue/{id}/status
```

---

## Appointment Module

Manage patient appointments.

### Create Appointment

```http
POST /appointments
```

### Get Weekly Appointments

```http
GET /appointments/week?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
```

---

## Consultation Module

Manage patient consultation records.

### Create Consultation

```http
POST /consultations
```

### Get Patient Consultation History

```http
GET /consultations/patient/{id}
```

---

## Service Module

Manage healthcare services.

### Create Service

```http
POST /services
```

### Get All Services

```http
GET /services
```

### Update Service

```http
PATCH /services/{id}
```

### Delete Service

```http
DELETE /services/{id}
```

---

## Invoice Module

Manage invoices and billing.

### Create Invoice

```http
POST /invoices
```

### Get Pending Invoices

```http
GET /invoices/pending
```

---

## Payment Module

Record and manage payments.

### Record Payment

```http
POST /payments
```

#### Request Body

```json
{
  "invoice": "INVOICE_ID",
  "amount": 5000,
  "method": "cash"
}
```

---

## Reports Module

Administrative reporting endpoints.

> Access restricted to Admin users.

### Daily Report

```http
GET /reports/daily
```

### Weekly Report

```http
GET /reports/weekly
```

### Revenue Report

```http
GET /reports/revenue
```

---

## Standard Response Format

### Success Response

```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "message": "Error description"
}
```

---

## HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | Request successful |
| 201 | Resource created successfully |
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 500 | Internal Server Error |

---

## Frontend Integration Guide

### Authentication Workflow

1. Send credentials to `/auth/login`
2. Receive a JWT token
3. Store the token securely
4. Include the token in all subsequent requests
5. Handle authentication and authorization errors

### Example Header

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## Security

CareFlow API implements the following security measures:

- JWT Authentication
- Role-Based Access Control (RBAC)
- Protected Routes
- Input Validation
- Secure HTTPS Communication

---

## Version

**Current Version:** v1.0.0

---

## Support

For technical support, bug reports, or integration assistance, contact the CareFlow development team.

---

## License

This project is proprietary software. All rights reserved.

© 2026 CareFlow.
