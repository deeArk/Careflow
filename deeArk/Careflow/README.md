# API

## Overview

The CareFlow API provides secure access to patient registration, queue management, appointments, consultations, services, invoicing, payments, and reporting within the CareFlow Electronic Medical Record (EMR) system.

**Base URL**

```
https://careflow-api-4.onrender.com/careflow
```

All API endpoints are relative to the Base URL.

## Authentication

### Login

Authenticate a user and retrieve a JSON Web Token (JWT).

**Endpoint**

```http
POST /auth/login
```

**Full URL**

```
https://careflow-api-4.onrender.com/careflow/auth/login
```

**Request Body**

```json
{
  "username": "admin",
  "password": "Admin123!"
}
```

**Success Response**

```json
{
  "success": true,
  "token": "JWT_TOKEN_HERE"
}
```

## Authorization

All endpoints except the Login endpoint require authentication.

**Required Header**

```http
Authorization: Bearer <JWT_TOKEN>
```

**Standard Headers**

```http
Content-Type: application/json
Authorization: Bearer <JWT_TOKEN>
```

## Roles and Permissions

The API supports role-based access control.

| Role         | Description                                      |
| ------------ | ------------------------------------------------ |
| Admin        | Full system access                               |
| Doctor       | Consultation and patient care activities         |
| Nurse        | Nursing and patient support activities           |
| Receptionist | Registration, appointments, and queue management |
| Cashier      | Billing and payment processing                   |

## Patient Module

Manage patient records and demographics.

### Create Patient

Creates a new patient record.

**Endpoint**

```http
POST /patients
```

**Request Body**

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

**Success Response**

```json
{
  "success": true,
  "message": "Patient created successfully"
}
```

### Get All Patients

Returns all registered patients.

**Endpoint**

```http
GET /patients
```

**Success Response**

```json
[
  {
    "id": "PATIENT_ID",
    "firstName": "John",
    "lastName": "Doe",
    "phone": "08012345678"
  }
]
```

### Get Patient by ID

Returns details of a specific patient.

**Endpoint**

```http
GET /patients/:id
```

**Path Parameters**

| Parameter | Description |
| --------- | ----------- |
| id        | Patient ID  |

### Search Patients

Search for patients by name or keyword.

**Endpoint**

```http
GET /patients/search?term=john
```

**Query Parameters**

| Parameter | Description    |
| --------- | -------------- |
| term      | Search keyword |

### Update Patient

Updates patient information.

**Endpoint**

```http
PATCH /patients/:id
```

**Path Parameters**

| Parameter | Description |
| --------- | ----------- |
| id        | Patient ID  |

**Example Request**

```json
{
  "phone": "08099999999"
}
```

## Queue Module

Manage patient queue operations.

### Add Patient to Queue

Adds a patient to the queue.

**Endpoint**

```http
POST /queue
```

**Example Request**

```json
{
  "patientId": "PATIENT_ID"
}
```

### Get Today's Queue

Returns all patients currently in today's queue.

**Endpoint**

```http
GET /queue/today
```

### Update Queue Status

Updates a patient's queue status.

**Endpoint**

```http
PATCH /queue/:id/status
```

**Example Request**

```json
{
  "status": "In Consultation"
}
```

**Common Status Values**

* Waiting
* In Consultation
* Completed
* Cancelled

## Appointment Module

Manage patient appointments.

### Create Appointment

Creates a new appointment.

**Endpoint**

```http
POST /appointments
```

**Example Request**

```json
{
  "patientId": "PATIENT_ID",
  "doctorId": "DOCTOR_ID",
  "date": "2026-06-15",
  "time": "10:00"
}
```

### Get Weekly Appointments

Returns appointments within a specified date range.

**Endpoint**

```http
GET /appointments/week?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD
```

**Query Parameters**

| Parameter | Description |
| --------- | ----------- |
| startDate | Start date  |
| endDate   | End date    |

## Consultation Module

Manage clinical consultations.

### Create Consultation

Creates a consultation record.

**Endpoint**

```http
POST /consultations
```

**Example Request**

```json
{
  "patientId": "PATIENT_ID",
  "doctorId": "DOCTOR_ID",
  "notes": "Patient reports mild headache."
}
```

### Get Patient Consultation History

Returns consultation history for a patient.

**Endpoint**

```http
GET /consultations/patient/:id
```

**Path Parameters**

| Parameter | Description |
| --------- | ----------- |
| id        | Patient ID  |

## Service Module

Manage healthcare services and pricing.

### Create Service

Creates a new service.

**Endpoint**

```http
POST /services
```

**Example Request**

```json
{
  "name": "General Consultation",
  "price": 5000
}
```

### Get All Services

Returns all configured services.

**Endpoint**

```http
GET /services
```

### Update Service

Updates an existing service.

**Endpoint**

```http
PATCH /services/:id
```

### Delete Service

Deletes a service.

**Endpoint**

```http
DELETE /services/:id
```

## Invoice Module

Manage patient invoices.

### Create Invoice

Generates an invoice for services rendered.

**Endpoint**

```http
POST /invoices
```

**Example Request**

```json
{
  "patientId": "PATIENT_ID",
  "services": [
    "SERVICE_ID"
  ]
}
```

### Get Pending Invoices

Returns invoices awaiting payment.

**Endpoint**

```http
GET /invoices/pending
```

## Payment Module

Manage payment transactions.

### Record Payment

Records payment against an invoice.

**Endpoint**

```http
POST /payments
```

**Request Body**

```json
{
  "invoice": "INVOICE_ID",
  "amount": 5000,
  "method": "cash"
}
```

**Success Response**

```json
{
  "success": true,
  "message": "Payment recorded successfully"
}
```

**Supported Payment Methods**

* Cash
* Transfer
* Card

## Reports Module

{% hint style="warning" %}
Access restricted to Administrators.
{% endhint %}

### Daily Report

Returns operational statistics for the current day.

**Endpoint**

```http
GET /reports/daily
```

### Weekly Report

Returns operational statistics for the current week.

**Endpoint**

```http
GET /reports/weekly
```

### Revenue Report

Returns financial and revenue summaries.

**Endpoint**

```http
GET /reports/revenue
```

## Error Responses

### Unauthorized

```json
{
  "success": false,
  "message": "Unauthorized"
}
```

### Forbidden

```json
{
  "success": false,
  "message": "Access denied"
}
```

### Not Found

```json
{
  "success": false,
  "message": "Resource not found"
}
```

### Validation Error

```json
{
  "success": false,
  "message": "Validation failed"
}
```

### Internal Server Error

```json
{
  "success": false,
  "message": "Internal server error"
}
```

## Frontend Integration

### Authentication Workflow

1. Send credentials to `/auth/login`.
2. Store the returned JWT token securely.
3. Include the token in the Authorization header for all protected endpoints.
4. Redirect unauthenticated users to the login page.

**Example**

```http
Authorization: Bearer JWT_TOKEN_HERE
```

## Security

* Authentication is required for all endpoints except Login.
* JWT tokens must be included in protected requests.
* HTTPS should be used in production environments.
* Access to resources is controlled by user roles.
* Sensitive information should never be exposed to unauthorized users.

## API Version

**Version:** v1.0.0

## Support

For technical support, bug reports, or integration assistance, contact the CareFlow development team.
