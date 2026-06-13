---
description: How clinic roles and visit stages fit together in Careflow.
icon: sitemap
---

# Roles and workflow stages

Careflow is built around handoffs. Each role updates the visit, then passes it forward to the next team member.

### Read this page to understand

* who owns each clinic task
* how one visit moves between teams
* where each module fits in the workflow

## User roles

These roles appear throughout the product:

| Role             | Primary responsibility                                                |
| ---------------- | --------------------------------------------------------------------- |
| **Admin**        | Manage users, configure services, set pricing, and monitor operations |
| **Receptionist** | Register patients, assign queue numbers, and schedule appointments    |
| **Nurse**        | Record vitals and support clinical intake                             |
| **Doctor**       | Record complaints, confirm diagnosis, and prescribe treatment         |
| **Cashier**      | Generate invoices, record payments, and issue receipts                |

## Visit lifecycle

Each outpatient visit moves through the same high-level stages:

1. **Registration** — a staff member creates or updates the patient profile.
2. **Queue** — the patient is added to the waiting list.
3. **Clinical intake and consultation** — staff records vitals, complaints, diagnosis, and treatment in one connected workflow.
4. **Services** — medical services are assigned and tracked to completion.
5. **Billing** — an invoice is generated from the visit and service charges.
6. **Payment** — payment is recorded and a receipt is issued.
7. **Completion** — the visit is closed and remains in the patient record.

{% hint style="success" %}
The visit lifecycle stays easier to manage when each team completes its part before the next handoff.
{% endhint %}

{% hint style="info" %}
Some clinics split clinical intake and consultation between nurse and doctor handoffs. Others merge them into one stage. Both models work if the same visit record stays in progress.
{% endhint %}

## Module ownership

This view helps map features to daily clinic work:

| Module                  | Main owner           | Outcome                              |
| ----------------------- | -------------------- | ------------------------------------ |
| Patient registration    | Reception            | New or updated patient profile       |
| Queue management        | Reception or nurse   | Ordered waiting list                 |
| Appointment scheduling  | Reception            | Planned clinic visit                 |
| Consultation management | Doctor or clinician  | Complaints, diagnosis, prescriptions |
| Service management      | Clinical staff       | Tracked procedures or services       |
| Billing and invoicing   | Cashier              | Itemized charges                     |
| Payment processing      | Cashier              | Confirmed payment and receipt        |
| Patient record tracking | All authorized roles | Complete visit history               |

{% hint style="info" %}
The handoff between modules matters as much as the module itself. Billing depends on completed clinical data and assigned services.
{% endhint %}

### Read next

{% content-ref url="../guides/patient-journey.md" %}
[patient-journey.md](../guides/patient-journey.md)
{% endcontent-ref %}

{% content-ref url="roles-and-permissions.md" %}
[roles-and-permissions.md](roles-and-permissions.md)
{% endcontent-ref %}
