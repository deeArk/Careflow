---
description: Access control across admin and clinic staff workflows in Careflow.
icon: lock
---

# Roles and permissions

Careflow uses role-based authentication. Access is tied to the user's role and secured with JWT-based sessions.

## Roles overview

Careflow supports these operational roles:

| Role             | Best for                                                         |
| ---------------- | ---------------------------------------------------------------- |
| **Admin**        | Full system control, user management, service setup, and pricing |
| **Receptionist** | Patient registration, queue assignment, and appointment booking  |
| **Nurse**        | Vitals capture and intake support                                |
| **Doctor**       | Complaints, diagnosis, and prescriptions                         |
| **Cashier**      | Billing, payment processing, and receipt issuance                |

{% hint style="info" %}
Some implementations may group nurse, receptionist, and cashier under a broader staff role. The underlying access model should still map to real clinic responsibilities.
{% endhint %}

## Permission matrix

Use this matrix as the default access model:

| Action                          | Admin | Receptionist | Nurse | Doctor | Cashier |
| ------------------------------- | :---: | :----------: | :---: | :----: | :-----: |
| Manage users and roles          |   ✓   |       —      |   —   |    —   |    —    |
| Configure services and pricing  |   ✓   |       —      |   —   |    —   |    —    |
| Register new patients           |   ✓   |       ✓      |   ✓   |    —   |    —    |
| Update patient records          |   ✓   |       ✓      |   ✓   |    ✓   |    —    |
| Schedule appointments           |   ✓   |       ✓      |   —   |    —   |    —    |
| Add patients to queue           |   ✓   |       ✓      |   ✓   |    —   |    —    |
| Record vitals                   |   ✓   |       —      |   ✓   |    ✓   |    —    |
| Submit complaints and notes     |   ✓   |       —      |   —   |    ✓   |    —    |
| Add diagnosis and prescriptions |   ✓   |       —      |   —   |    ✓   |    —    |
| Generate invoices               |   ✓   |       —      |   —   |    —   |    ✓    |
| Record payments                 |   ✓   |       —      |   —   |    —   |    ✓    |
| View patient history            |   ✓   |       ✓      |   ✓   |    ✓   |    ✓    |

## Authentication

Careflow authenticates users through a login endpoint and returns a JWT token for subsequent API access.

{% hint style="info" %}
Careflow supports two sign-in paths. First-time users select their role, then change their password before accessing the product. Returning users sign in directly and do not select a role again.
{% endhint %}

```json
{
  "token": "jwt_token",
  "user": {
    "id": "123",
    "role": "admin"
  }
}
```

## Admin responsibilities

Admins typically handle these system-wide tasks:

* Create and manage user accounts
* Monitor system activity
* Configure service catalog and pricing
* Review operational flow across departments

{% hint style="warning" %}
Use production-grade secrets and short token lifetimes in deployment environments. Session handling is part of the security boundary.
{% endhint %}
