---
description: >-
  Understand the Careflow patient journey, product modules, and role-based
  workflow.
icon: book
---

# Core concepts

A few concepts shape how Careflow works. Read these first to understand how patients, staff, and clinic operations move through the system.

<table data-card-size="large" data-view="cards"><thead><tr><th>Icon</th><th>Page</th><th>Summary</th><th data-hidden data-card-target data-type="content-ref">Open</th></tr></thead><tbody><tr><td><h4><i class="fa-sitemap" style="color:$primary;">:sitemap:</i></h4></td><td><strong>Roles and workflow stages</strong></td><td>See how staff roles connect to the visit lifecycle.</td><td><a href="roles-and-workflow-stages.md">roles-and-workflow-stages.md</a></td></tr><tr><td><h4><i class="fa-lock" style="color:$primary;">:lock:</i></h4></td><td><strong>Roles and permissions</strong></td><td>Review access boundaries for admins and operational staff.</td><td><a href="roles-and-permissions.md">roles-and-permissions.md</a></td></tr></tbody></table>

***

### The mental model in 30 seconds

Every outpatient visit follows one connected record. A patient is registered, added to a queue, moved through vitals, reviewed in consultation, assigned services, billed, paid for, and marked complete.

Each stage updates the same operational workflow. That reduces handoff errors and gives staff a single source of truth.

### What to understand first

Focus on these ideas before you go deeper:

* One visit stays connected across every workflow stage.
* Each role updates the same operational record.
* Billing depends on what happens earlier in the visit.

## Core modules

Careflow includes these primary modules:

* Patient registration
* Queue management
* Appointment scheduling
* Consultation management
* Service management
* Billing and invoicing
* Payment processing
* Patient record tracking

## Role-based workflow

Careflow supports role-based access for clinic teams:

* **Admin** manages users, configuration, services, and pricing.
* **Reception and nursing staff** handle registration, queueing, and vitals intake.
* **Doctors and clinicians** capture complaints, diagnosis, and treatment.
* **Cashiers** generate invoices, confirm payments, and issue receipts.

{% hint style="info" %}
The strongest Careflow workflows are sequential. Each team completes its step, then hands the visit forward.
{% endhint %}

### Read next

* [Roles and workflow stages](roles-and-workflow-stages.md)
* [Roles and permissions](roles-and-permissions.md)
* [Patient journey](../guides/patient-journey.md)
