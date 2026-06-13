# Release Notes

## Release Notes

Track API changes by version.

### v1.0.0

**Release type:** Initial production release\
**Release date:** June 2026

Initial public release of the CareFlow API.

#### Highlights

* JWT authentication
* Role-based access control
* End-to-end outpatient workflow support
* Billing, payments, and reporting

#### Included modules

* Authentication and authorization
* Patients and search
* Queue and appointments
* Consultations and services
* Invoices, payments, and reports

#### Integration notes

**Base URL**

```
https://careflow-api-4.onrender.com/careflow
```

**Required headers**

```http
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json
```

#### Planned next

* Email and SMS notifications
* Audit logging
* Advanced analytics
* Multi-hospital support
* Patient document uploads

[Full changelog](https://github.com/deeArk/Careflow/commits/v1.0)
